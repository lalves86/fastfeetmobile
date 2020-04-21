import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { signOut } from '~/store/modules/auth/actions';
import {
  Container,
  Avatar,
  ProfileTitle,
  ProfileContent,
  LogoutButton,
  LogoutButtonText,
} from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Avatar
        source={{
          uri:
            profile.avatar.url ||
            `https://api.adorable.io/avatar/50/${profile.name}.png`,
        }}
      />
      <ProfileTitle>Nome Completo:</ProfileTitle>
      <ProfileContent>{profile.name}</ProfileContent>
      <ProfileTitle>E-mail:</ProfileTitle>
      <ProfileContent>{profile.email}</ProfileContent>
      <ProfileTitle>Data de Cadastro:</ProfileTitle>
      <ProfileContent>20/10/2019</ProfileContent>
      <LogoutButton onPress={handleLogout}>
        <LogoutButtonText>Sair do Fastfeet</LogoutButtonText>
      </LogoutButton>
    </Container>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu perfil',
  tabBarIcon: ({ color }) => (
    <Icon name="person-outline" size={20} color={color} />
  ),
};
