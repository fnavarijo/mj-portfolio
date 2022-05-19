<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  function onClick() {
    dispatch('click', image);
  }

  export let image;
</script>

<div class="carousel-image">
  <img class="carousel-image__image" src={image} alt="" on:click={onClick} />
</div>

<style>
  .carousel-image {
    width: 100%;
    padding: 1rem;
  }

  .carousel-image__image {
    height: 100%;
    object-fit: cover;
    cursor: pointer;
    border-radius: 0.5rem;
  }
</style>
