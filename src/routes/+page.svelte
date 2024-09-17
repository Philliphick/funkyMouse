<script>
    // @ts-nocheck
    
        /**
         * @type {any[]}
         */
        let colourSwitch = false; 
    
        /**
         * @type {any[]}
         */
        let positions = [];
        let currentColour = [
            '#FF5F6D', // Gradient Start: Light Red
            '#FFC371', // Gradient Transition: Light Orange
            '#FFB75E', // Gradient Transition: Soft Yellow
            '#D4D5E0', // Gradient Transition: Light Gray
            '#A2C2E4', // Gradient Transition: Light Blue
            '#3A6B8F', // Gradient Transition: Deep Blue
            '#1D4F6F' // Gradient End: Dark Blue
        ];
    
        const cyberpunkColours = [
        '#FF0099', // Neon Pink
        '#00FFFF', // Cyan
        '#00FF00', // Neon Green
        '#FF00FF', // Magenta
        '#FF9900', // Neon Orange
        '#9900FF', // Deep Purple
        '#00CCFF', // Electric Blue
        '#CC00FF'  // Vivid Violet
    ];
    
    
        /**
         * @param {{ clientX: number; clientY: number; }} event
         */
        function handleMove(event) {
            positions = [{ x: event.clientX, y: event.clientY, colour: handleColor() }, ...positions];
    
            if (positions.length > 500) {
                positions.pop();
            }
        }
    
        function handleColor() {
            return currentColour[Math.floor(Math.random() * currentColour.length)];
        }
    
        function handleColourChange() {
            colourSwitch = !colourSwitch;
            currentColour = colourSwitch ? [
                '#FF5F6D', 
                '#FFC371', 
                '#FFB75E', 
                '#D4D5E0', 
                '#A2C2E4', 
                '#3A6B8F', 
                '#1D4F6F'
            ] : cyberpunkColours;
            console.log(colourSwitch ? "cyberpunk" : "default")
        }
    </script>
    
    <div on:pointermove={handleMove} class="container">
        {#each positions as pos (pos.x + '-' + pos.y)}
            <div
                class="trail"
                style="left: {pos.x}px; top: {pos.y}px; background-color:{pos.colour};"
            ></div>
        {/each}
        <button on:click={handleColourChange} class="button">Change Colour</button>
    </div>
    
    
    <style>
        html, body {
            margin: 0;
            padding: 0;
            height: 100%;
            width: 100%;
            overflow: hidden;
        }
    
    
        .mouse {
            width: 6px;
            height: 6px;
            background-color: red;
        }
    
        .container {
            width: 100vw;
            height: 100vh;
            margin: 0;
            padding: 0;
            background-color: bisque;
            overflow: hidden;
            position: absolute;
        }
    
        .trail {
            position: absolute;
            width: 3px;
            transition: 0.2s ease-in-out;
            /* animation: fadeOut 2.2s forwards; */
            animation: rotate 3.5s forwards;
        }
    
        @keyframes circle {
            from {
                width: 40px;
                height: 20px;
                opacity: 1;
                box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1); 
                border-radius: 50%;
            }
            to {
                width: 35px;
                opacity: 0;
                height: 200px;
                border-radius: 50%;
            }
        }
    
        @keyframes rotate {
            from {
                opacity: 1;
                height: 50px;
                width: 40px;
                transform: rotate(0deg);
    
            }
            to {
                opacity: 0;
                height: 40px;
                width: 30px;
                transform: rotate(260deg);
                /*  */
    
                /* width: 35px;
                opacity: 0;
                height: 400px;
                border-radius: 50%;
                */
            }
        }
    </style>
    
    