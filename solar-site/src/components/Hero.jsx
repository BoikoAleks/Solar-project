import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero({ t }) {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20">
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] pointer-events-none"></div>
      <motion.div initial="hidden" animate="visible" variants={fadeUp} className="relative z-10 max-w-5xl mx-auto text-center md:text-left">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 mt-10">
          {t.hero.title1}<br />
          <span className="text-accent">{t.hero.title2}</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mb-10 border-l-4 border-accent pl-4">{t.hero.desc}</p>
        <button onClick={() => scrollTo('calculator')} className="bg-accent text-dark font-bold py-4 px-8 rounded-lg hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2 text-lg">
          {t.hero.btn} <ArrowRight size={20} />
        </button>
      </motion.div>
    </section>
  );
}