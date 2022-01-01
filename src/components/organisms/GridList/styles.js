import styled from 'styled-components/native'

export const NoDataImage = styled.Image`
    height: ${({ theme }) => theme.metrics.px(48)}px;
    width: ${({ theme }) => theme.metrics.px(48)}px;
`
export const ContainerGridList = styled.View`
    flex: 1;
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
`