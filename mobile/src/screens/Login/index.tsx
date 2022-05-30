import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Authenticate} from '../../store/auth/auth.actions';
import {
  Container,
  Content,
  Input,
  InputWrapper,
  Label,
  LoginButton,
  LoginButtonText,
  Title,
} from './styles';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('antoniotx.dev@gmail.com');
  const [password, setPassword] = useState('atex8612');

  const handleSubmit = () => {
    dispatch(Authenticate({email, password}));
  };

  return (
    <Container>
      <Content>
        <Title>Login</Title>
        <InputWrapper>
          <Label>E-mail</Label>
          <Input
            value={email}
            autoCapitalize="none"
            textContentType="emailAddress"
            onChangeText={t => setEmail(t)}
            placeholder="exemplo@mail.com"
          />
        </InputWrapper>
        <InputWrapper>
          <Label>Senha</Label>
          <Input
            value={password}
            textContentType="password"
            onChangeText={t => setPassword(t)}
            secureTextEntry={true}
            placeholder="********"
          />
        </InputWrapper>
        <LoginButton onPress={handleSubmit}>
          <LoginButtonText>Login</LoginButtonText>
        </LoginButton>
      </Content>
    </Container>
  );
};

export default Login;
