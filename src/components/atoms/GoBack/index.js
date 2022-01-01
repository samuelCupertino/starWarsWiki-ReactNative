import { GoBackContainer } from './styles'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'

export const GoBack = () => {
    const navigation = useNavigation()

    return (
        <GoBackContainer onPress={()=> navigation.goBack()}>
            <Ionicons name='chevron-back' size={24} color='white' />
        </GoBackContainer>
    )
}
