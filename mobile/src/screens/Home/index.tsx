import React, { useEffect } from 'react'
import { FlatList, Platform, StatusBar, View } from 'react-native'
import Header from '../../components/Header'
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../store/post/post.actions';
import { RootState } from '../../store';
import Card from '../../components/Card';


const STATUS_BAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;
const HEADER_HEIGHT = Platform.OS === "ios" ? 20 : 56;

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  const { list } = useSelector((state: RootState) => state.post)

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
        <View style={{ flex: 1, backgroundColor: "#99F3BD" }}>
          <Header />
          <FlatList
            style={{ paddingTop:10 }}
            data={list}
            renderItem={ ({item}) => (
              <Card key={item.id} post={ item } />
            ) }
            keyExtractor={ item => item.id }
          />
        </View>
      </View>
    );
}

export default Home
