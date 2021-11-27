import React from 'react'
import { Text, View } from 'react-native'
import { Post } from '../../models/Post'
import moment from 'moment'
import { Category, Container, Local, PostImage, PostImageWrapper, PostInfoWrapper, Title } from './styles'

interface CardAttributes {
    post: Post
}

const Card: React.FC<CardAttributes> = ({ post }) => {
    return (
        <Container>
            <PostImageWrapper>
                <PostImage resizeMode={'cover'} source={{ uri: post.images[0].location }} />
            </PostImageWrapper>
            <PostInfoWrapper>
                <View style={{ flexDirection:'row' }}>
                    <Title>{ post.title }</Title>
                </View>
                <Category>Categoria: { post.category.description }</Category>
                <Local>Copacabana - { moment(post?.created_at).format("DD/MM/YYYY h:mm") }</Local>
            </PostInfoWrapper>
        </Container>
    )
}

export default Card