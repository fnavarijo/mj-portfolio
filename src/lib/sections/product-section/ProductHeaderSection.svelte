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
    {#if colaboration}
      <p>{colaboration}</p>
    {/if}
  </header>
</AppSection>

<style>
:global(.product-header) {
  --background-url: url('https://res.cloudinary.com/dkvtpo8w1/image/upload/v1648497608/MJ%20Portafolio/sumaid-pal-singh-bakshi-EKoGseH8NKs-unsplash.jpg');
  
  display: grid !important;
  grid-template-columns: repeat(2, 1fr);
  min-height: 60vh !important;
  background: linear-gradient(rgb(0 0 0 / 50%), rgb(0 0 0 / 20%)), var(--background-url);
  background-position: left top;
  background-repeat: no-repeat;
  background-size: cover;

  justify-items: center;
  align-items: center;
}

.product-header__header {
  display: flex;
  flex-direction: column;
}

.product-header__header-heading {
  font-size: 3rem;
  color: white;
}
</style>