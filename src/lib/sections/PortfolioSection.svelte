<script>
  import AppSection from "../AppSection.svelte";
  import PortfolioCard from "../components/portfolio/PortfolioCard.svelte";
  import PortfolioCardContainer from "../components/portfolio/PortfolioCardContainer.svelte";
</script>

<AppSection class="portfolio-section">
  <section class="portfolio-section__container">
    <header class="portfolio-section__header">
      <h2>Portafolio</h2>
    </header>
    <div>
      <PortfolioCardContainer>
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
      </PortfolioCardContainer>
    </div>
  </section>
</AppSection>

<style>
  :global(.portfolio-section) {
    flex-direction: column;
  }

  .portfolio-section__container {
    width: 64rem;
    margin: 0 auto;
  }

  .portfolio-section__header {
    font-size: 6rem;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    text-transform: uppercase;
  }
</style>