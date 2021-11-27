import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    background-color: #99F3BD;
    flex: 1;
`

export const Content = styled.View`
    background-color: #fff;
    margin: 10px;
    border-radius: 8px;
    padding: 10px;
    justify-content: space-between;
`

export const Title = styled.Text`
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 16px;
`

export const Description = styled.Text`
    font-size: 14px;
`

export const PostTitle = styled.Text`
    font-size: 16px;
`

export const PostCategory = styled.Text`
    margin-bottom: 20px;
    margin-top: 10px;
`

export const PostDate = styled.Text``

export const BackButtonWrapper = styled.TouchableOpacity`
    position: absolute;
    z-index:999;
    background-color: rgba(0,0,0,.5);
    width: 40px;
    height: 40px;
    border-radius: 20px;
    border: 2px solid #F6F7D4;
    justify-content: center;
    align-items: center;
    top: 5px;
    left: 5px;
`
