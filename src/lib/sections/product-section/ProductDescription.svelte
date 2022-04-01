<script>
  import AppSection from '../../AppSection.svelte';
  import ProductBlock from '../../components/product/ProductBlock.svelte';
  import ClockIcon from '../../../assets/clock.png';

  const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

  export let briefing;
  export let problem;
  export let user;
</script>

<AppSection class="product-description">
  <div class="product-description__container">
    <ProductBlock title="Problema" content={problem} icon="https://res.cloudinary.com/dkvtpo8w1/image/upload/v1648790172/MJ%20Portafolio/iconos/Problema.png" />
    <ProductBlock title="Briefing" content={briefing} icon="https://res.cloudinary.com/dkvtpo8w1/image/upload/v1648790143/MJ%20Portafolio/iconos/Brief.png"/>
    <ProductBlock title="Usuario" content={user} icon="https://res.cloudinary.com/dkvtpo8w1/image/upload/v1648790151/MJ%20Portafolio/iconos/User.png" />
  </div>
</AppSection>

<style>
  :global(.product-description) {
    min-height: 50vh !important;
  }
  
  .product-description__container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 80%;
    align-items: center;
    justify-content: center;
    gap: 8rem;
  }
</style>