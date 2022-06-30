import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  useColorModeValue
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { ThemeSwitcher } from './theme-switcher'

export const Header = () => {
  const navigate = useNavigate()
  const bgHeader = useColorModeValue('gray.100', 'gray.900')

  return (
    <Box
      bg={bgHeader}
      px={8}
    >
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
      >
        <HStack
          spacing={4}
          alignItems="center"
        >
          <IconButton
            aria-label="Open menu"
            icon={<HamburgerIcon />}
          />
          <Button onClick={() => navigate('/')}>Home</Button>
          <Button onClick={() => navigate('/auth')}>Auth</Button>
          <Button onClick={() => navigate('/settings')}>Settings</Button>
        </HStack>
        <Flex alignItems="center">
          <ThemeSwitcher />
          <Menu>
            <MenuButton
              ml={4}
              as={Button}
              rounded="full"
              variant="link"
              cursor="pointer"
            >
              <Avatar
                height="35px"
                width="35px"
                src="https://static-cdn.jtvnw.net/jtv_user_pictures/bb4e7f62-e948-45f4-b501-b684768b5e9b-profile_image-70x70.png"
              />
            </MenuButton>
            <MenuList>
              <MenuItem>Settings</MenuItem>
              <MenuDivider />
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Box>
  )
}
