import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { UserProvider } from '~contexts/user'
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'
import { Layout } from './components/layout'
import { AppRoutes } from './routes'
import { themeConfig } from './theme'

const theme = extendTheme({
  config: themeConfig
})

const NewTab = () => {
  return (
    <React.Fragment>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <MemoryRouter>
        <ChakraProvider
          theme={theme}
          resetCSS
        >
          <UserProvider>
            <Layout>
              <AppRoutes />
            </Layout>
          </UserProvider>
        </ChakraProvider>
      </MemoryRouter>
    </React.Fragment>
  )
}

export default NewTab
