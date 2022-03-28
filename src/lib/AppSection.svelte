<script>
  let className = '';
  let id = '';

  export { className as class, id };
</script>

<article {id} class={`app-article ${className}`}>
  <slot />
</article>

<style>
.app-article {
  --base-background-color: #fff;
  
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: var(--background-color, var(--base-background-color));
}
</style>