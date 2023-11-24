import React, { useContext, useEffect, useState } from 'react'
import { CardProducts } from '../../components/cards/CardProducts.jsx'
import { LayoutPage } from '../../components/layout/LayoutPage.jsx'
import { ProductsContext } from '../../context/productsContext.js'
import { Modal } from '../../components/modal/Modal.jsx'
import { InicioContext } from './InicioContext.js'
import { Link } from 'react-router-dom'
import { TypesRoutes } from "../../routes/TypesRoutes.js"
import "./productos.css"
import { useAuth } from '../../context/authContext/AuthContext.jsx'
import { PRODUCTS_URL } from '../../utils/endpoints.js'

export function Productos() {
  const { currentUser } = useAuth()
  const { addProductToCart, filters, products, setProducts } = useContext(ProductsContext)
  const { viewModal, setViewModal } = useContext(InicioContext)
  useEffect(() => {
    console.log(products)
    async function getData() {
      if (products.all.length == 0) {
        try {
          const response = await fetch(PRODUCTS_URL)
          if (response.ok) {
            const responseTransform = await response.json()
            setProducts({ ...products, all: responseTransform })
          }
        } catch (error) {
          console.log(error.message)
        }
      }
    }
    getData()
  }, [])
  useEffect(() => {
    const filtrado = products.all.filter(products => {
      return products.name.toLowerCase().includes(filters.toLowerCase()) ? products : null
    })
    console.log(filtrado)
    setProducts({
      ...products, onFilter: filtrado
    })
  }, [filters])
  return (
    <LayoutPage className="Inicio">
      <main className={`inicio__main ${filters == "" ? "sin--Filtro" : "con--Filtro"}`}>
        {
          products.onFilter.length == 0 ? products.all.map((product, i) => {
            const handleClickAddToCart = (e) => {
              currentUser ? addProductToCart(product) : setViewModal(true)
            }
            return (
              <CardProducts key={product.id.creationTime} title={product.name}
                description={product.descripcpion}
                imgSrc={product.imagen}
                price={product.precio}
                handleClick={handleClickAddToCart}
                id={product.id.creationTime}
              />
            )
          }) : products.onFilter.map((product, i) => {
            const handleClickAddToCart = (e) => {
              currentUser ? addProductToCart(product) : setViewModal(true)
            }
            return (
              <CardProducts key={product.id.creationTime} title={product.name}
                description={product.descripcpion}
                imgSrc={product.imagen}
                price={product.precio}
                handleClick={handleClickAddToCart}
                id={product.id.creationTime}
              />
            )
          })
        }
      </main>
      {
        viewModal && <Modal className="Inicio__modal">
          <h6 className='Inicio__modal__title'>
            Para agregar productos al carrito de compras
          </h6>
          <Link to={TypesRoutes.LOG_IN} className="Inicio__modal__button"> Iniciar Sesion </Link>
          <small className='Inicio__modal__singIn'>No tienes cuenta? <Link className='Inicio__modal__singIn__link' to={TypesRoutes.SING_IN} >crea una</Link> </small>
        </Modal>
      }
    </LayoutPage>
  )
}
