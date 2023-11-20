import React, { useContext, useEffect, useState } from 'react'
import { CardProducts } from '../../components/cards/CardProducts.jsx'
import info from "../../utils/datafake/products.json"
import { LayoutPage } from '../../components/layout/LayoutPage.jsx'
import { ProductsContext } from '../../context/productsContext.js'
import { Modal } from '../../components/modal/Modal.jsx'
import { InicioContext } from './InicioContext.js'
import { Link } from 'react-router-dom'
import { TypesRoutes } from "../../routes/TypesRoutes.js"
import "./productos.css"
import { useAuth } from '../../context/authContext/AuthContext.jsx'

export function Productos() {
  const [products, setProducts] = useState(info.products)
  const { currentUser } = useAuth()
  const { addProductToCart, filters } = useContext(ProductsContext)
  const { viewModal, setViewModal } = useContext(InicioContext)

  useEffect(() => {
    console.log("Estoy usando recursos")
    setProducts(info.products.filter(product => product.title.toLowerCase().includes(filters.toLowerCase())))
  }, [filters])

  return (
    <LayoutPage className="Inicio">
      <main className='inicio__main'>
        {
          products.map((product, i) => {
            const handleClickAddToCart = (e) => {
              currentUser ? addProductToCart(product) : setViewModal(true)
            }
            return (
              <CardProducts key={product.id} title={product.title}
                description={product.description}
                imgSrc={product.images[0]}
                price={product.price}
                handleClick={handleClickAddToCart}
                id={product.id}
              />
            )
          })
        }
      </main>
      {viewModal && <Modal className="Inicio__modal">
        <h6 className='Inicio__modal__title'>
          Para agregar productos al carrito de compras
        </h6>
        <Link to={TypesRoutes.LOG_IN} className="Inicio__modal__button"> Iniciar Sesion </Link>
        <small className='Inicio__modal__singIn'>No tienes cuenta? <Link className='Inicio__modal__singIn__link' to={TypesRoutes.SING_IN} >crea una</Link> </small>
      </Modal>}
    </LayoutPage>
  )
}
