import React, { useContext, useEffect, useState } from 'react'
import { ProductsContext } from "../../context/productsContext"
import { Subtitle } from "../../components/titles/subtitle/Subtitle.jsx"
import { AiFillCloseCircle } from "react-icons/ai"
import { Button } from "../../components/buttons/Button.jsx"
import { AiOutlineReload } from "react-icons/ai"
import { CartProductCard } from '../cards/CartProductCard'
import "./cartAside.css"
import { useNavigate } from 'react-router'
import { PrivateRoutes } from '../../routes/TypesRoutes.js'

export function CartAside() {
  const { cart, changeViewFromCart } = useContext(ProductsContext)
  const [subPrice, setSubPrice] = useState(0)
  const navegate = useNavigate()
  useEffect(() => {
    let price = cart.reduce((product, currentValue) => product + currentValue.precio * currentValue.cantidad
      , 0)
    setSubPrice(price)
  }, [cart])
  const handleClickBackToProducts = (e) => {
    changeViewFromCart(false)
  }
  const handleClickFinishShop = (e) => {
    if (cart.length != 0) {
      navegate(PrivateRoutes.CONFIRM_SHOP)
    }
  }
  return (
    <section className='Overlay'>
      <aside className='cartAside'>
        <header className='cartAside__header'>
          <Subtitle> Tu lista de productos  </Subtitle>
          <Button clickHandler={handleClickBackToProducts} Icon={AiFillCloseCircle} className="cartAside__header__buttonClose" />
        </header>
        <main className='cartAside__main'>
          {
            cart.length ? cart.map(product => {
              return (<CartProductCard id={product.id.creationTime}
                nameProduct={product.name} price={product.precio} srcImg={product.imagen} cantidad={product.cantidad} key={product.id.creationTime} />)
            }) : <h6> No hay elementos en el carrito </h6>
          }
        </main>
        <footer className='cartAside__footer'>
          <h6 className='cartAside__footer__title'>
            Subtotal: <strong className='cartAside__footer__subtotal'>$ {subPrice}
            </strong>
          </h6>
          <Button clickHandler={handleClickFinishShop} className="cartAside__footer__button--blue" title="Continuar al carrito" />
          <Button className="cartAside__footer__button--yellow" title="Volver a seguir comprando" Icon={AiOutlineReload} clickHandler={handleClickBackToProducts} />
        </footer>
      </aside>
    </section>
  )
}
