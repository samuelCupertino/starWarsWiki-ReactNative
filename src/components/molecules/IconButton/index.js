import { ButtonContainer } from './styles'
import { Ionicons } from '@expo/vector-icons'

import { Text } from '~/components/atoms'

import { theme } from '~/styles/theme'

export const IconButton = ({ iconName, label, onPress }) => (
    <ButtonContainer onPress={onPress}>
        <Ionicons
            name={iconName}
            size={theme.metrics.px(24)}
            color={theme.colors.white}
        />
        <Text fontFamily="semiBold" size={10} mt={6}>
            {label}
        </Text>
    </ButtonContainer>
)
