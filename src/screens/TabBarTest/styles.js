import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    background-color: #002945;
    align-items: center;
    justify-content: center;
`
export const TabBar = styled.View`
    width: ${({ theme }) => theme.metrics.vw(95)}px;
    max-width: 600px;
    height: ${({ theme }) => theme.metrics.vw(18)}px;
    max-height: 125px;
    flex-direction: row;
    background-color: #fff;
    border-radius: 50px;
    position: absolute;
    bottom: ${({ theme }) => theme.metrics.vw(5)}px;
    padding: 0 ${({ theme }) => theme.metrics.vw(5)}px;
`

export const TabBarItem = styled.TouchableOpacity`
    color: #000;
    flex: 1;
    align-items: center;
    justify-content: center;
`

export const TabBarItemPlus = styled.TouchableOpacity`
    width: ${({ theme }) => theme.metrics.vw(20)}px;
    height: ${({ theme }) => theme.metrics.vw(20)}px;
    transform: translateY(${({ theme }) => theme.metrics.vw(-10)}px);
    align-items: center;
    justify-content: center;
    background: red;
    border-radius: 100px;
    color: #fff;
    border: ${({ theme }) => theme.metrics.vw(1)}px solid #002945;
`

export const BorderOutSide = styled.View`
    width: ${({ theme }) => theme.metrics.vw(2)}px;
    height: ${({ theme }) => theme.metrics.vw(2)}px;
    background: white;
    border-radius: 100px;
    position: absolute;
    left: ${({ theme }) => theme.metrics.vw(-3)}px;
    top: ${({ theme }) => theme.metrics.vw(9)}px;
    box-shadow: 
        ${({ theme }) => theme.metrics.vw(1)}px 
        ${({ theme }) => theme.metrics.vw(-1)}px 
        0px 
        #002945;
`


export const CurTabIndicator = styled.View`
    width: ${({ theme }) => theme.metrics.vw(12)}px;
    height: ${({ theme }) => theme.metrics.vw(1)}px;
    background: red;
    border-radius: 100px;
    position: absolute;
    left: 30px;
    left: ${({ theme }) => theme.metrics.vw(23)}px;
    /* left: 260px; */
    /* left: 325px; */

`
