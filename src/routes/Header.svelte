<script>
	import { theme } from '../store/theme';

	import Moon from "$lib/icons/Moon.svelte";
	import Sun from "$lib/icons/Sun.svelte";
	function toggleTheme() {
		console.log('xd')
		const theme = localStorage.getItem('theme')
		document.querySelector('html')?.classList.add('dark');
		

	}
</script>
<header class="bg-[#fafafa] text-[#111517] dark:text-white  dark:bg-[#2b3945] py-12 px-4 flex items-center justify-between">
	<h1>
		Where in the world?
	</h1>
	<button class="flex items-center gap-4" on:click={toggleTheme}>
		{#if $theme.current === 'light' }
		<Sun />Light mode 
		{:else}
		<Moon />Dark mode
		{/if}
	</button>
</header>