import { LogoImage } from './styles'
import logoImage from '../../../../assets/LogoEmpire.png'

export const Logo = ({ children }) => {
    return (
        <LogoImage source={logoImage}/>
    )
}
