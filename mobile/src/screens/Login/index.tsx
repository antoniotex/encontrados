import React, { useState } from 'react'
import { Container, Content, Input, InputWrapper, Label, LoginButton, LoginButtonText, Title } from './styles'

const Login = () => {
    const [email, setEmail] = useState('antoniotx.dev@gmail.com')
    const [password, setPassword] = useState('abcd1234')

    const handleSubmit = () => {
        console.log({
            email, password
        })
    }

    return (
        <Container>
            <Content>
                <Title>Login</Title>
                <InputWrapper>
                    <Label>E-mail</Label>
                    <Input autoCapitalize="none" textContentType="emailAddress" onChangeText={(t) => setEmail(t)} placeholder="exemplo@mail.com" />
                </InputWrapper>
                <InputWrapper>
                    <Label>Senha</Label>
                    <Input textContentType="password" onChangeText={(t) => setPassword(t)} secureTextEntry={true} placeholder="********" />
                </InputWrapper>
                <LoginButton onPress={handleSubmit}>
                    <LoginButtonText>Login</LoginButtonText>
                </LoginButton>
            </Content>
        </Container>
    )
}

export default Login
