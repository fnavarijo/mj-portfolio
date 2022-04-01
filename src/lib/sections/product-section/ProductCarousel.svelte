<script>
  
  import Carousel from 'svelte-carousel';
  
  import AppSection from '../../AppSection.svelte';
  import ProductCarouselImage from '../../components/product/ProductCarouselImage.svelte';

  export let images = [];
</script>


<AppSection class="product-carousel">
  <h2 class="product-carousel__header">
    Proceso de fabricación e interacción
  </h2>
  <Carousel arrows={true} dots={false} particlesToShow={3}>
    {#each images as image}
      <ProductCarouselImage {image} />
    {/each}
  </Carousel>
</AppSection>

<style>
  :global(.product-carousel) {
    min-height: 40vh !important;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 4rem;
  }

  .product-carousel__header {
    margin-left: 2rem;
    font-size: 2rem;
    margin-bottom: 2rem;
  }
</style>