import React, { useContext } from 'react';
import { Button } from '../buttons/Button';
import { ProductsContext } from '../../context/productsContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './cartProductCard.css';

export function CartProductCard({ price, nameProduct, srcImg, cantidad, id }) {
  const { addMoreProductToCart } = useContext(ProductsContext);

  const reduceToProduct = () => {
    addMoreProductToCart(id, -1);
  };

  const AugmentToProduct = () => {
    addMoreProductToCart(id, 1);
  };

  return (
    <div className='col'>
      <div className='card'>
        <img src={srcImg} className='card-img-top' alt={`Imagen del articulo ${nameProduct}`} />
        <div className='card-body'>
          <h5 className='card-title'>{nameProduct}</h5>
          <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dignissimos accusantium amet similique velit iste.</p>
        </div>
        <div className='mb-5 d-flex justify-content-around'>
          <h3>${price}</h3>
          <div className='d-flex'>
            <Button title='-' className='btn btn-outline-secondary me-2' clickHandler={reduceToProduct} />
            <strong className='cartProductCard__cantidad'>{cantidad}</strong>
            <Button title='+' className='btn btn-outline-secondary ms-2' clickHandler={AugmentToProduct} />
          </div>
        </div>
      </div>
    </div>
  );
}
