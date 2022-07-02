import { Box, Center } from '@chakra-ui/react'

export const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <Box>
      <Center height="100vh">{children}</Center>
    </Box>
  )
}
