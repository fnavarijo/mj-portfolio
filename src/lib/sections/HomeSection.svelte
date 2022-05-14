<script>
  import AppSection from '../AppSection.svelte';
</script>

<AppSection class="home-container">
  <header class="home__header">
    <h1 class="home__header-title">MJ.</h1>
    <span class="home__header-subtitle">Product Designer</span>
  </header>
  <div class="home__quote">
    <span>
      "Failing doesn't mean you are a failure"
    </span>
    <span>Brad Henry</span>
  </div>
  <div class="decoration-circle"></div>
  <div class="decoration-circle decoration-circle--outline"></div>
</AppSection>

<style>
:global(.home-container) {
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.home__header-title {
  font-size: 6rem;
  font-family: 'Cormorant Garamond', serif;
  font-weight: bold;
  text-align: center;
}

.home__header-subtitle {
  font-size: 1.5rem;
  font-family: 'Raleway', sans-serif;
  letter-spacing: 0.4em;
  font-weight: 300;
}

.home__quote {
  font-family: 'Raleway', sans-serif;
  font-weight: 300;
  position: absolute;
  bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  letter-spacing: 0.1rem;
}

.decoration-circle {
  height: 40vh;
  width: 40vh;
  border-radius: 100%;
  position: absolute;
  background: #C56925;
  right: -10%;
}

.decoration-circle--outline {
  background-color: #fff;
  border: 0.5rem solid #A09F58;
  top: -5%;
  left: -5%;
}


@media only screen and (max-width: 720px) {
  /* Work on media queries */
}
</style>