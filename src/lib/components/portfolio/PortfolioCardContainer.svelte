<div class="portfolio-container">
  <slot />
</div>

<style>
  .portfolio-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
</style>