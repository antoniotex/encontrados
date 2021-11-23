import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { isAuthenticated, logout } from "../../store/auth/token.service"
import { toggleLoginModal, toggleRegisterModal } from "../../store/post/post.store";
import LoginModal from "../LoginModal";
import RegisterModal from "../RegisterModal";
import { Brand, Container, HeaderMenu, LoginButton } from "./styles"

const Header: React.FC = () => {
    const dispatch = useDispatch()
    const { showRegisterModal, showLoginModal } = useSelector((state: RootState) => state.post)

    const handleLoginModal = () => {
        if(isAuthenticated()){
            logout()
            window.location.href = '/'
            return
        }
        dispatch(toggleLoginModal(true))
    }

    return (
        <Container>
            <Brand>Encontrados</Brand>
            <HeaderMenu>
                <LoginButton onClick={handleLoginModal}>
                    { isAuthenticated() ? 'Sair' : 'Entrar' }
                </LoginButton>
                { !isAuthenticated() && <LoginButton onClick={() => dispatch(toggleRegisterModal(true))}>
                    Registre-se
                </LoginButton> }
            </HeaderMenu>
            <LoginModal
                show={showLoginModal}
                onHide={() => dispatch(toggleLoginModal(false))}
            />
            <RegisterModal
                show={showRegisterModal}
                onHide={() => dispatch(toggleRegisterModal(false))}
            />
        </Container>
    )
}

export default Header
