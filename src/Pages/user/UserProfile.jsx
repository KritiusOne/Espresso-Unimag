import React, { useContext, useEffect, useState } from 'react'
import { LayoutPage } from '../../components/layout/LayoutPage'
import { Button } from '../../components/buttons/Button'
import { useAuth } from '../../context/authContext/AuthContext'
import { ProductsContext } from '../../context/productsContext'
import { RolesTypes } from '../../utils/RolesTypes'
import { OPTIONS_FROM_CLIENTE } from '../../utils/UserOptionTypes'
import Card from '../../components/cards/CardOptionProfile'
import "./userProfile.css"
import { useNavigate } from 'react-router'
import { TypesRoutes } from '../../routes/TypesRoutes'

export function UserProfile() {
  const { logout } = useAuth()
  const { deleteAllProductsOnCart } = useContext(ProductsContext)
  const navegation = useNavigate()
  const fnLogOut = () => {
    deleteAllProductsOnCart()
    logout()
    navegation(TypesRoutes.HOME)
  }
  return (
    <LayoutPage>
      <main className='UserProfile'>

        <section className='UserProfile__SectionOptionProfile'>
          {
            OPTIONS_FROM_CLIENTE.map(option => <Card className="card" Icon={option.Icon} namecard={option.title} fn={() => console.log("FUNCIONO")} />)
          }
        </section>

        <Button className="btn btn-danger" title='Cerrar sesion' clickHandler={fnLogOut} />
      </main>
    </LayoutPage>
  )
}
