import styled from 'styled-components/native'

export const CustomText = styled.Text`
    font-size: ${({ theme, size }) => theme.metrics.px(size || 24)}px;
    color: ${({ theme, color }) => theme.colors[color || 'white']};
    margin: 
        ${({ theme, mt }) => theme.metrics.px(mt || 0)}px
        ${({ theme, mr }) => theme.metrics.px(mr || 0)}px
        ${({ theme, mb }) => theme.metrics.px(mb || 0)}px
        ${({ theme, ml }) => theme.metrics.px(ml || 0)}px
    ;
    font-family: ${({ theme, fontFamily }) =>
        theme.fonts[fontFamily || 'regular']};
    line-height: ${({ theme, lh, size }) => theme.metrics.px(lh || size || 24)}px;
`
