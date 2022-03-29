<script>
  let title;
  let backgroundImage = 'https://res.cloudinary.com/dkvtpo8w1/image/upload/v1648497608/MJ%20Portafolio/sumaid-pal-singh-bakshi-EKoGseH8NKs-unsplash.jpg';

  export { title, backgroundImage };
</script>

<section class="carousel-slide" style={`--background-image: url('${backgroundImage}')`}>
  <header class="carousel-slide__header-container">
    <h2 class="carousel-slide__header">
      {title}
    </h2>
  </header>
</section>

<style>
  .carousel-slide {
    --default-image: url('https://res.cloudinary.com/dkvtpo8w1/image/upload/v1648497608/MJ%20Portafolio/sumaid-pal-singh-bakshi-EKoGseH8NKs-unsplash.jpg');

    height: 100vh;
    width: 100%;
    background: var(--background-image, var(--default-image));
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    position: relative;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-template-areas:  "a b"
                          "c d";
  }

  .carousel-slide__header-container {
    position: absolute;
    grid-area: c;
    align-self: flex-end;
    color: #fff;
    margin: 0 0 2rem 5rem;
  }

  .carousel-slide__header {
    font-size: 6rem;

  }
</style>