<script>
  import throttle from 'lodash/throttle';
  import { onMount } from 'svelte';
  
  let sectionIndex = 0;
  // TODO: Get the ids based on slots and not fixed like this
  let sections = ['main-section', 'next-section', 'last-section'];

  function getElementTopPosition (id) {
    const element = document.getElementById(id);
    const [ DOMRect ] = element.getClientRects();
    return DOMRect.top;
  }
  
  function scrollToNextSection ({ deltaY }) {
    const scrollDirection = Math.sign(deltaY);

    sectionIndex = Math.min(Math.max((sectionIndex + scrollDirection), 0), sections.length - 1);
    const nextSectionTop = getElementTopPosition(sections[sectionIndex]);
    
    window.scrollBy({
      top: nextSectionTop,
      behavior: 'smooth'
    });
  }

  onMount(() => {
    const throttledScroll = throttle(scrollToNextSection, 300, { trailing: false });
    document.addEventListener('wheel', throttledScroll);
  })
</script>

<div>
  <slot></slot>
</div>