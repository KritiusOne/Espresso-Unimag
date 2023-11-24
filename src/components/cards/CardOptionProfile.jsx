import React from 'react'
import { Subtitle } from '../titles/subtitle/Subtitle';
import { Button } from '../buttons/Button';
import "./cardOptionsProfile.css"
export default function CardOptionProfile({ fn, Icon, namecard, ...props }) {
  return (
    <article {...props} className={`cardOptionUser ${props.className}`} >
      <Icon className='cardOptionUser__avatar' />
      <Subtitle className="cardOptionUser__title">
        <span className='cardOptionUser__title--text'>
          {namecard}
        </span>
      </Subtitle>
      <Button title='IR' clickHandler={fn} className="btn btn-primary cardOptionUser__button" />
    </article>
  )
}
