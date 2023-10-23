import React, { useContext } from 'react'
import { ProductsContext } from '../context/productsContext'
import { Navigate, Outlet } from 'react-router'
import { TypesRoutes } from '../routes/TypesRoutes'

export function AuthGuard() {
  const stateContext = useContext(ProductsContext)
  console.log()
  return (
    stateContext.user.name ? <Outlet /> : <Navigate replace to={TypesRoutes.LOG_IN} />
  )
}
