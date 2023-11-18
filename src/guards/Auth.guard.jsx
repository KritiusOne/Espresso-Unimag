import React, { useContext } from 'react'
import { ProductsContext } from '../context/productsContext'
import { Navigate, Outlet } from 'react-router'
import { TypesRoutes } from '../routes/TypesRoutes'
import { useAuth } from '../context/authContext/AuthContext'

export function AuthGuard() {
  const { currentUser } = useAuth()
  return (
    currentUser.name ? <Outlet /> : <Navigate replace to={TypesRoutes.LOG_IN} />
  )
}
