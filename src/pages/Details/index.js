import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { format, parseISO } from 'date-fns';

import {
  Container,
  Box,
  TitleContainer,
  Title,
  DetailTitle,
  DetailContent,
  DetailGrid,
  ButtonContainer,
  ProblemButton,
  ProblemButtonText,
} from './styles';

export default function Details({ navigation, route }) {
  const { details } = route.params;
  const [status, setStatus] = useState('Pendente');

  useEffect(() => {
    function changeStatus() {
      if (details.start_date !== null) {
        setStatus('Retirada');
      }

      if (details.end_date !== null) {
        setStatus('Entregue');
      }

      return status;
    }
    changeStatus();
  }, [details, status]);

  return (
    <Container>
      <Box>
        <TitleContainer>
          <Icon name="local-shipping" size={20} color="#7159c1" />
          <Title>Informações da entrega</Title>
        </TitleContainer>
        <DetailTitle>DESTINATÁRIO</DetailTitle>
        <DetailContent>{details.recipient.name}</DetailContent>
        <DetailTitle>ENDEREÇO DE ENTREGA</DetailTitle>
        <DetailContent>{`${details.recipient.street}, ${
          details.recipient.number
        } - ${details.recipient.complement || 'S/N'}, ${
          details.recipient.city
        } - ${details.recipient.state}, CEP: ${
          details.recipient.zip
        }`}</DetailContent>
        <DetailTitle>PRODUTO</DetailTitle>
        <DetailContent>{details.product}</DetailContent>
      </Box>
      <Box>
        <TitleContainer>
          <Icon name="event" size={20} color="#7159c1" />
          <Title>Situação da entrega</Title>
        </TitleContainer>
        <DetailTitle>STATUS</DetailTitle>
        <DetailContent>{status}</DetailContent>
        <DetailGrid>
          <DetailTitle>DATA DE RETIRADA</DetailTitle>
          <DetailTitle>DATA DE ENTREGA</DetailTitle>
        </DetailGrid>
        <DetailGrid>
          <DetailContent>
            {details.start_date
              ? format(parseISO(details.start_date), 'dd/MM/yyyy')
              : '--/--/----'}
          </DetailContent>
          <DetailContent>
            {details.end_date
              ? format(parseISO(details.end_date), 'dd/MM/yyyy')
              : '--/--/----'}
          </DetailContent>
        </DetailGrid>
      </Box>
      <ButtonContainer>
        <ProblemButton
          onPress={() =>
            navigation.navigate('InformProblem', { data: details })
          }
        >
          <Icon name="highlight-off" size={28} color="#f64c75" />
          <ProblemButtonText>Informar</ProblemButtonText>
          <ProblemButtonText>Problema</ProblemButtonText>
        </ProblemButton>
        <ProblemButton
          onPress={() => navigation.navigate('ViewProblem', { data: details })}
        >
          <Icon name="error-outline" size={28} color="#e9c45d" />
          <ProblemButtonText>Visualizar</ProblemButtonText>
          <ProblemButtonText>Problemas</ProblemButtonText>
        </ProblemButton>
        <ProblemButton onPress={() => {}}>
          <Icon name="check" size={28} color="#7159c1" />
          <ProblemButtonText>Confirmar</ProblemButtonText>
          <ProblemButtonText>Entrega</ProblemButtonText>
        </ProblemButton>
      </ButtonContainer>
    </Container>
  );
}

Details.navigationOptions = {
  title: 'Detalhes da encomenda',
  style: { headerShown: false },
};
