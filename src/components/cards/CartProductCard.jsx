import React from 'react'
import { Button } from '../buttons/Button'
import "./cartProductCard.css"

export function CartProductCard({ price, nameProduct, srcImg, cantidad }) {
  return (
    <article className='cartProductCard'>
      <section className='cartProductCard__section card--section-1'>
        <img src={srcImg} alt={`Imagen del articulo ${nameProduct}`} />
      </section>
      <section className='cartProductCard__section card--section-2'>
        <h3 className='cartProductCard__title'> {nameProduct} </h3>
        <strong className='cartProductCard__price'> $ {price} </strong>
      </section>
      <section className='cartProductCard__section card--section-3'>
        <h5 className='cartProductCard__section__titleCant'> Cant </h5>
        <footer className='cartProductCard__section__footer'>
          <Button title='-' className="cartProductCard__buttonCantidad" />
          <strong className='cartProductCard__cantidad'> {cantidad} </strong>
          <Button title='+' className="cartProductCard__buttonCantidad" />
        </footer>
      </section>
    </article>
  )
}
