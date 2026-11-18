import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { whatsappLink } from '../siteConfig';

const entranceEase = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const philosophyRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const { scrollYProgress: philosophyProgress } = useScroll({
    target: philosophyRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '11%']);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const introOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.82, 0.12]);
  const introY = useTransform(scrollYProgress, [0, 1], [0, -36]);
  const noteOpacity = useTransform(scrollYProgress, [0, 0.35, 1], [1, 0.8, 0]);
  const noteY = useTransform(scrollYProgress, [0, 1], [0, -22]);
  const footerOpacity = useTransform(scrollYProgress, [0, 0.45, 1], [1, 0.9, 0.15]);
  const footerY = useTransform(scrollYProgress, [0, 1], [0, 16]);
  const philosophyOrbitY = useTransform(philosophyProgress, [0, 1], ['-4%', '10%']);
  const philosophyOrbitRotate = useTransform(philosophyProgress, [0, 1], [-8, 12]);

  const revealTransition = (delay: number) => ({
    duration: reduceMotion ? 0 : 0.85,
    delay: reduceMotion ? 0 : delay,
    ease: entranceEase,
  });

  return (
    <>
      <section className="hero" id="inicio" ref={sectionRef}>
        <motion.div
          className="hero-index"
          style={reduceMotion ? undefined : { opacity: noteOpacity, y: noteY }}
          initial={reduceMotion ? false : { x: -18 }}
          animate={{ x: 0 }}
          transition={revealTransition(0.08)}
        >
          <span>01 — ESSÊNCIA</span><i /> UMA BELEZA SÓ SUA
        </motion.div>

        <motion.div
          className="hero-copy"
          style={reduceMotion ? undefined : { opacity: introOpacity, y: introY }}
        >
          <motion.p
            className="eyebrow"
            initial={reduceMotion ? false : { opacity: 0, y: 14, filter: 'blur(5px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={revealTransition(0.12)}
          >
            HARMONIZAÇÃO FACIAL · ABORDAGEM NATURAL
          </motion.p>
          <h1 aria-label="Beleza que respeita a sua essência">
            <motion.span className="headline-line line-one" initial={reduceMotion ? false : { opacity: 0, y: 38, filter: 'blur(8px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={revealTransition(0.2)}>
              <span className="headline-part part-left">Beleza</span><span className="headline-part part-right">que</span>
            </motion.span>
            <motion.span className="headline-line line-two" initial={reduceMotion ? false : { opacity: 0, y: 38, filter: 'blur(8px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={revealTransition(0.34)}>
              <span className="headline-part part-left">res</span><span className="headline-part part-right">peita</span>
            </motion.span>
            <motion.span className="headline-line line-three" initial={reduceMotion ? false : { opacity: 0, y: 38, filter: 'blur(8px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={revealTransition(0.48)}>
              <span className="headline-part part-left">sua</span><span className="headline-part part-right">essência<span className="period">.</span></span>
            </motion.span>
          </h1>
        </motion.div>

        <motion.div
          className="portrait-frame"
          style={reduceMotion ? undefined : { y: imageY, scale: imageScale }}
          initial={reduceMotion ? false : { opacity: 0, clipPath: 'inset(8% 0 0 0)' }}
          animate={{ opacity: 1, clipPath: 'inset(0% 0 0 0)' }}
          transition={revealTransition(0.18)}
          aria-label="Retrato profissional da Dra. Bruna Carra"
          role="img"
        >
          <img className="portrait-image" src="/img/Mulher%20Sorridente%20com%20Tatuagens%20e%20Look%20Escuro.png" alt="" />
        </motion.div>

        <motion.aside
          className="hero-note"
          style={reduceMotion ? undefined : { opacity: noteOpacity, y: noteY }}
          initial={reduceMotion ? false : { x: 18 }}
          animate={{ x: 0 }}
          transition={revealTransition(0.58)}
        >
          <span className="note-mark">✳</span>
          <p>Realçar o que já existe.<br /><em>Sem deixar de ser você.</em></p>
        </motion.aside>

        <motion.div
          className="hero-bottom"
          style={reduceMotion ? undefined : { opacity: footerOpacity, y: footerY }}
          initial={reduceMotion ? false : { opacity: 0, filter: 'blur(4px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={revealTransition(0.72)}
        >
          <p>HARMONIZAÇÃO COM NATURALIDADE<br />E RESPEITO À SUA IDENTIDADE.</p>
          <a href={whatsappLink('agendamento de uma avaliação')} className="primary-cta" target="_blank" rel="noreferrer">Vamos conversar <span aria-hidden="true">↗</span></a>
          <a href="#filosofia" className="scroll-cue"><span>ROLE PARA EXPLORAR</span><i aria-hidden="true">↓</i></a>
        </motion.div>

        <motion.span
          className="vertical-label"
          style={reduceMotion ? undefined : { opacity: noteOpacity, y: noteY }}
          initial={reduceMotion ? false : { x: 12 }}
          animate={{ x: 0 }}
          transition={revealTransition(0.64)}
        >
          BELEZA EM EQUILÍBRIO — DESDE O PRIMEIRO OLHAR
        </motion.span>
      </section>

      <section className="continuation" id="filosofia" aria-label="A filosofia da Dra. Bruna" ref={philosophyRef}>
        <motion.div
          className="continuation-orbit"
          style={reduceMotion ? undefined : { y: philosophyOrbitY, rotate: philosophyOrbitRotate }}
          aria-hidden="true"
        />
        <div className="continuation-inner">
          <motion.span
            className="continuation-index"
            initial={reduceMotion ? false : { opacity: 0, y: 18, filter: 'blur(5px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.65 }}
            transition={revealTransition(0.05)}
          >
            UMA ABORDAGEM PESSOAL
          </motion.span>
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 28, filter: 'blur(7px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.55 }}
            transition={revealTransition(0.16)}
          >
            Não é sobre mudar quem você é.<br /><em>É sobre se reconhecer ainda mais.</em>
          </motion.p>
          <motion.span
            className="continuation-credit"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={revealTransition(0.28)}
          >
            DRA. BRUNA CARRA · HARMONIZAÇÃO FACIAL
          </motion.span>
        </div>
        <motion.div
          className="continuation-foot"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={revealTransition(0.34)}
        >
          <span>02 — FILOSOFIA</span><span>CONTINUA EM VOCÊ</span>
        </motion.div>
      </section>
    </>
  );
}