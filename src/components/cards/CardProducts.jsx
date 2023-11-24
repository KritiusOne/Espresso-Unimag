import React, { useContext } from 'react';
import { BsCart4 } from 'react-icons/bs';
import { Button } from '../buttons/Button';
import { ProductsContext } from '../../context/productsContext';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './CardProducts.css';

export function CardProducts({ imgSrc, title, price, description, handleClick, id }) {
  const { cart, deleteProductOnCart } = useContext(ProductsContext)
  const [actualProduct] = cart.filter(product => product.id.creationTime == id)
  const handleDeleteProduct = (e) => {
    deleteProductOnCart(id)
  }
  
  return (
    <article className='card mb-3'>
      <header className='card-img-top'>
        <img className='card-img' src={imgSrc} alt={description}/>
      </header>
      <main className='card-body'>
        <h3 className='card-title'> {title} </h3>
        <section className='card-info--container'>
          <strong className='card-price'>Precio: $: {price} </strong>
          <div className='btn-container'>
            {!actualProduct ? (
              <Button
                className='btn btn-primary' 
                Icon={BsCart4} 
                title={"Agregar"} 
                clickHandler={handleClick} />
              ) : ( 
              <Button className='btn btn-danger' 
                Icon={BsCart4} 
                title={"Delete"} 
                clickHandler={handleDeleteProduct} />
            )}
          </div>
        </section>
      </main>
    </article>
  );
}
