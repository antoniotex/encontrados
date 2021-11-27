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
                    // secureTextEntry={password}
                />
            </SearchInputWrapper>
            <Icon name="filter" size={30} color="#fff" />
            <Icon name="user" size={30} color="#fff" />
        </Container>
    )
}

export default Header
