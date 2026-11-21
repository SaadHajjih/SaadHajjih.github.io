(() => {
  const root = document.documentElement;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  /* ---------- Arabic text ---------- */
  const AR = {
    "Skip to content": "انتقل إلى المحتوى",
    "Work": "المشاريع", "Experience": "الخبرة", "Certificates": "الشهادات", "Contact": "تواصل",
    "Resume": "السيرة الذاتية", "Menu": "القائمة",
    "Electrical design engineer, Amman": "مهندس تصميم كهربائي، عمّان",
    "I design power, lighting and low-current systems for buildings in Jordan and Iraq. Most of my work is drawings, calculations, BOQs and shop drawing reviews for hospitals, schools, offices and homes.":
      "أصمم أنظمة القوى والإنارة والتيار الخفيف للمباني في الأردن والعراق. معظم عملي مخططات وحسابات وجداول كميات ومراجعة مخططات تنفيذية لمستشفيات ومدارس ومكاتب ومساكن.",
    "Download resume": "تحميل السيرة الذاتية", "Email me": "راسلني",
    "Licensed electrical engineer, Jordan Engineers Association. Currently at Consultancies House for Ultimate Management (CHUM).":
      "مهندس كهربائي مرخّص من نقابة المهندسين الأردنيين. أعمل حالياً في دار الاستشارات للإدارة المثلى (CHUM).",
    "What I work on": "مجالات عملي",
    "Power and lighting": "القوى والإنارة",
    "Low-voltage distribution, panel and load schedules": "توزيع الجهد المنخفض وجداول اللوحات والأحمال",
    "Cable sizing, voltage drop and short-circuit checks": "تحجيم الكوابل وحسابات هبوط الجهد وتيار القصر",
    "Normal, UPS and standby power": "التغذية العادية وUPS والطاقة الاحتياطية",
    "Earthing and grounding grid design": "تصميم أنظمة وشبكات التأريض",
    "Lighting design and calculations in DIALux evo": "تصميم الإنارة وحساباتها على DIALux evo",
    "Grid-tied PV studies in PVsyst and HOMER Pro": "دراسات الأنظمة الشمسية المربوطة على الشبكة باستخدام PVsyst وHOMER Pro",
    "Low-current systems": "أنظمة التيار الخفيف",
    "Fire alarm": "إنذار الحريق",
    "CCTV, laid out to the DORI standard": "كاميرات المراقبة وفق معيار DORI",
    "Access control": "التحكم بالدخول",
    "Structured cabling, MDF and IDF rooms": "الكوابل المهيكلة وغرف MDF وIDF",
    "Wi-Fi coverage planning with NetSpot": "تخطيط تغطية الواي فاي باستخدام NetSpot",
    "Public address": "النداء العام",
    "Tools and codes": "البرامج والأكواد",
    "I draw in AutoCAD and Revit, coordinate in Navisworks and run studies in ETAP. Spreadsheets for calculations and BOQs are done in Excel.":
      "أرسم على AutoCAD وRevit، وأنسّق على Navisworks، وأجري الدراسات على ETAP. أما جداول الحسابات والكميات فأعدّها على Excel.",
    "I design to NFPA 72, CIBSE guidance, the Saudi Building Code and the Jordanian national codes.":
      "أصمم وفق NFPA 72 وإرشادات CIBSE وكود البناء السعودي وكودات البناء الوطني الأردني.",
    "Selected projects": "مشاريع مختارة",
    "A few of the 20+ projects I have worked on. Select a project for details.": "بعض المشاريع من أصل أكثر من 20 مشروعاً عملت عليها. اختر مشروعاً لعرض التفاصيل.",
    "Al-Shatrah Hospital": "مستشفى الشطرة", "Healthcare, Iraq": "منشأة صحية، العراق",
    "Low-voltage distribution and cable tray layouts for a hospital. I coordinated the tray routes with the mechanical services in Navisworks to clear clashes in crowded ceiling voids, while keeping to the safety requirements for healthcare buildings.":
      "توزيع الجهد المنخفض ومخططات حوامل الكوابل لمستشفى. نسّقت مسارات الحوامل مع الخدمات الميكانيكية على Navisworks لحل التعارضات في الأسقف المزدحمة، مع الالتزام بمتطلبات السلامة الخاصة بالمباني الصحية.",
    "Revit, AutoCAD, Navisworks. NFPA.": "Revit وAutoCAD وNavisworks. ‏NFPA.",
    "Schools administration and media center": "مبنى إدارة المدارس والمركز الإعلامي", "Education": "تعليمي",
    "Normal and UPS power networks, supplies to the mechanical equipment, and the full low-current network: riser routes, MDF and IDF room sizing, voltage drop calculations and the bill of quantities for procurement.":
      "شبكات التغذية العادية وUPS، وتغذية المعدات الميكانيكية، وشبكة التيار الخفيف كاملة: مسارات الصواعد، وتحجيم غرف MDF وIDF، وحسابات هبوط الجهد، وجدول الكميات للتوريد.",
    "AutoCAD, Excel.": "AutoCAD وExcel.",
    "Smart villas": "فلل ذكية", "Residential": "سكني",
    "IP CCTV coverage, elevator access control and home automation for high-end villas. I also modelled a grid-tied solar system in PVsyst and HOMER Pro to estimate yield and how much of the load it would offset.":
      "تغطية كاميرات IP، والتحكم بالدخول للمصاعد، وأتمتة المنازل لفلل فاخرة. كما نمذجت نظاماً شمسياً مربوطاً على الشبكة باستخدام PVsyst وHOMER Pro لتقدير الإنتاج ونسبة الحمل التي يغطيها.",
    "PVsyst, HOMER Pro, ETAP. Saudi Building Code.": "PVsyst وHOMER Pro وETAP. كود البناء السعودي.",
    "NAMK Bank and Al Ahliyyah School": "بنك NAMK ومدرسة الأهلية", "Commercial and education": "تجاري وتعليمي",
    "Power layouts for the mechanical systems at NAMK Bank. For Al Ahliyyah School, I assessed the existing electrical and IT infrastructure and wrote the upgrade plan.":
      "مخططات تغذية الأنظمة الميكانيكية في بنك NAMK. وفي مدرسة الأهلية، قيّمت البنية التحتية الكهربائية والتقنية القائمة وأعددت خطة التحديث.",
    "AutoCAD, Revit, ETAP. Jordanian national codes.": "AutoCAD وRevit وETAP. كودات البناء الوطني الأردني.",
    "Substation study": "دراسة محطة تحويل", "Utilities, Iraq": "مرافق، العراق",
    "ETAP load flow studies and grounding grid checks for an electrical substation, to confirm system stability and cable sizes.":
      "دراسات سريان الأحمال على ETAP والتحقق من شبكة التأريض لمحطة تحويل كهربائية، للتأكد من استقرار النظام ومقاطع الكوابل.",
    "ETAP.": "ETAP.",
    "Sep 2025 – present": "أيلول 2025 – حتى الآن",
    "Electrical design engineer": "مهندس تصميم كهربائي",
    "Consultancies House for Ultimate Management (CHUM), Amman": "دار الاستشارات للإدارة المثلى (CHUM)، عمّان",
    "Electrical design for 20+ commercial, industrial, healthcare and institutional projects in Jordan and Iraq.":
      "التصميم الكهربائي لأكثر من 20 مشروعاً تجارياً وصناعياً وصحياً ومؤسسياً في الأردن والعراق.",
    "2D and 3D electrical layouts, shop drawings, single-line diagrams and cable routing in AutoCAD and Revit, with lighting calculations in DIALux evo.":
      "مخططات كهربائية ثنائية وثلاثية الأبعاد، ومخططات تنفيذية، ومخططات أحادية الخط، ومسارات الكوابل على AutoCAD وRevit، مع حسابات الإنارة على DIALux evo.",
    "Bills of quantities and technical specifications for power distribution and low-current systems.":
      "جداول الكميات والمواصفات الفنية لأنظمة توزيع القوى والتيار الخفيف.",
    "ETAP load flow studies and grounding grid checks for a substation in Iraq.":
      "دراسات سريان الأحمال على ETAP والتحقق من شبكة التأريض لمحطة تحويل في العراق.",
    "A Wi-Fi design using predictive heat maps to place access points and remove dead zones.":
      "تصميم شبكة واي فاي باستخدام خرائط التغطية التنبؤية لتحديد مواقع نقاط الوصول وإزالة المناطق الميتة.",
    "A CCTV design to the DORI standard, setting camera positions and fields of view to remove blind spots.":
      "تصميم نظام كاميرات مراقبة وفق معيار DORI، بتحديد مواقع الكاميرات ومجالات الرؤية لإزالة النقاط العمياء.",
    "Jul 2025 – Sep 2025": "تموز 2025 – أيلول 2025",
    "Electrical engineering intern": "متدرب هندسة كهربائية",
    "Arabian Office Automation (Xerox), Amman": "Arabian Office Automation ‏(Xerox)، عمّان",
    "Technical support for multifunction printers and office automation software, including connectivity and integration issues.":
      "الدعم الفني لأجهزة الطباعة متعددة الوظائف وبرامج أتمتة المكاتب، بما في ذلك مشاكل الاتصال والتكامل.",
    "Diagnosed hardware, firmware and network faults on enterprise devices to reduce downtime.":
      "تشخيص أعطال العتاد والبرامج الثابتة والشبكات في أجهزة المؤسسات لتقليل فترات التوقف.",
    "Jun 2025": "حزيران 2025",
    "BSc in Electrical Power Engineering": "بكالوريوس هندسة القوى الكهربائية",
    "Al-Balqa Applied University, Amman": "جامعة البلقاء التطبيقية، عمّان",
    "Licence and certificates": "الرخصة والشهادات",
    "Licensed electrical engineer": "مهندس كهربائي مرخّص", "Jordan Engineers Association": "نقابة المهندسين الأردنيين",
    "Aug 2025": "آب 2025", "Oct 2026": "تشرين الأول 2026", "Sep 2026": "أيلول 2026", "Aug 2026": "آب 2026",
    "Revit for electrical engineers": "Revit للمهندسين الكهربائيين",
    "Engineers Academy for Training and Development (EATD)": "أكاديمية المهندسين للتطوير والتدريب الهندسي (EATD)",
    "Low current systems design": "تصميم أنظمة التيار المنخفض",
    "View certificate": "عرض الشهادة",
    "I'm open to new roles, consultancy work and project collaborations. Email is the quickest way to reach me.":
      "أرحب بفرص العمل الجديدة والأعمال الاستشارية والتعاون في المشاريع. البريد الإلكتروني أسرع طريقة للتواصل معي.",
    "Email": "البريد الإلكتروني", "LinkedIn": "لينكدإن", "GitHub": "غيت هب", "Location": "الموقع", "Amman, Jordan": "عمّان، الأردن",
    "Back to top": "العودة للأعلى", "Open in new tab": "فتح في تبويب جديد", "Close": "إغلاق"
  };
  const AR_KEYS = { "name.first": "سعد", "name.last": "حجه", "name.full": "سعد حجه" };
  const AR_TITLE = "سعد حجه | مهندس تصميم كهربائي", EN_TITLE = document.title;

  const norm = t => t.replace(/\s+/g, " ").trim();
  const skip = n => !n.parentElement || n.parentElement.closest("script,style,[data-i18n],[data-no-i18n],[lang='ar']");
  function trNode(n, ar) {
    if (ar) {
      const src = n.__en !== undefined ? n.__en : n.nodeValue;
      const t = AR[norm(src)]; if (!t) return;
      if (n.__en === undefined) n.__en = n.nodeValue;
      const m = src.match(/^(\s*)[\s\S]*?(\s*)$/);
      n.nodeValue = m[1] + t + m[2];
    } else if (n.__en !== undefined) n.nodeValue = n.__en;
  }
  function walk(el, ar) {
    const w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    for (let n; (n = w.nextNode());) if (!skip(n)) trNode(n, ar);
  }
  function setLang(lang, save) {
    const ar = lang === "ar";
    root.lang = ar ? "ar" : "en"; root.dir = ar ? "rtl" : "ltr";
    document.title = ar ? AR_TITLE : EN_TITLE;
    $$("[data-i18n]").forEach(el => {
      if (el.__en === undefined) el.__en = el.textContent;
      el.textContent = ar ? AR_KEYS[el.dataset.i18n] || el.__en : el.__en;
    });
    walk(document.body, ar);
    $$("[data-lang-toggle]").forEach(b => { b.textContent = ar ? "English" : "عربي"; b.lang = ar ? "en" : "ar"; });
    const mb = $(".menu-btn"); if (mb) mb.setAttribute("aria-label", ar ? "القائمة" : "Menu");
    if (save) try { localStorage.setItem("lang", root.lang); } catch (e) {}
  }
  $$("[data-lang-toggle]").forEach(b => b.addEventListener("click", () => setLang(root.lang === "ar" ? "en" : "ar", true)));

  /* ---------- Mobile menu ---------- */
  const menuBtn = $(".menu-btn"), nav = $("#nav");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", open);
    });
    nav.addEventListener("click", e => { if (e.target.closest("a")) { nav.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); } });
  }

  /* ---------- Top bar border + current section ---------- */
  const bar = $(".topbar");
  const onScroll = () => bar && bar.classList.toggle("scrolled", scrollY > 8);
  addEventListener("scroll", onScroll, { passive: true }); onScroll();
  const links = $$("#nav a");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (!e.isIntersecting) return;
      links.forEach(a => a.classList.toggle("current", a.getAttribute("href") === "#" + e.target.id));
    }), { rootMargin: "-45% 0px -50% 0px" });
    $$("main section[id]").forEach(s => io.observe(s));
  }

  /* ---------- Certificates ---------- */
  const viewer = $("#cert-viewer");
  function openCert(src, name) {
    const isUrl = /^https?:\/\//i.test(src);
    const path = isUrl ? src : "certificates/" + src;
    if (!viewer || typeof viewer.showModal !== "function" || (isUrl && !/\.(pdf|png|jpe?g|webp)(\?|$)/i.test(src))) { window.open(path, "_blank", "noopener"); return; }
    $("#cert-viewer-title").textContent = name;
    $("#cert-viewer-open").href = path;
    const body = $("#cert-viewer-body"); body.textContent = "";
    if (/\.pdf(\?|$)/i.test(path)) { const f = document.createElement("iframe"); f.src = path + "#view=FitH"; f.title = name; body.appendChild(f); }
    else { const i = document.createElement("img"); i.src = path; i.alt = name; body.appendChild(i); }
    viewer.showModal();
  }
  if (viewer) {
    $("#cert-viewer-close").addEventListener("click", () => viewer.close());
    viewer.addEventListener("click", e => { if (e.target === viewer) viewer.close(); });
    viewer.addEventListener("close", () => { $("#cert-viewer-body").textContent = ""; });
  }
  const certsReady = fetch("certificates/manifest.json", { cache: "no-cache" }).then(r => r.ok ? r.json() : {}).then(map => {
    $$("[data-cert-id]").forEach(li => {
      const src = map[li.dataset.certId]; if (!src) return;
      const b = document.createElement("button");
      b.type = "button"; b.className = "cert-link"; b.textContent = "View certificate";
      b.addEventListener("click", () => openCert(src, li.querySelector("h3").textContent.trim()));
      li.appendChild(b);
    });
  }).catch(() => {});

  /* ---------- Misc ---------- */
  const y = $("#year"); if (y) y.textContent = new Date().getFullYear();

  let initial = "en";
  try { initial = new URLSearchParams(location.search).get("lang") || localStorage.getItem("lang") || "en"; } catch (e) {}
  if (initial === "ar") setLang("ar", false);
  certsReady.then(() => { if (root.lang === "ar") walk(document.body, true); });
})();
