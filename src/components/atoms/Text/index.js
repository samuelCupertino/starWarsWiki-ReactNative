import { CustomText } from './styles'

export const Text = ({ children, ...props }) => (
    <CustomText {...props}>{children}</CustomText>
)
