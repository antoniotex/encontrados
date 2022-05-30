import {Platform, StatusBar, View} from 'react-native';
import React from 'react';

function getStatusBarHeight() {
  console.log(Platform.OS);
  console.log(StatusBar.currentHeight);
  return Platform.OS === 'ios' ? 44 : 56;
}

interface CustomAppStatusBarProps {
  backgroundColor: string;
}

const CustomAppStatusBar: React.FC<CustomAppStatusBarProps> = ({
  backgroundColor,
  ...props
}) => (
  <View style={{backgroundColor, height: getStatusBarHeight()}}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

export default CustomAppStatusBar;
export const statusBarHeight = getStatusBarHeight();
