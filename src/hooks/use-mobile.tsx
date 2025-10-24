import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  // Inicializa como false para ser seguro durante o SSR/build
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    // Verifica se estamos no ambiente do navegador
    if (typeof window === 'undefined') return;

    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    
    // Define o estado inicial no cliente
    checkMobile();

    // Adiciona listener para mudanças
    mql.addEventListener("change", checkMobile);
    
    return () => mql.removeEventListener("change", checkMobile);
  }, []);

  return isMobile;
}