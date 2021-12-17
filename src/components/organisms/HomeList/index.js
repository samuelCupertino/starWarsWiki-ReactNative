
import { FlatList } from 'react-native'
import { Text } from '../../atoms'
import { Card } from '../../molecules'

const FAKE_DATA = [
    {
        id: 1,
        image_url: 'https://starwars-visualguide.com/assets/img/characters/1.jpg',
    },
    {
        id: 2,
        image_url: 'https://starwars-visualguide.com/assets/img/characters/2.jpg',
    }
]
export const HomeList = () => {
    return (
        <FlatList
            horizontal
            data={FAKE_DATA}
            renderItem={({ item }) => <Card item={item} />}
            keyExtractor={item => item.id}
        />
    )
}
