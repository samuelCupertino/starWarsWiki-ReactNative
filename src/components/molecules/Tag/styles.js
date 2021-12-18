import styled from 'styled-components/native'

export const TagContainer = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.red};
    height: ${({ theme }) => theme.metrics.px(24)}px;
    width: auto;
    padding: 0 ${({ theme }) => theme.metrics.px(6)}px;
    border-radius: ${({ theme }) => theme.metrics.px(24)}px;
    align-self: flex-start;
    margin: 
        ${({ theme, mt }) => theme.metrics.px(mt || 0)}px
        ${({ theme, mr }) => theme.metrics.px(mr || 0)}px
        ${({ theme, mb }) => theme.metrics.px(mb || 0)}px
        ${({ theme, ml }) => theme.metrics.px(ml || 0)}px
    ;
`