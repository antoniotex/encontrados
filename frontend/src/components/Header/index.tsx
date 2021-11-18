import { isAuthenticated } from "../../store/auth/token.service"
import { Brand, Container, HeaderMenu, LoginButton } from "./styles"

interface HeaderProps {
    toggleLoginModal: () => void;
    toggleRegisterModal: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleLoginModal, toggleRegisterModal }) => {
    return (
        <Container>
            <Brand>Encontrados</Brand>
            <HeaderMenu>
                <LoginButton onClick={toggleLoginModal}>
                    { isAuthenticated() ? 'Sair' : 'Entrar' }
                </LoginButton>
                { !isAuthenticated() && <LoginButton onClick={toggleRegisterModal}>
                    Registre-se
                </LoginButton> }
            </HeaderMenu>
        </Container>
    )
}

export default Header
