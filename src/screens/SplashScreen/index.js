import { useEffect } from 'react'
import { Container, Text, Logo } from '../../components'

export const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Home')
        }, 2000)
    }, [navigation])


    return (
        <Container align="center" justify="center">
            <Logo />
            <Text>StarWars - Wiki</Text>
        </Container>
    )
}