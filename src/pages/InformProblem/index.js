import React, { useState } from 'react';
import { Alert } from 'react-native';

import api from '~/services/api';
import { Container, Input, SubmitButton, SubmitButtonText } from './styles';

export default function InformProblem({ route, navigation }) {
  const { data } = route.params;
  const [description, setDescription] = useState('');

  console.tron.log(data);

  async function handleSubmit() {
    try {
      await api.post(`/orders/${data.id}/problems`, {
        description,
      });

      Alert.alert('Problema informado com sucesso');

      navigation.goBack();
    } catch (err) {
      Alert.alert('Não foi possível informar o problema no momento!');
    }
  }

  return (
    <Container>
      <Input
        multiline
        numberOfLines={20}
        autoFocus
        clearTextOnFocus
        textAlignVertical="top"
        placeholder="Inclua aqui o problema que ocorreu na entrega."
        onChangeText={setDescription}
      />
      <SubmitButton onPress={handleSubmit}>
        <SubmitButtonText>Enviar</SubmitButtonText>
      </SubmitButton>
    </Container>
  );
}

InformProblem.navigationOptions = {
  title: 'Informar Problema',
  style: { headerShown: false },
};
