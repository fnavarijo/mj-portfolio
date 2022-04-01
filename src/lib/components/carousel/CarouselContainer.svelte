<script>
  import Carousel from 'svelte-carousel';
  import CarouselSlide from './CarouselSlide.svelte';  
</script>

<Carousel arrows={false} dots={false} autoplay>
  <CarouselSlide title="Nudo Gordiano" backgroundImage="https://res.cloudinary.com/dkvtpo8w1/image/upload/v1648783646/MJ%20Portafolio/Nudo%20gordiano/Nudo_gordiano_1.jpg" />
  <CarouselSlide title="Tulio" backgroundImage="https://res.cloudinary.com/dkvtpo8w1/image/upload/v1648497608/MJ%20Portafolio/sumaid-pal-singh-bakshi-EKoGseH8NKs-unsplash.jpg" />
  <CarouselSlide title="Tulio" backgroundImage="https://res.cloudinary.com/dkvtpo8w1/image/upload/v1648501785/MJ%20Portafolio/simon-lee-egWTpKFu8rU-unsplash.jpg" />
</Carousel>
