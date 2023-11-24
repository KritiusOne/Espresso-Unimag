import React, { useContext } from 'react'
import { Button } from '../buttons/Button'
import { ProductsContext } from '../../context/productsContext'
import { IoCloseCircleSharp } from "react-icons/io5";
import "./cartProductCard.css"

export function CartProductCard({ price, nameProduct, srcImg, cantidad, id }) {
  const { addMoreProductToCart, deleteProductOnCart } = useContext(ProductsContext)
  const reduceToProduct = () => {
    addMoreProductToCart(id, -1)
  }
  const AugmentToProduct = () => {
    addMoreProductToCart(id, 1)
  }
  const handleClose = (e) => {
    deleteProductOnCart(id)
  }
  return (
    <article className='cartProductCard'>
      <Button clickHandler={handleClose} className='cartProductCard__section card--section-close' Icon={IoCloseCircleSharp} />
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
          <Button title='-' className="cartProductCard__buttonCantidad" clickHandler={reduceToProduct} />
          <strong className='cartProductCard__cantidad'> {cantidad} </strong>
          <Button title='+' clickHandler={AugmentToProduct} className="cartProductCard__buttonCantidad" />
        </footer>
      </section>
    </article>
  )
}
