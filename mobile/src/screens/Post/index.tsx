import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { getPostById } from '../../store/post/post.actions'
import { Container } from './styles'

interface PostAttrbibutes {
    route: any;
    navigation: any;
}

const Post: React.FC<PostAttrbibutes> = ({ route, navigation }) => {
    const dispatch = useDispatch()

    const handleBackButton = () => {
        navigation.goBack()
    }

    useEffect(() => {
        dispatch(getPostById(route.params.postId))
    }, [dispatch])

    const { post } = useSelector((state: RootState) => state.post)

    return (
        <Container>
            <TouchableOpacity onPress={() => handleBackButton()}><Text>Voltar</Text></TouchableOpacity>
            <Text>{ post?.description }</Text>
        </Container>
    )
}

export default Post
