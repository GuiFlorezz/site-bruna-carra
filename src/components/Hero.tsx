import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '9%']);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);
  const introOpacity = useTransform(scrollYProgress, [0, 0.78], [1, 0.28]);

  return (
    <>
      <section className="hero" id="inicio" ref={sectionRef}>
        <div className="hero-index"><span>01 / 02</span><i /> UMA BELEZA SÓ SUA</div>

        <motion.div className="hero-copy" style={reduceMotion ? undefined : { opacity: introOpacity }}>
          <motion.p className="eyebrow" initial={reduceMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0 : 0.8, delay: 0.1 }}>
            HARMONIZAÇÃO FACIAL · ABORDAGEM NATURAL
          </motion.p>
          <h1 aria-label="Beleza que respeita a sua essência">
            <motion.span className="headline-line line-one" initial={reduceMotion ? false : { opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0 : 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}><span className="headline-part part-left">Beleza</span><span className="headline-part part-right">que</span></motion.span>
            <motion.span className="headline-line line-two" initial={reduceMotion ? false : { opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0 : 0.9, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}><span className="headline-part part-left">res</span><span className="headline-part part-right">peita</span></motion.span>
            <motion.span className="headline-line line-three" initial={reduceMotion ? false : { opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0 : 0.9, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}><span className="headline-part part-left">sua</span><span className="headline-part part-right">essência<span className="period">.</span></span></motion.span>
          </h1>
        </motion.div>

        <motion.div className="portrait-frame" style={reduceMotion ? undefined : { y: imageY, scale: imageScale }} aria-label="Retrato profissional da Dra. Bruna Carra" role="img">
          <img className="portrait-image" src="/img/Mulher%20Sorridente%20com%20Tatuagens%20e%20Look%20Escuro.png" alt="" />
        </motion.div>

        <motion.aside className="hero-note" initial={reduceMotion ? false : { opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: reduceMotion ? 0 : 0.8, delay: 0.7 }}>
          <span className="note-mark">✳</span>
          <p>Realçar o que já existe.<br /><em>Sem deixar de ser você.</em></p>
        </motion.aside>

        <motion.div className="hero-bottom" initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: reduceMotion ? 0 : 0.8, delay: 0.8 }}>
          <p>HARMONIZAÇÃO COM NATURALIDADE<br />E RESPEITO À SUA IDENTIDADE.</p>
          <a href="https://wa.me/" className="primary-cta">Vamos conversar <span aria-hidden="true">↗</span></a>
          <a href="#filosofia" className="scroll-cue"><span>ROLE PARA EXPLORAR</span><i aria-hidden="true">↓</i></a>
        </motion.div>
        <span className="vertical-label">BELEZA EM EQUILÍBRIO — DESDE O PRIMEIRO OLHAR</span>
      </section>

      <section className="continuation" id="filosofia" aria-label="A filosofia da Dra. Bruna">
        <motion.div className="continuation-inner" initial={reduceMotion ? false : { opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: reduceMotion ? 0 : 0.9, ease: [0.22, 1, 0.36, 1] }}>
          <span className="continuation-index">UMA ABORDAGEM PESSOAL</span>
          <p>Não é sobre mudar quem você é.<br /><em>É sobre se reconhecer ainda mais.</em></p>
          <span className="continuation-credit">DRA. BRUNA CARRA · HARMONIZAÇÃO FACIAL</span>
        </motion.div>
        <div className="continuation-foot"><span>02 / 02</span><span>CONTINUA EM VOCÊ</span></div>
      </section>
    </>
  );
}
