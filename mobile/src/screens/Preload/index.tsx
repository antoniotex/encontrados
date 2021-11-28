import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { Text } from 'react-native'
import { Container } from './styles'

interface PreloadAttributes {
    navigation: any;
}

const Preload: React.FC<PreloadAttributes> = ({ navigation }) => {
    // const { dispatch: userDispatch } = useContext(UserContext);

    useEffect(() => {
        const checkToken = async () => {
            // const token = await AsyncStorage.getItem('token');
            const token = false;
            if(token) {
                //let res = await Api.checkToken(token);
                // if(res.token) {
                //     // await AsyncStorage.setItem('token', res.token);

                //     userDispatch({
                //         type: 'setAvatar',
                //         payload: {
                //             avatar: res.data.avatar
                //         }
                //     });

                    navigation.reset({
                        routes: [{ name:'MainTab' }]
                    });

                // } else {
                //     navigation.navigate('Login');
                // }
                
            } else {
                navigation.navigate('Login');
            }
        }
        checkToken();
    }, []);
    return (
        <Container>
            <Text>Encontrados Preloading...</Text>
        </Container>
    )
}

export default Preload
