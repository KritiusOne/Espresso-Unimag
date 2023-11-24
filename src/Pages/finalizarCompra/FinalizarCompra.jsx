import React, { useContext, useEffect, useState } from 'react'
import { Bs1CircleFill } from "react-icons/bs";
import { Bs2CircleFill } from "react-icons/bs";
import { Bs3CircleFill } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import { Title } from '../../components/titles/title/Title';
import { LayoutPage } from '../../components/layout/LayoutPage'
import { ProductsContext } from '../../context/productsContext';
import { Subtitle } from '../../components/titles/subtitle/Subtitle';
import "./FinalizarCompra.css"
import { CartProductCard } from '../../components/cards/CartProductCard';
export function FinalizarCompra() {
  const { cart } = useContext(ProductsContext)
  const [subPrice, setSubPrice] = useState(0)
  useEffect(() => {
    let price = cart.reduce((product, currentValue) => product + currentValue.precio * currentValue.cantidad
      , 0)
    setSubPrice(price)
  }, [cart])
  return (
    <LayoutPage className="FinalizarCompra">
      <main className='FinalizarCompra__main'>
        <section className="FinalizarCompra__main__count">
          <Bs1CircleFill className='FinalizarCompra__main__count__icons icon-1' />
          <FaArrowRightLong className='FinalizarCompra__main__count__icons icon-Arrow' />
          <Bs2CircleFill className='FinalizarCompra__main__count__icons icon-2' />
          <FaArrowRightLong className='FinalizarCompra__main__count__icons icon-Arrow' />
          <Bs3CircleFill className='FinalizarCompra__main__count__icons icon-3' />
        </section>
        <section className='FinalizarCompra__main__products'>
          <div className="FinalizarCompra__main__products__table">
            <div className='FinalizarCompra__main__products__head'>
              <Title>CARRITO DE COMPRAS</Title>
              <Subtitle>Verifica atentamente tu pedido, revisa cantidades y precios antes de finalizar</Subtitle>
            </div>
            <div className='FinalizarCompra__main__products__body'>
              <section className='FinalizarCompra__main__products__body--1'>
                {
                  cart.map(product => {
                    return <CartProductCard cantidad={product.cantidad} id={product.id.creationTime} nameProduct={product.name} price={product.precio} srcImg={product.imagen} key={product.id.creationTime} />
                  })
                }
              </section>
              <section className='FinalizarCompra__main__products__body--2'>
                <Subtitle>Resumen del pedido</Subtitle>
                <span>Subtotal: {subPrice} </span>
                <span>Total: {subPrice} </span>
              </section>
            </div>
          </div>
        </section>
      </main>
    </LayoutPage>
  )
}
