import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import CardPost from '../../components/CardPost';
import { RootState } from '../../store';
import { asyncGetAllPosts } from '../../store/post/post.actions';
import { Container, Content } from './styles'

const Home = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(asyncGetAllPosts())
    }, [dispatch])

    const { posts } = useSelector((state: RootState) => state.post)

    const handleClick = (id: number) => {
        history.push(`/post/${id}`)
    }

    return (
        <Content>
            <Container>
                { posts.map(post => (            
                    <CardPost onClick={handleClick} key={post.id} post={post} />
                )) }
            </Container>
        </Content>
    )
}

export default Home
