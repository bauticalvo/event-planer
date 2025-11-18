import { useEffect } from 'react';

export const SandEffect = ({canvasRef}) => {
    
    let flakes = [];
    let mX = -100; // Se reactiva la posición X del ratón
    let mY = -100; // Se reactiva la posición Y del ratón

    // Nueva configuración de color de arena (marrón oscuro apagado)
    const SAND_COLOR_RGB = "150, 115, 60"; 
    
    const reset = (flake) => {
        // Empieza ligeramente fuera de pantalla o en la parte superior
        flake.x = Math.floor(Math.random() * window.innerWidth);
        flake.y = Math.floor(Math.random() * -50); 
        flake.size = (Math.random() * 2) + 1; // Polvo más pequeño (1px a 3px)
        flake.speed = (Math.random() * 0.5) + 0.1; // Caída más lenta y suave
        flake.velY = flake.speed;
        flake.velX = 0; // Inicia sin velocidad horizontal
        flake.opacity = (Math.random() * 0.4) + 0.2; // Opacidad más baja (más etéreo)
        flake.step = 0;
    };

    const snow = () => {
        const canvas = canvasRef.current;
        if (!canvas) return; 
        
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < flakes.length; i++) {
            let flake = flakes[i];
            let x = mX;
            let y = mY;
            let minDist = 100; // Reducido el radio de influencia a 100px
            let x2 = flake.x;
            let y2 = flake.y;

            let dist = Math.sqrt((x2 - x) * (x2 - x) + (y2 - y) * (y2 - y));
            
            // =======================================================
            // 🚨 LÓGICA DE INTERACCIÓN CON EL RATÓN RESTAURADA
            // =======================================================
            if (dist < minDist) {
                // Se reduce la fuerza de impacto a 1/4 para que parezca una brisa sutil, no un imán
                let force = (minDist / (dist * dist)) * 0.25; 
                let xcomp = (x - x2) / dist;
                let ycomp = (y - y2) / dist;
                let deltaV = force / 2;

                flake.velX -= deltaV * xcomp;
                flake.velY -= deltaV * ycomp;
            } else {
                // 1. Decaimiento horizontal para que no se mueva indefinidamente
                flake.velX *= .98; 
                
                // 2. Restauración de la velocidad vertical (Gravedad)
                if (flake.velY <= flake.speed) {
                    flake.velY = flake.speed;
                }
                
                // 3. Pequeña turbulencia horizontal (viento natural)
                flake.velX += Math.cos(flake.step += .01) * flake.stepSize; 
            }
            
            // Actualizar posición
            ctx.fillStyle = `rgba(${SAND_COLOR_RGB}, ${flake.opacity})`;
            flake.y += flake.velY;
            flake.x += flake.velX;

            // Dibujar la partícula
            ctx.beginPath();
            ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
            ctx.fill();
            
            // Reiniciar si sale de la pantalla por debajo
            if (flake.y >= canvas.height) {
                reset(flake);
            }
            // Si sale por los lados, simplemente la movemos al lado opuesto (efecto envolvente)
            if (flake.x >= canvas.width) {
                flake.x = 0;
            } else if (flake.x <= 0) {
                flake.x = canvas.width;
            }
        }

        requestAnimationFrame(snow);
    };

    const init = () => {
        // Reducido el número de partículas para un mejor rendimiento (300)
        for (let i = 0; i < 300; i++) { 
            let x = Math.floor(Math.random() * window.innerWidth);
            let y = Math.floor(Math.random() * window.innerHeight);
            let size = (Math.random() * 2) + 1; 
            let speed = (Math.random() * 0.5) + 0.1;
            let opacity = (Math.random() * 0.4) + 0.2;

            flakes.push({
                speed: speed,
                velY: speed,
                velX: 0,
                x: x,
                y: y,
                size: size,
                stepSize: (Math.random()) / 50, // Factor de turbulencia muy bajo
                step: 0,
                opacity: opacity
            });
        }

        snow();
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // =======================================================
        // 🚨 EVENTO DE MOUSEMOVE RESTAURADO
        // =======================================================
        const handleMouseMove = (e) => {
            mX = e.clientX;
            mY = e.clientY;
        };
        canvas.addEventListener("mousemove", handleMouseMove);

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", handleResize);

        init();

        return () => {
            canvas.removeEventListener("mousemove", handleMouseMove); // Limpieza
            window.removeEventListener("resize", handleResize);
        };
    }, [canvasRef]);

    return null; 
};