<script>
  export let image;
</script>

<div class="carousel-image">
  <img class="carousel-image__image" src={image} alt="">
</div>

<style>
  .carousel-image {
    width: 100%;
    padding: 1rem;
  }

  .carousel-image__image {
    height: 100%;
    object-fit: cover;
  }
</style>