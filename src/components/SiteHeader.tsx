import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { whatsappLink } from '../siteConfig';

const navigation = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Tratamentos', href: '#tratamentos' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contato', href: '#contato' },
];

export function SiteHeader() {
  const reduceMotion = useReducedMotion();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      className="site-header"
      initial={reduceMotion ? false : { opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.8, delay: reduceMotion ? 0 : 0.04, ease: [0.22, 1, 0.36, 1] as const }}
    >
      <a className="wordmark" href="#inicio" aria-label="Bruna Carra, início" onClick={() => setMenuOpen(false)}>
        <span>BRUNA CARRA</span>
        <small>BIOMÉDICA · ESTÉTICA AVANÇADA</small>
      </a>
      <nav className={`top-nav${menuOpen ? ' is-open' : ''}`} id="site-navigation" aria-label="Navegação principal">
        {navigation.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}
        <a href={whatsappLink('agendamento de uma avaliação')} className="nav-appointment" onClick={() => setMenuOpen(false)}>
          Agendar consulta <span aria-hidden="true">↗</span>
        </a>
      </nav>
      <button
        className={`mobile-menu-toggle${menuOpen ? ' is-open' : ''}`}
        type="button"
        aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={menuOpen}
        aria-controls="site-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span /><span />
      </button>
    </motion.header>
  );
}