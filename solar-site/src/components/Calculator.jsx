import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Calculator({ t }) {
  // Стан для зберігання поточного споживання (кВт·год)
  const [consumption, setConsumption] = useState(300);

  // Формули розрахунку сонячної станції
  const calculateSystem = (kwh) => {
    // Приблизний розрахунок необхідної потужності панелей
    const panelsKw = Math.ceil((kwh / 100) * 1.2 * 10) / 10;
    // Акумулятори з запасом під потужність
    const batteryKwh = Math.ceil(panelsKw * 1.5);
    // Середня ринкова вартість обладнання + монтаж
    const basePrice = Math.round(panelsKw * 950 + (batteryKwh > 0 ? batteryKwh * 450 : 0));
    // Окупність (великі станції окупаються швидше)
    const roiYears = panelsKw > 15 ? 4 : panelsKw > 8 ? 5 : 6;

    return {
      panels: `${panelsKw} kW`,
      battery: `${batteryKwh} kWh`,
      price: `~$${basePrice.toLocaleString()}`,
      roi: `${roiYears} ${t.calc.years}`
    };
  };

  const calcResult = calculateSystem(consumption);

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="calculator" className="py-24 px-6 bg-dark">
      <div className="max-w-4xl mx-auto">
        
        <motion.h2 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeUp} 
          className="text-3xl md:text-5xl font-bold mb-12 border-l-4 border-accent pl-4 text-center md:text-left"
        >
          {t.calc.title}
        </motion.h2>

        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeUp} 
          className="bg-darker p-8 rounded-2xl border border-slate-800 grid md:grid-cols-2 gap-10"
        >
          {/* Ліва частина: Повзунок керування */}
          <div>
            <label className="block text-xl font-medium mb-4">{t.calc.label}</label>
            <div className="text-4xl font-bold text-accent mb-6">
              {consumption} <span className="text-xl text-white">kWh</span>
            </div>
            <input 
              type="range" 
              min="100" 
              max="1500" 
              step="50" 
              value={consumption} 
              onChange={(e) => setConsumption(Number(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-accent"
            />
            <p className="text-sm text-slate-500 mt-2">{t.calc.hint}</p>
          </div>

          {/* Права частина: Результати розрахунку */}
          <div className="bg-dark p-6 rounded-xl border border-slate-800 flex flex-col justify-between">
            <h3 className="text-lg font-bold text-slate-400 mb-4 tracking-wider uppercase">
              {t.calc.resTitle}
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between border-b border-slate-800 pb-2">
                <span>{t.calc.panels}:</span>
                <span className="font-bold text-accent">{calcResult.panels}</span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-2">
                <span>{t.calc.battery}:</span>
                <span className="font-bold text-accent">{calcResult.battery}</span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-2">
                <span>{t.calc.price}:</span>
                <span className="font-bold text-emerald-400">{calcResult.price}</span>
              </div>
              <div className="flex justify-between">
                <span>{t.calc.roi}:</span>
                <span className="font-bold text-white">{calcResult.roi}</span>
              </div>
            </div>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
}