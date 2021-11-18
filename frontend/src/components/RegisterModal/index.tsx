import { useState } from 'react'
import { Button, Modal, Stack } from 'react-bootstrap';
import { asyncRegister } from '../../store/auth/auth.actions';
import { isAuthenticated, login } from '../../store/auth/token.service';
import DefaultInput from '../DefaultInput';
import { Content, Logo, Title } from './styles';

const RegisterModal = (props: any) => {
    const [formRegister, setFormRegister] = useState({
        email: '',
        password: '',
        name: ''
    })

    const handleChange = (e: any) => {
        const value = e.target.value;
        const arr = { ...formRegister, [e.target.name]: value }
        setFormRegister(arr)
    }

    const handleRegister = async () => {
        const response = await asyncRegister(formRegister)
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
                <Title>Registre-se</Title>
                <Stack gap={3}>
                    <DefaultInput
                        label="Nome Completo"
                        placeholder="Digite se nome"
                        value={formRegister.name}
                        name="name"
                        onChange={handleChange}
                        type="text"
                    />
                    <DefaultInput
                        label="E-mail"
                        placeholder="Digite se e-mail"
                        value={formRegister.email}
                        name="email"
                        onChange={handleChange}
                        type="email"
                    />
                    <DefaultInput
                        label="Senha"
                        placeholder="Digite sua senha"
                        value={formRegister.password}
                        name="password"
                        onChange={handleChange}
                        type="password"
                    />
                    <Button onClick={handleRegister} className="mb-3" variant="primary" size="lg">
                        Cadastrar
                    </Button>
                </Stack>
            </Content>
        </Modal>
      );
}

export default RegisterModal
