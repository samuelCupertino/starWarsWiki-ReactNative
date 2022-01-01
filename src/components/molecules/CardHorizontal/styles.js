import styled from 'styled-components/native'

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  margin: 10px 0;
  width: 100%;
  background-color: black;
  border-radius: 10px;
  border: 1px solid red;
  overflow: hidden;
  height: 130px;
`

export const Image = styled.Image`
  width: 100px;
`

export const Column = styled.View`
  display: flex;
  padding: 10px;
  flex-shrink: 1;
`

export const Title = styled.Text`
  font-size: 18px;
  margin-bottom: 10px;
  color: white;
`

export const Description = styled.Text`
  font-size: 14px;
  line-height: 18px;
  color: white;
  height: 75px;
  overflow: hidden;
`


