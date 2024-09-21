<script lang="ts">
	import { onMount } from 'svelte';

	// Toggle between colour schemes
	let colourSwitch = false;
	let positions: any[] = [];
	let currentColour = ['#FF5F6D', '#FFC371', '#FFB75E', '#D4D5E0', '#A2C2E4', '#3A6B8F', '#1D4F6F'];
	const cyberpunkColours = [
		'#FF0099',
		'#00FFFF',
		'#00FF00',
		'#FF00FF',
		'#FF9900',
		'#9900FF',
		'#00CCFF',
		'#CC00FF'
	];

	let circleX = 0;
	let circleY = 0;

	function handleMove(event: { clientX: number; clientY: number }) {
		positions = [{ x: event.clientX, y: event.clientY, colour: handleColor() }, ...positions];
		circleX = event.clientX;
		circleY = event.clientY;

		if (positions.length > 500) {
			positions.pop();
		}
	}

	function handleColor() {
		return currentColour[Math.floor(Math.random() * currentColour.length)];
	}

	function handleColourChange() {
		colourSwitch = !colourSwitch;
		currentColour = colourSwitch
			? cyberpunkColours
			: ['#FF5F6D', '#FFC371', '#FFB75E', '#D4D5E0', '#A2C2E4', '#3A6B8F', '#1D4F6F'];
	}

</script>

<!-- Main container -->
<div on:pointermove={handleMove} class="container">
	{#each positions as pos (pos.x + '-' + pos.y)}
		<div
			class="trail"
			style="left: {pos.x}px; top: {pos.y}px; background-color: {pos.colour};"
		></div>
	{/each}
	<button on:click={handleColourChange} class="button">Change Colour</button>
</div>



<style>
	html,
	body {
		margin: 0;
		padding: 0;
		height: 100%;
		width: 100%;
		overflow: hidden;
	}

	.container {
		width: 100vw;
		height: 100vh;
		margin: 0;
		padding: 0;
		background-color: bisque;
		position: absolute;
		overflow: hidden;
	}

	.trail {
		position: absolute;
		width: 3px;
		transition: 0.2s ease-in-out;
		animation: rotate 3.5s forwards;
        z-index: 5;
	}

	@keyframes rotate {
		from {
			opacity: 1;
			height: 40px;
			width: 40px;
			transform: rotate(0deg);
			border-radius: 15%;
		}
		to {
			opacity: 0;
			height: 50px;
			width: 50px;
			transform: rotate(260deg);
			border-radius: 25%;
		}
	}
</style>
