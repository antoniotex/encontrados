import React from 'react'
import { Platform, StatusBar, View } from 'react-native'
import Header from '../../components/Header'


const STATUS_BAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;
const HEADER_HEIGHT = Platform.OS === "ios" ? 20 : 56;

const Home = () => {
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
          <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <Header />
          </View>
        </View>
      );
}

export default Home
