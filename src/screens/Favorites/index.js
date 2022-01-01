import { useEffect, useState } from 'react'
import { ScreenScrollContainer, Text, GridList } from '~/components'
import { useFavorites } from '../../services/hooks'

export const Favorites = ({ navigation }) => {
    const { getFavorites } = useFavorites()
    const [favoritesData, setFavoritesData] = useState([])

    const getFavoritesData = async () => {
        const favorites = await getFavorites()
        setFavoritesData(favorites)
    }
    useEffect(()=> navigation.addListener('focus', getFavoritesData), [])

    return (
        <ScreenScrollContainer withPadding>
            <Text fontFamily="bold" size={28} mb={20}>
                Favorites
            </Text>
            <GridList mb={15} data={favoritesData} />
        </ScreenScrollContainer>
    )
}
