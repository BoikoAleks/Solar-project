import { useState } from 'react';
import { Sun, ShieldCheck, Zap, ArrowRight, Menu, X, Globe, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { translations, portfolioData } from './data/translations';
import Calculator from './components/Calculator';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState('uk'); // 'uk', 'it', 'en'
  const [formData, setFormData] = useState({ name: '', phone: '', comment: '' });
  const t = translations[lang];

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const scrollTo = (id) => {
    setIsMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const whatsappNumber = "393270000000"; // Номер WhatsApp менеджера
    
    let messageText = `Нова заявка з сайту SolarPro!\n\nІм'я: ${formData.name}\nТелефон: ${formData.phone}\nКоментар: ${formData.comment}`;
    if (lang === 'it') {
      messageText = `Nuova richiesta da SolarPro!\n\nNome: ${formData.name}\nTelefono: ${formData.phone}\nCommento: ${formData.comment}`;
    } else if (lang === 'en') {
      messageText = `New request from SolarPro!\n\nName: ${formData.name}\nPhone: ${formData.phone}\nComment: ${formData.comment}`;
    }

    window.open(`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(messageText)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-dark text-white font-sans selection:bg-accent selection:text-dark">
      
      {/* НАВІГАЦІЯ ТА ПАНЕЛЬ МОВ */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('hero')}>
            <Sun className="text-accent w-8 h-8" />
            <span className="font-bold text-2xl tracking-tight">Solar<span className="text-accent">Pro</span></span>
          </div>

          <div className="hidden md:flex items-center gap-6 font-medium">
            <button onClick={() => scrollTo('benefits')} className="hover:text-accent transition-colors">{t.nav.benefits}</button>
            <button onClick={() => scrollTo('calculator')} className="hover:text-accent transition-colors">{t.nav.calc}</button>
            <button onClick={() => scrollTo('stages')} className="hover:text-accent transition-colors">{t.nav.stages}</button>
            <button onClick={() => scrollTo('portfolio')} className="hover:text-accent transition-colors">{t.nav.portfolio}</button>
            <button onClick={() => scrollTo('contacts')} className="hover:text-accent transition-colors">{t.nav.contacts}</button>
          </div>

          {/* Панель вибору з трьох мов */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex gap-1 bg-darker p-1 rounded-lg border border-slate-800">
              {[
                { code: 'uk', label: 'UA' },
                { code: 'it', label: 'IT' },
                { code: 'en', label: 'EN' }
              ].map((item) => (
                <button
                  key={item.code}
                  onClick={() => setLang(item.code)}
                  className={`px-2.5 py-1 rounded-md text-xs font-bold transition-colors ${lang === item.code ? 'bg-accent text-dark' : 'text-slate-400 hover:text-white'}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <button onClick={() => scrollTo('contacts')} className="border border-accent text-accent hover:bg-accent hover:text-dark font-bold py-2 px-5 rounded-lg transition-colors text-sm">
              {t.nav.call}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <div className="flex gap-1 bg-darker p-1 rounded-lg border border-slate-800 text-xs">
              {[{ code: 'uk', label: 'UA' }, { code: 'it', label: 'IT' }, { code: 'en', label: 'EN' }].map((item) => (
                <button key={item.code} onClick={() => setLang(item.code)} className={`px-2 py-0.5 rounded font-bold ${lang === item.code ? 'bg-accent text-dark' : 'text-slate-400'}`}>
                  {item.label}
                </button>
              ))}
            </div>
            <button className="text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-darker border-b border-slate-800 px-6 py-4 flex flex-col gap-4">
            <button onClick={() => scrollTo('benefits')} className="text-left py-2 hover:text-accent">{t.nav.benefits}</button>
            <button onClick={() => scrollTo('calculator')} className="text-left py-2 hover:text-accent">{t.nav.calc}</button>
            <button onClick={() => scrollTo('stages')} className="text-left py-2 hover:text-accent">{t.nav.stages}</button>
            <button onClick={() => scrollTo('portfolio')} className="text-left py-2 hover:text-accent">{t.nav.portfolio}</button>
            <button onClick={() => scrollTo('contacts')} className="text-left py-2 text-accent font-bold">{t.nav.contacts}</button>
          </div>
        )}
      </nav>

      {/* 1. HERO */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] pointer-events-none"></div>
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="relative z-10 max-w-5xl mx-auto text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 mt-10">{t.hero.title1}<br /><span className="text-accent">{t.hero.title2}</span></h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mb-10 border-l-4 border-accent pl-4">{t.hero.desc}</p>
          <button onClick={() => scrollTo('calculator')} className="bg-accent text-dark font-bold py-4 px-8 rounded-lg hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2 text-lg">
            {t.hero.btn} <ArrowRight size={20} />
          </button>
        </motion.div>
      </section>

      {/* 2. ПЕРЕВАГИ */}
      <section id="benefits" className="py-24 px-6 bg-darker">
        <div className="max-w-6xl mx-auto">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="text-3xl md:text-5xl font-bold mb-16 border-l-4 border-accent pl-4">{t.benefits.title}</motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[Zap, Sun, ShieldCheck].map((Icon, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.2 }} className="bg-dark p-8 rounded-2xl border border-slate-800 hover:border-accent/50 transition-colors group">
                <Icon className="text-accent w-12 h-12 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-4">{t.benefits.items[i].title}</h3>
                <p className="text-slate-400 text-lg">{t.benefits.items[i].desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. КАЛЬКУЛЯТОР */}
      <Calculator t={t} />

      {/* 4. ЕТАПИ РОБОТИ */}
      <section id="stages" className="py-24 px-6 bg-dark">
        <div className="max-w-4xl mx-auto">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-3xl md:text-5xl font-bold mb-16 border-l-4 border-accent pl-4">{t.stages.title}</motion.h2>
          <div className="space-y-6">
            {t.stages.items.map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex gap-6 items-start bg-darker p-6 rounded-xl border border-slate-800">
                <div className="text-accent font-bold text-2xl mt-1">0{i + 1}</div>
                <div>
                  <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-slate-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ПОРТФОЛІО З ФОТОГРАФІЯМИ */}
      <section id="portfolio" className="py-24 px-6 bg-darker">
        <div className="max-w-6xl mx-auto">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-3xl md:text-5xl font-bold mb-16 border-l-4 border-accent pl-4">{t.portfolio.title}</motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData[lang].map((item) => (
              <motion.div key={item.id} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="group bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-accent/40 transition-all flex flex-col shadow-lg">
                
                {/* Блок для картинки проєкту */}
                <div className="h-52 overflow-hidden relative bg-slate-800">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
                    onError={(e) => { e.target.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 24 24' fill='none' stroke='%23334155' stroke-width='1'><rect width='20' height='20' x='2' y='2' rx='2'/><circle cx='9' cy='9' r='2'/><path d='m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21'/></svg>"; }}
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="text-xs font-bold text-accent uppercase tracking-widest mb-2">{t.portfolio.photo} {item.id}</div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">{item.title}</h3>
                    <p className="text-slate-400 text-sm line-clamp-3">{item.desc}</p>
                  </div>
                  <div className="bg-darker p-3 rounded-xl border border-slate-800 text-xs text-slate-300 space-y-1 mt-6">
                    <div>⚡ {t.calc.panels}: <span className="text-white font-medium">{item.power}</span></div>
                    <div>🔋 {t.calc.battery}: <span className="text-white font-medium">{item.battery}</span></div>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ФОРМА ЗВ'ЯЗКУ */}
      <section id="contacts" className="py-24 px-6 bg-dark relative overflow-hidden">
        <div className="max-w-xl mx-auto relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-4">{t.contacts.title}</h2>
            <p className="text-slate-400 text-lg">{t.contacts.subtitle}</p>
          </motion.div>

          <motion.form initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} onSubmit={handleWhatsAppSubmit} className="space-y-5 bg-darker p-8 rounded-2xl border border-slate-800 shadow-xl">
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">{t.contacts.name}</label>
              <input type="text" required placeholder="Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-dark border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">{t.contacts.phone}</label>
              <input type="tel" required placeholder="+39..." value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full bg-dark border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">{t.contacts.comment}</label>
              <textarea rows="3" placeholder="..." value={formData.comment} onChange={(e) => setFormData({...formData, comment: e.target.value})} className="w-full bg-dark border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors resize-none"></textarea>
            </div>
            <button type="submit" className="w-full bg-accent text-dark font-bold py-4 rounded-lg hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2 text-lg cursor-pointer">
              <Send size={20} /> {t.contacts.btn}
            </button>
          </motion.form>
        </div>
      </section>

    </div>
  );
}