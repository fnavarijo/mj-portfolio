<script>
  import AppSection from "../AppSection.svelte";

</script>

<AppSection class="contact-section">
  <p class="contact-section__title">Contáctame</p>
  <div>
    <img src="" alt="">
    <span>Linkedin</span>
  </div>
</AppSection>

<style>
  :global(.contact-section) {
    background-color: hsla(210, 15%, 89%, 1) !important; /* Remove important */
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
</style>