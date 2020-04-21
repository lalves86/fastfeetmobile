import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { signOut } from '~/store/modules/auth/actions';
import { Container, Left, Avatar, Info, Greeting, Name } from './styles';

export default function Header() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');

  useEffect(() => {
    setName(profile.name);
    setAvatar(profile.avatar.url);
  }, [profile]);

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Left>
        <Avatar
          source={{
            uri: avatar || `https://api.adorable.io/avatar/50/${name}.png`,
          }}
        />
        <Info>
          <Greeting>Bem vindo de volta,</Greeting>
          <Name>{name}</Name>
        </Info>
      </Left>
      <TouchableOpacity onPress={handleLogout}>
        <Icon name="input" size={20} color="#f64c75" />
      </TouchableOpacity>
    </Container>
  );
}
