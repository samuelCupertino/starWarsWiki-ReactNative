import { LogoImage } from './styles'
import logoImage from '../../../../assets/LogoEmpire.png'

const sizeToPx = {
    small: 28,
    large: 64,
}

export const Logo = ({ size }) => {
    return <LogoImage source={logoImage} size={sizeToPx[size || 'large']} />
}
