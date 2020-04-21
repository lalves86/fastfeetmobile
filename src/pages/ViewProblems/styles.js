import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  align-self: center;
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
  color: #7159c1;
`;

export const Problem = styled.FlatList`
  margin: 20px;
  padding: 10px;
`;

export const ProblemContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background-color: #fff;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
`;

export const ProblemDescription = styled.Text`
  color: #777;
  font-weight: bold;
  font-size: 16px;
  width: 210px;
`;

export const ProblemDate = styled.Text`
  color: #777;
  font-weight: bold;
  font-size: 16px;
`;

export const Message = styled.Text`
  background-color: #fff;
  margin: 20px;
  padding: 10px;
  border-radius: 4px;
  color: #777;
  font-weight: bold;
  font-size: 16px;
`;
