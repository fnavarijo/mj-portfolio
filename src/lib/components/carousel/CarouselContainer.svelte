<script>
  import Carousel from 'svelte-carousel';
  import CarouselSlide from './CarouselSlide.svelte';  
</script>

<Carousel arrows={false} dots={false} autoplay>
  <CarouselSlide title="Nudo Gordiano" backgroundImage="https://res.cloudinary.com/dkvtpo8w1/image/upload/v1648783646/MJ%20Portafolio/Nudo%20gordiano/Nudo_gordiano_1.jpg" />
  <CarouselSlide title="Curvas" backgroundImage="https://res.cloudinary.com/dkvtpo8w1/image/upload/v1648791353/MJ%20Portafolio/Mini%20parques/1.jpg" />
  <CarouselSlide title="Food design" backgroundImage="https://res.cloudinary.com/dkvtpo8w1/image/upload/v1648790379/MJ%20Portafolio/Food%20design/3.jpg" />
</Carousel>
