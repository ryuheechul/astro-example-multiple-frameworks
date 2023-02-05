<!-- @component
A counter written with Svelte
-->
<script lang="ts">
  export let handler = () => alert('internally owned handler');
  let count = 0;

  function add() {
    count += 1;
  }

  function subtract() {
    count -= 1;
  }
</script>

<div class="counter">
  <button on:click={subtract}>-</button>
  <pre>{count}</pre>
  <button on:click={add}>+</button>
  <button on:click={handler}>=</button>
</div>
<div class="counter-message">
  <slot />
</div>
