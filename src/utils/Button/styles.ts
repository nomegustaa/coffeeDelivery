import styled from "styled-components";

export const Button = styled.button`
  border-radius: 6x;
  padding: 12px 8px;
  text-align: center;
  border: none;
  background-color: ${props => props.theme.yellow};
  color: ${props => props.theme.white};

  &:hover{
    background-color: ${props => props.theme["yellow-dark"]};
    transition: .1s;
}`