import { useState, useEffect } from "react"
import { useAuth } from "../../context/authContext/AuthContext"
import { OPTIONS_FROM_ADMIN, OPTIONS_FROM_VENDEDOR } from "../../utils/UserOptionTypes"
import Card from "../cards/CardOptionProfile"
import { RolesTypes } from "../../utils/RolesTypes"
import "./userLogged.css"

export function UserLogged() {
  const [isCliente, setIsCliente] = useState(false)
  const [isVendedor, setIsVendedor] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const { rol } = useAuth()
  useEffect(() => {
    if (rol == RolesTypes.ADMINISTRADOR) setIsAdmin(true)
    if (rol == RolesTypes.CLIENTE) setIsCliente(true)
    if (rol == RolesTypes.VENDEDOR) setIsVendedor(true)
  }, [])
  return (
    <main className='UserProfile'>
      {
        isCliente && <section className='UserProfile__SectionOptionProfile'>
          {
            <h1>SOY EL INICIO DEL user</h1>
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
    </main>
  )
}
