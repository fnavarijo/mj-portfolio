<script>
  import throttle from 'lodash/throttle';
  import { onMount } from 'svelte';

  import AppSection from './lib/AppSection.svelte';

  let sectionIndex = 0;
  let sections = ['main-section', 'next-section', 'last-section'];

  function getElementTopPosition (id = '') {
    const element = document.getElementById(id);
    const [ DOMRect ] = element.getClientRects();
    return DOMRect.top;
  }
  
  function scrollToNextSection (event) {
    const scrollDirection = Math.sign(event.deltaY);

    sectionIndex = Math.min(Math.max((sectionIndex + scrollDirection), 0), sections.length - 1);
    const nextSectionTop = getElementTopPosition(sections[sectionIndex]);
    
    window.scrollBy({
      top: nextSectionTop,
      behavior: 'smooth'
    });
  }

  onMount(() => {
    const throttledScroll = throttle(scrollToNextSection, 500, { trailing: false });
    document.addEventListener('wheel', throttledScroll);
  })
</script>

<main>
  <AppSection id="main-section" />
  <AppSection id="next-section" --background-color="rgb(19, 141, 131)" />
  <AppSection id="last-section" />
</main>

<style>
* {
  font-family: 'Montserrat', sans-serif;
}

:global(body) {
  overflow-y: hidden;
}
</style>
