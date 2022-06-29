import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { MemoryRouter } from 'react-router-dom'
import { Layout } from './components/layout'
import { AppRoutes } from './routes'
import { themeConfig } from './theme'

const theme = extendTheme({
  config: themeConfig
})

const NewTab = () => {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <MemoryRouter>
          <AppRoutes />
        </MemoryRouter>
      </Layout>
    </ChakraProvider>
  )
}

export default NewTab
