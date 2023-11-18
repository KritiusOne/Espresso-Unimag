import React from 'react'
import { LayoutPage } from '../../components/layout/LayoutPage'
import { useAuth } from '../../context/authContext/AuthContext'
import { Button } from '../../components/buttons/Button'

export function Productos() {
  const { logout } = useAuth()
  return (
    <LayoutPage>
      <main style={{ height: "100vh", display: "grid", placeContent: "center" }}>
        <Button title='Cerrar sesion' clickHandler={logout} />
      </main>
    </LayoutPage>
  )
}
