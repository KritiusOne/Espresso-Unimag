import React from 'react';
import styled from 'styled-components';
import { LayoutPage } from '../../components/layout/LayoutPage.jsx';
import { Footer } from '../../components/footer/Footer.jsx';
import { Title } from '../../components/titles/title/Title.jsx';
import img from '../../assets/vendedor.jpg';

const NosotrosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
  color: #333;
`;

const MainSection = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
`;

const DescriptionsSection = styled.section`
  text-align: left;
  margin-bottom: 20px;

  p {
    margin-bottom: 15px;
    line-height: 1.5;
  }
`;

const ImgContainer = styled.section`
  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

export function Nosotros() {
  return (
    <NosotrosContainer>
      <LayoutPage className="Nosotros">
        <MainSection>
          <DescriptionsSection>
            <Title>Quiénes Somos</Title>
            <p>
              En el corazón de la Universidad del Magdalena, nuestra cafetería se ha convertido en el punto de encuentro para estudiantes, profesores y visitantes. Nos enorgullece ser el lugar donde las mentes brillantes se reúnen para disfrutar de momentos especiales y recargar energías.
            </p>
            <p>
              Desde nuestra apertura, nos hemos comprometido a ofrecer más que simplemente comida y bebida. Somos una parte integral de la experiencia universitaria, creando un ambiente acogedor que fomenta la comunidad y la conexión entre las personas.
            </p>
            <p>
              En la Cafetería de la Universidad del Magdalena, nuestra misión es proporcionar opciones culinarias deliciosas y nutritivas que satisfagan todos los gustos y necesidades dietéticas. Nos esforzamos por ser un espacio inclusivo donde todos se sientan bienvenidos.
            </p>
            <p>
              Valoramos nuestro entorno y estamos comprometidos con prácticas sostenibles. Desde la elección de ingredientes frescos y locales hasta la gestión de residuos, buscamos minimizar nuestro impacto ambiental y contribuir al bienestar de la comunidad.
            </p>
            <p>
              Detrás de cada taza de café y cada plato delicioso, hay un equipo apasionado que trabaja incansablemente para brindar experiencias excepcionales. Nos enorgullece nuestro personal dedicado que contribuye a hacer de nuestra cafetería un lugar único.
            </p>
            <p>
              Ya sea que estés buscando un lugar para estudiar, compartir risas con amigos o simplemente disfrutar de un buen café, te invitamos a unirte a nosotros en la Cafetería de la Universidad del Magdalena. ¡Esperamos verte pronto!
            </p>
          </DescriptionsSection>
          <ImgContainer>
            <img src={img} className="Nosotros__main__img" alt="Foto ilustrativa de vendedor" />
          </ImgContainer>
        </MainSection>
      </LayoutPage>
      <Footer />
    </NosotrosContainer>
  );
}
