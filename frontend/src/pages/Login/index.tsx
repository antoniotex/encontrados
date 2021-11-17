import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
// import { useDispatch } from 'react-redux'
import { asyncLogin } from '../../store/auth/auth.actions'
import { Container, Description, ForgotLink, Input, LoginButton, Title } from './styles'
import { isAuthenticated, login } from '../../store/auth/token.service';

const Login: React.FC = () => {
    let history = useHistory();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async () => {
        const response = await asyncLogin({email,password})
        if(response?.data.token){
            login(response?.data.token)
        }
        if(isAuthenticated()){
            history.push('/')
        }
    }

    return (
        <Container>
            <Title>Login</Title>
            <Description>Faça login para fazer postagens</Description>
            <Input placeholder="Email" onChange={(t) => setEmail(t.target.value)} />
            <Input placeholder="Email" onChange={(t) => setPassword(t.target.value)} />
            <ForgotLink>Esqueceu sua senha ?</ForgotLink>
            <LoginButton onClick={handleLogin}>Entrar</LoginButton>
        </Container>
    )
}

export default Login
