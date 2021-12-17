import styled from 'styled-components/native'

export const CustomText = styled.Text`
    color: ${props => props.color || '#fff'};
    font-size: 24px;
    font-weight: bold;
    margin-top: 10px;
    font-family: 'SourceSansPro_700Bold';
`