<script>
  import { fade } from 'svelte/transition';
  import Carousel from 'svelte-carousel';

  import Close from '../../../assets/close.png';
  import LeftArrow from '../../../assets/left-arrow.png';
  import RightArrow from '../../../assets/right-arrow.png';

  import AppSection from '../../AppSection.svelte';
  import ProductCarouselImage from '../../components/product/ProductCarouselImage.svelte';

  const isMobile = window.innerWidth < 720;

  let imageToView = null;

  function disableScrollOnRootContainer() {
    document.body.style.overflow = 'hidden';
  }

  function enableScrollOnRootContainer() {
    document.body.style.overflow = 'auto';
  }

  function seeImage({ detail: imageUrl }) {
    imageToView = imageUrl;
    disableScrollOnRootContainer();
  }

  function closeImageViewer() {
    imageToView = null;
    enableScrollOnRootContainer();
  }

  export let images = [];
</script>

<AppSection class="product-carousel">
  <h2 class="product-carousel__header">Gallery</h2>
  <Carousel
    arrows={true}
    dots={false}
    swiping={false}
    particlesToShow={isMobile ? 1 : 3}
    let:showPrevPage
    let:showNextPage
  >
    <div slot="prev" on:click={showPrevPage} class="navigation-section">
      <img src={LeftArrow} alt="" class="navigation-icon" />
    </div>
    {#each images as image}
      <ProductCarouselImage {image} on:click={seeImage} />
    {/each}
    <div slot="next" on:click={showNextPage} class="navigation-section">
      <img src={RightArrow} alt="" class="navigation-icon" />
    </div>
  </Carousel>
  {#if imageToView}
    <div class="image-viewer" transition:fade>
      <img
        class="image-viewer__close"
        src={Close}
        alt=""
        on:click={closeImageViewer}
      />
      <img class="image-viewer__image" src={imageToView} alt="" />
    </div>
  {/if}
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
    text-transform: uppercase;
    letter-spacing: 0.3rem;
    /* margin-left: 2rem; */
    font-size: 3rem;
    margin-bottom: 1rem;
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

  .image-viewer {
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(33, 30, 28, 0.9);
  }

  .image-viewer__image {
    width: 60%;
    height: 60%;
    object-fit: contain;
  }

  .image-viewer__close {
    width: 1rem;
    height: 1rem;
    position: absolute;
    top: 2rem;
    right: 3rem;
    cursor: pointer;
  }

  @media only screen and (max-width: 720px) {
    :global(.product-carousel) {
      padding: 3rem 2rem !important;
    }

    .product-carousel__header {
      font-size: 2rem;
    }

    .navigation-icon {
      width: 1rem;
      cursor: pointer;
    }
  }
</style>
