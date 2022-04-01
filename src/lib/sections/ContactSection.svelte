<script>
  import AppSection from "../AppSection.svelte";
  import ContactSocialMedia from '../components/contact/ContactSocialMedia.svelte';
  import ContactTriggerButton from "../components/contact/ContactTriggerButton.svelte";
  import LinkedInLogo from '../../assets/linkedin-logo.png';
  import EmailLogo from '../../assets/email-logo.png';
  
  let shouldDisplaySocialInformation = false;

  function handleSocialMediaDisplay (event) {
    shouldDisplaySocialInformation = event.detail;
  }
</script>

<AppSection class="contact-section">
  <ContactTriggerButton on:change={handleSocialMediaDisplay} /> 
  {#if !shouldDisplaySocialInformation}
    <p class="contact-section__title">Contáctame</p>
  {:else}
    <div class="contact-section__social-media">
      <ContactSocialMedia name="LinkedIn" logo={LinkedInLogo} url="https://www.linkedin.com/in/mariajosé-navarijo-a817b41b4" />
      <ContactSocialMedia name="Correo" logo={EmailLogo} type="mail" url="mj.navarijo1900@gmail.com" />
    </div>
  {/if}
</AppSection>

<style>
  :global(.contact-section) {
    --gray-300: hsl(210, 15%, 89%);

    background-color: var(--gray-300) !important; /* Remove important */
    min-height: 50vh !important;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .contact-section__title {
    color: hsla(0, 0%, 68%, 1);
    text-transform: uppercase;
    letter-spacing: 10%;
    font-size: 1.5rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
  }

  .contact-section__social-media {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5rem;
  }

  @media only screen and (max-width: 720px) {
    .contact-section__social-media {
      grid-template-columns:  1fr;
      gap: 1rem;
    }
  }

</style>