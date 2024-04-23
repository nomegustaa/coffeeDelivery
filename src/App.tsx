import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import Router from './Router'
import { BrowserRouter } from 'react-router-dom'
import Header from './utils/Header'
import { Context } from './context/AuthContext'

const App = () => {
  return (
    <Context>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Header city="São Paulo, SP" />
          <Router />
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </Context>
  )
}

export default App
