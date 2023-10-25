import React from 'react'
import { Subtitle } from '../titles/subtitle/Subtitle'
import { Link } from 'react-router-dom'
import { TypesRoutes } from '../../routes/TypesRoutes'
import { Title } from '../titles/title/Title'
import "./singInForm.css"

export function SingInForm() {
  return (
    <form className='singInForm'>
      <Title className="singInForm__title">CREAR NUEVA CUENTA</Title>
      <header className='singInForm__header'>
        <Subtitle className="singInForm__subtTitle"> Nombre </Subtitle>
        <input type="text" className='singInForm__Input input--name' />
        <Subtitle className="singInForm__subtTitle">Email</Subtitle>
        <input type="text" name="" id="" className='singInForm__Input input--email' />
        <Subtitle className="singInForm__subtTitle">Contraseña</Subtitle>
        <input type="text" className='singInForm__Input input--password' />
      </header>
      <footer className='singInForm__footer'>
        <input className='singInForm__button' type="submit" value="Crear cuenta" />
        <h6 className='singInForm__footer__subtitle'>Ya esta registrado? <Link className='singInForm__footer__link' to={TypesRoutes.LOG_IN}>Iniciar sesion</Link> </h6>
      </footer>
    </form>
  )
}
