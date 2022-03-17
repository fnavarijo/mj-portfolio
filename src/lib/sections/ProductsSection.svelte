<script>
  import AppSection from '../AppSection.svelte';
</script>

<AppSection id="next-section">
  <div class="products-section">
    <div class="products-section__product product">
      <span class="product__number">01.</span>
      <h2 class="product__title">Tulio</h2>
      <button>Visitar</button>
    </div>
  </div>
</AppSection>

<style>
.products-section {
  width: 100%;
  height: 100%;
  background-color: #a33024;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-template-areas:  "a b"
                        "c d";
}

.products-section__product {
  grid-area: c;
  align-self: flex-end;
  margin: 0 0 4rem 4rem;
}

.product__number {
  font-size: 4rem;
}

.product__title {
  font-size: 8rem;
}
</style>