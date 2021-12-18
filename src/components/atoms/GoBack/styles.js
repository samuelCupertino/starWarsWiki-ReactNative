import styled from 'styled-components/native'

export const GoBackContainer = styled.Text`
    position: absolute;
    top: ${({ theme }) => theme.metrics.px(30)}px;
    z-index: 1;
    padding: ${({ theme }) => theme.metrics.px(20)}px;
`
