<script>
  import AppSection from '../../AppSection.svelte';
</script>

<AppSection class="product-owners">
  <div></div>
  <h2 class="product-owners__title">Dimensiones</h2>
</AppSection>

<style>
  :global(.product-owners) {
    min-height: 50vh !important;
    background-image: url('https://res.cloudinary.com/dkvtpo8w1/image/upload/v1648497608/MJ%20Portafolio/sumaid-pal-singh-bakshi-EKoGseH8NKs-unsplash.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: grid !important;
    grid-template-columns: repeat(2, 1fr);
    align-content: center;
  }

  .product-owners__title {
    font-size: 1rem;
    font-weight: 300;
    text-align: center;
  }
</style>