import React, { useContext, useState } from 'react'
import { CardProducts } from '../../components/cards/CardProducts.jsx'
import info from "../../utils/datafake/products.json"
import { LayoutPage } from '../../components/layout/LayoutPage.jsx'
import { ProductsContext } from '../../context/productsContext.js'
import "./inicio.css"

export function Inicio() {
  const [products, setProducts] = useState(info.products)
  const { addProductToCart } = useContext(ProductsContext)

  return (
    <LayoutPage className="Inicio">
      <main className='inicio__main'>
        {
          products.map((product, i) => {
            const handleClickAddToCart = (e) => {
              addProductToCart(product)
            }
            return (
              <CardProducts key={product.id} title={product.title}
                description={product.description}
                imgSrc={product.images[0]}
                price={product.price}
                handleClick={handleClickAddToCart}
              />
            )
          })
        }
      </main>
    </LayoutPage>
  )
}
