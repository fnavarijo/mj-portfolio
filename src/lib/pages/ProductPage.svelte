<script>
  import { onMount } from 'svelte';

  import ProductHeaderSection from '../sections/product-section/ProductHeaderSection.svelte';
  import ProductDescription from '../sections/product-section/ProductDescription.svelte';
  import ProductConcept from '../sections/product-section/ProductConcept.svelte';
  import ProductDimensions from '../sections/product-section/ProductDimensions.svelte';
  import ProductFunctionality from '../sections/product-section/ProductFunctionality.svelte';
  import ProductOwners from '../sections/product-section/ProductOwners.svelte';
  import ProductCarousel from '../sections/product-section/ProductCarousel.svelte';

  onMount(() => {
    // On route change, it keeps the same Y position.
    // This resets the position on mount
    window.scrollTo(0, 0);
  });

  export let title;
  export let header;
  export let colaboration = '';
  export let concept;
  export let carousel;
  export let materials;
</script>

<div>
  <ProductHeaderSection {title} headerImage={header} {colaboration} />
  <div class="product-content">
    <ProductDescription>
      <slot />
      <div slot="materials">{materials}</div>
    </ProductDescription>
    <ProductConcept {concept} description={''} />
    {#if carousel}
      <ProductCarousel images={carousel} />
    {/if}
    <!-- {#if product.dimentions}
      <ProductDimensions />
    {/if} -->
    <!-- <ProductFunctionality functionality={product.functionality} materials={product.materials} /> -->
  </div>
</div>

<style>
  .product-content {
    max-width: 1152px;
    margin: 0 auto;
  }
</style>
