<script>
  import AppSection from './lib/AppSection.svelte';
  import HomeSection from './lib/sections/HomeSection.svelte';
  import ProductsSection from './lib/sections/ProductsSection.svelte';
</script>

<main>
  <HomeSection />
  <ProductsSection />
  <AppSection id="last-section" />
</main>

<style>
* {
  font-family: 'Montserrat', sans-serif;
}

</style>
