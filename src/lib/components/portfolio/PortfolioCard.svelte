<div class="portfolio-card">
  <div class="portfolio-card__overlay">
    <hr class="portfolio-card__separator" />
    <span class="portfolio-card__name">Nombre</span>
    <p class="portfolio-card__description">Lorem ipsum dolor sit amet, consectetur adipiscing 
      elit, sed do eiusmod tempor incididunt ut labore et 
      dolore magna aliqua. 
      Lorem ipsum dolor sit amet, consectetur adipiscing </p>
    <button class="portfolio-card__button">Visitar</button>
  </div>
</div>

<style>
  .portfolio-card {
    width: 100%;
    background: url('https://res.cloudinary.com/dkvtpo8w1/image/upload/c_scale,w_1024/v1648520329/MJ%20Portafolio/sumaid-pal-singh-bakshi-x7dnSyIG-Q4-unsplash.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    aspect-ratio: 2 / 3;
    position: relative;
    border-radius: 8px;

    box-shadow: 5px 12px 20px rgb(0 0 0 / 28%);
  }

  .portfolio-card__overlay:hover {
    opacity: 1;
    background: url('https://res.cloudinary.com/dkvtpo8w1/image/upload/c_scale,w_1024/v1648520329/MJ%20Portafolio/sumaid-pal-singh-bakshi-x7dnSyIG-Q4-unsplash.jpg'), rgba(red, green, blue, 0.5);
  }

  .portfolio-card__overlay {
    background-color: rgba(214, 150, 103, 0.24);
    color: #fff;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 4rem 2rem;
    opacity: 0;
    transition: opacity 0.1s ease-in;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .portfolio-card__separator {
    width: 20%;
    height: 0.25rem;
    background-color: white;
    border: none;
    margin-bottom: 1.5rem;
  }

  .portfolio-card__name {
    display: block;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
    text-transform: uppercase;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
  }

  .portfolio-card__description {
    margin-bottom: 1.5rem;
  }

  .portfolio-card__button {
    background: hsla(25, 68%, 46%, 1);
    color: white;
    text-transform: uppercase;
    border: none;
    border-radius: 2.1875rem;
    padding: 0.25rem 0.75rem;
    font-weight: bold;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
  }
</style>