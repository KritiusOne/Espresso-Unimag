import React, { useContext } from 'react';
import { BsCart4 } from 'react-icons/bs';
import { Button } from '../buttons/Button';
import { ProductsContext } from '../../context/productsContext';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './CardProducts.css';

export function CardProducts({ imgSrc, title, price, description, handleClick, id }) {
  const { cart, deleteProductOnCart } = useContext(ProductsContext);
  const [actualProduct] = cart.filter(product => product.id === id);

  const handleDeleteProduct = () => {
    deleteProductOnCart(id);
  };

  return (
    <article className='card mb-3'>
      <header className='card-img-top'>
        <img className='card-img' src={imgSrc} alt={description} />
      </header>
      <main className='card-body'>
        <h3 className='card-title'>{title}</h3>
        <div className='card-info-container'>
          <strong className='card-price'>PRICE: ${price}</strong>
          {!actualProduct ? (
            <Button className='btn btn-primary card-button' Icon={BsCart4} title='ADD' clickHandler={handleClick} />
          ) : (
            <Button className='btn btn-danger card-button button-delete' Icon={BsCart4} title='Delete' clickHandler={handleDeleteProduct} />
          )}
        </div>
      </main>
    </article>
  );
}
