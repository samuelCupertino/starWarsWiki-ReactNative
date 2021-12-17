import { StyleSheet, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import { Container, Text, Logo } from '../../components'

export const SplashScreen = () => {
    return (
        <Container align="center" justify="center">
            <Logo />
            <Text>StarWars - Wiki</Text>
            <StatusBar style="auto" />
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
