import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: flex-start;
  margin: 40px;
`;

export const Avatar = styled.Image`
  width: 160px;
  height: 160px;
  border-radius: 80px;
  background: red;
  border: 3px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 60px;
  align-self: center;
`;

export const ProfileTitle = styled.Text`
  color: #666;
  margin-bottom: 5px;
`;

export const ProfileContent = styled.Text`
  font-weight: bold;
  font-size: 22px;
  margin-bottom: 30px;
`;

export const LogoutButton = styled(RectButton)`
  align-self: stretch;
  height: 46px;
  background: #e74040;
  border-radius: 4px;

  align-items: center;
  justify-content: center;
  margin-top: 5px;
`;

export const LogoutButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
