import styled from 'styled-components/native'

export const CardContainer = styled.TouchableOpacity`
    width: ${({ theme, size }) => theme.metrics.px(size.w)}px;
    height: ${({ theme, size }) => theme.metrics.px(size.h)}px;
    border-radius: ${({ theme }) => theme.metrics.px(8)}px;
    overflow: hidden;
    margin: ${({ theme, m }) => theme.metrics.px(m || 0)}px;
    margin: 
        ${({ theme, mt, m }) => theme.metrics.px(mt || m || 0)}px
        ${({ theme, mr, m }) => theme.metrics.px(mr || m || 0)}px
        ${({ theme, mb, m }) => theme.metrics.px(mb || m || 0)}px
        ${({ theme, ml, m }) => theme.metrics.px(ml || m || 0)}px
    ;
`

export const CardImage = styled.ImageBackground`
    width: 100%;
    height: 100%;
`
