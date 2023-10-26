import React from 'react'
import { LayoutPage } from "../../components/layout/LayoutPage"
import { Footer } from "../../components/footer/Footer.jsx"
import img from "../../assets/vendedor.jpg"
import "./preguntas.css"

export function Preguntas() {
  return (
    <LayoutPage className="Preguntas">
      <main className='Preguntas__main'>
        <section className='Preguntas__main__content'>
          <h6 className="Preguntas__main__content__pregunta">pregunta 1</h6>
          <h6 className="Preguntas__main__content__pregunta">pregunta 2</h6>
          <h6 className="Preguntas__main__content__pregunta">pregunta 3</h6>
          <h6 className="Preguntas__main__content__pregunta">pregunta 4</h6>
          <h6 className="Preguntas__main__content__pregunta">pregunta 5</h6>
        </section>
        <aside className='Preguntas__main__aside'>
          <img src={img} className='Preguntas__main__aside__img' alt="Esta es una representacion del documento que debe ir aquí" />
        </aside>
      </main>
      <Footer />
    </LayoutPage>
  )
}
