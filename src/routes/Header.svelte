<script>
	import Moon from "$lib/icons/Moon.svelte";
	import Sun from "$lib/icons/Sun.svelte";
	import {theme} from "../store/theme"

	$: currentTheme = $theme === 'light' ? 'color: red' : 'color: blue'

</script>
<header class="flex items-center justify-between">
	
	<h1 style={currentTheme}>
		Where in the world?
	</h1>
	<button class="flex items-center">
		{#if $theme === 'light' }
		Light mode <Sun />
		{:else}
		Dark mode<Moon />
		{/if}
	</button>
</header>