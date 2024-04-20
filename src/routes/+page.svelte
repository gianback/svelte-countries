<script>
	import { theme } from "../store/theme";

	function toggleTheme(){
		theme.set($theme === "light" ? "dark" : "light")
	}
	


</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
<h1 class="text-red-500">
	home
</h1>
<button on:click={toggleTheme}>
	{#if $theme === "dark"}
		Dark mode
	{:else}	
		Light mode
	{/if}
</button>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}
</style>
