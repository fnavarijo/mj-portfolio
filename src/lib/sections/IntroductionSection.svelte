<script>
  import ProfileImage from '../img/profile.jpg';
  import AppSection from '../AppSection.svelte';
</script>

<AppSection class="introduction-container">
  <div class="home-section">
    <div class="circle-decoration" />
    <div class="home-section__description">
      <h2 class="home-section__name">Mariajosé</h2>
      <hr class="home-section__separator" />
      <p class="home-section__description-text">
        I like to put puzzles together because I like everything to flow, make
        sense and generate harmony in the design.
      </p>
    </div>
    <img
      src="https://res.cloudinary.com/dkvtpo8w1/image/upload/v1648788220/MJ%20Portafolio/Mariajos%C3%A9_Navarijo.png"
      alt="Fotografía de Mariajosé"
      class="home-section__profile"
    />
  </div>
</AppSection>

<style>
  :global(.introduction-container) {
    display: flex;
    align-items: center;
    position: relative;
    overflow: visible;
  }

  .circle-decoration {
    background-color: var(--primary-500);
    opacity: 10%;
    width: 80vw;
    aspect-ratio: 1;
    position: absolute;
    left: -20%;
    border-radius: 100%;
    z-index: 5;
  }

  .home-section {
    width: 100vw;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }

  .home-section__profile {
    border-radius: 100%;
    width: 50%;
    justify-self: center;
    margin-right: 3rem;
  }

  .home-section__description {
    width: 70%;
    max-width: 28rem;
    margin: 0 auto;
    letter-spacing: 0.5ch;
    position: relative;
    z-index: 5;
  }

  .home-section__name {
    margin-bottom: 0.875rem;
    font-size: 4rem;
    text-transform: uppercase;
    letter-spacing: 0.125rem;
  }

  .home-section__separator {
    width: 25%;
    margin-bottom: 1.5rem;
  }

  .home-section__description-text {
    position: inherit;
    font-weight: 300;
    letter-spacing: 0.25rem;
  }

  @media only screen and (max-width: 720px) {
    :global(.home-container) {
      min-height: 70vh !important;
    }

    .home-section {
      grid-template-columns: 1fr;
      height: 70vh;
      justify-content: center;
    }

    .home-section__profile {
      justify-self: center;
      margin: 0;
    }

    .home-section__name {
      font-size: 2rem;
    }

    .home-section__description-text {
      font-size: 1rem;
    }
  }
  /* Work on media queries */
</style>
