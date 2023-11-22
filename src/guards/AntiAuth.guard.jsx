import React from 'react'
import { useAuth } from '../context/authContext/AuthContext'
import { Outlet, Navigate } from 'react-router'
import { TypesRoutes } from '../routes/TypesRoutes'

export function AntiAuthGuard() {
  const { currentUser } = useAuth()
  return (
    currentUser == null ? <Outlet /> : <Navigate replace to={TypesRoutes.HOME} />
  )
}
