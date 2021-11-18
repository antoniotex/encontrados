import { useState } from 'react'
import { Button, Modal, Stack } from 'react-bootstrap';
import { asyncLogin } from '../../store/auth/auth.actions';
import { isAuthenticated, login } from '../../store/auth/token.service';
import DefaultInput from '../DefaultInput';
import { Content, Logo, Title } from './styles';

const LoginModal = (props: any) => {
    const [formLogin, setFormLogin] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e: any) => {
        const value = e.target.value;
        const arr = { ...formLogin, [e.target.name]: value }
        setFormLogin(arr)
    }

    const handleLogin = async () => {
        const response = await asyncLogin(formLogin)
        if(response?.data.token){
            login(response?.data.token)
        }
        if(isAuthenticated()){
            props.onHide(false)
        }
    }

    return (
        <Modal
          {...props}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
            <Content>
                <Logo>Encontrados</Logo>
                <Title>Faça login para continuar</Title>
                <Stack gap={3}>
                    <DefaultInput
                        label="E-mail"
                        placeholder="Digite se e-mail"
                        value={formLogin.email}
                        name="email"
                        onChange={handleChange}
                        type="email"
                    />
                    <DefaultInput
                        label="Senha"
                        placeholder="Digite sua senha"
                        value={formLogin.password}
                        name="password"
                        onChange={handleChange}
                        type="password"
                    />
                    <Button onClick={handleLogin} className="mb-3" variant="primary" size="lg">
                        Entrar
                    </Button>
                </Stack>
            </Content>
        </Modal>
      );
}

export default LoginModal
