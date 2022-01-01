import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'

export const HeroContainer = styled.View`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: ${({ theme }) => theme.metrics.px(460)}px;


    height: ${({ theme }) => theme.metrics.px(430)}px;
    margin-bottom: ${({ theme }) => theme.metrics.px(20)}px;;
`

export const HeroImageBackground = styled.ImageBackground`
    width: 100%;
    height: 100%;
`

export const HeroGradient = styled(LinearGradient)`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 
        ${({ theme }) => theme.metrics.px(56)}px
        ${({ theme }) => theme.metrics.px(24)}px 
    ;
`

export const ButtonsView = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: ${({ theme }) => theme.metrics.px(12)}px;
`
