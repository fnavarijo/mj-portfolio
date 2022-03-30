<script>
  import AppSection from '../../AppSection.svelte';
</script>

<AppSection class="product-header-2d">
  <div></div>
  <header class="product-header-2d__header">
    <h1 class="product-header-2d__header-heading">Titulo</h1>
    <p>Información de la empresa</p>
    <p>Información sobre con quienes se trabajan</p>
  </header>
</AppSection>

<style>
:global(.product-header-2d) {
  display: grid !important;
  grid-template-columns: repeat(2, 1fr);
  min-height: 60vh !important;
  background-image: url('https://res.cloudinary.com/dkvtpo8w1/image/upload/v1648497608/MJ%20Portafolio/sumaid-pal-singh-bakshi-EKoGseH8NKs-unsplash.jpg');
  background-position: left top;
  background-repeat: no-repeat;
  background-size: cover;

  justify-items: center;
  align-items: center;
}

.product-header-2d__header {
  display: flex;
  flex-direction: column;
}

.product-header-2d__header-heading {
  font-size: 3rem;
}
</style>