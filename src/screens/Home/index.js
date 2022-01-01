import { 
    ScreenScrollContainer, 
    Container,
    HomeList, 
    Hero, 
    Loader 
} from '../../components'

import { useGetData } from '~/services/hooks'
import { useEffect, useState } from 'react'

const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const randomItem = (array) => array[random(0, array.length - 1)]

export const Home = () => {
    const { getFilms, getCharacters } = useGetData()
    const [loading, setLoading] = useState(true)
    const [films, setFilms] = useState([])
    const [characters, setCharacters] = useState([])

    useEffect(async () => {
        const filmsRes = await getFilms()
        const charactersRes = await getCharacters()

        if (!filmsRes.error && !charactersRes.error) {
            setFilms(filmsRes)
            setCharacters(charactersRes)
            setLoading(false)
        }
    }, [])

    if (loading) {
        return (
            <Container justify="center" align="center">
                <Loader />
            </Container>
        )
    }

    return (
        <ScreenScrollContainer>
            <Hero item={{ ...randomItem(films), type: 'Filmes' }} />
            <HomeList title="Filmes" data={films} type="Filme" />
            <HomeList title="Personagens" data={characters} type="Personagem" />
        </ScreenScrollContainer>
    )
}
