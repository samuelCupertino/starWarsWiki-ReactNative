import { useEffect } from 'react'
import { Container, Text, Logo } from '../../components'

export const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Home')
        }, 2000)
    }, [navigation])

    return (
        <Container align="center" justify="center">
            <Logo />
            <Text fontFamily="bold" size={24} mt={10}>StarWars - Wiki</Text>
        </Container>
    )
}