<script>
  import { Link } from 'svelte-routing';
  import AppSection from '../../AppSection.svelte';

  import LeftArrow from '../../../assets/left-arrow-white.png';

  export let title;
  export let headerImage;
  export let colaboration = '';
</script>

<AppSection
  class="product-header"
  style={`--background-url: url(${headerImage})`}
>
  <header class="product-header__header">
    <h1 class="product-header__header-heading">{title}</h1>
    <hr class="product-header__separator" />
    {#if colaboration}
      <p class="product-header__colaboration">{colaboration}</p>
    {/if}
  </header>
  <Link to="/" class="product-header__navigation">
    <img src={LeftArrow} alt="Back to home" />
  </Link>
</AppSection>

<style>
  :global(.product-header) {
    --background-url: url('https://res.cloudinary.com/dkvtpo8w1/image/upload/v1648497608/MJ%20Portafolio/sumaid-pal-singh-bakshi-EKoGseH8NKs-unsplash.jpg');

    display: flex;
    min-height: 60vh !important;
    background: linear-gradient(rgb(0 0 0 / 70%), rgb(0 0 0 / 50%)),
      var(--background-url);
    background-position: left top;
    background-repeat: no-repeat;
    background-size: cover;

    justify-items: center;
    align-items: center;
  }

  .product-header__header {
    display: flex;
    flex-direction: column;
    color: white;
  }

  .product-header__header-heading {
    font-size: 3rem;
    text-transform: uppercase;
  }

  .product-header__colaboration {
    font-style: italic;
    text-align: center;
  }

  .product-header__separator {
    margin: 1rem 0 0.5rem 0;
  }

  :global(.product-header__navigation) {
    position: absolute;
    top: 1rem;
    left: 1rem;
    width: 2rem;
  }

  @media only screen and (max-width: 720px) {
    :global(.product-header__navigation) {
      width: 1rem;
    }
  }
</style>
