import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/AntDesign';

const TabArea = styled.View`
  height: 60px;
  background-color: #28df99;
  flex-direction: row;
  border-top-width: 1px;
  border-top-color: #d2f6c5;
`;
const TabItem = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const TabItemCenter = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
  background-color: #f6f7d4;
  border-radius: 30px;
  border: 3px solid #d2f6c5;
  margin-top: -15px;
`;

interface CustomTabBarProps {
  state: any;
  navigation: any;
}

const CustomTabBar: React.FC<CustomTabBarProps> = ({state, navigation}) => {
  const goTo = (screenName: string) => {
    navigation.navigate(screenName);
  };

  return (
    <TabArea>
      <TabItem onPress={() => goTo('Home')}>
        <Icon
          style={{opacity: state.index === 0 ? 1 : 0.6}}
          name="home"
          size={30}
          color="#F6F7D4"
        />
      </TabItem>
      <TabItem onPress={() => goTo('Favorites')}>
        <Icon
          style={{opacity: state.index === 1 ? 1 : 0.6}}
          name="hearto"
          size={30}
          color="#F6F7D4"
        />
      </TabItem>
      <TabItemCenter onPress={() => goTo('AddPost')}>
        <Icon name="plus" size={32} color="#28DF99" />
      </TabItemCenter>
      <TabItem onPress={() => goTo('Profile')}>
        <Icon
          style={{opacity: state.index === 3 ? 1 : 0.6}}
          name="user"
          size={30}
          color="#F6F7D4"
        />
      </TabItem>
      <TabItem onPress={() => goTo('Settings')}>
        <Icon
          style={{opacity: state.index === 4 ? 1 : 0.6}}
          name="setting"
          size={30}
          color="#F6F7D4"
        />
      </TabItem>
    </TabArea>
  );
};

export default CustomTabBar;
