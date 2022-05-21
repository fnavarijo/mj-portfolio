<script>
  import { onMount } from 'svelte';

  import LinkedInLogo from '../../assets/linkedin-logo.png';
  import BehanceLogo from '../../assets/behance.png';

  import SocialLink from '../components/common/SocialLink.svelte';
  import AppSection from '../AppSection.svelte';

  let shouldAnimateSubtitle = false;

  function animationHandler({ animationName }) {
    if (animationName === 'fadeIn') {
      shouldAnimateSubtitle = true;
    }
  }

  onMount(function () {
    document
      .getElementById('title')
      .addEventListener('animationend', animationHandler);
  });
</script>

<AppSection class="home-container">
  <header class="home__header">
    <h1 class="home__header-title animate__animated animate__fadeIn" id="title">
      MJ.
    </h1>
    <span
      class="home__header-subtitle animate__animated"
      class:animate__fadeIn={shouldAnimateSubtitle}
      id="subtitle"
    >
      Product Designer
    </span>
  </header>
  <div class="home__quote">
    <span> "Failing doesn't mean you are a failure" </span>
    <span>Brad Henry</span>
  </div>
  <div class="home__social">
    <SocialLink
      link="https://www.behance.net/mariajonavarij"
      image={BehanceLogo}
      class="home__social-icon"
    />
    <SocialLink
      link="https://www.linkedin.com/in/mariajosenavarijo"
      image={LinkedInLogo}
      class="home__social-icon"
    />
  </div>
  <div class="decoration-circle" />
  <div class="decoration-circle decoration-circle--outline" />
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
    z-index: 10;
    position: relative;
  }

  .home__header-subtitle {
    font-size: 1.5rem;
    font-family: 'Raleway', sans-serif;
    letter-spacing: 0.4em;
    font-weight: 300;
    opacity: 0;
    position: relative;
    z-index: 10;
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
    background: #c56925;
    right: -10%;
    z-index: 5;
  }

  .decoration-circle--outline {
    background-color: #fff;
    border: 0.5rem solid #a09f58;
    top: -5%;
    left: -5%;
    z-index: 0;
  }

  .home__social {
    display: flex;
    position: absolute;
    right: 1rem;
    top: 1rem;
  }

  :global(.home__social-icon) {
    margin-right: 1rem;
  }

  @media only screen and (max-width: 720px) {
    /* Work on media queries */
  }
</style>
