import React, { useMemo } from 'react';

// Estilo de Keyframe CSS para la animación de caída
const FALL_ANIMATION_CLASS = `
  @keyframes fall {
    0% {
      transform: translateY(-100vh);
      opacity: 0;
    }
    10% {
      opacity: 0.8;
    }
    100% {
      transform: translateY(100vh);
      opacity: 0;
    }
  }
`;

// Función para generar un número aleatorio entre min y max
const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Configuración de la animación
const NUMBER_OF_PARTICLES = 50; // Puedes ajustar este número
const PARTICLE_COLOR = '#964B00'; // Color marrón (simulando tierra/polvo)
const PARTICLE_SIZE = 4; // Tamaño máximo en píxeles

export const FallingParticles = ({ isActive }) => {
    // Generar las partículas una sola vez al cargar el componente
    const particles = useMemo(() => {
        return Array.from({ length: NUMBER_OF_PARTICLES }).map((_, i) => ({
            id: i,
            // Posición horizontal aleatoria
            x: random(0, 100), 
            // Duración de la animación de 5 a 10 segundos
            duration: random(5, 10), 
            // Retraso de la animación para que no caigan todas a la vez
            delay: random(0, 5), 
            // Tamaño aleatorio
            size: random(1, PARTICLE_SIZE), 
        }));
    }, []);

    if (!isActive) return null;

    return (
        <>
            {/* Insertar el keyframe de animación directamente en el DOM */}
            <style dangerouslySetInnerHTML={{ __html: FALL_ANIMATION_CLASS }} />

            {/* Contenedor principal: Ocupa toda la pantalla, fijo y en una capa alta (z-index) */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-[9999]">
                {particles.map((p) => (
                    <div
                        key={p.id}
                        className="absolute rounded-full"
                        style={{
                            // Aplicar el color y tamaño
                            backgroundColor: PARTICLE_COLOR,
                            width: `${p.size}px`,
                            height: `${p.size}px`,
                            
                            // Posicionamiento horizontal
                            left: `${p.x}vw`, 
                            
                            // Aplicar la animación CSS personalizada
                            animation: `fall ${p.duration}s linear ${p.delay}s infinite`,
                        }}
                    />
                ))}
            </div>
        </>
    );
};