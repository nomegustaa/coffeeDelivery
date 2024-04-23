import styled from 'styled-components'

export const Button = styled.button`
  border-radius: 6px;
  padding: 12px 8px;
  text-align: center;
  border: none;
  background-color: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  width: 100%;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
    transition: 0.1s;
  }

  &:disabled {
    background-color: ${(props) => props.theme['base-label']};
    cursor: not-allowed;
  }
`
