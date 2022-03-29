<script>
  import { createEventDispatcher } from "svelte";

  let isInformationDisplayed = false;

  const dispatch = createEventDispatcher();

  function triggerContactInformation () {
    isInformationDisplayed = !isInformationDisplayed;
    dispatch('change', isInformationDisplayed);
  }
</script>

<div
  class="trigger-button"
  on:click={triggerContactInformation}
>
  <div
    class="trigger-button__circle"
    class:trigger-button__circle--end={isInformationDisplayed}
  ></div>
</div>

<style>
  .trigger-button {
    --input-height: 7rem;

    position: relative;
    display: flex;
    width: 30%;
    height: var(--input-height);
    border-radius: 4rem;
    margin-bottom: 2rem;
    cursor: pointer;
    
    box-shadow: 0px 4px 4px rgba(255, 255, 255, 0.25), inset 6px 3px 11px rgba(9, 9, 9, 0.13);;
  }

  .trigger-button__circle {
    aspect-ratio: 1;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    border-radius: 100%;
    background-color: var(--gray-300);
    box-shadow: inset 0px 4px 7px rgba(0, 0, 0, 0.17);
    transition: left 0.2s cubic-bezier(0, 0.41, 0.13, 0.99);
  }
  
  .trigger-button__circle--end {
    left: calc(100% - var(--input-height));
  }

  @media only screen and (max-width: 720px) {
    .trigger-button {
      --input-height: 3.5rem;
    }
  }
</style>