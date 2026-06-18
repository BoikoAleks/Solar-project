import { useState } from 'react';
import { Sun, Menu, X, Globe } from 'lucide-react';

export default function Header({ lang, setLang, t }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollTo = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('hero')}>
          <Sun className="text-accent w-8 h-8" />
          <span className="font-bold text-2xl tracking-tight">Solar<span className="text-accent">Pro</span></span>
        </div>

        <div className="hidden md:flex items-center gap-8 font-medium">
          <button onClick={() => scrollTo('benefits')} className="hover:text-accent transition-colors">{t.nav.benefits}</button>
          <button onClick={() => scrollTo('calculator')} className="hover:text-accent transition-colors">{t.nav.calc}</button>
          <button onClick={() => scrollTo('stages')} className="hover:text-accent transition-colors">{t.nav.stages}</button>
          <button onClick={() => scrollTo('portfolio')} className="hover:text-accent transition-colors">{t.nav.portfolio}</button>
          <button onClick={() => scrollTo('contacts')} className="hover:text-accent transition-colors">{t.nav.contacts}</button>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button onClick={() => setLang(lang === 'uk' ? 'it' : 'uk')} className="flex items-center gap-2 hover:text-accent transition-colors font-bold">
            <Globe size={20} /> {lang === 'uk' ? 'IT' : 'UA'}
          </button>
          <button onClick={() => scrollTo('contacts')} className="border border-accent text-accent hover:bg-accent hover:text-dark font-bold py-2 px-6 rounded-lg transition-colors">
            {t.nav.call}
          </button>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <button onClick={() => setLang(lang === 'uk' ? 'it' : 'uk')} className="flex items-center gap-1 font-bold text-accent">
            <Globe size={20} /> {lang === 'uk' ? 'IT' : 'UA'}
          </button>
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
  );
}