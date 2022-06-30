import React, { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Loader } from '~components/loader'
import type { TelegramUserData } from 'react-telegram-login'

type User = Omit<TelegramUserData, 'hash'>

export type UserContextState = {
  user?: User
  logout: () => void
  auth: (data: TelegramUserData) => void
}

export const UserContext = createContext<UserContextState>(
  {} as UserContextState
)

type Props = {
  children: React.ReactNode
}

export const UserProvider = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState(false)
  const [user, setUser] = useState<User | null>(null)
  const navigate = useNavigate()

  const goToHome = () => {
    navigate('/', { replace: true })
  }

  const goToAuth = () => {
    navigate('/auth', { replace: true })
  }

  const logout = async () => {
    // const res = await userLogout()
    // if (res.ok) {
    //   setUser(null)
    //   goToHome()
    // }
  }

  const auth = async (data: TelegramUserData) => {
    // const res = await userAuth(data)
    // if (res.ok) {
    //   setUser(res.data)
    //   goToHome()
    // }
  }

  const sharedState: UserContextState = {
    user,
    logout,
    auth
  }

  const getUser = async () => {
    // const res = await fetchUser()
    // if (res.ok) {
    //   setUser(res.data)
    //   goToHome()
    // }
    // setIsLoading(false)
  }

  useEffect(() => {
    getUser()
  }, [])

  if (isLoading) {
    return <Loader />
  }

  return (
    <UserContext.Provider value={sharedState}>{children}</UserContext.Provider>
  )
}

export const useUser = () => {
  return useContext(UserContext)
}
