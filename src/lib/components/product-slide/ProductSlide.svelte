<script>
  import { onMount } from 'svelte';
  import Carousel from 'svelte-carousel';
  import ProductSlideCard from './ProductSlideCard.svelte';

  import LeftArrow from '../../../assets/left-arrow.png';
  import RightArrow from '../../../assets/right-arrow.png';

  let isMobile = false;

  onMount(function () {
    isMobile = window.innerWidth < 864;
  });

  const products = [
    {
      name: 'Food design',
      description:
        'Producto enfocado al área de Food Design que cumple con la característica de ser funcional en tiempo limitado con el objetivo de reducir los desechos de obsolescencia programada.',
      image:
        'https://res.cloudinary.com/dkvtpo8w1/image/upload/v1648790379/MJ%20Portafolio/Food%20design/3.jpg',
    },
    {
      name: 'Curves',
      description:
        'El diseño del parque recreativo está inspirado en la alteración de la figura del círculo. Busca generar interacción con la persona a través de la aplicación de diversas alturas del conjunto.',
      image:
        'https://res.cloudinary.com/dkvtpo8w1/image/upload/v1648791341/MJ%20Portafolio/Mini%20parques/3.jpg',
    },
    {
      name: 'Gordian Knot',
      description:
        'Está inspirado en un recuerdo de infancia que en términos de diseño hace referencia al diseño emocional. Este busca convertir un rompecabezas 2D a un producto 3D.',
      image:
        'https://res.cloudinary.com/dkvtpo8w1/image/upload/c_fill,h_405,w_270/v1648783650/MJ%20Portafolio/Nudo%20gordiano/Nudo_gordiano_2.1.jpg',
    },
    {
      name: 'Posture Corrector',
      description:
        'Es un corrector portátil que busca corregir y prevenir enfermedades a futuro que puede llegar a adquirir tras haber tenido una mala postura.',
      image:
        'https://res.cloudinary.com/dkvtpo8w1/image/upload/c_fill,h_405,w_270,x_0/v1648783635/MJ%20Portafolio/Corrector%20de%20mu%C3%B1eca/Fotos%20para%20portafolio/test.142.jpg',
    },
    {
      name: 'Tulio',
      description:
        'Luminaria inspirada de la naturaleza, especialmente del caparazón de la tortuga. Busca abstraer las características esenciales de la tortuga y convertirlas en atributos funcionales.',
      image:
        'https://res.cloudinary.com/dkvtpo8w1/image/upload/c_fill,h_405,w_270/v1648783637/MJ%20Portafolio/L%C3%A1mpara%20Tulio/modelo_3.png',
    },
    {
      name: 'Lumini',
      description:
        'Su enfoque principal es desarrollar un colgador cumpliendo con el requisito de que sus ensambles funcionen como el principio de un rompecabezas.',
      image:
        'https://res.cloudinary.com/dkvtpo8w1/image/upload/v1652984211/MJ%20Portafolio/Lumini/2.jpg ',
    },
    {
      name: 'Brand Book',
      description:
        'Su enfoque principal es desarrollar un colgador cumpliendo con el requisito de que sus ensambles funcionen como el principio de un rompecabezas.',
      image:
        'https://res.cloudinary.com/dkvtpo8w1/image/upload/v1696398965/MJ%20Portafolio/BrandBook/Portada-01.png',
    },
    {
      name: 'Temple',
      description:
        'Su enfoque principal es desarrollar un colgador cumpliendo con el requisito de que sus ensambles funcionen como el principio de un rompecabezas.',
      image:
        'https://res.cloudinary.com/dkvtpo8w1/image/upload/v1727060413/MJ%20Portafolio/Templo/Diapositiva4.jpg',
    },
    {
      name: 'Sense',
      description:
        'Retenedor removible que tiene como objetivo devolver la vista a personas que han perdido por completo su vista. Funciona por medio de la manipulación de estímulos de la lengua.',
      image:
        'https://res.cloudinary.com/dkvtpo8w1/image/upload/v1648788450/MJ%20Portafolio/Portada_senses.png',
      type: '2D',
    },
    {
      name: 'BSP',
      description:
        'Se examina una diferente solución para proteger a las personas recolectoras de café. La idea es ofrecer los servicios básicos para que puedan ejercer sus labores sin dificultad.',
      image:
        'https://res.cloudinary.com/dkvtpo8w1/image/upload/v1648787941/MJ%20Portafolio/Funci%C3%B3n1.png',
      type: '2D',
    },
  ];
</script>

<div class="product-slide">
  <Carousel
    dots={false}
    swiping={false}
    particlesToShow={isMobile ? 1 : 3}
    let:showPrevPage
    let:showNextPage
  >
    <div slot="prev" on:click={showPrevPage} class="navigation-section">
      <img src={LeftArrow} alt="" class="navigation-icon" />
    </div>
    {#each products as product}
      <ProductSlideCard name={product.name} image={product.image} />
    {/each}
    <div slot="next" on:click={showNextPage} class="navigation-section">
      <img src={RightArrow} alt="" class="navigation-icon" />
    </div>
  </Carousel>
</div>

<style>
  .product-slide {
    width: 80vw;
  }

  .navigation-icon {
    width: 2rem;
    cursor: pointer;
  }

  .navigation-section {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
