import React, { useContext } from 'react'
import { BsCart4 } from "react-icons/bs"
import { Button } from '../buttons/Button'
import { ProductsContext } from '../../context/productsContext'
import './CardProducts.css'

export function CardProducts({ imgSrc, title, price, description, handleClick, id }) {
  const { cart, deleteProductOnCart } = useContext(ProductsContext)
  const [actualProduct] = cart.filter(product => product.id.creationTime == id)
  const handleDeleteProduct = (e) => {
    deleteProductOnCart(id)
  }
  return (
    <article className='card'>
      <header className='card__img--container'>
        <img className='card__img' src={imgSrc} alt={description} />
      </header>
      <main className='card--container'>
        <h3 className='card__title'> {title} </h3>
        <section className='card__info--container'>
          <strong className='card__price'>Precio: $: {price} </strong>
          {
            !actualProduct ? <Button className='card__buttton' Icon={BsCart4} title={"Agregar"} clickHandler={handleClick} /> : <Button className='card__buttton button--delete' Icon={BsCart4} title={"Delete"} clickHandler={handleDeleteProduct} />
          }
        </section>
      </main>
    </article>
  )
}
