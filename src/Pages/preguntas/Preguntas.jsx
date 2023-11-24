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
        <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Reembolsos</strong>
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p> si se descubre que algún producto vendido en la cafetería está contaminado o no cumple con los estándares de higiene y salud, la administración de la cafetería podría tomar la medida de ofrecer reembolsos</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>¿Qué pasa si no me gusta el producto que compré? </strong>
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
   
        <strong>¿Qué pasa si no me dan mis vueltos? </strong>
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
        </section>
        <aside className='Preguntas__main__aside'>
          <img src={img} className='Preguntas__main__aside__img' alt="Esta es una representacion del documento que debe ir aquí" />
        </aside>
      </main>
      <Footer />
    </LayoutPage>
  )
}
