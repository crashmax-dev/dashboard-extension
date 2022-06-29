import { Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export const HomePage = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h1>home</h1>
      <Button onClick={() => navigate('/settings')}>Settings</Button>
    </div>
  )
}
