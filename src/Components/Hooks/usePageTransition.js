import { useState } from 'react';

export const usePageTransition = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [nextPath, setNextPath] = useState(null);

  const startTransition = (navigate, path) => {
    setIsTransitioning(true);
    setNextPath(path);

    // Esperamos que la animación se complete antes de navegar
    setTimeout(() => {
      navigate(path);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500); // tiempo para que la pantalla se desvanezca
    }, 500); // tiempo para que la pantalla suba
  };

  return { isTransitioning, startTransition };
};
