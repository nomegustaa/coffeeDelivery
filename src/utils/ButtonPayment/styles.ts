import styled from 'styled-components'

export const ContainerButtonPayment = styled.div`
  padding: 16px;
  width: 14rem;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  gap: 1rem;
  cursor: pointer;

  &.active {
    border: 1px solid ${(props) => props.theme.purple};
    background-color: ${(props) => props.theme['purple-light']};
  }

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
    transition: 5ms;
  }
`

export const Button = styled.button`
  border: none;
  background-color: transparent;
  width: auto;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
`
