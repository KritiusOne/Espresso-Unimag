import React, { useContext, useEffect, useState } from 'react'
import { Bs1CircleFill } from "react-icons/bs";
import { Bs2CircleFill } from "react-icons/bs";
import { Bs3CircleFill } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import { Title } from '../../components/titles/title/Title';
import { LayoutPage } from '../../components/layout/LayoutPage'
import { ProductsContext } from '../../context/productsContext';
import { Subtitle } from '../../components/titles/subtitle/Subtitle';
import { CartProductCard } from '../../components/cards/CartProductCard';
import { Button } from '../../components/buttons/Button';
import bancolombia from "../../assets/logo-Bancolombia.png"
import nequi from "../../assets/nequi.png"
import daviplata from "../../assets/daviplata.png"
import { useNavigate } from 'react-router';
import { TypesRoutes } from '../../routes/TypesRoutes';
import { useAuth } from '../../context/authContext/AuthContext';
import { RolesTypes } from '../../utils/RolesTypes';
import { ESTADO_DEL_PEDIDO } from '../../utils/EstadosDelPedido';
import { PiCookingPotDuotone } from "react-icons/pi";
import { CiShop } from "react-icons/ci";
import { FaHandshakeAngle } from "react-icons/fa6";
import "./FinalizarCompra.css"



export function FinalizarCompra() {
  const { cart } = useContext(ProductsContext)
  const { rol, userBBDD } = useAuth()
  const [subPrice, setSubPrice] = useState(0)
  const [isSectionProducts, setIsSectionProducts] = useState(true)
  const [isSectionMoney, setIsSectionMoney] = useState(false)
  const [isSectionFinally, setIsSectionFinally] = useState(false)
  const [idUser, setIdUser] = useState("")
  const [pedido, setPedido] = useState()
  const navegate = useNavigate()
  useEffect(() => {
    let price = cart.reduce((product, currentValue) => product + currentValue.precio * currentValue.cantidad
      , 0)
    setSubPrice(price)
  }, [cart])
  const handleChangeToSecond = (e) => {
    setIsSectionMoney(true)
    setIsSectionProducts(false)
  }
  const handleToCancel = (e) => {
    navegate(TypesRoutes.PRODUCTS)
  }
  const handleToBack = (e) => {
    setIsSectionMoney(false)
    setIsSectionProducts(true)
  }
  const handleChangeToFinally = async (e) => {
    const idProducts = cart.map(product => product.id.creationTime)
    const postPedido = {
      total: subPrice,
      idCafeteria: cart[0].idCafeteria,
      idCliente: idUser,
      estado: ESTADO_DEL_PEDIDO.PREPARACION,
      idProducto: idProducts,
    }
    const response = await fetch('https://cafeapi20231114234957.azurewebsites.net/Pedidos', {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset: UTF-8"
      },
      body: JSON.stringify(postPedido)
    })
    if (response.ok) {
      setIsSectionFinally(true)
      setIsSectionMoney(false)
    } else {
      console.log("error en la solicitud")
    }
  }
  useEffect(() => {
    if (rol == RolesTypes.ADMINISTRADOR) setIdUser(userBBDD.idCafeteria)
    if (rol == RolesTypes.CLIENTE) setIdUser(userBBDD.idCliente)
    if (rol == RolesTypes.VENDEDOR) setIdUser(userBBDD.idVendedor)
    async function getState() {
      const response = await fetch("https://cafeapi20231114234957.azurewebsites.net/Pedidos")
      if (response.ok) {
        const pedidos = await response.json()
        const pedidosFromUser = await pedidos.filter(element => element.idCliente == idUser && element.estado != ESTADO_DEL_PEDIDO.FINALIZADO)
        console.log(pedidosFromUser)
        setPedido(pedidosFromUser[0])
        if (pedidosFromUser[0] != undefined && pedidosFromUser.lengt != 0) {
          setIsSectionProducts(false)
          setIsSectionMoney(false)
          setIsSectionFinally(true)
        } else {
          setIsSectionProducts(true)
          setIsSectionMoney(false)
          setIsSectionFinally(false)
        }
      }
    }
    getState()
  }, [])
  const handleFinishingPedido = async (e) => {
    e.preventDefault()
    const putPedido = {
      ...pedido,
      estado: ESTADO_DEL_PEDIDO.FINALIZADO
    }
    const response = await fetch('https://cafeapi20231114234957.azurewebsites.net/Pedidos/' + pedido.idPedido, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json;charset: UTF-8"
      },
      body: JSON.stringify(putPedido)
    })
    if (response.ok) {
      navegate(TypesRoutes.HOME)
    }
  }
  return (
    <LayoutPage className="FinalizarCompra">
      <main className='FinalizarCompra__main'>
        <section className="FinalizarCompra__main__count">
          <Bs1CircleFill className={`FinalizarCompra__main__count__icons icon-1 ${isSectionProducts ? "present" : "no-Present"}`} />
          <FaArrowRightLong className='FinalizarCompra__main__count__icons icon-Arrow no-Present' />
          <Bs2CircleFill className={`FinalizarCompra__main__count__icons icon-2 ${isSectionMoney ? "present" : "no-Present"}`} />
          <FaArrowRightLong className='FinalizarCompra__main__count__icons icon-Arrow no-Present' />
          <Bs3CircleFill className={`FinalizarCompra__main__count__icons icon-3 ${isSectionFinally ? "present" : "no-Present"}`} />
        </section>
        <section className='FinalizarCompra__main__products'>
          {
            isSectionProducts && <div className="FinalizarCompra__main__products__table">
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
                  <Button title='Confirmar Compra' clickHandler={handleChangeToSecond} />
                </section>
              </div>
            </div>
          }
          {
            isSectionMoney && <div className='FinalizarCompra__main__products__money'>
              <header className='FinalizarCompra__main__products__money__header'>
                <Title> Escoge tu metodo de pago </Title>
              </header>
              <picture className='FinalizarCompra__main__products__money__main'>
                <img src={daviplata} alt="" className='money__main--img-daviplata' onClick={handleChangeToFinally} />
                <img src={nequi} alt="" className='money__main--img-nequi' onClick={handleChangeToFinally} />
                <img src={bancolombia} alt="" className='money__main--img-bancolombia' onClick={handleChangeToFinally} />
              </picture>
              <footer className='FinalizarCompra__main__products__money__footer'>
                <Button className="button--ToBack" title='Regresar' clickHandler={handleToBack} />
                <Button className="button--Cancel" title='Cancelar' clickHandler={handleToCancel} />
              </footer>
            </div>
          }
          {
            isSectionFinally && <div className='FinalizarCompra__main__products__finally'>
              <div className='FinalizarCompra__main__products__finally__signal'>
                <div className="container--icons">
                  <PiCookingPotDuotone className={`FinalizarCompra__main__count__icons icon-1  fitst`} />
                  <Subtitle>En Preparacion</Subtitle>
                </div>
                <FaArrowRightLong className='FinalizarCompra__main__count__icons icon-Arrow no-Present' />
                <div className="container--icons">
                  <CiShop className={`FinalizarCompra__main__count__icons icon-2 second`} />
                  <Subtitle> Listo para recoger </Subtitle>
                </div>
                <FaArrowRightLong className='FinalizarCompra__main__count__icons icon-Arrow no-Present' />
                <div className="container--icons">
                  <FaHandshakeAngle className={`FinalizarCompra__main__count__icons icon-3 tercero`} />
                  <Subtitle>Entregado</Subtitle>
                </div>
              </div>
              <Button title='He recibido mi pedido' clickHandler={handleFinishingPedido} />
            </div>
          }
        </section>
      </main>
    </LayoutPage>
  )
}
