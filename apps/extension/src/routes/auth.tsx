import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import TelegramLoginButton from 'react-telegram-login'
import { useUser } from '~contexts/user'
import TelegramLoginWidget from '~features/telegram-login-widget'
import { Center } from '@chakra-ui/react'

export const AuthPage: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()
  const { user, auth } = useUser()

  useEffect(() => {
    if (user) {
      console.log(user)
      // navigate('/', { replace: true })
    }

    ref.current.scrollIntoView({
      behavior: 'auto'
    })
  }, [])

  return (
    <Center
      p={8}
      ref={ref}
    >
      <TelegramLoginWidget
        botId=""
        onLogin={auth}
      />
      {/* <TelegramLoginButton
        dataOnauth={auth}
        botName="bot"
        lang="en"
      /> */}
    </Center>
  )
}
