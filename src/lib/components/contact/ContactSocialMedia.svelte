<script>
  export let name;
  export let logo;
  export let alt = '';
  export let url = '';
  export let type = '';

  function getLink() {
    if (type === 'mail') {
      return `mailto: ${url}`;
    }

    return url;
  }

  // function 

</script>

<div class="contact-social-media">
  <a href={getLink()} target="__blank" class="contact-social-media__link">
    <img class="contact-social-media__logo" src={logo} alt={alt}>
    <span>{name}</span>
  </a>
</div>

<style>
.contact-social-media__link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #211E1C;
}

.contact-social-media__logo {
  width: 2rem;
  aspect-ratio: 1;
  margin-right: 1.5rem;
}
</style>