import { Text } from '~/components/atoms'
import {
    Modal,
    ModalBackgroundContainer,
    ModalContentContainer,
    FavoriteImage,
} from './styles'
import favoriteAdded from '../../../../assets/favorite-added.png'
import favoriteRemoved from '../../../../assets/favorite-removed.png'

export const FavoriteStateModal = ({ visible, type }) => (
    <Modal animationType="fade" visible={visible} transparent={true}>
        <ModalBackgroundContainer>
            <ModalContentContainer>
                <FavoriteImage
                    source={type === 'added' ? favoriteAdded : favoriteRemoved}
                />
                <Text mt={24} align="center" size={28} fontFamily="bold">
                    Favorito
                    {type === 'added' ? ' adicionado ' : ' removido '}
                    com sucesso!
                </Text>
            </ModalContentContainer>
        </ModalBackgroundContainer>
    </Modal>
)
