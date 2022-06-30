import { Box, Center } from '@chakra-ui/react'
import { Header } from './header'

export const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <Box>
      <Header />
      <Center height="100vh">{children}</Center>
    </Box>
  )
}
