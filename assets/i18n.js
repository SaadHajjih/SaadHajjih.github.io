/* ===== EN / عربي language switch ===== */
(() => {
  const S = 'class="text-slate-900 dark:text-white"';
  const B = '<span class="text-brand-500 mt-0.5">•</span> ';
  const ST = 'class="text-slate-800 dark:text-slate-300"';
  const TEXT = {
    "About": "نبذة", "Skills": "المهارات", "Projects": "المشاريع", "Experience": "الخبرات", "Education": "التعليم",
    "Certifications": "الشهادات", "Contact": "تواصل", "Resume": "السيرة الذاتية",
    "Sa'ed": "سعد", "Hajjih": "حجه",
    "Electrical Design Engineer": "مهندس تصميم كهربائي",
    "VIEW WORK ↓": "استعرض أعمالي ↓", "GET IN TOUCH": "تواصل معي", "Email": "البريد الإلكتروني",
    "Operational Profile": "الملف المهني", "Status": "الحالة", "Employed @ CHUM": "أعمل لدى CHUM",
    "Location": "الموقع", "Amman, Jordan": "عمّان، الأردن", "Specialization": "التخصص",
    "ELV & Automation": "التيار الخفيف والأتمتة", "Analytics": "الزيارات",
    "Design Projects": "مشاريع تصميم", "PRJ": "مشروع",
    "Jordan & Iraq · Commercial · Healthcare · Industrial": "الأردن والعراق · تجاري · صحي · صناعي",
    "Design & Analysis Tools": "برامج التصميم والتحليل", "SW": "برنامج",
    "Code Frameworks": "أكواد ومعايير", "STD": "معيار",
    "NFPA · CIBSE · SBC · Jordanian Codes": "NFPA · CIBSE · SBC · الأكواد الأردنية",
    "Licensed Engineer": "مهندس مرخّص", "Jordan Engineers Association": "نقابة المهندسين الأردنيين",
    "About Me": "نبذة عني", "Available for projects": "متاح للمشاريع", "Fig. 01": "شكل 01",
    "Technical Toolkit": "الأدوات التقنية",
    "The systems I design, and the tools and standards I use to deliver them.": "الأنظمة التي أصممها، والبرامج والمعايير التي أعتمد عليها لتنفيذها.",
    "Systems I Design": "الأنظمة التي أصممها",
    "Power Distribution": "توزيع القدرة الكهربائية", "Lighting Design": "تصميم الإنارة", "Fire Alarm": "إنذار الحريق",
    "CCTV": "كاميرات المراقبة CCTV", "Access Control": "التحكم بالدخول", "Structured Cabling": "الكوابل المهيكلة",
    "Wi-Fi Networks": "شبكات الواي فاي", "Public Address": "النداء العام PA", "UPS & Standby Power": "UPS والطاقة الاحتياطية",
    "MDF / IDF Rooms": "غرف MDF / IDF", "Solar PV": "الطاقة الشمسية PV", "Earthing & Grounding": "أنظمة التأريض",
    "Design & BIM": "التصميم و BIM", "Analysis & Calculations": "التحليل والحسابات",
    "Load Scheduling": "جداول الأحمال", "Cable Sizing": "تحجيم الكوابل", "Voltage Drop": "هبوط الجهد",
    "Short Circuit": "تيار القصر", "Grounding Grid": "شبكة التأريض", "Advanced Excel": "Excel متقدم",
    "Codes & Standards": "الأكواد والمعايير", "Saudi Building Code": "كود البناء السعودي",
    "Jordanian National Codes": "كودات البناء الوطني الأردني", "Renewables": "الطاقة المتجددة",
    "Grid-Tied PV": "أنظمة شمسية مربوطة على الشبكة",
    "Project visuals coming soon": "صور المشروع قريباً",
    "Healthcare Infrastructure": "بنية تحتية صحية", "Al-Shatrah Hospital (Iraq)": "مستشفى الشطرة (العراق)",
    "Managed complex low-voltage distribution and heavy structural containment layouts. Coordinated indoor cable trays to eliminate spatial clashes utilizing Navisworks. Engineered strictly to hospital safety codes.":
      "أدرت تصميم شبكات توزيع الجهد المنخفض ومسارات حوامل الكوابل، ونسّقت حوامل الكوابل الداخلية لإزالة التعارضات باستخدام Navisworks، وفق متطلبات السلامة الخاصة بالمستشفيات.",
    "Power & ELV Systems": "أنظمة القدرة والتيار الخفيف", "Schools Admin & Media Center": "مبنى إدارة المدارس والمركز الإعلامي",
    "Engineered comprehensive normal and UPS power networks, power for mechanical equipment, and extensive ELV routing including MDF sizing, BOQ generation, and voltage drop calculations.":
      "صممت شبكات القدرة العادية و UPS، وتغذية المعدات الميكانيكية، ومسارات أنظمة التيار الخفيف شاملةً تحجيم غرف MDF وإعداد جداول الكميات وحسابات هبوط الجهد.",
    "Smart Automation & Microgrids": "الأتمتة الذكية والشبكات الصغيرة", "Luxury Smart Villas": "فلل ذكية فاخرة",
    "Engineered comprehensive electrical network infrastructure, mapping out IP-CCTV surveillance zones and elevator access control loops. Modeled grid-tied solar arrays utilizing PVsyst and HOMER Pro.":
      "صممت البنية التحتية للشبكات الكهربائية، وحددت مناطق تغطية كاميرات IP-CCTV ودوائر التحكم بالدخول للمصاعد، ونمذجت أنظمة شمسية مربوطة على الشبكة باستخدام PVsyst و HOMER Pro.",
    "Commercial & Educational Power": "القدرة للمباني التجارية والتعليمية", "NAMK Bank & Al Ahliyyah": "بنك NAMK ومدرسة الأهلية",
    "Designed complete power mechanical system layouts for NAMK Bank. Authored an executive engineering assessment and system upgrade strategy for Al Ahliyyah School infrastructure.":
      "صممت مخططات القدرة للأنظمة الميكانيكية لبنك NAMK، وأعددت تقييماً هندسياً وخطة لتحديث البنية التحتية لمدرسة الأهلية.",
    "Sep 2025 – Present": "أيلول 2025 – حتى الآن",
    "Contributed to the design of comprehensive electrical systems for 20+ commercial, industrial, healthcare, and institutional projects across Jordan and Iraq.":
      "ساهمت في تصميم أنظمة كهربائية متكاملة لأكثر من 20 مشروعاً تجارياً وصناعياً وصحياً ومؤسسياً في الأردن والعراق.",
    "Developed detailed 2D/3D electrical layouts, shop drawings, single-line diagrams, and optimized cable routing using AutoCAD and Revit, with advanced photometric calculations in DIALux evo.":
      "أعددت مخططات كهربائية تفصيلية ثنائية وثلاثية الأبعاد، ومخططات تنفيذية، ومخططات أحادية الخط، وحسّنت مسارات الكوابل باستخدام AutoCAD و Revit، مع حسابات إنارة متقدمة في DIALux evo.",
    "Prepared comprehensive Bills of Quantities (BOQ) and detailed technical specifications for power distribution and integrated low-current systems.":
      "أعددت جداول كميات (BOQ) شاملة ومواصفات فنية تفصيلية لأنظمة توزيع القدرة وأنظمة التيار الخفيف المتكاملة.",
    "Conducted ETAP simulations, load flow calculations, and grounding grid verifications for an electrical substation in Iraq to validate system stability and cable sizing.":
      "أجريت محاكاة ETAP وحسابات سريان الأحمال والتحقق من شبكة التأريض لمحطة تحويل كهربائية في العراق، للتحقق من استقرار النظام وتحجيم الكوابل.",
    "Designed a Wi-Fi network using predictive heat maps to optimize WAP placement, signal coverage, and capacity, eliminating dead zones.":
      "صممت شبكة واي فاي باستخدام خرائط التغطية التنبؤية لتحسين مواقع نقاط الوصول (WAP) والتغطية والسعة، والقضاء على المناطق الميتة.",
    "Designed a CCTV system following the DORI standard, setting camera placement and field-of-view requirements to remove blind spots.":
      "صممت نظام كاميرات مراقبة وفق معيار DORI، بتحديد مواقع الكاميرات ومتطلبات مجال الرؤية لإزالة النقاط العمياء.",
    "Electrical Engineering Intern": "متدرب هندسة كهربائية", "Jul 2025 – Sep 2025": "تموز 2025 – أيلول 2025",
    "BSc. Electrical Power Engineering": "بكالوريوس هندسة القوى الكهربائية", "Jun 2025": "حزيران 2025",
    "Al-Balqa Applied University": "جامعة البلقاء التطبيقية",
    "Focused heavily on renewable energy integration and heavy power load management. Developed expertise in optimizing grid-tied commercial solar arrays paired with battery storage systems utilizing ETAP, HOMER Pro, and PVsyst for precision load calculations.":
      "ركّزت على دمج الطاقة المتجددة وإدارة الأحمال الكهربائية، واكتسبت خبرة في تحسين الأنظمة الشمسية التجارية المربوطة على الشبكة مع أنظمة تخزين البطاريات باستخدام ETAP و HOMER Pro و PVsyst لحسابات الأحمال الدقيقة.",
    "Licenses & Certifications": "الرخص والشهادات",
    "Revit for Electrical Engineers": "Revit للمهندسين الكهربائيين", "Oct 2026": "تشرين الأول 2026",
    "Engineers Academy for Training and Development (EATD)": "أكاديمية المهندسين للتطوير والتدريب الهندسي (EATD)",
    "Low Current Systems Design": "تصميم أنظمة التيار الخفيف", "Sep 2026": "أيلول 2026", "Aug 2026": "آب 2026",
    "Licensed Electrical Engineer": "مهندس كهربائي مرخّص", "Issued Aug 2025": "صدرت في آب 2025", "Aug 2025": "آب 2025",
    "Jordan Engineers Association (نقابة المهندسين الأردنيين)": "نقابة المهندسين الأردنيين",
    "Active Licensure Status": "عضوية سارية", "Udemy Professional Credential": "شهادة مهنية من Udemy",
    "Comprehensive framework tracking core engineering principles, detailed sizing calculations, and panel coordination from layout development through construction documentation.":
      "برنامج شامل يغطي المبادئ الهندسية الأساسية وحسابات التحجيم التفصيلية وتنسيق اللوحات، من إعداد المخططات وحتى وثائق التنفيذ.",
    "Let's work together": "لنعمل معاً", "GET IN TOUCH →": "تواصل معي ←", "VIEW LINKEDIN ↗": "حسابي على LinkedIn ↗",
    "Core Strengths": "نقاط القوة", "ELV Infrastructure": "البنية التحتية للتيار الخفيف",
    "Curriculum Vitae": "السيرة الذاتية", "Name": "الاسم", "Sa'ed Hajjih": "سعد حجه", "Degree": "الدرجة العلمية",
    "BSc. Electrical Power Eng.": "بكالوريوس هندسة القوى الكهربائية", "University": "الجامعة",
    "Current Role": "المسمى الوظيفي", "Employer": "جهة العمل",
    "Drawn by": "رسم", "Project": "المشروع", "Personal Portfolio": "معرض الأعمال", "Dwg No.": "رقم المخطط",
    "Rev": "المراجعة", "Scale": "المقياس", "NTS": "بدون مقياس", "Sheet": "اللوحة", "01 of 01": "01 من 01", "Date": "التاريخ",
    "Core Standards & Software": "المعايير والبرامج", "OPEN ↗": "فتح ↗", "View certificate ↗": "عرض الشهادة ↗",
    "> energizing MDB ........": "> تشغيل اللوحة الرئيسية ....", "> checking ELV backbone ..": "> فحص شبكة التيار الخفيف ..",
    "> loading portfolio .....": "> تحميل معرض الأعمال .....", "OK": "تم"
  };
  const HTML = {
    "hero.summary": `مهندس تصميم كهربائي بخبرة في <strong ${S}>توزيع القدرة الكهربائية وأنظمة المباني الكهربائية والتصميم الهندسي</strong>. أجمع بين الدقة الفنية والالتزام بالمعايير وحل المشكلات عملياً لتقديم بنية تحتية موثوقة للمشاريع التجارية والسكنية والصحية.`,
    "about.p1": "مرحباً! أنا سعد، <strong>مهندس قوى كهربائية</strong> و<strong>مهندس تصميم كهربائي</strong> مقيم في عمّان، الأردن.",
    "about.p2": "أتخصص في تصميم أنظمة القدرة الكهربائية والإنارة والتيار الخفيف للمشاريع التجارية والصحية والسكنية ومتعددة الاستخدامات. يشمل عملي الحسابات التصميمية الكهربائية، والتوثيق الفني، وإعداد وثائق العطاءات، وجداول الكميات، والإشراف الموقعي، والفحص، والتصميم باستخدام <strong>ETAP و Revit و DIALux و AutoCAD و Navisworks</strong>.",
    "about.p3": "إلى جانب عملي المهني، لدي اهتمام كبير بأنظمة التيار الخفيف والشبكات والبنية التحتية للكوابل المهيكلة والأنظمة الافتراضية وبيئات الخوادم المستضافة ذاتياً. أدير مختبراً منزلياً خاصاً أشغّل فيه الخوادم ووحدات التخزين ومعدات الشبكات والخدمات المستضافة ذاتياً.",
    "about.p4": "أعمل حالياً على توسيع خبرتي في سير عمل BIM والتصميم الكهربائي المتقدم وأنظمة المباني الذكية، مع تقديم تصاميم آمنة وفعّالة ومتوافقة مع <strong>NFPA و CIBSE وكود البناء السعودي (SBC) والأنظمة الأردنية</strong>.",
    "contact.p": `متاح لفرص العمل الجديدة والأعمال الاستشارية والشراكات في المشاريع في مجالات <strong ${S}>تصميم القدرة والإنارة والتيار الخفيف</strong>. راسلني عبر البريد الإلكتروني أو تواصل معي على LinkedIn.`,
    "exp.intern.b1": `${B}<strong ${ST}>الدعم الفني وتكامل الأنظمة:</strong> قدّمت الدعم الفني لأجهزة الطباعة متعددة الوظائف وبرامج أتمتة المكاتب، وعالجت مشاكل الاتصال والتكامل.`,
    "exp.intern.b2": `${B}<strong ${ST}>تشخيص أعطال العتاد والبرمجيات:</strong> شخّصت أعطال العتاد والبرامج الثابتة وواجهات الشبكة في الأجهزة متعددة الوظائف لتقليل فترات التوقف.`
  };
  const PROJ = {
    shatrah: { title: "مستشفى الشطرة (العراق)", tags: ["توزيع الجهد المنخفض", "كشف التعارضات", "معايير طبية"],
      desc: "<p>نفّذت التصميم الكهربائي الرئيسي وتنسيق مخططات حوامل الكوابل لمنشأة صحية كبرى.</p><p>كان التحدي الأساسي الالتزام بمتطلبات الامتثال الطبية الصارمة مع تنظيم مسارات توزيع الجهد المنخفض المعقدة. استخدمت <strong>Navisworks</strong> بشكل مكثف لحل التعارضات بين حوامل الكوابل الكهربائية ومجاري التكييف الميكانيكية في الأسقف المزدحمة.</p>",
      software: ["متوافق مع NFPA", "Revit", "Navisworks", "AutoCAD"] },
    media: { title: "مبنى إدارة المدارس والمركز الإعلامي", tags: ["قدرة UPS", "تغذية المعدات الميكانيكية", "مسارات التيار الخفيف", "تحجيم MDF"],
      desc: "<p>صممت البنية التحتية الكاملة للقدرة الكهربائية والتيار الخفيف لمبنى إداري تعليمي ومركز إعلامي.</p><p>شمل النطاق التصميم التفصيلي لـ<strong>شبكات توزيع القدرة العادية و UPS</strong>، وتغذية معدات التكييف الميكانيكية، و<strong>حسابات هبوط الجهد</strong> لضمان تغذية مستقرة.</p><p>كما قدت تصميم مسارات أنظمة التيار الخفيف بالكامل، بما في ذلك الصواعد الرأسية و<strong>تحجيم خزائن MDF/IDF</strong>، وإعداد جداول الكميات (BOQ) الشاملة للتوريد.</p>",
      software: ["AutoCAD", "Excel (جداول الكميات)", "حسابات كهربائية"] },
    villas: { title: "فلل ذكية فاخرة", tags: ["أتمتة المنازل", "مناطق تغطية CCTV", "طاقة شمسية مربوطة على الشبكة"],
      desc: "<p>صممت بنية تحتية شبكية متكاملة لفلل سكنية فاخرة.</p><p>شمل النطاق تحديد مناطق تغطية كاميرات IP-CCTV بالكامل، وربط أنظمة أتمتة المنازل، ودوائر التحكم بالدخول للمصاعد. كما أجريت دراسات جدوى للشبكات الصغيرة، ونمذجت أنظمة شمسية مربوطة على الشبكة باستخدام PVsyst و HOMER Pro لحساب الإنتاج وتعويض الأحمال.</p>",
      software: ["PVsyst", "HOMER Pro", "ETAP", "معايير SBC"] },
    namk: { title: "بنك NAMK ومدرسة الأهلية", tags: ["قدرة ميكانيكية", "تحديث الأنظمة", "قدرة تجارية"],
      desc: "<p>قدّمت تقييمات هندسية ومخططات للأنظمة الكهربائية في القطاعين التجاري والمؤسسي.</p><p>صممت مخططات القدرة للأنظمة الميكانيكية لمبنى بنك NAMK، وأعددت خطة التحديث التنفيذية لتطوير البنية التحتية الكهربائية والرقمية في مدرسة الأهلية.</p>",
      software: ["الأكواد الوطنية الأردنية", "AutoCAD", "Revit", "ETAP"] }
  };

  const root = document.documentElement;
  const EN_TITLE = document.title, AR_TITLE = 'سعد حجه | مهندس تصميم كهربائي';
  const norm = t => t.replace(/\s+/g, ' ').trim();
  const skip = n => !n.parentElement || n.parentElement.closest('script,style,[data-i18n],[data-no-i18n]');

  function trNode(n, ar) {
    if (ar) {
      if (n.__en === undefined) { const t = TEXT[norm(n.nodeValue)]; if (!t) return; n.__en = n.nodeValue; }
      const t = TEXT[norm(n.__en)]; if (!t) return;
      const m = n.__en.match(/^(\s*)[\s\S]*?(\s*)$/);
      n.nodeValue = m[1] + t + m[2];
    } else if (n.__en !== undefined) n.nodeValue = n.__en;
  }
  function walk(el, ar) {
    const w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    for (let n; (n = w.nextNode());) if (!skip(n)) trNode(n, ar);
  }
  let enProj = null;
  function setProjects(ar) {
    const pd = window.projectData; if (!pd) return;
    if (!enProj) enProj = JSON.parse(JSON.stringify(pd));
    for (const k in pd) Object.assign(pd[k], ar && PROJ[k] ? PROJ[k] : enProj[k]);
  }
  function loadFont() {
    if (document.getElementById('ar-font')) return;
    const l = document.createElement('link'); l.id = 'ar-font'; l.rel = 'stylesheet';
    l.href = 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&display=swap';
    document.head.appendChild(l);
  }
  let obs = null;
  function setLang(lang, save = true) {
    const ar = lang === 'ar';
    if (ar) loadFont();
    root.lang = ar ? 'ar' : 'en'; root.dir = ar ? 'rtl' : 'ltr';
    document.title = ar ? AR_TITLE : EN_TITLE;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      if (el.__en === undefined) el.__en = el.innerHTML;
      const h = HTML[el.dataset.i18n];
      el.innerHTML = ar && h ? h : el.__en;
    });
    walk(document.body, ar);
    setProjects(ar);
    document.querySelectorAll('[data-lang-toggle]').forEach(b => { b.textContent = ar ? 'EN' : 'عربي'; b.setAttribute('aria-label', ar ? 'Switch to English' : 'التبديل إلى العربية'); });
    if (obs) obs.disconnect();
    if (ar) {
      obs = new MutationObserver(ms => ms.forEach(m => m.addedNodes.forEach(n => {
        if (n.nodeType === 3) { if (!skip(n)) trNode(n, true); } else if (n.nodeType === 1) walk(n, true);
      })));
      obs.observe(document.body, { childList: true, subtree: true });
    }
    if (save) try { localStorage.setItem('lang', root.lang); } catch (e) {}
    window.dispatchEvent(new CustomEvent('langchange', { detail: root.lang }));
    requestAnimationFrame(() => { const y = window.scrollY; document.body.style.display = 'none'; void document.body.offsetHeight; document.body.style.display = ''; window.scrollTo(0, y); });
  }
  window.setLang = setLang;
  document.querySelectorAll('[data-lang-toggle]').forEach(b => b.addEventListener('click', () => setLang(root.lang === 'ar' ? 'en' : 'ar')));

  let initial = 'en';
  try { initial = new URLSearchParams(location.search).get('lang') || localStorage.getItem('lang') || 'en'; } catch (e) {}
  if (initial === 'ar') setLang('ar', false);
})();
