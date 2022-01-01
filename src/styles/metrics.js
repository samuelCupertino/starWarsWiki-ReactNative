import { Dimensions, PixelRatio } from 'react-native'

const { width, height } = Dimensions.get('window')

const figmaWidth = 375

const px = (valuePx) => {
    const widthPercent = (valuePx / figmaWidth) * 100
    const screenPixel = PixelRatio.roundToNearestPixel(
        (width * parseFloat(widthPercent)) / 100
    )
    return screenPixel
}

const vh = value => (value / 100) * height

const vw = value => (value / 100) * width


export const metrics = {
    px,
    vh,
    vw,
    width,
    height,
}
