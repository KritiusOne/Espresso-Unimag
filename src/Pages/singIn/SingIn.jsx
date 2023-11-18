import React from 'react'
import { SingInForm } from '../../components/forms/SingInForm'
import { LayoutPage } from '../../components/layout/LayoutPage'
import "./singIn.css"

export function SingIn() {

  return (
    <LayoutPage className="SingIn">
      <main className='SingIn__main'>
        <SingInForm />
      </main>
    </LayoutPage>
  )
}
