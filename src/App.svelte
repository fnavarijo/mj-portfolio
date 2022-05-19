<script>
  import 'animate.css';

  import { Router, Link, Route } from 'svelte-routing';
  import HomePage from './lib/pages/HomePage.svelte';
  import ProductPage from './lib/pages/ProductPage.svelte';
  import Product2DPage from './lib/pages/Product2DPage.svelte';

  import FoodDesign from './data/FoodDesign.svx';
  import Curvas from './data/Curvas.svx';

  export let url = '';
</script>

<main>
  <Router {url}>
    <Route path="/producto-2d/:name">
      <Product2DPage />
    </Route>
    <Route path="/producto/food-design">
      <FoodDesign />
    </Route>
    <Route path="/producto/curvas">
      <Curvas />
    </Route>
    <!-- <Route path="/producto/:name">
      <ProductPage />
    </Route> -->
    <Route path="/" component={HomePage} />
  </Router>
</main>

<style>
  * {
    font-family: 'Montserrat', sans-serif;
  }
</style>
