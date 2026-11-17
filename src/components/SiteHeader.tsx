export function SiteHeader() {
  return (
    <header className="site-header">
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
    </header>
  );
}
