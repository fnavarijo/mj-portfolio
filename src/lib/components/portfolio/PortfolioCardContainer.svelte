<div class="portfolio-container">
  <slot />
</div>

<style>
  .portfolio-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  @media only screen and (max-width: 720px) {
    .portfolio-container {
      grid-template-columns: repeat(1, 1fr);
    }
  }
</style>