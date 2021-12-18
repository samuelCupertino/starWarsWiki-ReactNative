import { ScreenScrollContainer, HomeList, Hero } from '../../components'

const FAKE_DATA = [
    {
        id: 1,
        image_url: 'https://starwars-visualguide.com/assets/img/characters/1.jpg',
        title: 'Ameaça Fantasma',
        subtitle: 'Episódio I',
        description: 'A Ameaça Fantasma é uma série de televisão de ficção científica, estrelando episódios de uma série de filmes de fantasia criada por George Lucas, que se passa em um universo fictício, onde os personagens são fictícios, mas os personagens são reais.',
        type: 'movie'
    },
    {
        id: 2,
        image_url: 'https://starwars-visualguide.com/assets/img/characters/2.jpg',
        title: 'Ameaça Fantasma',
        subtitle: 'Episódio II',
        description: 'A Ameaça Fantasma é uma série de televisão de ficção científica, estrelando episódios de uma série de filmes de fantasia criada por George Lucas, que se passa em um universo fictício, onde os personagens são fictícios, mas os personagens são reais.',
        type: 'movie'
    },

]

export const Home = () => {
    return (
        <ScreenScrollContainer>
            <Hero item={{
                title: 'Episódio I',
                subtitle: 'A Ameaça Fantasma',
                type: 'Filme',
                image_url: 'https://static.wikia.nocookie.net/starwars/images/7/75/EPI_TPM_poster.png/revision/latest?cb=20130822171446'            }}/>
            <HomeList
                title="Filmes"
                data={FAKE_DATA}
            />
            <HomeList
                title="Personagens"
                data={FAKE_DATA}
            />
        </ScreenScrollContainer>
    )
}
