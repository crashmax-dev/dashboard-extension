import { Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export const SettingsPage = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h1>settings</h1>
      <Button onClick={() => navigate('/')}>Home</Button>
    </div>
  )
}
