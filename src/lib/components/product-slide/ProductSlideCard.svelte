<script>
  export let name;
  export let image;
</script>

<div class="slide-card" style="--image-url: url({image})" >
  <div class="slide-card__background"></div>
  <div class="slide-card__name">
    <span>{name}</span>
    <hr class="slide-card__name-separator"/>
  </div>
</div>

<style>
  .slide-card {   
    height: 40rem;
    padding: 0 1rem;
    position: relative;
  }

  .slide-card__background {
    background-image: var(--image-url);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 100%;
    width: 100%;
    border-radius: 0.5rem;
  }

  .slide-card__name {
    visibility: hidden;
    opacity: 0;
    height: 100%;
    width: calc(100% - 2rem);
    margin-left: 1rem;
    background-color: rgba(33, 30, 28, 0.6);
    color: #F3F2F2;
    font-family: 'Cormorant Garamond', serif;
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 0.5rem;
    text-align: center;
    padding: 2rem;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  .slide-card__name-separator {
    width: 0;
    margin-top: 1rem;
    transition: width 0.2s cubic-bezier(0.42, 0, 0, 0.99);
  }

  .slide-card:hover > .slide-card__name {
    visibility: visible;
    opacity: 1;
  }

  .slide-card:hover .slide-card__name-separator {
    width: 30%;
  }
</style>
