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
      if (products.all.length == 0) {
        try {
          const response = await fetch('https://cafeapi20231114234957.azurewebsites.net/Productos')
          if (response.ok) {
            const responseTransform = await response.json()
            setCarruselProducts({ ...products, all: responseTransform })
          }
        } catch (error) {
          console.log(error.message)
        }
      }
    }
    getData()
  }, []);

  const getData = async () => {
    try {
      const response = await fetch(PRODUCTS_URL)
      if (response.ok) {
        const responseTransform = await response.json()
        setProducts({ ...products, all: responseTransform })
      }
    } catch (error) {
      console.log(error.message)
    }
  };

  return (
    <main className='UserProfile'>
      {isCliente && (
        <section className='UserProfile__SectionOptionProfile'>
          <Carousel>
            {products.map(producto => (
              <Carousel.Item key={producto.id.creationTime}>
                {/* Add your carousel content here for each item */}
                <p>{producto.name} </p>
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
