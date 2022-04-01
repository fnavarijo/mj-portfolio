<script>
  import AppSection from '../../AppSection.svelte';

  export let concept;
  export let description;
</script>

<AppSection class="product-concept" style={`--background-url: url(${concept})`}>
  <header class="product-concept__header">
    <h2 class="product-concept__heading">
      Concepto
    </h2>
    <p>{description}</p>
  </header>
</AppSection>

<style>
  :global(.product-concept) {
    --background-url: 'https://res.cloudinary.com/dkvtpo8w1/image/upload/v1648497608/MJ%20Portafolio/sumaid-pal-singh-bakshi-EKoGseH8NKs-unsplash.jpg';

    min-height: 50vh !important;
    background: linear-gradient(rgb(0 0 0 / 50%), rgb(0 0 0 / 20%)), var(--background-url);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }

  .product-concept__header {
    position: absolute;
    bottom: 2rem;
    left: 2rem;
    color: white;
  }

  .product-concept__heading {
    font-size: 2rem;
  }
</style>