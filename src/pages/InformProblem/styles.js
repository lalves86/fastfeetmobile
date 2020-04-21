import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  margin: 30px;
`;

export const Input = styled.TextInput`
  background: #fff;
  border: 1px solid #e7e7e7;
  border-radius: 4px;
`;

export const SubmitButton = styled(RectButton)`
  align-self: stretch;
  height: 46px;
  background: #7159c1;
  border-radius: 4px;

  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const SubmitButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
