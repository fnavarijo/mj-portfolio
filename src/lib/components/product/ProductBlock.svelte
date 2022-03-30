<script>
  export let title;
  export let content;
  export let icon;
</script>

<div class="product-block">
  <img class="product-block__icon" src={icon} alt="">
  <span class="product-block__title">{title}</span>
  <p class="product-block__content">{content}</p>
</div>

<style>
  .product-block {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .product-block__icon {
    width: 3rem;
    aspect-ratio: 1;
    margin-bottom: 4rem;
  }

  .product-block__title {
    font-weight: bold;
    margin-bottom: 1.5rem;
  }

  .product-block__content {
    text-align: center;
  }
</style>