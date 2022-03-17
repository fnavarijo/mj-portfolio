<script>
  import AppSection from './lib/AppSection.svelte';
  import HomeSection from './lib/sections/HomeSection.svelte';
  import AppSectionScroller from './lib/AppSectionScroller.svelte';
</script>

<main>
  <AppSectionScroller>
    <HomeSection />
    <AppSection id="next-section" --background-color="rgb(19, 141, 131)" />
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
