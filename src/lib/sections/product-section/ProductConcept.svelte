<script>
  import AppSection from '../../AppSection.svelte';

  export let concept;
  export let description;
</script>

<AppSection class="product-concept" style={`--background-url: url(${concept})`}>
  <header class="product-concept__header">
    <!-- <h2 class="product-concept__heading">
      Concepto
    </h2> -->
    <!-- <p>{description}</p> -->
  </header>
  <img class="product-concept__image" src={concept} alt="" />
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

  .product-concept__header {
    font-family: 'Cormorant Garamond', serif;
    /* font-size: 3rem; */
    text-transform: uppercase;
    letter-spacing: 0.3rem;

    /* position: absolute; */
    /* bottom: 2rem;
    left: 2rem; */
    /* color: white; */
  }

  .product-concept__heading {
    font-size: 3rem;
  }

  .product-concept__image {
    border-radius: 0.5rem;
  }

  @media only screen and (max-width: 720px) {
    .product-concept__heading {
      font-size: 2rem;
    }

    :global(.product-concept) {
      padding: 3rem 2rem !important;
    }
  }
</style>
