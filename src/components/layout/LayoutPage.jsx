import React, { useContext } from 'react'
import { Header } from '../header/Header'
import { CartAside } from "../../components/CartAside/CartAside.jsx"
import "./layoutPage.css"
import { ProductsContext } from '../../context/productsContext'

export function LayoutPage({ children, ...props }) {
  const { viewCart } = useContext(ProductsContext)
  return (
    <>
      <div {...props} className={`layoutPage ${props.className ? props.className : ""}`}  >
        <Header />
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
