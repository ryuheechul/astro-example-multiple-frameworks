<!-- @component
A counter written with Svelte
-->
<script lang="ts">
  import SvelteCounter from './SvelteCounter.svelte';
  const handler = () => alert("this works because it's still coming froms svelte");
</script>

<SvelteCounter {handler}>
  <h1>Counter is wrapped and a function prop is passed from Svelte Wrapper!</h1>
</SvelteCounter>
