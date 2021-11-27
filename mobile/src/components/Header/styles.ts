import React from 'react'
import styled from 'styled-components/native'

export const Container = styled.View`
    background-color: #28DF99;
    padding: 10px;
    flex-direction: row;
    justify-content: space-between;
`
export const SearchInputWrapper = styled.View`
    background-color: #99F3BD;
    width: 70%;
    padding: 5px;
    border-radius: 8px;
`

export const SearchInput = styled.TextInput`
    color: #28DF99;
    font-weight: bold;
`