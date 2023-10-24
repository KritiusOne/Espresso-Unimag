import React, { useContext } from 'react'
import { ProductsContext } from "../../context/productsContext"
import { Subtitle } from "../../components/titles/subtitle/Subtitle.jsx"
import { AiFillCloseCircle } from "react-icons/ai"
import { Button } from "../../components/buttons/Button.jsx"
import { AiOutlineReload } from "react-icons/ai"
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
            cart.length ? cart.map(product => <div key={product.id}> {product.title} </div>) : <div> No hay elementos en el carrito </div>
          }
        </main>
        <footer className='cartAside__footer'>
          <Button className="cartAside__footer__button--yellow" title="Continuar al carrito" />
          <Button className="cartAside__footer__button--yellow" title="Volver a seguir comprando" Icon={AiOutlineReload} clickHandler={handleClickBackToProducts} />
        </footer>
      </aside>
    </section>
  )
}
