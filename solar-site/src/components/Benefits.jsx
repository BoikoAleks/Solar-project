import { Zap, Sun, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Benefits({ t }) {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const icons = [Zap, Sun, ShieldCheck];

  return (
    <section id="benefits" className="py-24 px-6 bg-darker">
      <div className="max-w-6xl mx-auto">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="text-3xl md:text-5xl font-bold mb-16 border-l-4 border-accent pl-4">
          {t.benefits.title}
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {icons.map((Icon, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.2 }} className="bg-dark p-8 rounded-2xl border border-slate-800 hover:border-accent/50 transition-colors group">
              <Icon className="text-accent w-12 h-12 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-4">{t.benefits.items[i].title}</h3>
              <p className="text-slate-400 text-lg">{t.benefits.items[i].desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}