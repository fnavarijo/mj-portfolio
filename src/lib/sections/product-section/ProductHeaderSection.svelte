<script>
  import AppSection from '../../AppSection.svelte';
</script>

<AppSection class="product-header">
  <div></div>
  <header class="product-header__header">
    <h1 class="product-header__header-heading">Titulo</h1>
    <p>Información extra</p>
  </header>
</AppSection>

<style>
:global(.product-header) {
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

.product-header__header {
  display: flex;
  flex-direction: column;
}

.product-header__header-heading {
  font-size: 3rem;
}
</style>