import React from 'react'
import { useAuth } from '../../context/authContext/AuthContext'
import "./avatar.css"

export function Avatar() {
  const { currentUser } = useAuth()
  return (
    <picture className='avatar'>
      <img src={currentUser.photoURL != null ? currentUser.photoURL : "https://elcomercio.pe/resizer/AB93Kg1JoITGLMLkCgLBnVzg_7g=/980x528/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/37OWRM2CLBAE7BP5SXKLVMNHZE.jpg"} alt={`Avatar de ${currentUser.email} `} className='avatar__img' />
    </picture>
  )
}
