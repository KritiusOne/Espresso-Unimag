import React, { useContext } from 'react'
import { Header } from '../header/Header'
import { CartAside } from "../../components/CartAside/CartAside.jsx"
import { ProductsContext } from '../../context/productsContext'
import "./layoutPage.css"

export function LayoutPage({ children, ...props }) {
  const { viewCart } = useContext(ProductsContext)
  return (
    <>
      <div {...props} className={`layoutPage ${props.className ? props.className : ""}`}  >
        {/* Este es un comentario   <Header />   */}
        {
          children
        }
      </div>
      {
        viewCart && <CartAside />
      }

    </>
  )
}
