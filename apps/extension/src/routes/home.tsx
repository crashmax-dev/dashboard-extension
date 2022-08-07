import React, { useReducer } from 'react'
import { useEffect, useRef, forwardRef } from 'react'
import { Loader } from '~components/Loader'
import { Fireworks } from '@fireworks-js/vanilla'

export const HomePage = () => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    console.log(Fireworks)
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }, [])

  return (
    <div ref={ref}>
      <Loader />
      <F id='1' ref={ref} />

      <DotNotaion>
        <DotNotaion.Text>Hello world</DotNotaion.Text>
        <DotNotaion.Text>Hello world</DotNotaion.Text>
        <DotNotaion.Image url='https://...' />
      </DotNotaion>
    </div>
  )
}

///
const initialState = { value: 0 }

type DicType = {
  type: 'dic',
  payload: number
}

type IncType = {
  type: 'inc',
  payload: number
}

type Actions = DicType | IncType

function reducer(state: typeof initialState, action: Actions) {
  switch (action.type) {
    case 'dic':
      return { value: state.value + action.payload };
    case 'inc':
      return { value: state.value - action.payload };
    default:
      throw new Error();
  }
}

///

type Props = {
  id: string
}

const F = forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <div ref={ref}>{props.id}</div>
})

type P = {
  children: React.ReactNode
}

const DotNotaion = ({ children }: P) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>{children}</div>
  )
}

DotNotaion.Text = ({ children }: P) => {
  return <span>{children}</span>
}

DotNotaion.Image = ({ url }: { url: string }) => {
  return <img src={url} />
}
