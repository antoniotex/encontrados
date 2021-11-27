import React from 'react'
import { Text, View } from 'react-native'
import { Container, SearchInput, SearchInputWrapper } from './styles'
import Icon from 'react-native-vector-icons/AntDesign';

const Header = () => {
    return (
        <Container>
            <SearchInputWrapper>
                <SearchInput
                    placeholder="Busque algo..."
                    placeholderTextColor="#F6F7D4"
                    // value={value}
                    // onChangeText={onChangeText}
                />
            </SearchInputWrapper>
            <Icon style={{ marginHorizontal:10 }} name="filter" size={30} color="#F6F7D4" />
        </Container>
    )
}

export default Header
