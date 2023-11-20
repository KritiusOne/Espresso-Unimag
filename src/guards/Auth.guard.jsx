import React from 'react'
import { Navigate, Outlet } from 'react-router'
import { TypesRoutes } from '../routes/TypesRoutes'
import { useAuth } from '../context/authContext/AuthContext'

export function AuthGuard() {
  const { currentUser } = useAuth()
  return (
    currentUser != null ? <Outlet /> : <Navigate replace to={TypesRoutes.LOG_IN} />
  )
}
