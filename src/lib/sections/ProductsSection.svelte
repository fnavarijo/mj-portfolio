<script>
  import AppSection from '../AppSection.svelte';
  import CarrouselContainer from '../components/carousel/CarouselContainer.svelte';
  import ProductSlide from '../components/product-slide/ProductSlide.svelte';
</script>

<AppSection class="product-section">
  <div class="circle-decoration" />
  <header class="product__header">
    <h2 class="product__title">Projects</h2>
    <hr class="product__separator" />
  </header>
  <ProductSlide />
</AppSection>

<style>
  :global(.product-section) {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
  }

  :global(.product__gallery) {
    position: relative;
    z-index: 10;
  }

  .circle-decoration {
    width: 80vh;
    aspect-ratio: 1;
    border-radius: 100%;
    position: absolute;
    bottom: -60%;
    right: -5%;
    transform: translate(-50%, -50%);
    background-color: #a09f58;
    opacity: 10%;
    z-index: 0;
  }

  .product__header {
    margin-bottom: 4rem;
    position: relative;
    z-index: 10;
  }

  .product__title {
    text-transform: uppercase;
    font-size: 4rem;
  }

  .product__separator {
    width: 50%;
    margin: auto;
  }
</style>
