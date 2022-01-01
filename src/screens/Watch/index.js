import { useCallback } from 'react'
import YoutubePlayer from 'react-native-youtube-iframe'

import { Container, GoBack } from '~/components'
import { theme } from '~/styles'

export const Watch = ({ route }) => {
    const { item } = route.params

    const getParamFromUrl = useCallback((url, param) =>
        url.match(RegExp(`${param}=[^&]+`))[0].replace(`${param}=`, '')
    , [])

    const videoId = getParamFromUrl(item.trailer_url, 'v')
    
    return (
        <>
            <GoBack />
            <Container align="center" justify="center">
                <YoutubePlayer
                    height={theme.metrics.px(230)}
                    width={theme.metrics.width}
                    videoId={videoId}
                    play={true}
                    forceAndroidAutoplay={true}
                />
            </Container>
        </>
    )
}