import { InputContainer, TextInput } from './styles'

export const Input = ({ mt, mr, mb, ml, ...props }) => (
    <InputContainer {...{ mt, mr, mb, ml }}>
        <TextInput {...props} />
    </InputContainer>
)
