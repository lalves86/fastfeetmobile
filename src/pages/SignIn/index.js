import React, { useState } from 'react';
import { Image, ActivityIndicator } from 'react-native';
import { useDispatch } from 'react-redux';

import {
  Container,
  Form,
  FormInput,
  TInput,
  SubmitButton,
  ButtonText,
} from './styles';

import Logo from '~/assets/fastfeet-logo.png';
import { signInRequest } from '~/store/modules/auth/actions';

export default function SignIn() {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [id, setId] = useState('');

  async function handleSubmit() {
    setLoading(!loading);

    dispatch(signInRequest(id));

    setLoading(false);
  }

  return (
    <Container>
      <Image source={Logo} />
      <Form>
        <FormInput>
          <TInput
            autoCorrect={false}
            keyboardType="numeric"
            autoCapitalize="none"
            placeholder="Digite o seu ID de cadastro"
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={id}
            onChangeText={setId}
          />
        </FormInput>

        <SubmitButton onPress={handleSubmit}>
          {loading ? (
            <ActivityIndicator size="small" color="#FFF" />
          ) : (
            <ButtonText>Entrar no sistema</ButtonText>
          )}
        </SubmitButton>
      </Form>
    </Container>
  );
}
