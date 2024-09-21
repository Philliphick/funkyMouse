<script lang="ts">
	import { onMount } from 'svelte';

	let circleX = 0;
	let circleY = 0;
	let circle: HTMLDivElement | null = null; // Reference to circle DOM element
	let moveInterval: number | undefined;
	const speed = 3; // Circle speed
	let direction = { x: 1, y: 1 };
	let positions: { id: number; x: number; y: number }[] = []; // Store mouse positions
	let lost = false;

	function startRandomMovement() {
		if (circle) {
			// Center the circle initially
			circle.style.top = `${window.innerHeight / 2 - 100}px`; // Adjust based on your circle size
			circle.style.left = `${window.innerWidth / 2 - 100}px`; // Adjust based on your circle size
			moveInterval = setInterval(moveCircle, 30);
		}
	}

	function moveCircle() {
		if (!circle) return;

		let currentX = parseInt(circle.style.left);
		let currentY = parseInt(circle.style.top);

		// Boundary checks
		if (currentX + circle.offsetWidth >= window.innerWidth || currentX <= 0) {
			direction.x *= -1;
		}
		if (currentY + circle.offsetHeight >= window.innerHeight || currentY <= 0) {
			direction.y *= -1;
		}

		// Update position
		circle.style.left = currentX + direction.x * speed + 'px';
		circle.style.top = currentY + direction.y * speed + 'px';

		if (Math.random() < 0.05) {
			randomizeDirection();
		}
	}

	function randomizeDirection() {
		direction.x = Math.random() > 0.5 ? 1 : -1;
		direction.y = Math.random() > 0.5 ? 1 : -1;
	}

	function changePlayMode() {
		if (moveInterval) {
			clearInterval(moveInterval);
			moveInterval = undefined;
		} else {
			startRandomMovement();
		}
	}

	function handleMove(event: MouseEvent) {
		const uniqueId = Date.now() + Math.random();
		positions = [{ id: uniqueId, x: event.clientX, y: event.clientY }, ...positions];

		// Check for loss condition regardless of the circle position
		checkLoss(event.clientX, event.clientY);

		if (positions.length > 100) {
			positions.pop();
		}
	}

	function checkLoss(mouseX: number, mouseY: number) {
		if (circle) {
			const circleRect = circle.getBoundingClientRect();
			const insideCircle =
				mouseX >= circleRect.left &&
				mouseX <= circleRect.right &&
				mouseY >= circleRect.top &&
				mouseY <= circleRect.bottom;

			if (!insideCircle && !lost) {
				lost = true;
				alert("You lost!");
			} else if (insideCircle) {
				lost = false;
			}
		}
	}

	onMount(() => {
		// Ensure circle movement starts after DOM is loaded
	});

</script>

<div on:pointermove={handleMove} class="container">
	{#each positions as position (position.id)}
		<div class="mousey" style="left: {position.x}px; top: {position.y}px;"></div>
	{/each}
    <button on:click={startRandomMovement}>Start Game</button>

</div>


<div bind:this={circle} id="randomCircle"></div>

<style>
	#randomCircle {
		position: absolute;
		border: 1px solid red;
		border-radius: 50%;
		width: 200px; /* Adjust for the desired size */
		height: 200px; /* Adjust for the desired size */
	}

	.mousey {
		position: absolute;
		width: 3px;
		height: 3px;
		transition: 0.2s ease-in-out;
		background-color: aqua;
		border-radius: 50%; /* Optional: make it round */
	}

	.container {
		width: 100vw;
		height: 100vh;
		margin: 0;
		padding: 0;
		background-color: gray;
		position: absolute;
		overflow: hidden;
	}
</style>
