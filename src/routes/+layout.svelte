<script>
	import '../app.css';
	export const prerender = true;
</script>

<slot />

<style lang="scss">
	:global(body) {
		@apply bg-gradient-to-r from-gray-900 to-gray-800;
		@apply text-white;
		@apply max-w-7xl mx-auto;
	}

	:global(a) {
		@apply text-blue-400;
		@apply hover:text-blue-800;
	}
</style>
