import React from 'react'
import { SingInContextProvider } from './SingInContextProvider'
import { SingIn } from "./SingIn"

export function SingInIndex() {
  return (
    <SingInContextProvider>
      <SingIn />
    </SingInContextProvider>
  )
}
