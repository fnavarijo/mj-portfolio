<script>
  import AppSection from '../../AppSection.svelte';
  import ProductBlock from '../../components/product/ProductBlock.svelte';
  import ClockIcon from '../../../assets/clock.png';

  export let functionality;
  export let materials;
</script>

<AppSection class="product-functionality">
  <div class="product-functionality__container">
    <ProductBlock title="Funcionamiento" content={functionality} icon="https://res.cloudinary.com/dkvtpo8w1/image/upload/v1648790124/MJ%20Portafolio/iconos/Funcion.png" />
    <ProductBlock title="Materiales" content={materials} icon="https://res.cloudinary.com/dkvtpo8w1/image/upload/v1648790095/MJ%20Portafolio/iconos/Material.png" />
  </div>
</AppSection>

<style>
  :global(.product-functionality) {
    min-height: 50vh !important;
  }
  
  .product-functionality__container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 80%;
    align-items: center;
    justify-content: center;
    gap: 8rem;
  }
</style>