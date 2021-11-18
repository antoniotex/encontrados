import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import CardPost from '../../components/CardPost';
import Header from '../../components/Header';
import LoginModal from '../../components/LoginModal';
import RegisterModal from '../../components/RegisterModal';
import { RootState } from '../../store';
import { isAuthenticated, logout } from '../../store/auth/token.service'
import { asyncGetAllPosts } from '../../store/post/post.actions';
import { Container, Content } from './styles'

const Home = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showRegisterModal, setShowRegisterModal] = useState(false);

    useEffect(() => {
        dispatch(asyncGetAllPosts())
    }, [dispatch])

    const toggleRegisterModal = () => {
        setShowRegisterModal(true)
    }

    const toggleLoginModal = () => {
        if(isAuthenticated()){
            logout()
            history.push('/')
            return
        }
        setShowLoginModal(!showLoginModal)
    }

    const { posts } = useSelector((state: RootState) => state.post)

    return (
        <Content>
            <Header toggleLoginModal={toggleLoginModal} toggleRegisterModal={toggleRegisterModal}  />
            <LoginModal
                show={showLoginModal}
                onHide={setShowLoginModal}
            />
            <RegisterModal
                show={showRegisterModal}
                onHide={setShowRegisterModal}
            />
            <Container>
                { posts.map(post => (            
                    <CardPost key={post.id} post={post} />
                )) }
                { posts.map(post => (            
                    <CardPost key={post.id} post={post} />
                )) }
                { posts.map(post => (            
                    <CardPost key={post.id} post={post} />
                )) }
            </Container>
        </Content>
    )
}

export default Home
