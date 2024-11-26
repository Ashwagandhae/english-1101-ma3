<script lang="ts">
	import '../global.css';
	import Page from '$lib/components/Page.svelte';
</script>

<div class="header">
	<h1><a href="./">Atlanta Food Bank</a></h1>
</div>
<main>
	<div>
		<slot></slot>
	</div>
</main>

<style>
	.header {
		position: sticky;
		top: 0;
		left: 0;
		background: lightgreen;
		padding: 0.5rem;
	}
	h1 {
		margin: 0;
	}
	main {
		width: 100%;
		padding: 3rem;
		box-sizing: border-box;
	}
	a {
		text-decoration: none;
		color: inherit;
	}
	a:hover {
		text-decoration: underline;
	}
</style>
