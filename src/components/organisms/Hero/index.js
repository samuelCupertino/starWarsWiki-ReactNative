import { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
    HeroContainer,
    HeroImageBackground,
    HeroGradient,
    ButtonsView,
} from './styles'
import { Text, Logo } from '~/components/atoms'
import {
    Tag,
    IconButton,
    PlayButton,
    FavoriteStateModal,
} from '~/components/molecules'
import { useFavorites } from '~/services/hooks'
import { useDataStore } from '~/services/stores'
import { colors } from '~/styles/colors'

export const Hero = ({ item, onDetail }) => {
    const { image_url, title, subtitle, type } = item
    const [btnFavoriteStatus, setBtnFavoriteStatus] = useState(false)
    const { getFavorites, addFavorite, removeFavorite } = useFavorites()
    const navigation = useNavigation()
    const { setSelectedData } = useDataStore()
    const [showFavoriteModal, setShowFavoriteModal] = useState(false)

    useEffect(async () => {
        const dbFavorites = await getFavorites()
        const itemIsFavorite = dbFavorites.some(
            ({ id, type }) => id === item.id && type === item.type
        )

        if (itemIsFavorite) {
            setBtnFavoriteStatus(true)
        }
    }, [])

    const handlerFavorite = async () => {
        const dbFavorite = await getFavorites()
        const itemInDbFavorite = dbFavorite.find(
            ({ id, type }) => id === item.id && type === item.type
        )

        if (itemInDbFavorite) {
            removeFavorite(itemInDbFavorite)
            setBtnFavoriteStatus(false)
        } else {
            addFavorite(item)
            setBtnFavoriteStatus(true)
        }

        setShowFavoriteModal(true)
        setTimeout(() => setShowFavoriteModal(false), 1000)
    }

    const handlerDetail = () => {
        setSelectedData(item)
        navigation.navigate('Detail')
    }

    const handlerPlay = () => {
        navigation.navigate('Watch', { item })
    }

    return (
        <HeroContainer>
            <HeroImageBackground
                source={{
                    uri: image_url,
                }}
            >
                <HeroGradient
                    colors={[colors.dark, 'transparent', colors.dark]}
                >
                    {!onDetail && <Logo size="small" />}
                    <Tag mt={onDetail ? 224 : 200}>{type}</Tag>
                    <Text fontFamily="bold" size={28} mt={8}>
                        {title}
                    </Text>
                    <Text size={18}>{subtitle}</Text>

                    <ButtonsView>
                        <IconButton
                            onPress={handlerFavorite}
                            label="Favoritos"
                            iconName={
                                btnFavoriteStatus
                                    ? 'md-checkmark-circle'
                                    : 'add-circle-outline'
                            }
                        />
                        {item.trailer_url && (
                            <PlayButton onPress={handlerPlay} />
                        )}
                        {!onDetail && (
                            <IconButton
                                onPress={handlerDetail}
                                label="Saiba Mais"
                                iconName="information-circle-outline"
                            />
                        )}
                    </ButtonsView>
                </HeroGradient>
            </HeroImageBackground>

            <FavoriteStateModal
                type={btnFavoriteStatus ? 'added' : 'removed'}
                visible={showFavoriteModal}
            />
        </HeroContainer>
    )
}
