import React from 'react'
import { FaUserAlt } from "react-icons/fa";
import { Subtitle } from '../titles/subtitle/Subtitle';
import { Button } from '../buttons/Button';
import { useAuth } from '../../context/authContext/AuthContext';
import { useNavigate } from 'react-router';
import { TypesRoutes } from '../../routes/TypesRoutes';

export function CardTypeUser({ namecard, ...props }) {
  const { setRol } = useAuth()
  const navegation = useNavigate()
  const fn = () => {
    setRol(namecard)
    navegation(TypesRoutes.LOG_IN)
  }
  return (
    <article {...props} className={`cardTypeUser ${props.className}`} >
      <FaUserAlt className='cardTypeUser__avatar' />
      <Subtitle className="cardTypeUser__title">
        <span className='cardTypeUser__title--text'>
          {namecard}
        </span>
      </Subtitle>
      <Button title='Iniciar Sesion' clickHandler={fn} className="btn btn-primary cardTypeUser__button" />
    </article>
  )
}
