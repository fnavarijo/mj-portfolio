<script>
  let className;
  export let link;
  export let image;
  export { className as class };
</script>

<a href={link} class={className} target="_blank">
  <img class="social-link__image" src={image} alt="" />
</a>

<style>
  .social-link__image {
    width: 2rem;
    height: 2rem;
  }
</style>
