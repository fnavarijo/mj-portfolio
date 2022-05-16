<script>
  import AppSection from '../../AppSection.svelte';
  import ProductBlock from '../../components/product/ProductBlock.svelte';
  import ClockIcon from '../../../assets/clock.png';

  const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

</script>

<AppSection class="product-description">
  <div class="product-description__container">
    <ProductBlock title="Problema" content={loremIpsum} icon={ClockIcon} />
    <ProductBlock title="Briefing" content={loremIpsum} icon={ClockIcon}/>
    <ProductBlock title="Usuario" content={loremIpsum} icon={ClockIcon} />
  </div>
</AppSection>

<style>
  :global(.product-description) {
    min-height: 25vh !important;
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