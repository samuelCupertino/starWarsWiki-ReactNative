import styled from 'styled-components/native'

export const BottomBarContainer = styled.View`
  display: flex;
  flex-direction: row;
  height: ${({ theme }) => theme.metrics.px(64)}px;
  background-color: ${({ theme }) => theme.colors.black};
  padding-bottom: ${({ theme }) => theme.metrics.px(6)}px;
`
export const BarItem = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
`