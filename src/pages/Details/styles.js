import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
`;

export const Box = styled.View`
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 30px 30px 0 30px;
  padding: 10px;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  margin: 10px;
`;

export const Title = styled.Text`
  margin-left: 10px;
  color: #7159c1;
  font-weight: bold;
  font-size: 16px;
`;

export const DetailTitle = styled.Text`
  margin-left: 10px;
  color: #777;
  font-weight: bold;
  padding-right: 50px;
`;

export const DetailContent = styled.Text`
  margin: 5px 10px;
  color: #333;
  padding-right: 90px;
`;

export const DetailGrid = styled.View`
  flex-direction: row;
  justify-content: flex-start;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  margin: 30px;
  background: #e1e1e1;
`;

export const ProblemButton = styled(RectButton)`
  align-self: stretch;
  height: 80px;
  background: #f7f7f7;
  margin: 1px;

  align-items: center;
  justify-content: center;
  padding: 25px;
  border-radius: 4px;
`;

export const ProblemButtonText = styled.Text`
  color: #555;
`;
