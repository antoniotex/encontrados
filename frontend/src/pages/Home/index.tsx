import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../../components/Header';
import LoginModal from '../../components/LoginModal';
import { isAuthenticated, logout } from '../../store/auth/token.service'
import { Container } from './styles'

const Home = () => {
    const history = useHistory()
    const [showLoginModal, setShowLoginModal] = useState(false);

    const handleLogout = () => {
        logout()
        if(!isAuthenticated()){
            history.push('/')
        }
    }

    const toggleLoginModal = () => {
        if(isAuthenticated()){
            logout()
            history.push('/')
            return
        }
        setShowLoginModal(!showLoginModal)
    }

    return (
        <Container>
            <Header toggleLoginModal={toggleLoginModal} handleLogout={handleLogout}  />
            <LoginModal
                show={showLoginModal}
                onHide={setShowLoginModal}
            />
        </Container>
    )
}

export default Home
