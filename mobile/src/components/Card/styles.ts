import styled from "styled-components/native";

export const Container = styled.View`
    flex-direction: row;
    border-radius: 10px;
    margin: 5px 10px;
    background-color: #fff;
`

export const PostImageWrapper = styled.View`
    width: 120px;
    height: 120px;
`

export const PostImage = styled.Image`
    flex: 1;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
`

export const PostInfoWrapper = styled.View`
    padding: 5px;
    justify-content: space-between;
`

export const Title = styled.Text`
    font-size: 18px;
    flex: 1;
    flex-wrap: wrap;
    font-weight: 700;
`

export const Category = styled.Text`
    font-size: 14px;
`

export const Local = styled.Text`
    font-size: 12px;
    color: #888;
`
