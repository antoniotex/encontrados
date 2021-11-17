import { isAuthenticated } from "../../store/auth/token.service"
import { Brand, Container, LoginButton } from "./styles"

interface HeaderProps {
    toggleLoginModal: () => void;
    handleLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleLoginModal, handleLogout }) => {
    return (
        <Container>
            <Brand>Encontrados</Brand>
            <LoginButton onClick={toggleLoginModal}>
                { isAuthenticated() ? 'Sair' : 'Entrar' }
            </LoginButton>
        </Container>
    )
}

export default Header
