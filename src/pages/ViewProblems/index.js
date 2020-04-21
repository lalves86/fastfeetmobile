import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';

import api from '~/services/api';
import {
  Container,
  Title,
  Problem,
  ProblemContainer,
  ProblemDescription,
  ProblemDate,
  Message,
} from './styles';

export default function ViewProblems({ route }) {
  const { data } = route.params;
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    async function loadProblems() {
      const response = await api.get(`/problems/${data.id}`);

      setProblems(response.data);
    }

    loadProblems();
  }, [data]);

  return (
    <Container>
      <Title>
        {data.id >= 10 ? `Encomenda ${data.id}` : `Encomenda 0${data.id}`}
      </Title>
      {!problems[0] ? (
        <Message>Nenhum problema cadastrado para esta encomenda</Message>
      ) : (
        <Problem
          data={problems}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <ProblemContainer>
              <ProblemDescription>{item.description}</ProblemDescription>
              <ProblemDate>
                {format(parseISO(item.created_at), 'dd/MM/yyyy')}
              </ProblemDate>
            </ProblemContainer>
          )}
        />
      )}
    </Container>
  );
}

ViewProblems.navigationOptions = {
  title: 'Visualizar problemas',
  style: { headerShown: false },
};
