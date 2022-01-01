import styled from 'styled-components/native'

export const InputContainer = styled.View`
    height: ${({ theme }) => theme.metrics.px(42)}px; 
    width: ${({ theme }) => theme.metrics.px(327)}px;
    border-radius: ${({ theme }) => theme.metrics.px(12)}px;
    border-width: ${({ theme }) => theme.metrics.px(1)}px;
    border-color: ${({ theme }) => theme.colors.light};
    padding: ${({ theme }) => theme.metrics.px(6)}px;    
    margin: 
        ${({ theme, mt }) => theme.metrics.px(mt || 0)}px
        ${({ theme, mr }) => theme.metrics.px(mr || 0)}px
        ${({ theme, mb }) => theme.metrics.px(mb || 0)}px
        ${({ theme, ml }) => theme.metrics.px(ml || 0)}px
    ;
`

export const TextInput = styled.TextInput.attrs(({ theme })=> ({
    placeholderTextColor: theme.colors.gray,
}))`
    height: 100%;
    width: 100%;
    font-family: ${({ theme }) => theme.fonts.semiBold};
    font-size: ${({ theme }) => theme.metrics.px(14)}px;
    color: ${({ theme }) => theme.colors.white};
    padding: ${({ theme }) => theme.metrics.px(6)}px;


`