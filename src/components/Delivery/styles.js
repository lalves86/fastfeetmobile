import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #fff;
  margin: 5px 30px;
  border-radius: 4px;
`;

export const DeliveryHead = styled.View`
  flex: 1;
  flex-direction: row;
  padding: 5px;
`;

export const Title = styled.Text`
  margin: 0 5px;
`;

export const Progress = styled.View``;

export const ProgressBar = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 10px 50px;
`;

export const ProgressItem = styled.View`
  flex: 1;
`;

export const ProgressIcon = styled.View`
  background: ${(props) => (props.status ? '#7159c1' : '#fff')};
  border: 2px solid #7159c1;
  width: 10px;
  height: 10px;
  border-radius: 5px;
`;

export const ProgressText = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const ProgressStatus = styled.Text`
  width: 100px;
  text-align: center;
  color: #888;
  font-size: 14px;
`;

export const Line = styled.View`
  flex: 1;
  background: #7159c1;
  height: 2px;
  margin: 0;
  padding: 0;
`;

export const Info = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: #ddd;
  margin: 5px 0;
  padding: 10px 0;
`;

export const InfoView = styled.View``;

export const InfoTitle = styled.Text`
  font-weight: bold;
  color: #666;
  font-size: 10px;
`;

export const InfoContent = styled.Text`
  font-weight: bold;
  font-size: 12px;
`;

export const Link = styled.TouchableOpacity`
  margin-left: 10px;
  margin-top: 10px;
`;

export const LinkText = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #7159c1;
`;
