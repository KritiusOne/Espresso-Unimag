import React from 'react'
import { Link } from 'react-router-dom'

export function IgnoreButtons() {
  return (
    <>
      <Link to="/login" className="header__button--LogIn">
        Iniciar Sesion
      </Link>
      <Link to="/singIn" className="header__button--SingIn">
        Registrarse
      </Link>
    </>
  )
}
