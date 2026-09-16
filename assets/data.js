const DATA = {
  en: {
    name: "Bogdan Zalessky",
    initials: "BZ",
    role: "Creator · Creative Copywriter at Mosaic",
    location: "Moscow",
    bio: "I create advertising campaigns and special projects for MTS, MTS RED, RIIL, Yandex and VTB. I take ideas from research and insight to presentation and launch.",
    email: "bogdanzaless@gmail.com",
    tg: "https://t.me/bogdan_zaless",
    available: "Open to projects",
    experience_years: "4+ Years",
    resp_time: "~12h",
    timezone: "MSK / UTC+3",
    sections: {
      fav:"Favorites", work:"Work", connect:"Contacts", site:"Website",
      about:"About", projects:"Works", skills:"Skills",
      experience:"Experience", contact:"Contact",
      dp_hint:"Select an item\nto view info",
    },
    projects: [
      {id:"voice-tech",group:"featured",name:"VoiceTech",brand:"MTS",date:"",tagline:"Advertising scripts for MTS voice services.",desc:"A series of short stories about calls that arrive at the worst possible moment but still cannot be missed.",role:"Creative concept, scripts and copywriting.",status:"development",tags:["MTS","VoiceTech","Scripts","Video"],color:"voice",coverStyle:"voice",mark:"VT"},
      {id:"family-donut",group:"featured",name:"Семейная Плюшка",brand:"MTS",date:"",tagline:"A Telegram game for MTS Family Group.",desc:"Families teamed up to level up a virtual donut, while product features became in-game boosts and continued in an offline partner activation.",role:"Creative idea, game mechanics, product integration and copywriting.",status:"realized",tags:["MTS","Telegram","Game","Partner activation"],color:"family",coverStyle:"family",mark:"M+"},
      {id:"red-new-year",group:"featured",name:"ПреКрасный Новый год",brand:"MTS RED",date:"",tagline:"An interactive New Year mechanic for MTS RED.",desc:"Telegram wishes changed every ten minutes. Users watched for a rare Gift sticker to enter the prize draw.",role:"Creative idea, mechanics and copywriting.",status:"realized",tags:["MTS RED","Telegram","Stickers","Activation"],color:"red",coverStyle:"red",mark:"10"},
      {id:"p1",group:"featured",name:"Красный огонёк",brand:"РИИЛ × Диско-клуб",date:"2025",tagline:"A New Year music show for a young audience.",desc:"A contemporary take on the classic TV variety show, bringing together performers from different generations, a live event and social content.",role:"Contributed to the creative concept and project format.",status:"realized",tags:["РИИЛ","Music show","Creative","Event"],color:"digital",mark:"КО",coverAlt:"Stage lighting from the Красный огонёк case cover"},
      {id:"riil-la-routine",group:"featured",name:"РИИЛ × La Routine",brand:"РИИЛ × La Routine",date:"2025",tagline:"A fashion collaboration and Telegram game.",desc:"Users raced to free a bag from virtual ice and hold their position in the ranking.",role:"Creative idea, game mechanics and development of the collaboration.",status:"realized",tags:["РИИЛ","Fashion","Telegram","Game"],color:"ice",coverStyle:"ice",mark:"LR"},
      {id:"riil-city",group:"featured",name:"РИИЛ × Mates / «Дорожка»",brand:"РИИЛ",date:"",tagline:"Collaborations with urban venues.",desc:"Offline activations built around conversation and shared leisure, with partner menus, branded spaces, games and a mini app.",role:"Creative concepts, activation mechanics and brand integration.",status:"realized",tags:["РИИЛ","Partnership","Offline","Mini app"],color:"city",coverStyle:"city",mark:"///"},
      {id:"red-advent",group:"other",name:"Адвент МТС RED",brand:"MTS RED",date:"2025",tagline:"A daily New Year giveaway in a mini app.",desc:"Users returned to an advent calendar each day for a new chance to win a tech prize.",role:"Creative idea and project mechanics.",status:"realized",tags:["MTS RED","Advent","Mini app"],color:"red",coverStyle:"advent",mark:"25"},
      {id:"p4",group:"other",name:"Альфа-Банк: Лизинг",brand:"Альфа-Лизинг",date:"2024",tagline:"Motion and digital materials for Alfa-Leasing.",desc:"Internet banners, 3D OLV videos and animated brand assets for digital placements.",role:"Motion design, 3D and banner adaptations.",status:"realized",tags:["Motion","3D","Banners","OLV"],color:"bank",mark:"A",coverAlt:"Abstract cover for the Alfa-Leasing motion project"},
      {id:"p5",group:"other",name:"GJO.E × FCSM",brand:"GJO.E × FCSM",date:"2023",tagline:"Visual production for a collection launch at Tsvetnoy.",desc:"A 4K projection show, motion graphics and event materials for the collaboration launch.",role:"Projection and motion design.",status:"realized",tags:["Motion","Projection","Event"],color:"motion",mark:"G×F",coverAlt:"Abstract projection cover for GJO.E × FCSM"},
      {id:"p6",group:"other",name:"HOOD GYM",brand:"HOOD GYM",date:"2024",tagline:"Print and advertising materials for a fitness club chain.",desc:"Flyers, posters and production-ready files for the club's offline communication.",role:"Graphic design and print preparation.",status:"realized",tags:["Print","Advertising","Typography"],color:"brand",mark:"HG",coverAlt:"Typographic cover for the HOOD GYM print project"},
      {id:"p7",group:"other",name:"Коврижка Зарайская",brand:"Коврижка Зарайская",date:"2024",tagline:"A visual identity and communication system for a café.",desc:"Brand book, tone of voice, SMM strategy and promotional materials.",role:"Brand identity, communication and SMM strategy.",status:"realized",tags:["Branding","Brand book","SMM"],color:"brand",coverStyle:"bakery",mark:"КЗ"},
      {id:"p8",group:"other",name:"No Worries Cakes",brand:"No Worries Cakes",date:"2022–2023",tagline:"Brand communication and marketing for custom cakes.",desc:"Social strategy, collaborations and a themed campaign for Instagram and Telegram.",role:"Marketing, creative direction, design and SMM.",status:"realized",tags:["SMM","Branding","Collaborations"],color:"brand",coverStyle:"cakes",mark:"NWC"},
      {id:"p9",group:"other",name:"TrustMe Studio",brand:"TrustMe Studio",date:"2023–2025",tagline:"Identity, apparel and communication for a fashion brand.",desc:"A redesigned logo, cycling apparel, garment development and collaboration materials.",role:"Graphic and communication design.",status:"realized",tags:["Fashion","Identity","Apparel"],color:"fashion",coverStyle:"fashion",mark:"TMS"},
      {id:"p10",group:"other",name:"Два Мяча & Ewing",brand:"Два Мяча / Ewing",date:"2023",tagline:"Digital banners and print materials for two launches.",desc:"HTML banners and a print set for Ewing and the Два Мяча flagship store.",role:"Digital and print design.",status:"realized",tags:["HTML/CSS","Print","Advertising"],color:"brand",coverStyle:"sport",mark:"2M"},
      {id:"p11",group:"other",name:"Project archive",brand:"Various clients",date:"2022–now",tagline:"Selected smaller projects across branding, editorial, motion and web.",desc:"Work for automotive, tourism, publishing, agriculture, technology and sports clients.",role:"Branding, graphic design, motion and web.",status:"realized",tags:["Branding","Editorial","Motion","Web"],color:"digital",coverStyle:"archive",mark:"++"},
      {id:"gift-riil",group:"concept",name:"ПодаРИИЛ",brand:"РИИЛ",date:"",tagline:"An interactive concept for International Women's Day.",desc:"Branded stickers collectively upgraded a gift in a dynamic post, with useful and deliberately awkward prize variants.",role:"Creative concept, mechanics and copywriting.",status:"concept",tags:["РИИЛ","Stickers","Activation"],color:"concept",coverStyle:"gift",mark:"8M"},
      {id:"red-candy",group:"concept",name:"Не тариф, а конфетка",brand:"MTS RED",date:"",tagline:"A collectible game based on the tariff's features.",desc:"Each virtual sweet represented one product feature, and collecting the full set unlocked entry to a prize draw.",role:"Creative concept, game mechanics, product integration and naming.",status:"concept",tags:["MTS RED","Game","Product"],color:"concept",coverStyle:"candy",mark:"RED"},
      {id:"riil-cycle",group:"concept",name:"РИИЛСАЙКЛ",brand:"РИИЛ × Собиратор",date:"",tagline:"A circular-economy collaboration concept.",desc:"Users donated unwanted items, took an eco quiz and entered a prize draw linked to the tariff's product idea.",role:"Creative concept, mechanics, product and partner integration.",status:"concept",tags:["РИИЛ","Sustainability","Partner"],color:"concept",coverStyle:"cycle",mark:"↻"},
      {id:"riil-vintage",group:"concept",name:"РИИЛ Винтаж",brand:"РИИЛ",date:"",tagline:"An AI stylist bot for vintage stores.",desc:"A QR code in the fitting room opened styling recommendations and a follow-up outfit-building game.",role:"Creative concept, user journey and game mechanics.",status:"concept",tags:["РИИЛ","AI","Telegram bot","Retail"],color:"concept",coverStyle:"vintage",mark:"AI"},
      {id:"riil-omanko",group:"concept",name:"РИИЛ × ÖmankÖ",brand:"РИИЛ × ÖmankÖ",date:"",tagline:"A nationwide digital hunt with codes and hidden clues.",desc:"A RIIL bot guided participants through the quest, with merchandise and prizes planned for the winners.",role:"Creative concept, quest mechanics and bot integration.",status:"concept",tags:["РИИЛ","Quest","Bot","Partner"],color:"concept",coverStyle:"quest",mark:"?"},
      {id:"riil-tournament",group:"concept",name:"РИИЛ Турнир",brand:"РИИЛ",date:"",tagline:"A 5×5 CS2 stream battle concept.",desc:"Subscriber selection, a custom in-game RIIL item and support across streams, Telegram and gaming media.",role:"Creative concept, tournament mechanics and brand integration.",status:"concept",tags:["РИИЛ","Gaming","CS2","Stream"],color:"concept",coverStyle:"gaming",mark:"5×5"},
      {id:"p3",group:"concept",name:"Т-Банк: Возврат",brand:"Т-Банк",date:"2024",tagline:"A campaign concept for the Возврат cashback service.",desc:"An advertising platform covering the insight, idea, mechanics and key messages; shortlisted in the Luchnik Budushchee competition.",role:"Creative concept and campaign mechanics.",status:"concept",tags:["Campaign","Concept","Shortlist"],color:"bank",mark:"TB",coverAlt:"Abstract cover for the T-Bank Возврат concept"},
    ],
    skills: [
      {cat:"Design",items:[["Graphic Design",92],["Brand Identity",90],["Communication Design",88],["Typography",85],["Print & Packaging",82]]},
      {cat:"Advertising & Copy",items:[["Creative Concepts",90],["Copywriting",84],["Ad Materials & Banners",88],["SMM Strategy",85],["Event Visual Design",80]]},
      {cat:"Tools",items:[["Figma",92],["Adobe Photoshop",90],["After Effects",80],["Adobe Illustrator",78],["HTML & CSS",72]]},
      {cat:"Microsoft Office",items:[["PowerPoint",88],["Word",85],["Excel",78],["Outlook",80]]},
    ],
    experience: [
      {role:"Creator · Creative Copywriter",company:"Mosaic Agency",period:"2025 - present",
       desc:"I develop advertising concepts, scripts and special projects for MTS, MTS RED, RIIL, Yandex and VTB. I worked on the MTS New Year show “Red Light” as a junior creator."},
      {role:"Campaign Concept · Shortlist",company:"Т-Банк (Luchnik Budushchee)",period:"2024",
       desc:"I developed a campaign concept for the Т-Банк Возврат cashback service. The project was shortlisted at the Luchnik Budushchee competition."},
      {role:"Motion & Banner Designer",company:"Alfa-Bank: Alfa-Leasing",period:"2024",
       desc:"I created internet banners, 3D OLV videos and animated brand assets for Alfa-Leasing."},
      {role:"Brand Identity & SMM",company:"Коврижка Зарайская",period:"2024",
       desc:"I developed the café's visual identity, brand book, SMM strategy and promotional materials."},
      {role:"Print & Advertising Designer",company:"HOOD GYM",period:"2024",
       desc:"I designed flyers and posters for the fitness club chain and prepared the files for production."},
      {role:"Graphic & Communication Designer",company:"TrustMe Studio",period:"2023 - 2025",
       desc:"I redesigned the logo, developed a cycling apparel collection and worked on garment cuts. Collaboration shirts with Masha Rudenko sold out in 48 hours."},
      {role:"Projection & Motion Designer",company:"GJO.E × FCSM / Tsvetnoy",period:"2023",
       desc:"I worked on the 4K projection show and motion design for the collaboration launch at Tsvetnoy Central Market."},
      {role:"Chief of Marketing & Design",company:"No Worries Cakes",period:"2022 - 2023",
       desc:"I developed the SMM strategy, managed Instagram and Telegram, and led collaborations with CHIHO and TrustMe Studio. A Resident Evil-inspired campaign increased orders by 123%."},
    ],
  },
  ru: {
    name: "Богдан Залесский",
    initials: "БЗ",
    role: "Креатор и креативный копирайтер в Mosaic",
    location: "Москва",
    bio: "Придумываю рекламные кампании и спецпроекты для МТС, МТС RED, РИИЛ, Яндекса и ВТБ. Работаю с идеей от поиска инсайта до презентации и запуска.",
    email: "bogdanzaless@gmail.com",
    tg: "https://t.me/bogdan_zaless",
    available: "Открыт для проектов",
    experience_years: "4+ года",
    resp_time: "~12ч",
    timezone: "МСК / UTC+3",
    sections: {
      fav:"Избранное", work:"Работа", connect:"Контакты", site:"Сайт",
      about:"Обо мне", projects:"Работы", skills:"Навыки",
      experience:"Опыт", contact:"Связаться",
      dp_hint:"Выберите проект,\nчтобы открыть описание",
    },
    projects: [
      {id:"voice-tech",group:"featured",name:"VoiceTech",brand:"МТС",date:"",tagline:"Рекламные сценарии для голосовых сервисов МТС.",desc:"Серия коротких сюжетов о звонках, которые приходят максимально не вовремя, но пропустить их нельзя.",role:"Креативная концепция, сценарии и копирайтинг.",status:"development",tags:["МТС","VoiceTech","Сценарии","Видео"],color:"voice",coverStyle:"voice",mark:"VT"},
      {id:"family-donut",group:"featured",name:"Семейная Плюшка",brand:"МТС",date:"",tagline:"Telegram-игра для Семейной группы МТС.",desc:"Семьи объединялись в команды и прокачивали виртуальный пончик, а продуктовые функции становились игровыми бустами и продолжались в офлайн-коллаборации.",role:"Креативная идея, игровая механика, интеграция продукта и копирайтинг.",status:"realized",tags:["МТС","Telegram","Игра","Партнёрство"],color:"family",coverStyle:"family",mark:"М+"},
      {id:"red-new-year",group:"featured",name:"ПреКрасный Новый год",brand:"МТС RED",date:"",tagline:"Интерактивная новогодняя механика для МТС RED.",desc:"Пожелания в Telegram менялись каждые десять минут, а редкий стикер «Подарок» давал возможность участвовать в розыгрыше.",role:"Креативная идея, механика и копирайтинг.",status:"realized",tags:["МТС RED","Telegram","Стикеры","Активация"],color:"red",coverStyle:"red",mark:"10"},
      {id:"p1",group:"featured",name:"Красный огонёк",brand:"РИИЛ × Диско-клуб",date:"2025",tagline:"Новогоднее музыкальное шоу для молодой аудитории.",desc:"Современная версия классического телеогонька с артистами разных поколений, живым событием и контентом для социальных сетей.",role:"Участие в разработке креативной концепции и формата проекта.",status:"realized",tags:["РИИЛ","Музыкальное шоу","Креатив","Ивент"],color:"digital",mark:"КО",coverAlt:"Сценический свет на обложке кейса «Красный огонёк»"},
      {id:"riil-la-routine",group:"featured",name:"РИИЛ × La Routine",brand:"РИИЛ × La Routine",date:"2025",tagline:"Модная коллаборация и Telegram-игра.",desc:"Пользователи освобождали сумку из виртуального льда и старались удержаться в рейтинге.",role:"Креативная идея, игровая механика и развитие коллаборации.",status:"realized",tags:["РИИЛ","Мода","Telegram","Игра"],color:"ice",coverStyle:"ice",mark:"LR"},
      {id:"riil-city",group:"featured",name:"РИИЛ × Mates / «Дорожка»",brand:"РИИЛ",date:"",tagline:"Коллаборации с городскими пространствами.",desc:"Офлайн-активации вокруг общения и совместного досуга: партнёрские меню, брендированные зоны, игры и мини-приложение.",role:"Креативные концепции, механики активаций и интеграция бренда.",status:"realized",tags:["РИИЛ","Партнёрство","Офлайн","Мини-приложение"],color:"city",coverStyle:"city",mark:"///"},
      {id:"red-advent",group:"other",name:"Адвент МТС RED",brand:"МТС RED",date:"2025",tagline:"Новогодний розыгрыш в формате мини-приложения.",desc:"Пользователи возвращались в адвент-календарь каждый день и получали новый шанс выиграть технику.",role:"Креативная идея и механика проекта.",status:"realized",tags:["МТС RED","Адвент","Мини-приложение"],color:"red",coverStyle:"advent",mark:"25"},
      {id:"p4",group:"other",name:"Альфа-Банк: Лизинг",brand:"Альфа-Лизинг",date:"2024",tagline:"Моушн и диджитал-материалы для Альфа-Лизинга.",desc:"Интернет-баннеры, 3D OLV-ролики и анимированные брендовые материалы для диджитал-размещений.",role:"Моушн-дизайн, 3D и адаптация баннеров.",status:"realized",tags:["Моушн","3D","Баннеры","OLV"],color:"bank",mark:"A",coverAlt:"Абстрактная обложка моушн-проекта для Альфа-Лизинга"},
      {id:"p5",group:"other",name:"GJO.E × FCSM",brand:"GJO.E × FCSM",date:"2023",tagline:"Визуальное оформление запуска коллекции в универмаге «Цветной».",desc:"Проекционное 4K-шоу, моушн-графика и ивент-материалы для запуска коллаборации.",role:"Проекционный и моушн-дизайн.",status:"realized",tags:["Моушн","Проекции","Ивент"],color:"motion",mark:"G×F",coverAlt:"Абстрактная проекционная обложка проекта GJO.E × FCSM"},
      {id:"p6",group:"other",name:"HOOD GYM",brand:"HOOD GYM",date:"2024",tagline:"Полиграфия и реклама для сети фитнес-клубов.",desc:"Флаеры, постеры и подготовленные к производству файлы для офлайн-коммуникации клуба.",role:"Графический дизайн и подготовка к печати.",status:"realized",tags:["Полиграфия","Реклама","Типографика"],color:"brand",mark:"HG",coverAlt:"Типографическая обложка полиграфического проекта HOOD GYM"},
      {id:"p7",group:"other",name:"Коврижка Зарайская",brand:"Коврижка Зарайская",date:"2024",tagline:"Айдентика и система коммуникации для кафе.",desc:"Брендбук, tone of voice, SMM-стратегия и рекламные материалы.",role:"Айдентика, коммуникация и SMM-стратегия.",status:"realized",tags:["Брендинг","Брендбук","SMM"],color:"brand",coverStyle:"bakery",mark:"КЗ"},
      {id:"p8",group:"other",name:"No Worries Cakes",brand:"No Worries Cakes",date:"2022–2023",tagline:"Коммуникация и маркетинг бренда кастомных тортов.",desc:"Стратегия для соцсетей, коллаборации и тематическая кампания для Instagram и Telegram.",role:"Маркетинг, креативное направление, дизайн и SMM.",status:"realized",tags:["SMM","Брендинг","Коллаборации"],color:"brand",coverStyle:"cakes",mark:"NWC"},
      {id:"p9",group:"other",name:"TrustMe Studio",brand:"TrustMe Studio",date:"2023–2025",tagline:"Айдентика, одежда и коммуникация для модного бренда.",desc:"Обновлённый логотип, велоодежда, работа с лекалами и материалы для коллабораций.",role:"Графический и коммуникационный дизайн.",status:"realized",tags:["Мода","Айдентика","Одежда"],color:"fashion",coverStyle:"fashion",mark:"TMS"},
      {id:"p10",group:"other",name:"Два Мяча & Ewing",brand:"Два Мяча / Ewing",date:"2023",tagline:"Диджитал-баннеры и полиграфия для двух запусков.",desc:"HTML-баннеры и печатный комплект для Ewing и флагманского магазина «Два Мяча».",role:"Диджитал- и полиграфический дизайн.",status:"realized",tags:["HTML/CSS","Полиграфия","Реклама"],color:"brand",coverStyle:"sport",mark:"2M"},
      {id:"p11",group:"other",name:"Архив проектов",brand:"Разные клиенты",date:"2022–н.в.",tagline:"Небольшие проекты в брендинге, эдиториале, моушне и вебе.",desc:"Работы для проектов в сфере авто, туризма, издательств, агро, технологий и спорта.",role:"Брендинг, графический дизайн, моушн и веб.",status:"realized",tags:["Брендинг","Эдиториал","Моушн","Веб"],color:"digital",coverStyle:"archive",mark:"++"},
      {id:"gift-riil",group:"concept",name:"ПодаРИИЛ",brand:"РИИЛ",date:"",tagline:"Интерактивная механика к 8 Марта.",desc:"Брендированные стикеры коллективно улучшали подарок на динамическом посте, где хорошие призы чередовались с нарочито неловкими вариантами.",role:"Креативная концепция, механика и копирайтинг.",status:"concept",tags:["РИИЛ","Стикеры","Активация"],color:"concept",coverStyle:"gift",mark:"8M"},
      {id:"red-candy",group:"concept",name:"Не тариф, а конфетка",brand:"МТС RED",date:"",tagline:"Коллекционная игра на основе функций тарифа.",desc:"Каждая виртуальная конфета отвечала за отдельную функцию, а полный набор открывал участие в розыгрыше.",role:"Креативная концепция, игровая механика, продуктовая интеграция и нейминг.",status:"concept",tags:["МТС RED","Игра","Продукт"],color:"concept",coverStyle:"candy",mark:"RED"},
      {id:"riil-cycle",group:"concept",name:"РИИЛСАЙКЛ",brand:"РИИЛ × Собиратор",date:"",tagline:"Концепция коллаборации о разумном потреблении.",desc:"Пользователи сдавали ненужные вещи, проходили экоквиз и участвовали в розыгрыше, связанном с продуктовой идеей тарифа.",role:"Креативная концепция, механика, интеграция продукта и партнёра.",status:"concept",tags:["РИИЛ","Экология","Партнёрство"],color:"concept",coverStyle:"cycle",mark:"↻"},
      {id:"riil-vintage",group:"concept",name:"РИИЛ Винтаж",brand:"РИИЛ",date:"",tagline:"Telegram-бот с ИИ-стилистом для винтажных магазинов.",desc:"QR-код в примерочной открывал рекомендации стилиста и продолжение в игре «Собери РИИЛ-лук».",role:"Креативная концепция, пользовательский путь и игровая механика.",status:"concept",tags:["РИИЛ","ИИ","Telegram-бот","Ритейл"],color:"concept",coverStyle:"vintage",mark:"AI"},
      {id:"riil-omanko",group:"concept",name:"РИИЛ × ÖmankÖ",brand:"РИИЛ × ÖmankÖ",date:"",tagline:"Всероссийская цифровая охота с шифрами и подсказками.",desc:"РИИЛ-бот помогал участникам проходить квест, а для победителей планировались мерч и призы.",role:"Креативная концепция, механика квеста и интеграция бота.",status:"concept",tags:["РИИЛ","Квест","Бот","Партнёрство"],color:"concept",coverStyle:"quest",mark:"?"},
      {id:"riil-tournament",group:"concept",name:"РИИЛ Турнир",brand:"РИИЛ",date:"",tagline:"Концепция стрим-баттла 5×5 по CS2.",desc:"Отбор подписчиков, кастомный предмет РИИЛ внутри игры и поддержка в стримах, Telegram и геймерских медиа.",role:"Креативная концепция, механика турнира и интеграция бренда.",status:"concept",tags:["РИИЛ","Гейминг","CS2","Стрим"],color:"concept",coverStyle:"gaming",mark:"5×5"},
      {id:"p3",group:"concept",name:"Т-Банк: Возврат",brand:"Т-Банк",date:"2024",tagline:"Концепция кампании для кэшбэк-сервиса «Возврат».",desc:"Рекламная платформа с инсайтом, идеей, механикой и ключевыми сообщениями; проект вошёл в шорт-лист конкурса «Лучник Будущее».",role:"Креативная концепция и механика кампании.",status:"concept",tags:["Кампания","Концепция","Шорт-лист"],color:"bank",mark:"TB",coverAlt:"Абстрактная обложка концепции «Т-Банк: Возврат»"},
    ],
    skills: [
      {cat:"Дизайн",items:[["Графический дизайн",92],["Айдентика бренда",90],["Коммуникационный дизайн",88],["Типографика",85],["Полиграфия и упаковка",82]]},
      {cat:"Реклама и копирайтинг",items:[["Креативные концепции",90],["Копирайтинг",84],["Рекламные материалы",88],["SMM-стратегия",85],["Ивент-дизайн",80]]},
      {cat:"Инструменты",items:[["Figma",92],["Adobe Photoshop",90],["After Effects",80],["Adobe Illustrator",78],["HTML & CSS",72]]},
      {cat:"Microsoft Office",items:[["PowerPoint",88],["Word",85],["Excel",78],["Outlook",80]]},
    ],
    experience: [
      {role:"Креатор · Креативный копирайтер",company:"Агентство Mosaic",period:"2025 - н.в.",
       desc:"Разрабатываю рекламные концепции, сценарии и спецпроекты для МТС, МТС RED, РИИЛ, Яндекса и ВТБ. Над новогодним шоу МТС «Красный огонёк» работал как младший креатор."},
      {role:"Концепция кампании · Шорт-лист",company:"Т-Банк («Лучник Будущее»)",period:"2024",
       desc:"Разработал концепцию кампании для кэшбэк-сервиса Т-Банк Возврат. Проект вошёл в шорт-лист конкурса «Лучник Будущее»."},
      {role:"Моушн и баннерный дизайнер",company:"Альфа-Банк: Альфа-Лизинг",period:"2024",
       desc:"Сделал интернет-баннеры, 3D OLV-ролики и анимированные брендовые материалы для Альфа-Лизинга."},
      {role:"Айдентика и SMM",company:"Коврижка Зарайская",period:"2024",
       desc:"Разработал фирменный стиль, брендбук, SMM-стратегию и рекламные материалы для кафе."},
      {role:"Полиграфия и реклама",company:"HOOD GYM",period:"2024",
       desc:"Разработал флаеры и постеры для сети фитнес-клубов и подготовил файлы к печати."},
      {role:"Графический и коммуникационный дизайнер",company:"TrustMe Studio",period:"2023 - 2025",
       desc:"Переработал логотип, создал коллекцию велоодежды и участвовал в доработке лекал. Рубашки из коллаборации с Машей Руденко распродали за 48 часов."},
      {role:"Техник проекций и моушн-дизайнер",company:"GJO.E × FCSM / Tsvetnoy",period:"2023",
       desc:"Работал над проекционным шоу и моушн-дизайном для запуска коллаборации в Tsvetnoy Central Market."},
      {role:"Руководитель маркетинга и дизайна",company:"No Worries Cakes",period:"2022 - 2023",
       desc:"Разработал SMM-стратегию, вёл Instagram и Telegram и провёл коллаборации с CHIHO и TrustMe Studio. Кампания в стиле Resident Evil увеличила число заказов на 123%."},
    ],
  }
};

const PROJECT_COVERS = Object.freeze({
  "p1": "/assets/covers/p1.webp",
  "p3": "/assets/covers/p3.webp",
  "p4": "/assets/covers/p4.webp",
  "p5": "/assets/covers/p5.webp",
  "p6": "/assets/covers/p6.webp"
});

const CASES = {
  p3: {
    en: {
      problem: "Cashback is a standard feature in banking products, so Т-Банк Возврат needed a campaign idea that would distinguish the service from similar offers.",
      solution: "I developed the campaign concept, including the insight, creative idea, mechanics and key messages. The focus was on making the return of money clear and noticeable for the audience.",
      results: ["The project was shortlisted at the Luchnik Budushchee competition","The submission included the complete campaign concept and mechanics"],
    },
    ru: {
      problem: "Кэшбэк стал стандартной функцией банковских продуктов, поэтому сервису Т-Банк Возврат была нужна идея, которая отличала бы его от похожих предложений.",
      solution: "Я разработал концепцию кампании: инсайт, креативную идею, механику и ключевые сообщения. В основе была простая и заметная подача самого возврата денег.",
      results: ["Проект вошёл в шорт-лист конкурса «Лучник Будущее»","В конкурсную работу вошли концепция кампании и механика"],
    },
  },
  p4: {
    en: {
      problem: "Leasing is a complex B2B product that needs to be explained quickly in digital advertising. The message had to remain clear across short videos and compact banner formats.",
      solution: "I designed internet banners and produced 3D OLV videos. Motion graphics and simple visual metaphors were used to explain the main product benefits.",
      results: ["3D OLV videos prepared for digital placements","Banner layouts adapted to several formats","One visual system used across video and static materials"],
    },
    ru: {
      problem: "Лизинг — сложный B2B-продукт, который нужно быстро объяснить в диджитал-рекламе. Сообщение должно было оставаться понятным и в коротком ролике, и в компактном баннере.",
      solution: "Я сделал интернет-баннеры и 3D OLV-ролики. Основные преимущества продукта объяснили через моушн-графику и простые визуальные метафоры.",
      results: ["3D OLV-ролики подготовлены для диджитал-размещений","Баннеры адаптированы под несколько форматов","Для видео и статичных материалов использована единая визуальная система"],
    },
  },
  p5: {
    en: {
      problem: "GJO.E and FCSM needed a launch format that would present their new collection and give guests a reason to attend the event at Tsvetnoy Central Market.",
      solution: "The launch included 4K projection mapping, an animated logo, a stage with a live choir, holographic invitations and posters across Moscow. I was responsible for projection setup and motion design in After Effects and Millumin 4.",
      results: ["The collection sold out within the first days","Guests included ST, Mikhail Bashkatov, Timur Yeremeyev and bloggers","The projection show became the main visual part of the launch"],
    },
    ru: {
      problem: "GJO.E и FCSM нужен был формат запуска, который представит новую коллекцию и даст гостям повод прийти на событие в Tsvetnoy Central Market.",
      solution: "В запуск вошли 4K-проекционный маппинг, анимированный логотип, сцена с живым хором, голографические приглашения и постеры по Москве. Я отвечал за настройку проекций и моушн-дизайн в After Effects и Millumin 4.",
      results: ["Коллекцию распродали в первые дни","Среди гостей были ST, Михаил Башкатов, Тимур Еремеев и блогеры","Проекционное шоу стало основной визуальной частью запуска"],
    },
  },
  p6: {
    en: {
      problem: "HOOD GYM used different promotional materials across its clubs. The chain needed a consistent visual approach and files that met print production requirements.",
      solution: "I designed a set of flyers and posters and handled prepress, including color profiles, bleeds and final print-ready files.",
      results: ["A consistent promotional style for the club chain","All layouts prepared for print production"],
    },
    ru: {
      problem: "В разных клубах HOOD GYM использовали разные рекламные материалы. Сети был нужен единый визуальный подход и корректно подготовленные файлы для печати.",
      solution: "Я разработал систему флаеров и постеров и полностью подготовил их к производству: настроил цветовые профили, вылеты и финальные файлы.",
      results: ["Единый стиль рекламных материалов для сети","Все макеты подготовлены к печати"],
    },
  },
  p7: {
    en: {
      problem: "Kovrizhka Zarayskaya had a recognizable product but no consistent identity or communication system. The café needed a clear visual style for both offline and social media use.",
      solution: "I developed the visual identity, brand book, tone of voice, SMM strategy and promotional mechanics.",
      results: ["A complete identity system from logo to brand book","An SMM strategy and promotional plan","Consistent communication across the café's main channels"],
    },
    ru: {
      problem: "У «Коврижки Зарайской» был узнаваемый продукт, но не было единого фирменного стиля и системы коммуникации. Кафе нужен был понятный визуальный язык для офлайна и соцсетей.",
      solution: "Я разработал фирменный стиль, брендбук, tone of voice, SMM-стратегию и механики промоакций.",
      results: ["Полная система айдентики: от логотипа до брендбука","SMM-стратегия и план продвижения","Единая коммуникация в основных каналах кафе"],
    },
  },
  p8: {
    en: {
      problem: "No Worries Cakes needed to increase orders without a separate media budget. The main communication channels were Instagram and Telegram.",
      solution: "I developed the SMM strategy, managed both channels and organized collaborations with CHIHO and TrustMe Studio. I also created a Resident Evil-inspired campaign in which a virus transforms a regular cake into the brand's signature ugly cake.",
      results: ["Orders increased by 123% after the campaign","Collaborations introduced the brand to new audiences","A consistent tone of voice for Instagram and Telegram"],
    },
    ru: {
      problem: "No Worries Cakes нужно было увеличить число заказов без отдельного медиабюджета. Основными каналами коммуникации были Instagram и Telegram.",
      solution: "Я разработал SMM-стратегию, вёл оба канала и организовал коллаборации с CHIHO и TrustMe Studio. Также выпустил кампанию в стиле Resident Evil, где вирус превращал обычный торт в фирменный ugly cake.",
      results: ["После кампании число заказов выросло на 123%","Коллаборации привели новую аудиторию","Для Instagram и Telegram сформирован единый tone of voice"],
    },
  },
  p9: {
    en: {
      problem: "TrustMe Studio produces limited clothing drops in a dark medical aesthetic. The visual system had to stay consistent across the logo, products and collaborations.",
      solution: "I redesigned the logo with a reference to Umbrella Corp, developed a cycling apparel collection, worked on garment cuts and helped create the collaboration with Masha Rudenko.",
      results: ["Collaboration shirts sold out in 48 hours","The brand was featured in fashion media","The updated logo and identity are still in use"],
    },
    ru: {
      problem: "TrustMe Studio выпускает лимитированные дропы одежды в тёмной медицинской эстетике. Визуальная система должна была одинаково работать в логотипе, продукте и коллаборациях.",
      solution: "Я переработал логотип с отсылкой к Umbrella Corp, создал коллекцию велоодежды, участвовал в доработке лекал и помог собрать коллаборацию с Машей Руденко.",
      results: ["Рубашки из коллаборации распродали за 48 часов","О бренде написали профильные медиа","Обновлённые логотип и айдентика используются до сих пор"],
    },
  },
  p10: {
    en: {
      problem: "The work covered two separate briefs: support Ewing's launch in Russia and promote the Два Мяча autumn collection at the Хлебозавод flagship store.",
      solution: "I created HTML banners for digital placements and a print set that included boxes, softboxes and posters. Each brand kept its own visual system.",
      results: ["Digital materials prepared for both campaigns","Print materials installed at the Хлебозавод flagship store","A separate visual approach developed for each brand"],
    },
    ru: {
      problem: "Работа включала два отдельных брифа: поддержать выход Ewing на российский рынок и продвинуть осеннюю коллекцию «Два Мяча» во флагмане на Хлебозаводе.",
      solution: "Я сделал HTML-баннеры для диджитал-размещений и комплект печатных материалов: коробки, софтбоксы и постеры. Для каждого бренда сохранил отдельную визуальную систему.",
      results: ["Диджитал-материалы подготовлены для обеих кампаний","Печатные материалы размещены во флагмане на Хлебозаводе","Для каждого бренда разработан свой визуальный подход"],
    },
  },
  p11: {
    en: {
      problem: "This section brings together smaller projects from different fields, including automotive, tourism, publishing, agriculture, technology and sports.",
      solution: "The work includes a Porsche poster, an identity for a Moscow Tourism Committee campaign, a B&D fashion editorial, an EkoNiva product launch, the KRONOS Smart City brand book, motion design for the Russian Bodybuilding Federation, a photographer's website and a Media Crush book campaign.",
      results: ["Eight completed projects across different fields","Experience with identity, editorial design, packaging, motion and web"],
    },
    ru: {
      problem: "В этом разделе собраны небольшие проекты из разных сфер: авто, туризм, издательства, агро, технологии и спорт.",
      solution: "Среди работ — постер для Porsche, айдентика проекта Комитета по туризму Москвы, fashion-эдиториал B&D, запуск продукта EkoNiva, брендбук KRONOS Smart City, моушн для Федерации бодибилдинга России, сайт фотографа и промо книги Media Crush.",
      results: ["Восемь завершённых проектов из разных сфер","Опыт в айдентике, эдиториале, упаковке, моушне и вебе"],
    },
  },
};

const CASE_STUDY_DETAILS = {
  "voice-tech": {
    en: {
      context:"MTS voice services solve practical problems during calls, but a list of features alone does not show when they become useful.",
      idea:"Build every spot around a familiar moment when a call arrives at exactly the wrong time, while missing it is not an option.",
      mechanism:"Each short script starts in a recognisable setting, including a gym, cinema, theatre, skating rink, party, workplace, shop or kitchen. Secretary, Call to Chat, call recording or transcription then resolves the situation without a long product explanation.",
      role:"Creative concept, scripts and copywriting.",
      materials:["Short video scripts","Secretary","Call to Chat","Call recording and transcription"],
      status:"Creative development. Finished videos are available in the working materials.",
      evidence:[]
    },
    ru: {
      context:"Голосовые сервисы МТС решают практические задачи во время звонков, но простой список функций не показывает, в какой момент они действительно нужны.",
      idea:"Построить каждый ролик вокруг знакомой ситуации, когда звонок приходит максимально не вовремя, но пропустить его нельзя.",
      mechanism:"Каждый короткий сценарий начинается в узнаваемом месте: спортзале, кино, театре, на катке, вечеринке, работе, в магазине или на кухне. Затем «Секретарь», перевод звонка в чат, запись или расшифровка разговора решают ситуацию без длинного объяснения продукта.",
      role:"Креативная концепция, сценарии и копирайтинг.",
      materials:["Короткие видеосценарии","«Секретарь»","Перевод звонка в чат","Запись и расшифровка звонков"],
      status:"Креативная разработка. Готовые видеоролики есть в рабочих материалах.",
      evidence:[]
    }
  },
  "family-donut": {
    en: {
      context:"MTS Family Group needed a format that could explain shared product features through participation rather than a standard product message.",
      idea:"Turn the family group into a team that levels up one shared virtual donut.",
      mechanism:"Participants formed family teams in Telegram. Family Group features worked as game boosts. The mechanic continued offline with Krunchy Dream through branded donut sets, partner venue communication and a draw for an iPhone and sweet sets.",
      role:"Creative idea, game mechanics, product integration and copywriting.",
      materials:["Telegram game","Family team mechanics","Branded donut sets","Partner venue communication"],
      status:"Realized.",
      evidence:[]
    },
    ru: {
      context:"Для Семейной группы МТС нужен был формат, который объяснял бы совместные возможности продукта через участие, а не через обычное рекламное сообщение.",
      idea:"Превратить семейную группу в команду, которая вместе прокачивает одного виртуального пончика.",
      mechanism:"Участники объединялись в семейные команды в Telegram. Возможности Семейной группы становились игровыми бустами. Механика продолжилась офлайн вместе с Krunchy Dream: брендированными наборами пончиков, коммуникацией в точках партнёра и розыгрышем iPhone и сладких наборов.",
      role:"Креативная идея, игровая механика, интеграция продукта и копирайтинг.",
      materials:["Telegram-игра","Семейные команды","Брендированные наборы пончиков","Коммуникация в точках партнёра"],
      status:"Реализован.",
      evidence:[]
    }
  },
  "red-new-year": {
    en: {
      context:"MTS RED needed a simple seasonal mechanic that would give people a reason to return to the Telegram channel throughout the day.",
      idea:"Make a changing holiday wish the interface of the giveaway and hide one rare Gift version among the regular stickers.",
      mechanism:"The wish changed every ten minutes. Users followed the sticker in the Движитал Telegram channel, looked for the rare version and could enter the draw when it appeared.",
      role:"Creative idea, mechanics and copywriting.",
      materials:["Dynamic Telegram post","Changing sticker set","Prize entry mechanic"],
      status:"Realized.",
      evidence:[]
    },
    ru: {
      context:"Для МТС RED нужна была простая сезонная механика, которая давала бы аудитории повод возвращаться в Telegram-канал в течение дня.",
      idea:"Сделать меняющееся праздничное пожелание интерфейсом розыгрыша и спрятать среди обычных стикеров редкий вариант «Подарок».",
      mechanism:"Пожелание менялось каждые десять минут. Пользователи следили за стикером в Telegram-канале «Движитал», искали редкую версию и при её появлении могли принять участие в розыгрыше.",
      role:"Креативная идея, механика и копирайтинг.",
      materials:["Динамический пост в Telegram","Набор меняющихся стикеров","Механика участия в розыгрыше"],
      status:"Реализован.",
      evidence:[]
    }
  },
  p1: {
    en: {
      context:"РИИЛ needed a New Year format that felt relevant to a young audience without repeating a conventional seasonal advertising campaign.",
      idea:"Rework the familiar TV variety-show format as a contemporary live music project for different generations.",
      mechanism:"The project combined performers from different generations, a live show, offline zones and content for social media. The same format worked as an event and as a set of publishable episodes and fragments.",
      role:"Contributed to the creative concept and project format.",
      materials:["Music show","Live event","Offline zones","Social media content"],
      status:"Realized in 2025.",
      evidence:[
        {label:"Case on Sostav",url:"https://www.sostav.ru/publication/mts-snyal-novogodnee-shou-krasnyj-ogonek-dlya-zumerov-80832.html"},
        {label:"Official MTS publication",url:"https://moskva.mts.ru/about/media-centr/soobshheniya-kompanii/novosti-mts-v-rossii-i-mire/2025-12-30/mts-i-disko-klub-obedinilis-i-snyali-novogodnee-shou-krasnyj-ogonek-dlya-zumerov"},
        {label:"AdIndex article",url:"https://adindex.ru/news/media/2025/12/30/341633.phtml"}
      ]
    },
    ru: {
      context:"РИИЛ нужен был новогодний формат для молодой аудитории, который не повторял бы обычную сезонную рекламную кампанию.",
      idea:"Переосмыслить знакомый формат телевизионного огонька как современный музыкальный проект для разных поколений.",
      mechanism:"Проект объединил артистов разных поколений, живое шоу, офлайн-зоны и контент для социальных сетей. Один формат работал и как событие, и как серия материалов для публикации.",
      role:"Участие в разработке креативной концепции и формата проекта.",
      materials:["Музыкальное шоу","Живое событие","Офлайн-зоны","Контент для социальных сетей"],
      status:"Реализован в 2025 году.",
      evidence:[
        {label:"Кейс на Sostav",url:"https://www.sostav.ru/publication/mts-snyal-novogodnee-shou-krasnyj-ogonek-dlya-zumerov-80832.html"},
        {label:"Официальная публикация МТС",url:"https://moskva.mts.ru/about/media-centr/soobshheniya-kompanii/novosti-mts-v-rossii-i-mire/2025-12-30/mts-i-disko-klub-obedinilis-i-snyali-novogodnee-shou-krasnyj-ogonek-dlya-zumerov"},
        {label:"Материал AdIndex",url:"https://adindex.ru/news/media/2025/12/30/341633.phtml"}
      ]
    }
  },
  "riil-la-routine": {
    en: {
      context:"The fashion collaboration needed a digital continuation that could keep people involved after the product announcement.",
      idea:"Turn the bag frozen in ice into a playable object and make speed part of the collaboration.",
      mechanism:"In the Telegram game, users tried to free the bag from virtual ice faster than others and hold their position in the ranking.",
      role:"Creative idea, game mechanics and development of the collaboration.",
      materials:["Telegram ice game","Player ranking","Produced fashion collaboration"],
      status:"Realized. The links below confirm the first public stage of the La Routine collaboration.",
      evidence:[
        {label:"First collaboration on Sostav",url:"https://www.sostav.ru/publication/mts-i-la-routine-vypustili-sumki-v-podderzhku-tarifa-riil-76169.html"},
        {label:"Official MTS publication",url:"https://spb.mts.ru/about/media-centr/soobshheniya-kompanii/novosti-mts-v-rossii-i-mire/2025-06-25/mts-i-la-routine-vypustili-sumki-v-podderzhku-molodyozhnogo-tarifa-riil"},
        {label:"AdIndex article",url:"https://adindex.ru/news/adyummy/2025/06/25/334540.phtml"}
      ]
    },
    ru: {
      context:"Модной коллаборации нужно было цифровое продолжение, которое сохраняло бы интерес после первого анонса продукта.",
      idea:"Превратить замороженную во льду сумку в игровой объект и сделать скорость частью коллаборации.",
      mechanism:"В Telegram-игре пользователи старались быстрее остальных освободить сумку из виртуального льда и удержаться в рейтинге.",
      role:"Креативная идея, игровая механика и развитие коллаборации.",
      materials:["Telegram-игра со льдом","Рейтинг игроков","Выпущенная модная коллаборация"],
      status:"Реализован. Ссылки ниже подтверждают первый публичный этап коллаборации с La Routine.",
      evidence:[
        {label:"Первая часть коллаборации на Sostav",url:"https://www.sostav.ru/publication/mts-i-la-routine-vypustili-sumki-v-podderzhku-tarifa-riil-76169.html"},
        {label:"Официальная публикация МТС",url:"https://spb.mts.ru/about/media-centr/soobshheniya-kompanii/novosti-mts-v-rossii-i-mire/2025-06-25/mts-i-la-routine-vypustili-sumki-v-podderzhku-molodyozhnogo-tarifa-riil"},
        {label:"Материал AdIndex",url:"https://adindex.ru/news/adyummy/2025/06/25/334540.phtml"}
      ]
    }
  },
  "riil-city": {
    en: {
      context:"РИИЛ needed partnership formats that could become part of a regular city visit rather than feel like a separate branded event.",
      idea:"Build each collaboration around conversation and spending time together.",
      mechanism:"The concepts used dishes and drinks for sharing, branded menus and spaces, a photo booth, game zones and a mini app with prize draws. Each element supported the partner venue's normal visitor journey.",
      role:"Creative concepts, activation mechanics and brand integration.",
      materials:["Partner menus","Branded spaces","Photo booth and game zones","Prize mini app"],
      status:"Realized.",
      evidence:[]
    },
    ru: {
      context:"РИИЛ нужны были партнёрские форматы, которые становились частью обычного городского визита, а не выглядели отдельным брендовым мероприятием.",
      idea:"Построить каждую коллаборацию вокруг общения и совместного досуга.",
      mechanism:"В проектах использовались блюда и напитки для шеринга, брендированные меню и пространства, фотобудка, игровые зоны и мини-приложение с розыгрышами. Каждый элемент встраивался в обычный путь гостя у партнёра.",
      role:"Креативные концепции, механики активаций и интеграция бренда.",
      materials:["Партнёрские меню","Брендированные пространства","Фотобудка и игровые зоны","Мини-приложение с розыгрышами"],
      status:"Реализованы.",
      evidence:[]
    }
  },
  "red-advent": {
    en: {
      context:"The seasonal giveaway needed a simple reason for users to return every day instead of opening the project once.",
      idea:"Use the familiar advent-calendar rhythm, with one new chance to win a tech prize each day.",
      mechanism:"The mini app opened a new calendar entry daily. A short repeatable action kept the rules clear and supported regular return visits throughout the campaign.",
      role:"Creative idea and project mechanics.",
      materials:["Mini app","Daily calendar entries","Prize draw mechanic"],
      status:"Realized in 2025.",
      evidence:[{label:"Official MTS RED post",url:"https://ok.ru/group/51986592563391/topic/157125971211711"}]
    },
    ru: {
      context:"Сезонному розыгрышу нужен был простой повод возвращаться каждый день, а не открывать проект один раз.",
      idea:"Использовать знакомый ритм адвент-календаря, где каждый день появляется новый шанс выиграть технику.",
      mechanism:"В мини-приложении ежедневно открывалась новая ячейка календаря. Короткое повторяемое действие делало правила понятными и поддерживало регулярные возвращения в течение кампании.",
      role:"Креативная идея и механика проекта.",
      materials:["Мини-приложение","Ежедневные ячейки календаря","Механика розыгрыша"],
      status:"Реализован в 2025 году.",
      evidence:[{label:"Официальная публикация МТС RED",url:"https://ok.ru/group/51986592563391/topic/157125971211711"}]
    }
  },
  "gift-riil": {
    en: {context:"The concept needed to turn a standard March 8 greeting into a shared action.",idea:"Let branded stickers collectively upgrade one gift shown in a dynamic post.",mechanism:"Every sticker moved the gift forward. Useful prizes were mixed with deliberately awkward options, giving the audience a reason to keep improving the result.",role:"Creative concept, mechanics and copywriting.",materials:["Branded stickers","Dynamic post","Collective progress mechanic"],status:"Concept. Not launched.",evidence:[]},
    ru: {context:"Нужно было превратить обычное поздравление к 8 Марта в совместное действие.",idea:"Дать аудитории возможность брендированными стикерами коллективно улучшать один подарок на динамическом посте.",mechanism:"Каждый стикер двигал подарок вперёд. Полезные призы чередовались с нарочито неловкими вариантами, поэтому аудитории было выгодно продолжать активность.",role:"Креативная концепция, механика и копирайтинг.",materials:["Брендированные стикеры","Динамический пост","Механика общего прогресса"],status:"Концепция. Не запущена.",evidence:[]}
  },
  "red-candy": {
    en: {context:"The tariff's different benefits needed one clear game system.",idea:"Turn every product feature into a separate virtual sweet and the full tariff into a collectible box.",mechanism:"Users collected the complete set to enter a draw for physical boxes and larger prizes. Each sweet explained one function through its place in the collection.",role:"Creative concept, game mechanics, product integration and naming.",materials:["Virtual sweet collection","Product-feature system","Prize draw mechanic"],status:"Concept. Not launched.",evidence:[]},
    ru: {context:"Разные преимущества тарифа нужно было собрать в одну понятную игровую систему.",idea:"Превратить каждую функцию продукта в отдельную виртуальную конфету, а весь тариф — в коллекционный бокс.",mechanism:"Пользователь собирал полный набор и получал возможность участвовать в розыгрыше физических боксов и крупных призов. Каждая конфета объясняла одну функцию через своё место в коллекции.",role:"Креативная концепция, игровая механика, продуктовая интеграция и нейминг.",materials:["Коллекция виртуальных конфет","Система функций продукта","Механика розыгрыша"],status:"Концепция. Не запущена.",evidence:[]}
  },
  "riil-cycle": {
    en: {context:"The tariff's idea of choosing only what you use could be extended into a practical sustainability project.",idea:"Connect RIIL with Собиратор through a collection drive and a short eco quiz.",mechanism:"Participants donated unwanted items, completed the quiz and could enter a prize draw. The partner action and the tariff message supported the same behaviour.",role:"Creative concept, mechanics, product and partner integration.",materials:["Item collection","Eco quiz","Partner activation"],status:"Concept. Not launched.",evidence:[]},
    ru: {context:"Продуктовую идею тарифа о выборе только нужного можно было продолжить в практическом экологическом проекте.",idea:"Объединить РИИЛ и «Собиратор» через сбор ненужных вещей и короткий экоквиз.",mechanism:"Участники сдавали вещи, проходили квиз и получали возможность участвовать в розыгрыше. Действие партнёра и сообщение тарифа поддерживали одно и то же поведение.",role:"Креативная концепция, механика, интеграция продукта и партнёра.",materials:["Сбор вещей","Экоквиз","Партнёрская активация"],status:"Концепция. Не запущена.",evidence:[]}
  },
  "riil-vintage": {
    en: {context:"Vintage stores needed a digital service that could help with a real fitting-room choice and continue after the visit.",idea:"Place an AI stylist in Telegram and open it with a QR code inside the fitting room.",mechanism:"The bot gave styling recommendations and then moved the user into the Build a RIIL Look game, extending the same interaction beyond the store.",role:"Creative concept, user journey and game mechanics.",materials:["QR entry point","AI stylist bot","Outfit-building game"],status:"Concept. Not launched.",evidence:[]},
    ru: {context:"Винтажным магазинам нужен был цифровой сервис, который помогал бы с реальным выбором в примерочной и продолжал взаимодействие после визита.",idea:"Поместить ИИ-стилиста в Telegram и открывать его по QR-коду внутри примерочной.",mechanism:"Бот давал рекомендации по стилю, а затем переводил пользователя в игру «Собери РИИЛ-лук», продолжая тот же сценарий за пределами магазина.",role:"Креативная концепция, пользовательский путь и игровая механика.",materials:["QR-точка входа","Бот с ИИ-стилистом","Игра по сборке образа"],status:"Концепция. Не запущена.",evidence:[]}
  },
  "riil-omanko": {
    en: {context:"The partner collaboration needed a format that could work nationwide rather than only at one physical location.",idea:"Build a digital hunt from riddles, codes and clues hidden across several channels.",mechanism:"The RIIL bot guided participants through the quest. The plan included merchandise and prizes for the winners and partner involvement at key stages.",role:"Creative concept, quest mechanics and bot integration.",materials:["Digital quest route","Riddles and codes","RIIL bot"],status:"Concept. Developed with the partner, not launched.",evidence:[]},
    ru: {context:"Партнёрской коллаборации нужен был формат, который мог работать по всей стране, а не только в одной физической точке.",idea:"Построить цифровую охоту из загадок, шифров и подсказок, распределённых по нескольким каналам.",mechanism:"РИИЛ-бот помогал участникам проходить квест. Для победителей планировались мерч и призы, а партнёр подключался на ключевых этапах.",role:"Креативная концепция, механика квеста и интеграция бота.",materials:["Маршрут цифрового квеста","Загадки и шифры","РИИЛ-бот"],status:"Концепция. Прорабатывалась с партнёром, но не была запущена.",evidence:[]}
  },
  "riil-tournament": {
    en: {context:"РИИЛ needed a gaming format built around participation, not only media placement around a broadcast.",idea:"Stage a 5×5 CS2 battle between Lix and Recrent teams, with some players selected from their audiences.",mechanism:"The concept combined subscriber selection, a custom RIIL item in the game and support across streams, Telegram and gaming media.",role:"Creative concept, tournament mechanics and brand integration.",materials:["5×5 stream format","Subscriber selection","Custom in-game item","Telegram and media support"],status:"Concept. Not launched.",evidence:[]},
    ru: {context:"РИИЛ нужен был геймерский формат, построенный вокруг участия, а не только медийного размещения рядом с трансляцией.",idea:"Провести баттл 5×5 по CS2 между командами Ликса и Рекрента, часть игроков отобрать среди их аудитории.",mechanism:"Концепция объединяла отбор подписчиков, кастомный предмет РИИЛ внутри игры и поддержку в стримах, Telegram и геймерских медиа.",role:"Креативная концепция, механика турнира и интеграция бренда.",materials:["Стрим-формат 5×5","Отбор подписчиков","Кастомный предмет в игре","Поддержка в Telegram и медиа"],status:"Концепция. Не запущена.",evidence:[]}
  }
};

Object.assign(CASES, CASE_STUDY_DETAILS);
