import React, { useState } from 'react'
import { LayoutPage } from '../../components/layout/LayoutPage'
import { RolesTypes } from '../../utils/RolesTypes'
import { CardTypeUser } from '../../components/cards/CardTypeUser'
import "./inicioRegistro.css"
import { useAuth } from '../../context/authContext/AuthContext'
import { UserLogged } from '../../components/inicioUsersLogged/UserLogged'
export function InicioRegistro() {
  const { currentUser } = useAuth()
  const [posiblesRoles, setPosiblesRoles] = useState(Object.values(RolesTypes))
  return (
    <LayoutPage>
      <main className='main' >
        {
          currentUser == null ? posiblesRoles.map((role) => {
            return <CardTypeUser className={`${role}`} namecard={role} key={role} />
          }) : <UserLogged />
        }
      </main>
    </LayoutPage>
  )
}
