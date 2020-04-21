import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 30px;
`;

export const LinkContainer = styled.View`
  flex-direction: row;
`;

export const Title = styled.Text`
  font-size: 26px;
  font-weight: bold;
  color: #444;
`;

export const Link = styled.TouchableOpacity`
  margin-left: 10px;
  margin-top: 10px;
`;

export const LinkText = styled.Text`
  text-decoration: underline;
  font-size: 16px;
  color: #7159c1;
`;

export const Deliveries = styled.FlatList``;

export const Message = styled.Text`
  margin-left: 30px;
  padding: 30px 0;
  font-size: 16px;
  font-weight: bold;
`;
