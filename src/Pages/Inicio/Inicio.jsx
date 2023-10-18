import React, { useState } from 'react'
import { Header } from "../../components/header/Header.jsx"
import { CardProducts } from '../../components/cards/CardProducts.jsx'
import info from "../../utils/datafake/products.json"
import "./inicio.css"

export function Inicio() {
  const [products, setProducts] = useState(...info.products)
  return (
    <div className="Inicio">
      <Header />
      <main className='inicio__main'>
        {
          products.map((product, i) => {
            return (
              <CardProducts key={product.id} title={product.title}
                description={product.description}
                imgSrc={product.images[0]}
                price={product.price}
              />
            )
          })
        }
      </main>
    </div>
  )
}
