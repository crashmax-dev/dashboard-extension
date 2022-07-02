import React from 'react'
import { Center, Spinner } from '@chakra-ui/react'

export function Loader() {
  return (
    <Center h="100vh">
      <Spinner />
    </Center>
  )
}
