<script>
  import AppSection from '../../AppSection.svelte';
  import ProductBlock from '../../components/product/ProductBlock.svelte';
  import ClockIcon from '../../../assets/clock.png';
</script>

<AppSection class="product-description">
  <div>
    <header class="product-description__header">
      <h2>Briefing</h2>
    </header>
    <p class="product-description__content">
      <slot />
    </p>
  </div>

  <aside class="product-description__materials-container">
    <div class="product-description__materials-header-wrapper">
      <span class="product-description__materials-header">Materials</span>
      <hr class="product-description__materials-separator" />
    </div>
    <p class="product-description__materials-list">
      <slot name="materials" />
    </p>
  </aside>
</AppSection>

<style>
  :global(.product-description) {
    min-height: 25vh !important;
    display: grid !important;
    grid-template-columns: 1fr 20rem;
    gap: 3rem;
    flex-direction: column;
    padding: 3rem 6rem !important;
    margin-top: 4rem;
  }

  .product-description__container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 80%;
    align-items: center;
    justify-content: center;
    gap: 8rem;
  }

  .product-description__header {
    font-size: 2rem;
    text-transform: uppercase;
    letter-spacing: 0.3rem;
  }

  .product-description__materials-container {
    background-color: #f6f6f0;
    padding: 2.5rem 3rem;
    min-height: 50%;
    border-radius: 0.5rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .product-description__materials-header-wrapper {
    text-align: center;
  }

  .product-description__materials-header {
    font-family: var(--heading-font);
    font-size: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    font-weight: bold;
  }

  .product-description__materials-separator {
    width: 50%;
    margin-bottom: 1rem;
    margin: 0.5rem auto 1rem auto;
  }

  .product-description__materials-list {
    text-align: left;
  }

  @media only screen and (max-width: 720px) {
    :global(.product-description) {
      grid-template-columns: 1fr;
      padding: 3rem 2rem !important;
    }

    .product-description__header {
      font-size: 1.5rem;
    }
  }
</style>
