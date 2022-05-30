import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  border-radius: 6px;
  margin: 5px 10px;
  background-color: #fff;
`;

export const PostImageWrapper = styled.View`
  width: 100px;
  height: 100px;
`;

export const PostImage = styled.Image`
  flex: 1;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
`;

export const PostInfoWrapper = styled.View`
  padding: 5px;
  justify-content: space-between;
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 13px;
  flex: 1;
  flex-wrap: wrap;
  font-weight: 600;
`;

export const Category = styled.Text`
  font-size: 11px;
`;

export const Local = styled.Text`
  font-size: 11px;
  color: #888;
`;
