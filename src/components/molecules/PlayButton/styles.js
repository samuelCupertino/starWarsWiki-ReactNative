import styled from 'styled-components/native'

export const PlayButtonContainer = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    align-self: center;
    align-items: center;
    justify-content: space-between;
    width: ${({ theme }) => theme.metrics.px(85)}px;
    padding: ${({ theme }) => theme.metrics.px(10)}px;
    border-radius: ${({ theme }) => theme.metrics.px(8)}px;
    background-color: ${({ theme }) => theme.colors.white};
`
