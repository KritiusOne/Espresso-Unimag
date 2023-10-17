import React from 'react'
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
          <button className='card__buttton'> ADD </button>
        </div>
      </section>
    </div>
  )
}
