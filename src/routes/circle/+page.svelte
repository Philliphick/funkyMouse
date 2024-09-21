<script lang="ts">
	import { onMount } from 'svelte';

	let circle: HTMLDivElement | null = null; // Reference to circle DOM element
	let moveInterval: number | undefined;
	const speed = 3; // Circle speed
	let direction = { x: 1, y: 1 };
	let lost = false;
	let inPlay = false; 
	let score = 0; // Score variable
	let timer: number | undefined; // Timer variable

	function startRandomMovement() {
		if (circle) {
			// Move the circle to the initial position (center)
			circle.style.top = `${window.innerHeight / 2 - 100}px`;
			circle.style.left = `${window.innerWidth / 2 - 100}px`;
			moveInterval = setInterval(moveCircle, 30);
			startTimer(); // Start the timer when the game starts
		}
	}

	function startTimer() {
		score = 0; // Reset score when the game starts
		timer = setInterval(() => {
			score++; // Increment score every second
		}, 100);
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
				inPlay = false;
				clearInterval(moveInterval); // Stop the movement on loss
				clearInterval(timer); // Stop the timer on loss
				// alert(`You lost! Your score: ${score}. Hit spacebar to play again.`);
			}
		}
	}

	function handleMouseMove(event: MouseEvent) {
		checkLoss(event.clientX, event.clientY);
	}

	function handleKeyDown(event: KeyboardEvent) {
		if (event.code === 'Space') {
			if (lost) {
				resetGame(); // Reset the game if lost
			} else if (!moveInterval) {
				startRandomMovement(); // Start the game if not already in play
				document.addEventListener('mousemove', handleMouseMove); // Add mouse move listener
			}
		}
	}

	function resetGame() {
		lost = false; // Reset lost state
		inPlay = true; // Start a new game
		startRandomMovement(); // Start the game
	}

	onMount(() => {
		// Initialize the circle's position at the center
		if (circle) {
			circle.style.top = `${window.innerHeight / 2 - 100}px`;
			circle.style.left = `${window.innerWidth / 2 - 100}px`;
		}
		document.addEventListener('keydown', handleKeyDown);
		return () => {
			document.removeEventListener('keydown', handleKeyDown);
			document.removeEventListener('mousemove', handleMouseMove); // Clean up
			clearInterval(timer); // Clean up the timer
		};
	});
</script>

<div bind:this={circle} id="randomCircle"></div>

{#if !inPlay && !lost} 
	<div>Hit spacebar to play!</div>
{:else if inPlay && !lost}
	<div>Score: {score}</div>
{/if}
 
{#if lost} 
    <div>You lost! Your score: {score}. Hit spacebar to play again.</div>
{/if}

<style>
	#randomCircle {
		position: absolute;
		border: 1px solid red;
		border-radius: 50%;
		width: 200px; /* Adjust for the desired size */
		height: 200px; /* Adjust for the desired size */
	}
</style>
