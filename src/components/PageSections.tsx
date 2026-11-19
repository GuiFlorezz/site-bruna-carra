import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { siteConfig, treatmentOptions, whatsappLink } from '../siteConfig';
import { Reveal } from './Reveal';
import './sections.css';

const questions = [
  {
    question: 'Como saber qual cuidado faz sentido para mim?',
    answer: 'O primeiro passo é uma conversa individual. A Bruna entende seus objetivos e avalia as possibilidades antes de propor qualquer plano.',
  },
  {
    question: 'O plano é igual para todo mundo?',
    answer: 'Não. A proposta é construída a partir das características e expectativas de cada pessoa, com decisão tomada depois da avaliação.',
  },
  {
    question: 'A harmonização precisa mudar meus traços?',
    answer: 'A abordagem da Bruna prioriza naturalidade e respeito à identidade. As possibilidades e limites são conversados durante a avaliação.',
  },
  {
    question: 'Como faço para agendar?',
    answer: 'Escolha o assunto que deseja conversar e envie uma mensagem pelo WhatsApp. A equipe confirma o canal e a disponibilidade do atendimento.',
  },
];

export function AboutSection() {
  return (
    <section className="about-section page-section" id="sobre" aria-labelledby="about-title">
      <div className="section-container about-layout">
        <Reveal className="about-portrait">
          <img src="/img/Mulher%20Sorridente%20com%20Tatuagens%20e%20Look%20Escuro.png" alt="Retrato da Dra. Bruna Carra" loading="lazy" />
        </Reveal>
        <Reveal className="about-copy" delay={0.12}>
          <span className="section-eyebrow">03 — SOBRE A BRUNA</span>
          <h2 id="about-title">Um olhar atento ao que faz você ser <em>única.</em></h2>
          <p>Sou Bruna Carra, biomédica. Acredito que um cuidado estético começa pela escuta: entender suas expectativas é tão importante quanto respeitar seus traços.</p>
          <p>Minha abordagem busca equilíbrio e naturalidade, com um plano pensado para cada pessoa — sem fórmulas prontas.</p>
          <a className="text-link" href="#tratamentos">Conheça a abordagem <span aria-hidden="true">↗</span></a>
          <div className="about-signature">Bruna Carra<span>.</span></div>
        </Reveal>
      </div>
    </section>
  );
}

export function BeforeAfterSection() {
  return (
    <section className="results-section page-section" id="resultados" aria-labelledby="results-title">
      <div className="section-container">
        <div className="results-heading">
          <Reveal>
            <span className="section-eyebrow">04 — RESULTADOS</span>
            <h2 id="results-title">Cada história, <em>única.</em></h2>
          </Reveal>
          <Reveal delay={0.1} className="results-intro">
            <p>Resultados reais devem ser apresentados com contexto, cuidado e autorização. Esta área está preparada para receber um caso aprovado pela Bruna.</p>
          </Reveal>
        </div>
        <Reveal className="comparison-stage" delay={0.12} amount={0.1}>
          <div className="comparison-panel comparison-before" tabIndex={0}>
            <span className="comparison-label">ANTES</span>
            <img className="comparison-photo" src="/img/antes.jpeg" alt="Registro do antes" loading="lazy" />
          </div>
          <div className="comparison-panel comparison-after" tabIndex={0}>
            <span className="comparison-label">DEPOIS</span>
            <img className="comparison-photo" src="/img/depois.jpeg" alt="Registro do depois" loading="lazy" />
          </div>
        </Reveal>
        <p className="results-note">Cada resultado é individual. A indicação e o plano de cuidado são definidos após avaliação profissional.</p>
      </div>
    </section>
  );
}

export function TreatmentsSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const treatmentDialogRef = useRef<HTMLDialogElement>(null);
  const [selectedTreatment, setSelectedTreatment] = useState<(typeof treatmentOptions)[number] | null>(null);

  useEffect(() => {
    const dialog = treatmentDialogRef.current;
    if (selectedTreatment && dialog && !dialog.open) dialog.showModal();
    if (!selectedTreatment && dialog?.open) dialog.close();
  }, [selectedTreatment]);

  const moveCarousel = (direction: 'previous' | 'next') => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const card = carousel.querySelector<HTMLElement>('.treatment-card');
    const distance = card ? card.offsetWidth + 20 : carousel.clientWidth;
    carousel.scrollBy({ left: direction === 'next' ? distance : -distance, behavior: 'smooth' });
  };

  return (
    <section className="treatments-section page-section" id="tratamentos" aria-labelledby="treatments-title">
      <div className="section-container">
        <Reveal className="treatments-heading">
          <span className="section-eyebrow">05 — CUIDADO INDIVIDUAL</span>
          <h2 id="treatments-title">Um plano que começa <em>por você.</em></h2>
          <p>Converse com a Bruna sobre o que busca. As opções são avaliadas individualmente, sem indicação automática.</p>
        </Reveal>
        <div className="treatments-carousel" aria-label="Carrossel de tratamentos">
          <button className="treatments-arrow treatments-arrow-previous" type="button" onClick={() => moveCarousel('previous')} aria-label="Tratamento anterior">‹</button>
          <div className="treatment-list" ref={carouselRef} aria-label="Tratamentos disponíveis">
            {treatmentOptions.map((treatment, index) => (
              <Reveal className="treatment-card" key={treatment.number} delay={index * 0.08} amount={0.12}>
                <button className="treatment-card-trigger" type="button" onClick={() => setSelectedTreatment(treatment)} aria-label={`Saiba mais sobre ${treatment.name}`}>
                  <div className={`treatment-image treatment-image-${index + 1}`}>
                    <img src={treatment.image} alt="" loading="lazy" />
                    <span className="treatment-number">{treatment.number}</span>
                  </div>
                  <div className="treatment-card-copy">
                    <h3>{treatment.name}</h3>
                    <p>{treatment.description}</p>
                    <span className="treatment-more">Saiba mais <span aria-hidden="true">↗</span></span>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
          <button className="treatments-arrow treatments-arrow-next" type="button" onClick={() => moveCarousel('next')} aria-label="Próximo tratamento">›</button>
        </div>
        <p className="treatments-note">Os atendimentos disponíveis serão confirmados pela equipe após a avaliação.</p>
        <dialog
          className="treatment-dialog"
          ref={treatmentDialogRef}
          aria-labelledby="treatment-dialog-title"
          onClose={() => setSelectedTreatment(null)}
          onClick={(event) => { if (event.target === event.currentTarget) treatmentDialogRef.current?.close(); }}
        >
          {selectedTreatment && (
            <div className="treatment-dialog-content">
              <button className="treatment-dialog-close" type="button" onClick={() => treatmentDialogRef.current?.close()} aria-label="Fechar detalhes">×</button>
              <img className="treatment-dialog-image" src={selectedTreatment.image} alt="" />
              <div className="treatment-dialog-copy">
                <span className="section-eyebrow">TRATAMENTO · {selectedTreatment.number}</span>
                <h3 id="treatment-dialog-title">{selectedTreatment.name}</h3>
                <p>{selectedTreatment.details}</p>
                <a className="treatment-dialog-cta" href={whatsappLink(selectedTreatment.name)} target="_blank" rel="noreferrer">
                  Conversar pelo WhatsApp <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          )}
        </dialog>
      </div>
    </section>
  );
}

export function FaqSection() {
  return (
    <section className="faq-section page-section" id="faq" aria-labelledby="faq-title">
      <div className="section-container faq-layout">
        <Reveal className="faq-heading">
          <span className="section-eyebrow">06 — DÚVIDAS FREQUENTES</span>
          <h2 id="faq-title">Antes de dar o <em>próximo passo.</em></h2>
          <p>Se sua dúvida não estiver aqui, envie uma mensagem para a equipe.</p>
        </Reveal>
        <div className="faq-list">
          {questions.map((item, index) => <FaqItem key={item.question} {...item} delay={index * 0.06} />)}
        </div>
      </div>
    </section>
  );
}

type FaqItemProps = {
  question: string;
  answer: string;
  delay: number;
};

function FaqItem({ question, answer, delay }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Reveal className="faq-item" delay={delay} amount={0.08}>
      <details open={isOpen} onToggle={(event) => setIsOpen(event.currentTarget.open)}>
        <summary>
          <span>{question}</span>
          <span className="faq-toggle" aria-hidden="true">{isOpen ? '−' : '+'}</span>
        </summary>
        <p>{answer}</p>
      </details>
    </Reveal>
  );
}

export function ContactSection() {
  const reduceMotion = useReducedMotion();
  const bookingUrl = whatsappLink('agendamento de uma avaliação');

  return (
    <section className="contact-section page-section" id="contato" aria-labelledby="contact-title">
      <div className="section-container contact-layout">
        <Reveal className="contact-copy">
          <span className="section-eyebrow">07 — CONTATO E LOCALIZAÇÃO</span>
          <h2 id="contact-title">Vamos começar com uma <em>conversa?</em></h2>
          <p>Conte à equipe o que você busca. O próximo passo é uma avaliação individual, com espaço para ouvir e esclarecer suas dúvidas.</p>
          {siteConfig.whatsappNumber ? (
            <a className="contact-cta" href={bookingUrl} target="_blank" rel="noreferrer">Conversar pelo WhatsApp <span aria-hidden="true">↗</span></a>
          ) : (
            <span className="contact-cta is-unconfigured">WhatsApp comercial a configurar</span>
          )}
          <div className="contact-address">
            <span className="section-eyebrow">ENDEREÇO</span>
            <p>{siteConfig.address || 'Endereço da clínica será adicionado após confirmação.'}</p>
            {siteConfig.mapsUrl && <a className="text-link" href={siteConfig.mapsUrl} target="_blank" rel="noreferrer">Abrir no mapa <span aria-hidden="true">↗</span></a>}
          </div>
        </Reveal>
        <Reveal className="location-card" delay={0.12} amount={0.12}>
          <motion.div
            className="location-art"
            initial={reduceMotion ? false : { scale: 0.96, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: reduceMotion ? 0 : 0.9, ease: [0.22, 1, 0.36, 1] as const }}
            aria-hidden="true"
          >
            <span className="map-grid map-grid-one" />
            <span className="map-grid map-grid-two" />
            <span className="map-pin"><span /></span>
            <span className="map-caption">BRUNA CARRA · ATENDIMENTO</span>
          </motion.div>
          <div className="location-caption"><span>LOCALIZAÇÃO</span><span>{siteConfig.address ? 'ABRIR DETALHES' : 'EM ATUALIZAÇÃO'}</span></div>
        </Reveal>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="section-container footer-main">
        <a className="footer-wordmark" href="#inicio" aria-label="Bruna Carra, voltar ao início">BRUNA<br />CARRA<span>.</span></a>
        <p>Beleza que respeita<br />a sua essência.</p>
        <nav aria-label="Navegação do rodapé">
          <a href="#sobre">Sobre</a>
          <a href="#tratamentos">Tratamentos</a>
          <a href="#resultados">Resultados</a>
          <a href="#faq">Dúvidas</a>
          <a href="#contato">Contato</a>
        </nav>
        {siteConfig.instagramUrl && <a className="footer-social" href={siteConfig.instagramUrl} target="_blank" rel="noreferrer">Instagram ↗</a>}
      </div>
      <div className="section-container footer-legal">
        <span>© {new Date().getFullYear()} Dra. Bruna Carra</span>
        <a href="#inicio">Voltar ao topo ↑</a>
      </div>
    </footer>
  );
}
