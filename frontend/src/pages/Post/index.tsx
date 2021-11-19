import moment from 'moment'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { asyncGetPostById } from '../../store/post/post.actions'
import { Container, Content, ContentDescription, Contentmage, ContentTitle, ContentUser, Info, InfoAge, InfoCity, InfoName } from './styles'

interface PostProps {
    match: any;
}

const Post: React.FC<PostProps> = ({ match }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(asyncGetPostById(match.params.id))
    }, [dispatch, match.params.id])

    const { post } = useSelector((state: RootState) => state.post)

    return (
        <Container>
            <Content>
                <ContentTitle>{ post?.title }</ContentTitle>
                <ContentUser>
                    Publicado por { post?.user.name } em { moment(post?.created_at).format("DD/MM/YYY h:mm") }
                </ContentUser>
                <Contentmage src={post?.images[0].location} />
                <ContentDescription>{ post?.description }</ContentDescription>
            </Content>
            <Info>
                <InfoName>Nome: Não informadokkkkkkkkkkkkkk</InfoName>
                <InfoAge>Idade: 46 anos</InfoAge>
                <InfoCity>Cidade: Não lembra</InfoCity>
            </Info>
        </Container>
    )
}

export default Post
