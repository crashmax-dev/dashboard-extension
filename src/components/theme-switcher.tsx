import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { FaMoon, FaSun } from 'react-icons/fa'

export const ThemeSwitcher = () => {
  const { toggleColorMode } = useColorMode()
  const Icon = useColorModeValue(FaMoon, FaSun)

  return (
    <IconButton
      aria-label="Change Theme"
      onClick={() => toggleColorMode()}
      icon={<Icon />}
    />
  )
}
