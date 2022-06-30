import { Center, Spinner } from '@chakra-ui/react'
import React from 'react'

export function Loader() {
  return (
    <Center h="100vh">
      <Spinner />
    </Center>
  )
}
