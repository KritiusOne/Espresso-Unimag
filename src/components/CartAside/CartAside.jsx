import React, { useContext } from 'react'
import { ProductsContext } from "../../context/productsContext"
import { Subtitle } from "../../components/titles/subtitle/Subtitle.jsx"
import { AiFillCloseCircle } from "react-icons/ai"
import { Button } from "../../components/buttons/Button.jsx"
import { AiOutlineReload } from "react-icons/ai"
import { CartProductCard } from '../cards/CartProductCard'
import "./cartAside.css"

export function CartAside() {
  const { cart, changeViewFromCart } = useContext(ProductsContext)
  const handleClickBackToProducts = (e) => {
    changeViewFromCart(false)
  }
  return (
    <section className='Overlay'>
      <aside className='cartAside'>
        <header className='cartAside__header'>
          <Subtitle> Tu lista de productos  </Subtitle>
          <AiFillCloseCircle />
        </header>
        <main className='cartAside__main'>
          {
            cart.length ? cart.map(product => <CartProductCard
              nameProduct={product.title} price={product.price} srcImg={product.images[0]} cantidad={product.cantidad} key={product.id} />) : <h6> No hay elementos en el carrito </h6>
          }
        </main>
        <footer className='cartAside__footer'>
          <h5 className='cartAside__footer__title'>Subtotal: <h6 className='cartAside__footer__subtotal'>$ { } </h6></h5>
          <Button className="cartAside__footer__button--blue" title="Continuar al carrito" />
          <Button className="cartAside__footer__button--yellow" title="Volver a seguir comprando" Icon={AiOutlineReload} clickHandler={handleClickBackToProducts} />
        </footer>
      </aside>
    </section>
  )
}
