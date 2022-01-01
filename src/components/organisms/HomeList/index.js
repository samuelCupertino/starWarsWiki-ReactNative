
import { FlatList } from 'react-native'
import { Text } from '../../atoms'
import { Card } from '../../molecules'
import { HomeListContainer } from './styles'
import { theme } from '~/styles/theme'    

export const HomeList = ({ data, title, type }) => {
    return (
        <HomeListContainer>
            <Text ml={24} fontFamily="black" size={18}>
                {title}
            </Text>
            <FlatList
                horizontal
                data={data}
                renderItem={({ item }) => <Card mr={12} item={{...item, type}} />}
                keyExtractor={item => item.id}
                contentContainerStyle={{
                    paddingTop: theme.metrics.px(12),
                    paddingLeft: theme.metrics.px(24),
                    paddingBottom: theme.metrics.px(24)
                }}
            />
        </HomeListContainer>
    )
}
