<script>
  import Carousel from 'svelte-carousel';

  import LeftArrow from '../../../assets/left-arrow.png';
  import RightArrow from '../../../assets/right-arrow.png';

  import AppSection from '../../AppSection.svelte';

  export let concept = [];
</script>

<AppSection class="product-concept" style={`--background-url: url(${concept})`}>
  <Carousel
    arrows={concept.length > 1}
    dots={false}
    swiping={false}
    let:showPrevPage
    let:showNextPage
  >
    <div slot="prev" on:click={showPrevPage} class="navigation-section">
      <img src={LeftArrow} alt="" class="navigation-icon" />
    </div>

    {#each concept as conceptImage}
      <img class="product-concept__image" src={conceptImage} alt="" />
    {/each}
    <div slot="next" on:click={showNextPage} class="navigation-section">
      <img src={RightArrow} alt="" class="navigation-icon" />
    </div>
  </Carousel>
</AppSection>

<style>
  :global(.product-concept) {
    /* --background-url: 'https://res.cloudinary.com/dkvtpo8w1/image/upload/v1648497608/MJ%20Portafolio/sumaid-pal-singh-bakshi-EKoGseH8NKs-unsplash.jpg'; */

    min-height: 50vh !important;
    display: flex;
    flex-direction: column;
    padding: 3rem 6rem !important;
    /* background: linear-gradient(rgb(0 0 0 / 50%), rgb(0 0 0 / 20%)), var(--background-url); */
    /* background-position: center;
    background-repeat: no-repeat;
    background-size: cover; */
    position: relative;
  }

  .product-concept__image {
    border-radius: 0.5rem;
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

  @media only screen and (max-width: 720px) {
    :global(.product-concept) {
      padding: 3rem 2rem !important;
    }
  }
</style>
