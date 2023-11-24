import React from 'react'
import { Link } from 'react-router-dom'

export function IgnoreButtons() {
  return (
    <>
      <Link to="/login" className="btn header__button--LogIn">
        <small className='header__button__name'>
          Iniciar Sesion
        </small>
      </Link>
      <Link to="/singIn" className="btn header__button--SingIn">
        <small className='header__button__name name--singIn'>
          Registrarse
        </small>
      </Link>
    </>
  )
}
