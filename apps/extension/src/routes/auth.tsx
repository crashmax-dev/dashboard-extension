import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '~contexts/user'
import { Center } from '@chakra-ui/react'

// ERROR  | Failed to resolve '@de/telegram-login-widget'
// import { TelegramLoginWidget } from '@de/telegram-login-widget'

export const AuthPage = () => {
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
      {/* <TelegramLoginWidget
        botId=""
        onLogin={auth}
      /> */}
    </Center>
  )
}
