import React from 'react'
import { LayoutPage } from '../../components/layout/LayoutPage'
import "./singIn.css"
import { SingInForm } from '../../components/forms/SingInForm'

export function SingIn() {
  return (
    <LayoutPage className="SingIn">
      <main className='SingIn__main'>
        <SingInForm />
      </main>
    </LayoutPage>
  )
}
