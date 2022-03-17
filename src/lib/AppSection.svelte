<script>
  let className = '';
  let id = '';

  export { className as class, id };
</script>

<article {id} class={`app-article ${className}`}>
  Something inside
</article>

<style>
.app-article {
  --base-background-color: rgb(194, 194, 194);
  
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: var(--background-color, var(--base-background-color));
}
</style>