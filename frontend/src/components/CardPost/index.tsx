import { Post } from "../../store/post/post.store"
import { Container, CardBody, ImagePost, Title, Info, DatePost } from "./styles"
import moment from 'moment'

interface CardPostProps {
    post: Post;
}

const CardPost: React.FC<CardPostProps> = ({ post }) => {
    console.log('POST:: ', post.id)
    return (
        <Container>
            <CardBody>
                <ImagePost src={post.images[0].location} />
            </CardBody>
            <Title>{ post.title }</Title>
            <Info>
                <DatePost>Categoria: { post.category.description }</DatePost>
                <DatePost>Postado em: {moment(post.created_at).format('DD/MM/YYYY h:mm')}</DatePost>
            </Info>
        </Container>
    )
}

export default CardPost
