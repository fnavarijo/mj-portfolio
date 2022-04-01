<script>
  import { Router, Link, Route } from 'svelte-routing';
  
  import AppSection from "../AppSection.svelte";
  import PortfolioCard from "../components/portfolio/PortfolioCard.svelte";
  import PortfolioCardContainer from "../components/portfolio/PortfolioCardContainer.svelte";

  const products = [
    {
      name: 'Food design',
      description: 'Producto enfocado al área de Food Design que cumple con la característica de ser funcional en tiempo limitado con el objetivo de reducir los desechos de obsolescencia programada.'
    },
    {
      name: 'Curvas',
      description: 'El diseño del parque recreativo está inspirado en la alteración de la figura del círculo. Busca generar interacción con la persona a través de la aplicación de diversas alturas del conjunto.'
    },
    {
      name: 'Tulio',
      description: 'Luminaria inspirada de la naturaleza, especialmente del caparazón de la tortuga. Busca abstraer las características esenciales de la tortuga y convertirlas en atributos funcionales.',
      image: 'https://res.cloudinary.com/dkvtpo8w1/image/upload/c_fill,h_405,w_270/v1648783637/MJ%20Portafolio/L%C3%A1mpara%20Tulio/modelo_3.png'
    },
    {
      name: 'Rompecabezas',
      description: 'Su enfoque principal es desarrollar un colgador cumpliendo con el requisito de que sus ensambles funcionen como el principio de un rompecabezas.',
      image: 'https://res.cloudinary.com/dkvtpo8w1/image/upload/c_fill,h_405,w_270/v1648783630/MJ%20Portafolio/Colgador%20rompecabezas/render_1.png'
    },
    {
      name: 'Nudo Gordiano',
      description: 'Está inspirado en un recuerdo de infancia que en términos de diseño hace referencia al diseño emocional. Este busca convertir un rompecabezas 2D a un producto 3D.',
      image: 'https://res.cloudinary.com/dkvtpo8w1/image/upload/c_fill,h_405,w_270/v1648783650/MJ%20Portafolio/Nudo%20gordiano/Nudo_gordiano_2.1.jpg'
    },
    {
      name: 'Corrector de postura',
      description: 'Es un corrector portátil que busca corregir y prevenir enfermedades a futuro que puede llegar a adquirir tras haber tenido una mala postura.',
      image: 'https://res.cloudinary.com/dkvtpo8w1/image/upload/c_fill,h_405,w_270,x_0/v1648783635/MJ%20Portafolio/Corrector%20de%20mu%C3%B1eca/Fotos%20para%20portafolio/test.142.jpg'
    },
    {
      name: 'BSP',
      description: 'Se examina una diferente solución para proteger a las personas recolectoras de café. La idea es ofrecer los servicios básicos para que puedan ejercer sus labores sin dificultad.'
    },
    {
      name: 'Sense',
      description: 'Retenedor removible que tiene como objetivo devolver la vista a personas que han perdido por completo su vista. Funciona por medio de la manipulación de estímulos de la lengua.',
      image: 'https://res.cloudinary.com/dkvtpo8w1/image/upload/c_fill,h_405,w_270/v1648787690/MJ%20Portafolio/Movimiento_ligero.22.3.tiff'
    },
  ]

</script>

<AppSection class="portfolio-section">
  <section class="portfolio-section__container">
    <header class="portfolio-section__header">
      <h2>Portafolio</h2>
    </header>
    <div>
      <PortfolioCardContainer>
        {#each products as {name, description, image}}
          <PortfolioCard {name} {description} {image} />
        {/each}
        <!-- <PortfolioCard name="Food design" description="Es un producto enfocado principalmente al área de Food Design que cumple con la característica de ser funcional en tiempo limitado con el objetivo de reducir los productos de obsolescencia programada." />
        <PortfolioCard name="Curvas" />
        <PortfolioCard name="Tulio" />
        <PortfolioCard name="Rompecabezas" />
        <PortfolioCard name="Nudo Gordiano" />
        <PortfolioCard name="Corrector de postura de muñeca" />
        <PortfolioCard name="Panel solar" />
        <PortfolioCard name="Cepillo para artritis" /> -->
      </PortfolioCardContainer>
    </div>
  </section>
</AppSection>

<style>
  :global(.portfolio-section) {
    flex-direction: column;
  }

  .portfolio-section__container {
    width: 54rem;
    margin: 0 auto;
  }

  .portfolio-section__header {
    font-size: 5rem;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    text-transform: uppercase;
  }

  @media only screen and (max-width: 720px) {
    .portfolio-section__container {
      width: 16rem;
    }
    
    .portfolio-section__header {
      font-size: 2rem;
    }
  }
</style>


