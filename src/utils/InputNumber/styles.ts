import styled from 'styled-components'
import { Minus, Plus } from 'phosphor-react'

export const ContainerInput = styled.div`
  display: flex;
  gap: 0.25rem;
  background-color: ${(props) => props.theme['base-button']};
  padding: 8px;
  width: 30%;
  border-radius: 6px;
  height: 40px;

  button,
  input {
    display: flex;
    align-items: center;
    border: none;
    background-color: transparent;
  }
`

export const SytleMinus = styled(Minus)`
  cursor: pointer;
  color: ${(props) => props.theme.purple};
  &:hover {
    color: ${(props) => props.theme['purple-dark']};
  }
`

export const SytlePlus = styled(Plus)`
  cursor: pointer;
  color: ${(props) => props.theme.purple};
  &:hover {
    color: ${(props) => props.theme['purple-dark']};
  }
`

export const InputNumber = styled.input`
  font-family: 'Roboto', sans-serif;
  outline: none;
  cursor: default;
  width: 100%;
  text-align: center;
  color: ${(props) => props.theme['base-title']};

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`
