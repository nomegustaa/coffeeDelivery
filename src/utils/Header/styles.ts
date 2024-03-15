import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ContainerIcons = styled.div`
  display: flex;
  gap: 1rem;
`

export const City = styled.p`
  color: ${(props) => props.theme['purple-dark']};
`

export const ContainerMap = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: auto;
  height: 38px;
  background-color: ${(props) => props.theme['purple-light']};
  padding: 8px;
  border-radius: 6px;
  cursor: pointer;
`

export const ContainerShopping = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme['yellow-light']};
  padding: 8px;
  height: 38px;
  width: 38px;
  border-radius: 6px;
  cursor: pointer;
`
