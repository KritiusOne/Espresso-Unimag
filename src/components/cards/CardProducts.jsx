import React from 'react'
import { BsCart4 } from "react-icons/bs"
import { Button } from '../buttons/Button'
import './CardProducts.css'

export function CardProducts({ imgSrc, title, price, description }) {
  return (
    <div className='card'>
      <section className='card__img--container'>
        <img className='card__img' src={imgSrc} alt={description} />
      </section>
      <section className='card--container'>
        <h3 className='card__title'> {title} </h3>
        <div className='card__info--container'>
          <strong className='card__price'>PRICE: $: {price} </strong>
          <Button className='card__buttton' Icon={BsCart4} title={"ADD"} />
        </div>
      </section>
    </div>
  )
}
