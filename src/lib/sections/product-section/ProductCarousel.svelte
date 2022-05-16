<script>
  import Carousel from 'svelte-carousel';

  import LeftArrow from '../../../assets/left-arrow.png';
  import RightArrow from '../../../assets/right-arrow.png';
  
  import AppSection from '../../AppSection.svelte';
  import ProductCarouselImage from '../../components/product/ProductCarouselImage.svelte';

  export let images = [];
</script>


<AppSection class="product-carousel">
  <h2 class="product-carousel__header">
    Galería
  </h2>
  <Carousel arrows={true} dots={false} particlesToShow={3} let:showPrevPage let:showNextPage>
    <div slot="prev" on:click={showPrevPage} class="navigation-section">
      <img src={LeftArrow} alt="" class="navigation-icon">
    </div>
    {#each images as image}
      <ProductCarouselImage {image} />
    {/each}
    <div slot="next" on:click={showNextPage} class="navigation-section">
      <img src={RightArrow} alt="" class="navigation-icon">
    </div>
  </Carousel>
  
</AppSection>

<style>
  :global(.product-carousel) {
    min-height: 40vh !important;
    display: flex;
    justify-content: center;
    flex-direction: column;
    /* margin-top: 4rem; */
    padding: 3rem 6rem !important;
  }

  .product-carousel__header {
    font-family: 'Cormorant Garamond', serif;
    text-transform: uppercase;
    letter-spacing: 0.3rem;
    margin-left: 2rem;
    font-size: 3rem;
    margin-bottom: 2rem;
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