import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/authContext/AuthContext";
import { OPTIONS_FROM_ADMIN, OPTIONS_FROM_VENDEDOR } from "../../utils/UserOptionTypes";
import Card from "../cards/CardOptionProfile";
import { RolesTypes } from "../../utils/RolesTypes";
import { Carousel } from 'react-bootstrap';

import "./userLogged.css";

export function UserLogged() {
  const [isCliente, setIsCliente] = useState(false);
  const [isVendedor, setIsVendedor] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [carruselProducts, setCarruselProducts] = useState([]);
  const { rol } = useAuth();

  useEffect(() => {
    if (rol === RolesTypes.ADMINISTRADOR) setIsAdmin(true);
    if (rol === RolesTypes.CLIENTE) setIsCliente(true);
    if (rol === RolesTypes.VENDEDOR) setIsVendedor(true);
    async function getData() {
      try {
        const response1 = await fetch('https://cafeapi20231114234957.azurewebsites.net/Productos/655e6b4bca5ae917f8a3db91')
        const response2 = await fetch('https://cafeapi20231114234957.azurewebsites.net/Productos/655e6bb3ca5ae917f8a3db92')
        const response3 = await fetch('https://cafeapi20231114234957.azurewebsites.net/Productos/655e6ccfca5ae917f8a3db93')
        const response4 = await fetch('https://cafeapi20231114234957.azurewebsites.net/Productos/655e7147ca5ae917f8a3db98')
        let indexProducts = []
        if (response1.ok) {
          const responseTransform = await response1.json()
          indexProducts.push(responseTransform)
        }
        if (response2.ok) {
          const responseTransform = await response2.json()
          indexProducts.push(responseTransform)
        }
        if (response3.ok) {
          const responseTransform = await response3.json()
          indexProducts.push(responseTransform)
        }
        if (response4.ok) {
          const responseTransform = await response4.json()
          indexProducts.push(responseTransform)
        }
        setCarruselProducts(indexProducts)
      } catch (error) {
        console.log(error.message)
      }

    }
    getData()
  }, []);

  console.log(carruselProducts)

  return (
    <main className='UserProfile'>
      {isCliente && (
        <section className='UserProfile__SectionOptionProfile'>
          <Carousel>
            {carruselProducts.map(producto => (
              <Carousel.Item key={producto.id.creationTime}>
                <article className='card mb-3'>
                  <header className='card-img-top'>
                    <img className='card-img' src={producto.imagen} alt={producto.descripcpion} />
                  </header>
                  <main className='card-body'>
                    <h3 className='card-title'> {producto.name} </h3>
                    <section className='card-info--container'>
                      <strong className='card-price'>Precio: $: {producto.precio} </strong>
                    </section>
                  </main>
                </article>
              </Carousel.Item>
            ))}
          </Carousel>
        </section>
      )}
      {isAdmin && (
        <section className='UserProfile__SectionOptionProfile'>
          {OPTIONS_FROM_ADMIN.map(option => (
            <Card Icon={option.Icon} namecard={option.title} fn={() => console.log("FUNCIONO")} />
          ))}
        </section>
      )}
      {isVendedor && (
        <section className='UserProfile__SectionOptionProfile'>
          {OPTIONS_FROM_VENDEDOR.map(option => (
            <Card Icon={option.Icon} namecard={option.title} fn={() => console.log("FUNCIONO")} />
          ))}
        </section>
      )}
    </main>
  );
}
