import React, { useContext } from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/AntDesign';

const TabArea = styled.View`
    height: 60px;
    background-color: #28DF99;
    flex-direction: row;
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
    background-color: #F6F7D4;
    border-radius: 30px;
    border: 3px solid #D2F6C5;
    margin-top: -15px;
`;
const AvatarIcon = styled.Image`
    width: 24px;
    height: 24px;
    border-radius: 12px;
`;

interface CustomTabBarProps {
    navigation: any
}

const CustomTabBar: React.FC<CustomTabBarProps> = ({ navigation }) => {
    const goTo = (screenName: string) => {
        navigation.navigate(screenName);
    }

    return (
        <TabArea>
        <TabItem onPress={() => goTo('Home')}>
            <Icon name="home" size={30} color="#F6F7D4" />
        </TabItem>
            <TabItem onPress={() => goTo('Home')}>
                <Icon name="hearto" size={30} color="#F6F7D4" />
            </TabItem>
            <TabItemCenter onPress={() => goTo('Home')}>
                <Icon name="plus" size={32} color="#28DF99" />
            </TabItemCenter>
            <TabItem onPress={() => goTo('Home')}>
                <Icon name="user" size={30} color="#F6F7D4" />
            </TabItem>
            <TabItem onPress={() => goTo('Home')}>
                <Icon name="setting" size={30} color="#F6F7D4" />
            </TabItem>
        </TabArea>
    );
}

export default CustomTabBar