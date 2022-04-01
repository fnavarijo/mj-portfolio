<script>
  import AppSection from '../AppSection.svelte';
</script>

<AppSection class="quote-section">
  <div class="quote-section__container">
    <p class="quote-section__quote">"Failing doesn't mean you are a failure"</p>
    <span class="quote-section__author">- Brad Henry</span>
  </div>
</AppSection>

<style>
  :global(.quote-section) {
    min-height: 30vh !important;
    /* background-color: #F0F0DB !important; */
  }

  .quote-section__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .quote-section__quote {
    font-size: 2rem;
    font-weight: bold;
  }

  .quote-section__author {
    font-size: 1.5;
    align-self: flex-end;
  }
</style>