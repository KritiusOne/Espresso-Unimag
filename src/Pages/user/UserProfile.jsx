import React, { useContext, useEffect, useState } from 'react'
import { LayoutPage } from '../../components/layout/LayoutPage'
import { Button } from '../../components/buttons/Button'
import { useAuth } from '../../context/authContext/AuthContext'
import { ProductsContext } from '../../context/productsContext'
import { RolesTypes } from '../../utils/RolesTypes'
import { OPTIONS_FROM_VENDEDOR, OPTIONS_FROM_ADMIN, OPTIONS_FROM_CLIENTE } from '../../utils/UserOptionTypes'
import Card from '../../components/cards/CardOptionProfile'
import "./userProfile.css"
import { useNavigate } from 'react-router'
import { TypesRoutes } from '../../routes/TypesRoutes'

export function UserProfile() {
  const [isCliente, setIsCliente] = useState(false)
  const [isVendedor, setIsVendedor] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const { rol, logout } = useAuth()
  const { deleteAllProductsOnCart } = useContext(ProductsContext)
  const navegation = useNavigate()
  const fnLogOut = () => {
    deleteAllProductsOnCart()
    logout()
    navegation(TypesRoutes.HOME)
  }
  useEffect(() => {
    if (rol == RolesTypes.ADMINISTRADOR) setIsAdmin(true)
    if (rol == RolesTypes.CLIENTE) setIsCliente(true)
    if (rol == RolesTypes.VENDEDOR) setIsVendedor(true)
  }, [])
  return (
    <LayoutPage>
      <main className='UserProfile'>
        {
          isCliente && <section className='UserProfile__SectionOptionProfile'>
            {
              OPTIONS_FROM_CLIENTE.map(option => <Card Icon={option.Icon} namecard={option.title} fn={() => console.log("FUNCIONO")} />)
            }
          </section>
        }
        {
          isAdmin && <section className='UserProfile__SectionOptionProfile'>
            {
              OPTIONS_FROM_ADMIN.map(option => <Card Icon={option.Icon} namecard={option.title} fn={() => console.log("FUNCIONO")} />)
            }
          </section>
        }
        {
          isVendedor && <section className='UserProfile__SectionOptionProfile'>
            {
              OPTIONS_FROM_VENDEDOR.map(option => <Card Icon={option.Icon} namecard={option.title} fn={() => console.log("FUNCIONO")} />)
            }
          </section>
        }
        <Button title='Cerrar sesion' clickHandler={fnLogOut} />
      </main>
    </LayoutPage>
  )
}
