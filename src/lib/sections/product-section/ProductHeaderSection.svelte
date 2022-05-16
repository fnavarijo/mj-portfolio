<script>
  import AppSection from '../../AppSection.svelte';

  export let title;
  export let headerImage;
  export let colaboration = '';
</script>

<AppSection class="product-header" style={`--background-url: url(${headerImage})`}>
  <div></div>
  <header class="product-header__header">
    <h1 class="product-header__header-heading">{title}</h1>
    <hr class="product-header__separator" />
    {#if colaboration}
      <p class="product-header__colaboration">{colaboration}</p>
    {/if}
  </header>
</AppSection>

<style>
:global(.product-header) {
  --background-url: url('https://res.cloudinary.com/dkvtpo8w1/image/upload/v1648497608/MJ%20Portafolio/sumaid-pal-singh-bakshi-EKoGseH8NKs-unsplash.jpg');
  
  display: flex;
  min-height: 60vh !important;
  background: linear-gradient(rgb(0 0 0 / 70%), rgb(0 0 0 / 50%)), var(--background-url);
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
  font-family: 'Cormorant Garamond', serif;
}

.product-header__header-heading {
  font-size: 3rem;
}

.product-header__colaboration {
  font-style: italic;
  font-family: 'Raleway', sans-serif;
}

.product-header__separator {
  margin: 1rem 0 0.5rem 0;
}
</style>