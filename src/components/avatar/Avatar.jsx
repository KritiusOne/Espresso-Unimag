import React from 'react'
import "./avatar.css"
import { useAuth } from '../../context/authContext/AuthContext'

export function Avatar() {
  const { currentUser } = useAuth()

  return (
    <picture className='avatar'>
      <img src={currentUser.photoURL == null ? currentUser.photoURL : ""} alt={`Avatar de ${currentUser.email} `} className='avatar__img' />
    </picture>
  )
}
