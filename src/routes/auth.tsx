import React, { useEffect } from 'react'
import { Center } from '@chakra-ui/react'
import { useUser } from '~contexts/user'
import { useNavigate } from 'react-router-dom'
import TelegramLoginButton from 'react-telegram-login'

export const AuthPage: React.FC = () => {
  const navigate = useNavigate()
  const { user, auth } = useUser()

  useEffect(() => {
    if (user) {
      console.log(user)
      // navigate('/', { replace: true })
    }
  }, [])

  return (
    <Center p={8}>
      <TelegramLoginButton
        dataOnauth={auth}
        botName="bot"
        lang="en"
      />
    </Center>
  )
}
