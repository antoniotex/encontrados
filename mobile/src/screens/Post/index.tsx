import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Dimensions, FlatList, Image, Platform, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { getPostById } from '../../store/post/post.actions'
import { BackButtonWrapper, Container, Content, Description, PostCategory, PostDate, PostTitle, Title } from './styles'
import moment from 'moment'
import Icon from 'react-native-vector-icons/AntDesign';

interface PostAttrbibutes {
    route: any;
    navigation: any;
}

const STATUS_BAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;
const HEADER_HEIGHT = Platform.OS === "ios" ? 27 : 56;

const Post: React.FC<PostAttrbibutes> = ({ route, navigation }) => {
    const dispatch = useDispatch()

    const handleBackButton = () => {
        navigation.goBack()
    }

    useEffect(() => {
        dispatch(getPostById(route.params.postId))
    }, [dispatch])

    const { post, list } = useSelector((state: RootState) => state.post)

    const { width } = Dimensions.get('window')
    const height = width * .9

    return (
        <View style={{ flex: 1 }}>
        <View style={{ height: STATUS_BAR_HEIGHT, backgroundColor: "#28DF99" }}>
          <StatusBar
            translucent
            backgroundColor="#28DF99"
            barStyle="light-content"
          />
        </View>
        <View style={{ backgroundColor: "#28DF99", height: HEADER_HEIGHT }} />
        <Container>
            <BackButtonWrapper onPress={handleBackButton}>
                <Icon style={{ marginHorizontal:10 }} name="arrowleft" size={20} color="#F6F7D4" />
            </BackButtonWrapper>
            <View>
                <FlatList
                    horizontal={true}
                    pagingEnabled={true}
                    style={{ backgroundColor:'#D2F6C5' }}
                    data={post?.images}
                    renderItem={ ({item, index}) => (
                        <View key={index}>
                            <Image style={{ width, height, resizeMode: 'contain' }} source={{ uri: item.location }} />
                        </View>
                    ) }
                    />
                </View>
                <Content>
                    <Title>{ post?.title }</Title>
                    <PostCategory>Categoria: { post?.category.description }</PostCategory>
                    <PostDate>Postado em { moment(post?.created_at).format("DD/MM/YYYY h:mm") }</PostDate>
                </Content>
                <Content>
                    <Title>Descrição</Title>
                    <Description>{ post?.description ? post?.description : 'Sem informações adicionais' }</Description>
                </Content>
                <Content>
                    <Title>Usuário</Title>
                    <Description>Nome: { post?.user.name }</Description>
                </Content>
        </Container>
      </View>

    )
}

export default Post
