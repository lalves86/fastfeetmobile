import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { parseISO, format } from 'date-fns';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  DeliveryHead,
  Title,
  Progress,
  ProgressBar,
  ProgressStatus,
  ProgressIcon,
  ProgressText,
  Line,
  Info,
  InfoView,
  InfoTitle,
  InfoContent,
  Link,
  LinkText,
} from './styles';

export default function Delivery({ data }) {
  const navigation = useNavigation();

  const [status, setStatus] = useState('Aguardando retirada');

  useEffect(() => {
    if (data.start_date) setStatus('Retirada');
    if (data.end_date) setStatus('Entregue');
  }, [data]);

  return (
    <Container>
      <DeliveryHead>
        <Icon name="local-shipping" size={20} color="#7159c1" />
        <Title>
          {data.id < 10 ? `Encomenda 0${data.id}` : `Encomenda ${data.id}`}
        </Title>
      </DeliveryHead>
      <Progress>
        <ProgressBar>
          <ProgressIcon
            status={
              status === 'Aguardando retirada' ||
              status === 'Retirada' ||
              status === 'Entregue'
            }
          />
          <Line />
          <ProgressIcon
            status={status === 'Retirada' || status === 'Entregue'}
          />
          <Line />
          <ProgressIcon status={status === 'Entregue'} />
        </ProgressBar>
        <ProgressText>
          <ProgressStatus>Aguardando retirada</ProgressStatus>
          <ProgressStatus>Retirada</ProgressStatus>
          <ProgressStatus>Entregue</ProgressStatus>
        </ProgressText>
      </Progress>
      <Info>
        <InfoView>
          <InfoTitle>Data:</InfoTitle>
          <InfoContent>
            {data.start_date
              ? format(parseISO(data.start_date), 'dd/MM/yyyy')
              : 'Aguardando retirada'}
          </InfoContent>
        </InfoView>
        <InfoView>
          <InfoTitle>Cidade:</InfoTitle>
          <InfoContent>{data.recipient.city}</InfoContent>
        </InfoView>
        <Link onPress={() => navigation.navigate('Details', { details: data })}>
          <LinkText>Ver detalhes</LinkText>
        </Link>
      </Info>
    </Container>
  );
}
