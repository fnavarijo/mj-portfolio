<script>
  let name;
  let logo;
  let alt = '';

  export { name, logo, alt };
</script>

<div class="contact-social-media">
  <img class="contact-social-media__logo" src={logo} alt={alt}>
  <span>{name}</span>
</div>

<style>
.contact-social-media {
  display: flex;
  align-items: center;
}

.contact-social-media__logo {
  width: 2rem;
  aspect-ratio: 1;
  margin-right: 1.5rem;
}
</style>