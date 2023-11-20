import React from 'react'
import { LayoutPage } from '../../components/layout/LayoutPage'
import { Button } from '../../components/buttons/Button'
import { useAuth } from '../../context/authContext/AuthContext'

export function UserProfile() {
  const { logout } = useAuth()
  return (
    <LayoutPage>
      <main style={{ height: "100vh", display: "grid", placeContent: "center" }}>
        <Button title='Cerrar sesion' clickHandler={logout} />
      </main>
    </LayoutPage>
  )
}
