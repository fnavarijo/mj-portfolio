<script>
  let className = '';
  let id = '';
  let style = '';

  export { className as class, id, style };
</script>

<article {id} class={`app-article ${className}`} {style}>
  <slot />
</article>

<style>
.app-article {
  --base-background-color: #fff;
  
  width: 100%;
  min-height: 100vh;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  background-color: var(--background-color, var(--base-background-color));
}
</style>