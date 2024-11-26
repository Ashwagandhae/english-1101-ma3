<script lang="ts">
	import Section from '$lib/components/Section.svelte';
</script>

<main>
	<Section title="Atlanta Food Insecurity" link="./atlanta-food-insecurity"></Section>
	<Section title="What is the ACFB?" link="./what-is"></Section>
	<Section title="Community Impacts" link="./community-impacts"></Section>
	<Section title="What can you do?" link="./what-can-do"></Section>
	<Section title="Frequently asked questions" link="./faq"></Section>
	<h1>
		<a href="./sources">Sources</a>
	</h1>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
