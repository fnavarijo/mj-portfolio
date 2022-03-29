<script>
  import ProfileImage from '../img/profile.jpg';
  import AppSection from '../AppSection.svelte';
</script>

<AppSection class="home-container">
  <div class="home-section">
    <img src={ProfileImage} alt="Fotografía de Mariajosé" class="home-section__profile">
    <div class="home-section__description">
      <span class="home-section__description-salute">¡hola!</span>
      <p class="home-section__description-text">Soy Mariajosé Navarijo. Me gusta armar rompecabezas porque me agrada que todo tenga fluidez y sentido.</p>
    </div>
  </div>
</AppSection>

<style>
:global(.home-container) {
  display: flex;
  align-items: center;
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
  justify-self: end;
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

.home-section__description-text {
  position: inherit;
  font-weight: 300;
}

.home-section__description-salute {
  --salute-color: #d1d1d166;

  content: '¡hola!';
  position: absolute;
  font-size: 8rem;
  font-weight: 500;
  color: var(--salute-color);
  z-index: 0;
  top: 0;
  left: 0;
  transform: translate(-25%, -60%);
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

  .home-section__description-salute {
    font-size: 3rem;
    transform: translate(-10%, -60%);
  }
}
/* Work on media queries */
</style>