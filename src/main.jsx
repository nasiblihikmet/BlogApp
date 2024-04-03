import * as React from 'react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import "./styles/global.css"
import App from "./App.jsx";


const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({ colors })

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)