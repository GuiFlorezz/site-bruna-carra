import { motion, useReducedMotion } from 'motion/react';

export function SiteHeader() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.header
      className="site-header"
      initial={reduceMotion ? false : { opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.8, delay: reduceMotion ? 0 : 0.04, ease: [0.22, 1, 0.36, 1] as const }}
    >
      <a className="wordmark" href="#inicio" aria-label="Bruna Carra, início">
        <span>BRUNA CARRA</span>
        <small>BIOMÉDICA · ESTÉTICA AVANÇADA</small>
      </a>
      <nav className="top-nav" aria-label="Navegação principal">
        <a href="#filosofia">A abordagem</a>
        <a href="https://wa.me/" className="nav-appointment">
          Agendar consulta <span aria-hidden="true">↗</span>
        </a>
      </nav>
      <a className="mobile-appointment" href="https://wa.me/" aria-label="Agendar consulta">↗</a>
    </motion.header>
  );
}