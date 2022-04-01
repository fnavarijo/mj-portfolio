<script>
  import { onMount } from 'svelte';
  
  import ProductHeaderSection from '../sections/product-section-2d/ProductHeaderSection.svelte';
  import ProductDescription from '../sections/product-section-2d/ProductDescription.svelte';
  import ProductImage from '../sections/product-section-2d/ProductImage.svelte';
  
  import { products } from '../../data/products';

  let product = {};

  onMount (() => {
    const productName = window.location.pathname.replace('/producto-2d/', '');
    product = products[productName];
  })
</script>

<div>
  <!-- <ProductHeaderSection />
  <ProductDescription /> -->
  <ProductImage image={product.image} />
</div>
