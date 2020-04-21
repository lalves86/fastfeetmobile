import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';
import Delivery from '~/components/Delivery';
import Header from '~/components/Header';
import {
  Container,
  TitleContainer,
  Title,
  LinkContainer,
  Link,
  LinkText,
  Deliveries,
  Message,
} from './styles';

export default function Schedule() {
  const profile = useSelector((state) => state.user.profile);

  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    async function loadSchedule(id) {
      const response = await api.get(`schedule/${id}`);

      setSchedule(response.data);
    }

    loadSchedule(profile.id);
  }, [profile]);

  return (
    <Container>
      <Header />
      <TitleContainer>
        <Title>Entregas</Title>
        <LinkContainer>
          <Link>
            <LinkText>Pendentes</LinkText>
          </Link>
          <Link>
            <LinkText>Entregues</LinkText>
          </Link>
        </LinkContainer>
      </TitleContainer>
      {!schedule.message ? (
        <Deliveries
          data={schedule}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <Delivery data={item} />}
        />
      ) : (
        <Message>Você não possui nenhuma entrega no momento</Message>
      )}
    </Container>
  );
}

Schedule.navigationOptions = {
  tabBarLabel: 'Entregas',
  tabBarIcon: ({ color }) => <Icon name="assignment" size={20} color={color} />,
};
