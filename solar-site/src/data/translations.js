export const portfolioData = {
  uk: [
    { id: 1, title: "Автономна СЕС 10 кВт", desc: "Встановлено в передмісті. Забезпечує повну незалежність дому.", power: "10 кВт", battery: "15 кВт·г", img: "/projects/solar1.jpg" },
    { id: 2, title: "Гібридна СЕС 5 кВт", desc: "Оптимальне рішення для квартири або невеликого котеджу.", power: "5 кВт", battery: "10 кВт·г", img: "/projects/solar2.jpg" },
    { id: 3, title: "Мережева СЕС 30 кВт", desc: "Проєкт під зелений тариф для фермерського господарства.", power: "30 кВт", battery: "Немає", img: "/projects/solar3.jpg" },
  ],
  it: [
    { id: 1, title: "Impianto 10 kW", desc: "Installato in periferia. Garantisce la totale indipendenza della casa.", power: "10 kW", battery: "15 kWh", img: "/projects/solar1.jpg" },
    { id: 2, title: "Impianto Ibrido 5 kW", desc: "Soluzione ottimale per un appartamento o una piccola villa.", power: "5 kW", battery: "10 kWh", img: "/projects/solar2.jpg" },
    { id: 3, title: "Impianto On-Grid 30 kW", desc: "Progetto per tariffa incentivante per un'azienda agricola.", power: "30 kW", battery: "No", img: "/projects/solar3.jpg" },
  ],
  en: [
    { id: 1, title: "Off-Grid Solar System 10 kW", desc: "Installed in the suburbs. Provides full energy independence for the house.", power: "10 kW", battery: "15 kWh", img: "/projects/solar1.jpg" },
    { id: 2, title: "Hybrid Solar System 5 kW", desc: "Optimal solution for an apartment or a small private house.", power: "5 kW", battery: "10 kWh", img: "/projects/solar2.jpg" },
    { id: 3, title: "On-Grid Solar System 30 kW", desc: "Project under the feed-in tariff for a local commercial farm.", power: "30 kW", battery: "None", img: "/projects/solar3.jpg" },
  ]
};

export const translations = {
  uk: {
    nav: { benefits: "Переваги", calc: "Калькулятор", stages: "Етапи роботи", portfolio: "Наші роботи", contacts: "Контакти", call: "Зв'язатися" },
    hero: { title1: "МАЙБУТНЄ", title2: "ВАШОЇ ЕНЕРГІЇ", desc: "Професійне проєктування та монтаж сонячних електростанцій. Автономність, яка працює на вас.", btn: "Отримати консультацію" },
    calc: {
      title: "РОЗРАХУНОК СТАНЦІЇ",
      label: "Ваше щомісячне споживання електроенергії:",
      hint: "Посуньте бігунок, щоб вказати кВт·год на місяць",
      resTitle: "Рекомендована комплектація:",
      panels: "Потужність панелей",
      battery: "Ємність акумуляторів",
      price: "Орієнтовна вартість",
      roi: "Термін окупності",
      years: "років"
    },
    benefits: {
      title: "КЛЮЧОВІ ПЕРЕВАГИ",
      items: [
        { title: "АВТОНОМНІСТЬ", desc: "Ваша система забезпечить дім світлом навіть у найтемніші часи." },
        { title: "ЕКОНОМІЯ", desc: "Зменшення витрат на електроенергію до 90%. Окупність від 4 до 6 років." },
        { title: "НАДІЙНІСТЬ", desc: "Використовуємо лише сертифіковане обладнання з гарантією." }
      ]
    },
    stages: {
      title: "ЯК МИ ПРАЦЮЄМО",
      items: [
        { title: "Аудит та Заміри", desc: "Огляд покрівлі та аналіз електромережі." },
        { title: "Проєктування", desc: "Підбір обладнання та фінальний кошторис." },
        { title: "Монтаж", desc: "Встановлення панелей та підключення інвертора." },
        { title: "Запуск", desc: "Тестування системи, налаштування додатку." }
      ]
    },
    portfolio: { title: "РЕАЛІЗОВАНІ ПРОЄКТИ", photo: "Проєкт №" },
    contacts: {
      title: "ЗАЛИШИТИ ЗАЯВКУ",
      subtitle: "Заповніть форму, і ми надішлемо вам розрахунок у WhatsApp!",
      name: "Ваше ім'я",
      phone: "Номер телефону",
      comment: "Яка станція вас цікавить? (або кВт)",
      btn: "Надіслати у WhatsApp"
    }
  },
  it: {
    nav: { benefits: "Vantaggi", calc: "Calcolatore", stages: "Come Lavoriamo", portfolio: "I Nostri Lavori", contacts: "Contatti", call: "Contattaci" },
    hero: { title1: "IL FUTURO", title2: "DELLA TUA ENERGIA", desc: "Progettazione e installazione professionale di impianti fotovoltaici. L'autonomia che lavora per te.", btn: "Richiedi Consulenza" },
    calc: {
      title: "CALCOLA IL TUO IMPIANTO",
      label: "Il tuo consumo elettrico mensile:",
      hint: "Sposta il cursore per indicare i kWh al mese",
      resTitle: "Configurazione consigliata:",
      panels: "Potenza pannelli",
      battery: "Capacità batteria",
      price: "Prezzo indicativo",
      roi: "Ritorno investimento",
      years: "anni"
    },
    benefits: {
      title: "VANTAGGI CHIAVE",
      items: [
        { title: "AUTONOMIA", desc: "Il tuo sistema garantirà luce alla casa anche nei momenti più bui." },
        { title: "RISPARMIO", desc: "Riduzione dei costi dell'energia elettrica fino al 90%. Ritorno in 4-6 anni." },
        { title: "AFFIDABILITÀ", desc: "Utilizziamo solo apparecchiature certificate con garanzia." }
      ]
    },
    stages: {
      title: "COME LAVORIAMO",
      items: [
        { title: "Audit e Misure", desc: "Ispezione del tetto e analisi della rete elettrica." },
        { title: "Progettazione", desc: "Selezione delle apparecchiature e preventivo finale." },
        { title: "Installazione", desc: "Installazione dei pannelli e collegamento dell'inverter." },
        { title: "Avvio", desc: "Test del sistema e configurazione dell'applicazione mobile." }
      ]
    },
    portfolio: { title: "PROGETTI REALIZZATI", photo: "Progetto №" },
    contacts: {
      title: "INVIA UNA RICHIESTA",
      subtitle: "Compila il modulo e ti invieremo il preventivo su WhatsApp!",
      name: "Il tuo nome",
      phone: "Numero di telefono",
      comment: "Che tipo di impianto ti interessa? (o kW)",
      btn: "Invia su WhatsApp"
    }
  },
  en: {
    nav: { benefits: "Benefits", calc: "Calculator", stages: "Workflow", portfolio: "Our Projects", contacts: "Contact Us", call: "Get in Touch" },
    hero: { title1: "THE FUTURE", title2: "OF YOUR ENERGY", desc: "Professional design and installation of solar power systems. Autonomy that works for your financial benefit.", btn: "Get a Consultation" },
    calc: {
      title: "SYSTEM CALCULATOR",
      label: "Your monthly electricity consumption:",
      hint: "Drag the slider to specify your kWh per month",
      resTitle: "Recommended configuration:",
      panels: "Solar panel power",
      battery: "Battery capacity",
      price: "Estimated cost",
      roi: "Payback period",
      years: "years"
    },
    benefits: {
      title: "KEY ADVANTAGES",
      items: [
        { title: "AUTONOMY", desc: "Your system will provide power to your home even during grid blackouts." },
        { title: "SAVINGS", desc: "Reduce your electricity costs by up to 90%. Payback time within 4 to 6 years." },
        { title: "RELIABILITY", desc: "We use only high-tier certified equipment backed by official warranties." }
      ]
    },
    stages: {
      title: "HOW WE WORK",
      items: [
        { title: "Audit & Measurements", desc: "Roof inspection and main electrical grid capacity analysis." },
        { title: "System Engineering", desc: "Equipment selection and creation of the final budget estimate." },
        { title: "Installation", desc: "Solar panels mounting and smart inverter deployment." },
        { title: "Commissioning", desc: "System testing, fine-tuning, and setting up the mobile application." }
      ]
    },
    portfolio: { title: "FEATURED PROJECTS", photo: "Project №" },
    contacts: {
      title: "SEND A REQUEST",
      subtitle: "Fill out the form and we will send you a custom calculations file via WhatsApp!",
      name: "Your name",
      phone: "Phone number",
      comment: "What system capacity are you looking for? (or kW)",
      btn: "Send to WhatsApp"
    }
  }
};