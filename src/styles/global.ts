import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
   
  body{
    padding:  32px 160px;
  }

  p{
    font-family: "Roboto", sans-serif;
  }

  input[type=text]{
    border: none;
    border-radius: 4px;
    padding: 12px;
    background-color: ${(props) => props.theme['base-button']};
    color: ${(props) => props.theme['base-text']};
    outline-color: ${(props) => props.theme['yellow-dark']};
    ::placeholder{
      color: ${(props) => props.theme['base-label']}
    }
  }

`
