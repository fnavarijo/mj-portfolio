<script>
  import AppSection from '../../AppSection.svelte';
  import ProductBlock from '../../components/product/ProductBlock.svelte';
  import ClockIcon from '../../../assets/clock.png';

  const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

  export let briefing;
  export let problem;
  export let user;
</script>

<AppSection class="product-description">
  <div>
    <header class="product-description__header">
      <h2>Briefing</h2>
    </header>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hendrerit gravida rutrum quisque non tellus. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. A cras semper auctor neque vitae. Augue ut lectus arcu bibendum at varius vel. Et leo duis ut diam. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Metus aliquam eleifend mi in nulla posuere. Euismod in pellentesque massa placerat duis ultricies lacus. Phasellus egestas tellus rutrum tellus pellentesque eu. Id venenatis a condimentum vitae. Massa massa ultricies mi quis. Cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo. Mauris cursus mattis molestie a iaculis at erat pellentesque.
    </p>
  </div>

  <aside class="product-description__materials-container">
    <div class="product-description__materials-header-wrapper">
      <span class="product-description__materials-header">Materiales</span>
      <hr class="product-description__materials-separator" />
    </div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
  </aside>

  <!-- <div class="product-description__container">
    <ProductBlock title="Problema" content={problem} icon="https://res.cloudinary.com/dkvtpo8w1/image/upload/v1648790172/MJ%20Portafolio/iconos/Problema.png" />
    <ProductBlock title="Briefing" content={briefing} icon="https://res.cloudinary.com/dkvtpo8w1/image/upload/v1648790143/MJ%20Portafolio/iconos/Brief.png"/>
    <ProductBlock title="Usuario" content={user} icon="https://res.cloudinary.com/dkvtpo8w1/image/upload/v1648790151/MJ%20Portafolio/iconos/User.png" />
  </div> -->
</AppSection>

<style>
  :global(.product-description) {
    min-height: 25vh !important;
    display: grid !important;
    grid-template-columns: 1fr 20rem;
    gap: 3rem;
    flex-direction: column;
    padding: 3rem 6rem !important;
    margin-top: 4rem;
  }
  
  .product-description__container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 80%;
    align-items: center;
    justify-content: center;
    gap: 8rem;
  }

  .product-description__header {
    font-family: 'Cormorant Garamond', serif;
    font-size: 2rem;
    text-transform: uppercase;
    letter-spacing: 0.3rem;
  }

  .product-description__materials-container {
    background-color: #F6F6F0;
    padding: 2.5rem 3rem;
    min-height: 50%;
    border-radius: 0.5rem;
  }

.product-description__materials-header-wrapper {
  text-align: center;
}

  .product-description__materials-header {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    font-weight: bold;
  }

  .product-description__materials-separator {
    width: 50%;
    margin-bottom: 1rem;
    margin: 0.5rem auto 1rem auto;
  }
</style>