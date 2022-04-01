<script>
  import { onMount } from 'svelte';
    
  import ProductHeaderSection from '../sections/product-section/ProductHeaderSection.svelte';
  import ProductDescription from '../sections/product-section/ProductDescription.svelte';
  import ProductConcept from '../sections/product-section/ProductConcept.svelte';
  import ProductDimensions from '../sections/product-section/ProductDimensions.svelte';
  import ProductFunctionality from '../sections/product-section/ProductFunctionality.svelte';
  import ProductOwners from '../sections/product-section/ProductOwners.svelte'

  import { products } from '../../data/products';

  let product = {};

  onMount (() => {
    const productName = window.location.pathname.replace('/producto/', '');
    product = products[productName];
  })
</script>

<div>
  <ProductHeaderSection title={product.name} headerImage={product.headerImage} colaboration={product.colaboration} />
  <ProductDescription briefing={product.briefing} problem={product.problem} user={product.user} />
  <ProductConcept concept={product.concept} description={product.conceptDescription} />
  {#if product.dimentions}
    <ProductDimensions />
  {/if}
  <ProductFunctionality functionality={product.functionality} materials={product.materials} />
</div>