import { ChakraProvider } from '@chakra-ui/react'
import { MemoryRouter } from 'react-router-dom'
import { AppRoutes } from './routes'

function NewTab() {
  return (
    <ChakraProvider>
      <MemoryRouter>
        <AppRoutes />
      </MemoryRouter>
    </ChakraProvider>
  )
}

export default NewTab
