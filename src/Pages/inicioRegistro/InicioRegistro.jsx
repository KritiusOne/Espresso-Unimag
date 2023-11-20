import React, { useState } from 'react'
import { LayoutPage } from '../../components/layout/LayoutPage'
import { RolesTypes } from '../../utils/RolesTypes'
import { CardTypeUser } from '../../components/cards/CardTypeUser'
import "./inicioRegistro.css"

export function InicioRegistro() {
  const [posiblesRoles, setPosiblesRoles] = useState(Object.values(RolesTypes))
  return (
    <LayoutPage>
      <main className='main' >
        {
          posiblesRoles.map((role) => {
            return <CardTypeUser className={`${role}`} namecard={role} key={role} />
          })
        }
      </main>
    </LayoutPage>
  )
}
