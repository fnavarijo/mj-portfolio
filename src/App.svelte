<script>
  import 'animate.css';

  import { Router, Link, Route } from 'svelte-routing';
  import HomePage from './lib/pages/HomePage.svelte';
  import ProductPage from './lib/pages/ProductPage.svelte';
  import Product2DPage from './lib/pages/Product2DPage.svelte';

  import FoodDesign from './data/FoodDesign.svx';
  import Curvas from './data/Curvas.svx';
  import Tulio from './data/Tulio.svx';
  import Lumini from './data/Lumini.svx';
  import NudoGordiano from './data/NudoGordiano.svx';
  import CorrectPostura from './data/CorrectorPostura.svx';
  import BSP from './data/BSP.svx';
  import Sense from './data/Sense.svx';

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
    <Route path="/producto/tulio">
      <Tulio />
    </Route>
    <Route path="/producto/lumini">
      <Lumini />
    </Route>
    <Route path="/producto/nudo-gordiano">
      <NudoGordiano />
    </Route>
    <Route path="/producto/corrector-de-postura">
      <CorrectPostura />
    </Route>
    <Route path="/producto/bsp">
      <BSP />
    </Route>
    <Route path="/producto/sense">
      <Sense />
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
