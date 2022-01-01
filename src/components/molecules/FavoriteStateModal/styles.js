import styled from 'styled-components/native'

export const Modal = styled.Modal`
`

export const ModalBackgroundContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.darkTransparent(0.75)};
`

export const ModalContentContainer = styled.View`
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.dark};
    height: ${({ theme }) => theme.metrics.px(326)}px;
    width: ${({ theme }) => theme.metrics.px(326)}px;
    border-radius: ${({ theme }) => theme.metrics.px(24)}px;
    padding: ${({ theme }) => theme.metrics.px(24)}px;
    border-width: ${({ theme }) => theme.metrics.px(3)}px;
    border-color: ${({ theme }) => theme.colors.light};
`

export const FavoriteImage = styled.Image`
    height: ${({ theme }) => theme.metrics.px(80)}px;
    width: ${({ theme }) => theme.metrics.px(80)}px;
`
