import { PlayButtonContainer } from './styles'
import { Ionicons } from '@expo/vector-icons'

import { Text } from '~/components/atoms'

import { theme } from '~/styles/theme'

export const PlayButton = ({ onPress }) => (
    <PlayButtonContainer onPress={onPress}>
        <Ionicons name="play" size={theme.metrics.px(12)} color="black" />
        <Text fontFamily="bold" color="black" size={14}>
            Assistir
        </Text>
    </PlayButtonContainer>
)
