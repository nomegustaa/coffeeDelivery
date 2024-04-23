import styled from 'styled-components'

export const Container = styled.div`
  max-width: 784px;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  padding: 40px;
`
export const ContainerDescription = styled.div`
  display: flex;
  margin: 0 0 40px 0;
`

export const ContainerButton = styled.div`
  display: flex;
  white-space: nowrap;
  gap: 1rem;
`
