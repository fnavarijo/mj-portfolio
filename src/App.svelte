<script>
  import 'animate.css';
  import './style/main.css';

  import { Router, Link, Route } from 'svelte-routing';
  import HomePage from './lib/pages/HomePage.svelte';
  import ProductPage from './lib/pages/ProductPage.svelte';
  import Product2DPage from './lib/pages/Product2DPage.svelte';

  import FoodDesign from './data/FoodDesign.svx';
  import Curves from './data/Curves.svx';
  import Tulio from './data/Tulio.svx';
  import Lumini from './data/Lumini.svx';
  import GordianKnot from './data/GordianKnot.svx';
  import PostureCorrector from './data/PostureCorrector.svx';
  import BSP from './data/BSP.svx';
  import Sense from './data/Sense.svx';

  export let url = '';
</script>

<main>
  <Router {url}>
    <Route path="/producto/food-design">
      <FoodDesign />
    </Route>
    <Route path="/producto/curves">
      <Curves />
    </Route>
    <Route path="/producto/tulio">
      <Tulio />
    </Route>
    <Route path="/producto/lumini">
      <Lumini />
    </Route>
    <Route path="/producto/gordian-knot">
      <GordianKnot />
    </Route>
    <Route path="/producto/posture-corrector">
      <PostureCorrector />
    </Route>
    <Route path="/producto/bsp">
      <BSP />
    </Route>
    <Route path="/producto/sense">
      <Sense />
    </Route>
    <Route path="/" component={HomePage} />
  </Router>
</main>
