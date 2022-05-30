import React, {useEffect} from 'react';
import {FlatList, View} from 'react-native';
import Header from '../../components/Header';
import {useDispatch, useSelector} from 'react-redux';
import {getPosts} from '../../store/post/post.actions';
import {RootState} from '../../store';
import Card from '../../components/Card';
import CustomAppStatusBar from '../../helpers/AppBar';
import {Container} from './styles';

const Home = (props: any) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const {list} = useSelector((state: RootState) => state.post);

  return (
    <Container>
      <CustomAppStatusBar backgroundColor={'#28df99'} barStyle="dark-content" />
      <Header />
      <FlatList
        style={{paddingTop: 0}}
        data={list}
        renderItem={({item}) => (
          <Card key={item.id} post={item} navigation={props.navigation} />
        )}
        keyExtractor={item => item.id}
      />
    </Container>
  );
};

export default Home;
