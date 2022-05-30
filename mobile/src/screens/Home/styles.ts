import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export const Container = styled(LinearGradient).attrs({
  colors: ['#28df99', '#eee'],
  locations: [0.1, 0.2],
})`
  flex: 1;
`;
