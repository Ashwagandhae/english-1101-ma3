<script lang="ts">
	import anime from 'animejs';
	import { onMount } from 'svelte';
	let { title, link } = $props();

	let elem: HTMLElement;

	let animation: anime.AnimeInstance;
	onMount(() => {
		animation = anime({
			targets: [elem],
			rotate: 360,
			duration: 3000,
			loop: true,
			autoplay: false
		});
	});
</script>

<section>
	<a href={link} onmouseenter={() => animation.play()} onmouseleave={() => animation.pause()}>
		<div class="circle" bind:this={elem}>
			<h1>{title}</h1>
		</div>
	</a>
</section>

<style>
	section {
		width: 100%;
		display: flex;
		flex-direction: row;
	}
	section:nth-child(even) {
		flex-direction: row-reverse;
	}
	.circle {
		transform-origin: 50% 50%;
		width: calc(min(100vw - 10rem, 60vh));
		aspect-ratio: 1;
		border-radius: 100%;
		background: orange;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		padding: 3rem;
		text-align: center;
	}
	h1 {
		font-size: 3rem;
	}

	a {
		display: block;
		text-decoration: none;
		color: inherit;
	}
</style>
