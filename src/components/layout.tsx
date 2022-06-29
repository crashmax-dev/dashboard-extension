import { Box } from "@chakra-ui/react"
import { ThemeSwitcher } from "./theme-switcher"

export const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='center'
    >
      <ThemeSwitcher />
      {children}
    </Box>
  )
}
