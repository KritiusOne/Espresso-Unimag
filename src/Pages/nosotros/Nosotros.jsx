import React from 'react'
import { LayoutPage } from '../../components/layout/LayoutPage.jsx'
import { Footer } from '../../components/footer/Footer.jsx'
import { Title } from "../../components/titles/title/Title.jsx"
import img from "../../assets/vendedor.jpg"
import "./nosotros.css"

export function Nosotros() {
  return (
    <LayoutPage className="Nosotros">
      <main className='Nosotros__main'>
        <section className='Nosotros__main__descriptions'>
          <Title className="Nosotros__main__descriptions__title"> Quienes somos? </Title>
          <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate excepturi beatae repudiandae perspiciatis dicta vero repellat ipsam temporibus perferendis, doloremque recusandae fugit non maiores placeat adipisci eum harum aut explicabo.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate excepturi beatae repudiandae perspiciatis dicta vero repellat ipsam temporibus perferendis, doloremque recusandae fugit non maiores placeat adipisci eum harum aut explicabo.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate excepturi beatae repudiandae perspiciatis dicta vero repellat ipsam temporibus perferendis, doloremque recusandae fugit non maiores placeat adipisci eum harum aut explicabo. </p>
        </section>
        <section className='Nosotros__main__img--container'>
          <img src={img} className='Nosotros__main__img' alt="Foto ilustrativa de vendedor" />
        </section>
      </main>
      <Footer />
    </LayoutPage>
  )
}
