<script>
  import AppSection from './lib/AppSection.svelte';
  import HomeSection from './lib/sections/HomeSection.svelte';
  import ProductsSection from './lib/sections/ProductsSection.svelte';
  import AppSectionScroller from './lib/AppSectionScroller.svelte';
</script>

<main>
  <AppSectionScroller>
    <HomeSection />
    <ProductsSection />
    <AppSection id="last-section" />
  </AppSectionScroller>
</main>

<style>
* {
  font-family: 'Montserrat', sans-serif;
}

:global(body) {
  overflow-y: hidden;
}
</style>
