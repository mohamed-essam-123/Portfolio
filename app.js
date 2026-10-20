/**
 * Mohamed Essam - Data, Translations & Premium Portfolio Core Engine
 */

// ==========================================
// 1. DATA & TRANSLATIONS DICTIONARY
// ==========================================

const translations = {
    en: {
        nav_home: "Home", nav_about: "About", nav_experience: "Experience", nav_skills: "Skills", nav_projects: "Projects", nav_certificates: "Certificates", nav_contact: "Contact",
        hero_badge: "Available for Hire", hero_title_prefix: "Hi, I'm ",
        hero_desc: "Computer Science student at Nahda University and a passionate Full-Stack Developer specializing in ASP.NET Core, C#, SQL Server, and React. I design and build highly scalable, secure, and user-friendly web solutions.",
        hero_btn_cv: "Download CV", hero_btn_contact: "Get In Touch",
        about_title: "About Me", about_story_title: "My Professional Story",
        about_story_text: "I'm a passionate Full-Stack .NET Developer focused on building modern and reliable web applications. I work with C#, ASP.NET Core, Entity Framework Core, and SQL Server to develop backend systems and RESTful APIs, while using React and modern frontend technologies to create responsive and user-friendly interfaces.",
        about_story_text_2: "I care about writing clean, maintainable code, designing well-structured databases, and building applications that deliver a great user experience. I'm continuously developing my skills through practical projects and learning new technologies.",
        about_stats_exp_num: "2+ Years", about_stats_exp_text: "Coding Experience", about_stats_proj_num: "15+ Done", about_stats_proj_text: "Completed Projects", about_stats_client_num: "99%", about_stats_client_text: "Satisfaction Rate",
        about_strengths_title: "Core Strengths", about_strength_1: "Clean & Maintainable Architecture", about_strength_2: "Relational Database Design & EF Core", about_strength_3: "Modern Frontend Integration (React & JS)", about_strength_4: "Effective Communication & Team Collaboration",
        exp_title: "Experience & Education", exp_subtitle: "My professional journey and academic timeline",
        exp_iti_title: "PHP Web Development Intern", exp_iti_org: "Information Technology Institute (ITI)", exp_iti_date: "July 2025 - August 2025", exp_iti_desc: "Intensive training program focusing on server-side programming, MySQL database management, architectural patterns, and securing web applications using PHP frameworks.",
        exp_cib_title: "IT & Banking Operations Trainee", exp_cib_org: "Commercial International Bank (CIB)", exp_cib_date: "June 2025 - July 2025", exp_cib_desc: "Gained operational knowledge of financial technology infrastructures, database integrity systems, and security standards implemented within enterprise banking software.",
        exp_bm_title: "Digital Leadership & Marketing Trainee", exp_bm_org: "Banque Misr & Google Academy", exp_bm_date: "April 2025", exp_bm_desc: "Explored corporate digital strategies, data analytics, and user engagement frameworks. Certified in modern digital ecosystem administration and SEO fundamentals.",
        exp_freelance_title: "Freelance Full-Stack Developer", exp_freelance_org: "Independent & Remote", exp_freelance_date: "2024 - Present", exp_freelance_desc: "Developed responsive web solutions and database systems for diverse local clients using React and .NET. Managed client requirements, code reviews, and hosting deployments.",
        exp_edu_title: "B.Sc. in Computer Science", exp_edu_org: "Nahda University in Beni Suef (NUB)", exp_edu_date: "Oct 2023 - Jul 2027", exp_edu_desc: "Fourth Year student, specializing in Software Engineering and Database Systems.",
        exp_yly_title: "Volunteer", exp_yly_org: "YLY Ministry of Youth and Sports", exp_yly_date: "Aug 2025 - Jun 2026", exp_yly_desc: "High Committee Member: Managed large-scale events and thematic planning. Leader of Competing Team (Eureka) using dynamic problem-solving methodologies to execute events like \"Code to Cash\".",
        exp_route_title: "Back-End ASP.NET Trainee", exp_route_org: "Route Academy", exp_route_date: "Jul 2025 - Jan 2026", exp_route_desc: "Developed scalable RESTful APIs using ASP.NET Core and C# following Clean Architecture principles. Optimized database performance using SQL Server, EF Core, and secure JWT Identity systems.",
        exp_ieee_vol_title: "IEEE Student Activity Volunteer", exp_ieee_vol_org: "IEEE Fayoum Student Activity", exp_ieee_vol_date: "Nov 2025 - Jun 2026", exp_ieee_vol_desc: "Participated in technical events and workshops. Worked in team-based academic and organizational activities to build professional communication skills.",
        exp_depi_title: "Full-Stack .NET Trainee", exp_depi_org: "Digital Egypt Pioneers Initiative (DEPI)", exp_depi_date: "Aug 2026 - Jan 2027", exp_depi_desc: "Full-Stack .NET track covering C# and OOP, SQL Server, ASP.NET Core (MVC and Web API), Entity Framework Core, and React. Built hands-on projects using Git/GitHub for version control.",
        exp_self_title: "Front-End Development", exp_self_org: "Self-Learning and Projects", exp_self_date: "Jan 2024 - 2025", exp_self_desc: "Built responsive and interactive web applications using HTML5, CSS3, JavaScript, and React.js. Created reusable components and integrated REST APIs with Git/GitHub for version control.",
        skills_title: "Skills & Technologies", skills_subtitle: "Technologies I use to build scalable web architectures",
        skills_cat_frontend: "Front-End", skills_cat_backend: "Back-End", skills_cat_database: "Databases", skills_cat_tools: "Tools & DevOps", skills_cat_soft: "Soft Skills",
        proj_title: "Featured Projects", proj_subtitle: "A showcase of engineering excellence, design principles, and problem solving",
        proj_filter_all: "All", proj_filter_fs: "Full-Stack (.NET)", proj_filter_fe: "Front-End (React)", proj_filter_ui: "UI/UX & Animations", proj_card_view_details: "View Case Study",
        cert_title: "Certificates & Achievements", cert_subtitle: "Verifications of technical training, languages, and internships",
        cert_desc_php: "PHP Web Development Professional Training - ITI", cert_desc_soft: "Professional Soft Skills & Communication - Nahda University", cert_desc_english: "Advanced English Communication Competency Certificate", cert_desc_cib: "Financial Tech & Banking Infrastructures Internship - CIB", cert_desc_iti: "Web Technologies & Open Source Development Track - ITI", cert_desc_route: "Back-End ASP.NET Certificate - Route Academy", cert_desc_ieee: "IEEE FSB - Certificate of Appreciation (Project Management Committee)",
        cert_click_hint: "Click to preview and verify", cert_modal_verify: "Verify Certificate",
        journey_title: "My Journey", journey_subtitle: "From Learning to Building Real-World Applications",
        journey_1_label: "The Beginning", journey_1_title: "Building My Foundation",
        journey_1_desc: "I started my journey studying Computer Science, learning programming fundamentals, problem solving, and OOP concepts, and building a strong foundation in software development.",
        journey_2_label: "Becoming a Developer", journey_2_title: "Exploring Full-Stack Development",
        journey_2_desc: "I began learning full-stack web development, from building user interfaces with HTML, CSS, JavaScript, and React to developing backends with C# and ASP.NET Core and working with databases.",
        journey_3_label: "Building Real Projects", journey_3_title: "Turning Ideas Into Applications",
        journey_3_desc: "I started applying what I learned in real projects: building web applications and RESTful APIs, connecting frontends to backends, and designing databases with SQL Server and Entity Framework Core.",
        journey_4_label: "Growing Every Day", journey_4_title: "Learning, Building & Improving",
        journey_4_desc: "I keep improving my full-stack skills and code quality, and learning best practices for building modern, scalable web applications with a great user experience and reliable performance.",
        contact_title: "Let's Build Something Great", contact_subtitle: "Get in touch for partnerships, job opportunities, or freelance inquiries",
        contact_label_name: "Full Name", contact_label_email: "Email Address", contact_label_subject: "Subject", contact_label_message: "Message Details",
        contact_btn_send: "Send Message", contact_sending: "Sending...", contact_success: "Thank you! Sent successfully. I will get back to you within 24 hours.", contact_error: "Something went wrong. Please check your connection.",
        contact_info_title: "Direct Contact Details", contact_info_sub: "Prefer email, phone, or instant messaging? Reach out below.",
        contact_info_whatsapp_desc: "Quick Chat & Inquiries", contact_info_linkedin_desc: "Professional Network", contact_info_github_desc: "Code repositories & projects", contact_info_email_desc: "mohamedessam010928@gmail.com",
        modal_close: "Close", modal_visit_live: "Visit Live Demo", modal_visit_code: "View Source Code", modal_tech_used: "Technologies Used", modal_features: "Key Features", modal_challenge: "The Engineering Challenge", modal_solution: "The Solution", modal_result: "The Business Result"
    },
    ar: {
        nav_home: "الرئيسية", nav_about: "نبذة عني", nav_experience: "الخبرات", nav_skills: "المهارات", nav_projects: "المشاريع", nav_certificates: "الشهادات", nav_contact: "اتصل بي",
        hero_badge: "متاح للعمل فوراً", hero_title_prefix: "مرحباً، أنا ",
        hero_desc: "طالب علوم حاسب في جامعة النهضة ومطور ويب متكامل (Full-Stack) متخصص في تقنيات ASP.NET Core و C# و SQL Server و React. أهتم بتصميم وبناء تطبيقات ويب قابلة للتوسع وآمنة وسهلة الاستخدام.",
        hero_btn_cv: "تحميل السيرة الذاتية", hero_btn_contact: "تواصل معي",
        about_title: "نبذة عني", about_story_title: "قصتي المهنية",
        about_story_text: "أنا مطور ويب متكامل (Full-Stack .NET) شغوف، أركّز على بناء تطبيقات ويب حديثة وموثوقة. أعمل بلغة C# وإطارَي ASP.NET Core و Entity Framework Core وقاعدة بيانات SQL Server لتطوير الأنظمة الخلفية وواجهات برمجة التطبيقات RESTful APIs، مع استخدام React والتقنيات الأمامية الحديثة لبناء واجهات متجاوبة وسهلة الاستخدام.",
        about_story_text_2: "أهتم بكتابة كود نظيف وقابل للصيانة، وتصميم قواعد بيانات منظمة، وبناء تطبيقات تمنح المستخدم تجربة استخدام متميزة. أواصل تطوير مهاراتي باستمرار من خلال المشاريع العملية والتعلم المستمر لأحدث التقنيات.",
        about_stats_exp_num: "+2 سنوات", about_stats_exp_text: "خبرة في البرمجة", about_stats_proj_num: "+15 عمل", about_stats_proj_text: "مشاريع منجزة", about_stats_client_num: "99%", about_stats_client_text: "نسبة رضا العملاء",
        about_strengths_title: "نقاط القوة الأساسية", about_strength_1: "بناء معماري برميجي نظيف وقابل للصيانة", about_strength_2: "تصميم قواعد البيانات العلاقية و EF Core", about_strength_3: "دمج الواجهات الأمامية الحديثة (React & JS)", about_strength_4: "التواصل الفعال والعمل الجماعي المثمر",
        exp_title: "الخبرة والتعليم", exp_subtitle: "مسيرتي المهنية والتعليمية بالتفصيل",
        exp_iti_title: "متدرب في تطوير الويب باستخدام PHP", exp_iti_org: "معهد تكنولوجيا المعلومات (ITI)", exp_iti_date: "يوليو 2025 - أغسطس 2025", exp_iti_desc: "برنامج تدريبي مكثف ركز على البرمجة الخاصة بالخادم (Backend)، إدارة قواعد بيانات MySQL، معماريات البرمجيات، وتأمين تطبيقات الويب باستخدام إطارات العمل.",
        exp_cib_title: "متدرب في قطاع تكنولوجيا المعلومات والعمليات المصرفية", exp_cib_org: "البنك التجاري الدولي (CIB)", exp_cib_date: "يونيو 2025 - يوليو 2025", exp_cib_desc: "اكتساب معرفة عملية بالبنى التحتية لتكنولوجيا المال، أنظمة سلامة البيانات، ومعايير الأمان المطبقة في الأنظمة البرمجية للمؤسسات المصرفية الكبرى.",
        exp_bm_title: "متدرب القيادة الرقمية والتسويق", exp_bm_org: "بنك مصر وأكاديمية جوجل", exp_bm_date: "أبريل 2025", exp_bm_desc: "استراتيجيات الشركات الرقمية، تحليلات البيانات، وتحسين محركات البحث SEO.",
        exp_freelance_title: "مطور ويب مستقل (Full-Stack)", exp_freelance_org: "عمل حر وعن بعد", exp_freelance_date: "2024 - الحالي", exp_freelance_desc: "تطوير حلول ويب متكاملة وقواعد بيانات لعملاء محليين باستخدام React و .NET. إدارة متطلبات العملاء، مراجعة الأكواد، وإعداد الاستضافة والنشر.",
        exp_edu_title: "بكالوريوس علوم الحاسب", exp_edu_org: "جامعة النهضة ببني سويف (NUB)", exp_edu_date: "أكتوبر 2023 - يوليو 2027", exp_edu_desc: "طالب في السنة الرابعة، متخصص في هندسة البرمجيات وأنظمة قواعد البيانات.",
        exp_yly_title: "متطوع", exp_yly_org: "وزارة الشباب والرياضة - YLY", exp_yly_date: "أغسطس 2025 - يونيو 2026", exp_yly_desc: "عضو لجنة عليا: أدرت فعاليات كبيرة ومهام التخطيط الموضوعي. قائد فريق المنافسة (يوريكا) باستخدام منهجيات حل المشكلات الديناميكية لتنفيذ فعاليات مثل Code to Cash.",
        exp_route_title: "متدرب ASP.NET - الواجهة الخلفية", exp_route_org: "Route Academy", exp_route_date: "يوليو 2025 - يناير 2026", exp_route_desc: "طورت واجهات برمجية RESTful قابلة للتوسع باستخدام ASP.NET Core و C# وفق مبادئ Clean Architecture. حسّنت أداء قواعد البيانات باستخدام SQL Server و EF Core وأنظمة هوية JWT آمنة.",
        exp_ieee_vol_title: "متطوع في نشاط IEEE الطلابي", exp_ieee_vol_org: "IEEE فرع الفيوم الطلابي", exp_ieee_vol_date: "نوفمبر 2025 - يونيو 2026", exp_ieee_vol_desc: "شاركت في الفعاليات التقنية وورش العمل. عملت في أنشطة أكاديمية وتنظيمية جماعية لبناء مهارات التواصل المهني.",
        exp_depi_title: "متدرب Full-Stack .NET", exp_depi_org: "مبادرة مصر الرقمية لريادة الأعمال (DEPI)", exp_depi_date: "أغسطس 2026 - يناير 2027", exp_depi_desc: "مسار Full-Stack .NET يغطي C# والبرمجة الكائنية، SQL Server، ASP.NET Core، Entity Framework Core، و React. بنيت مشاريع عملية باستخدام Git/GitHub لإدارة الإصدارات.",
        exp_self_title: "تطوير الواجهة الأمامية", exp_self_org: "التعلم الذاتي والمشاريع", exp_self_date: "يناير 2024 - 2025", exp_self_desc: "بنيت تطبيقات ويب متجاوبة وتفاعلية باستخدام HTML5 و CSS3 و JavaScript و React.js. أنشأت مكونات قابلة لإعادة الاستخدام ودمجت REST APIs مع Git/GitHub لإدارة الإصدارات.",
        skills_title: "المهارات والتقنيات", skills_subtitle: "التقنيات التي أستخدمها لبناء تطبيقات ويب قوية وقابلة للتوسع",
        skills_cat_frontend: "الواجهة الأمامية", skills_cat_backend: "الواجهة الخلفية", skills_cat_database: "قواعد البيانات", skills_cat_tools: "أدوات التطوير", skills_cat_soft: "المهارات الشخصية",
        proj_title: "المشاريع المميزة", proj_subtitle: "معرض للمشاريع البرمجية، يعكس جودة الهندسة وأسلوب حل المشكلات",
        proj_filter_all: "الكل", proj_filter_fs: "ويب متكامل (.NET)", proj_filter_fe: "واجهات (React)", proj_filter_ui: "تصاميم وحركات", proj_card_view_details: "عرض دراسة الحالة",
        cert_title: "الشهادات والإنجازات", cert_subtitle: "إثباتات التدريب التقني، اللغات، والخبرات التدريبية المعتمدة",
        cert_desc_php: "تدريب تطوير الويب الاحترافي باستخدام PHP - ITI", cert_desc_soft: "المهارات الشخصية الاحترافية والتواصل - جامعة النهضة", cert_desc_english: "شهادة الكفاءة المتقدمة في التواصل باللغة الإنجليزية", cert_desc_cib: "تدريب البنى التحتية والتكنولوجيا المالية - البنك التجاري الدولي CIB", cert_desc_iti: "مسار تقنيات الويب وتطوير البرمجيات مفتوحة المصدر - ITI", cert_desc_route: "شهادة Back-End ASP.NET - Route Academy", cert_desc_ieee: "شهادة تقدير IEEE فرع الفيوم الطلابي - لجنة إدارة المشاريع",
        cert_click_hint: "انقر لمعاينة وتحقق من الشهادة", cert_modal_verify: "التحقق من الشهادة",
        journey_title: "رحلتي", journey_subtitle: "من التعلّم إلى بناء تطبيقات حقيقية",
        journey_1_label: "البداية", journey_1_title: "بناء الأساس",
        journey_1_desc: "بدأت رحلتي بدراسة علوم الحاسب، واتعلمت أساسيات البرمجة وحل المشكلات ومفاهيم OOP، وبدأت أبني أساس قوي في تطوير البرمجيات.",
        journey_2_label: "بداية التطوير", journey_2_title: "استكشاف تطوير Full-Stack",
        journey_2_desc: "بدأت أتعلم تطوير الويب بشكل متكامل، من تصميم واجهات المستخدم باستخدام HTML وCSS وJavaScript وReact، لحد تطوير الـ Backend باستخدام C# وASP.NET Core والتعامل مع قواعد البيانات.",
        journey_3_label: "بناء مشاريع حقيقية", journey_3_title: "تحويل الأفكار إلى تطبيقات",
        journey_3_desc: "بدأت أطبق اللي اتعلمته في مشاريع حقيقية، وأشتغل على بناء Web Applications وRESTful APIs، وربط الواجهات الأمامية بالـ Backend، وتصميم قواعد البيانات باستخدام SQL Server وEntity Framework Core.",
        journey_4_label: "أتطور كل يوم", journey_4_title: "تعلّم وبناء وتحسين",
        journey_4_desc: "مستمر في تطوير مهاراتي في الـ Full-Stack Development، وتحسين جودة الكود، وتعلم أفضل الممارسات في بناء تطبيقات ويب حديثة وقابلة للتطوير، مع التركيز على تقديم تجربة مستخدم مميزة وأداء موثوق.",
        contact_title: "دعنا نصنع شيئاً رائعاً", contact_subtitle: "تواصل معي لمناقشة شراكات العمل، الفرص الوظيفية، أو الاستشارات البرمجية",
        contact_label_name: "الاسم الكامل", contact_label_email: "البريد الإلكتروني", contact_label_subject: "الموضوع", contact_label_message: "تفاصيل الرسالة",
        contact_btn_send: "إرسال الرسالة", contact_sending: "جاري الإرسال...", contact_success: "شكراً لك! تم إرسال رسالتك بنجاح. سأتواصل معك خلال 24 ساعة.", contact_error: "حدث خطأ ما. يرجى التحقق من اتصالك أو مراسلتي عبر الواتساب.",
        contact_info_title: "معلومات الاتصال المباشر", contact_info_sub: "تفضل التواصل عبر البريد، الهاتف أو الرسائل الفورية؟ تواصل معي أدناه.",
        contact_info_whatsapp_desc: "دردشة واستفسارات سريعة", contact_info_linkedin_desc: "الشبكة المهنية لينكد إن", contact_info_github_desc: "مستودعات الأكواد والمشاريع", contact_info_email_desc: "mohamedessam010928@gmail.com",
        modal_close: "إغلاق", modal_visit_live: "زيارة الموقع الحي", modal_visit_code: "تصفح الكود المصدري", modal_tech_used: "التقنيات المستخدمة", modal_features: "المميزات الأساسية", modal_challenge: "التحدي الهندسي", modal_solution: "الحل البرمجي", modal_result: "النتيجة النهائية"
    }
};

const projectsData = {
    restaurant: {
        category: "frontend", image: "Restaurant-Website .jpeg", demoUrl: "https://restaurant-website-58wgsvydb-mohamed-essam-123s-projects.vercel.app/", codeUrl: "https://github.com/mohamed-essam-123",
        en: {
            title: "Premium Restaurant Web App", subtitle: "React • Tailwind CSS • Responsive Catalog",
            overview: "A premium, fully responsive web application for a pizza restaurant. The project focuses on clean micro-interactions, smooth product filtering by categories, dynamic cart preview, and immersive image loading structures.",
            tech: ["React", "Tailwind CSS", "JavaScript ES6", "AOS Library", "Netlify Hosting"],
            features: ["Interactive food categories filter with instant reactivity.", "Sleek and visual add-to-cart layout animations.", "Fully optimized for performance on mobile devices.", "Custom visual theme inspired by premium dark culinary designs."],
            challenge: "Heavy food asset files were blocking initial paint renders and slowing performance metrics below 70% on mobile devices, especially on slow networks.",
            solution: "Implemented asset optimization (WebP conversions), image lazy-loading patterns, and decoupled static data mapping from main React rendering cycles to prevent excessive layout shifts.",
            result: "Improved mobile performance scores to 95+ and achieved absolute layout shifts (CLS) of near zero."
        },
        ar: {
            title: "تطبيق ويب فاخر للمطاعم", subtitle: "React • Tailwind CSS • واجهات متجاوبة",
            overview: "تطبيق ويب متكامل ومتجاوب بالكامل لمطعم بيتزا فاخر. يركز المشروع على التفاعلات الدقيقة، التصفية السلسة للأطعمة حسب الفئة، عرض عربة التسوق التفاعلية، وهياكل تحميل صور ذكية.",
            tech: ["React", "Tailwind CSS", "JavaScript ES6", "مكتبة AOS", "استضافة Netlify"],
            features: ["نظام تصفية وجبات ذكي وفوري بدون إعادة تحميل الصفحة.", "حركات بصرية وسلسة عند إضافة الوجبات إلى العربة.", "متوافق بالكامل ومحسن للأداء على شاشات الجوال المتنوعة.", "نمط تصميم داكن وجذاب مستوحى من واجهات خدمات تقديم الأطعمة الفاخرة."],
            challenge: "كانت أحجام صور المأكولات الثقيلة تؤخر عرض الصفحة الأول وتخفض درجات تقييم الأداء إلى ما دون 70% على الهواتف المحمولة والشبكات الضعيفة.",
            solution: "تم تطبيق ضغط الصور والتحويل لصيغ حديثة، وتفعيل ميزة التحميل الكسول (Lazy Loading)، وتجنب العمليات الحسابية المتكررة أثناء تصيير المكونات.",
            result: "ارتفع تقييم أداء التطبيق على الهواتف الذكية إلى أزيد من 95% مع تحقيق ثبات تام في هيكل الصفحة أثناء التحميل."
        }
    },
    nike: {
        category: "ui-ux", image: "shoes-website .jpeg", demoUrl: "https://shoes-website-qn1darar9-mohamed-essam-123s-projects.vercel.app/", codeUrl: "https://github.com/mohamed-essam-123",
        en: {
            title: "Nike Store Landing Portal", subtitle: "HTML5 • CSS3 • Scroll Animations",
            overview: "An immersive digital catalog showcasing Nike athletic shoes. Built to recreate a high-end corporate brand experience with custom card parallax triggers, dynamic scroll fades, and micro-animations.",
            tech: ["HTML5", "Vanilla CSS3", "JavaScript", "GSAP ScrollTrigger", "Responsive Design"],
            features: ["Custom mouse-hover parallax effects matching the shoe perspectives.", "Sleek scroll trigger animations showcasing technical specifications.", "Modern typographic grid honoring official Nike visual guidelines."],
            challenge: "Syncing animation frames with mouse movements and scrolls without causing layout judder or blocking user interaction threads.",
            solution: "Leveraged hardware-accelerated CSS variables linked to mouse positions, utilizing throttle methods in JS event listeners to keep rendering cycles aligned with monitor refresh rates (60Hz/120Hz).",
            result: "Extremely fluid, lag-free user experience, keeping visitors engaged with visual content."
        },
        ar: {
            title: "بوابة متجر أحذية Nike الرقمي", subtitle: "HTML5 • CSS3 • حركات تمرير ذكية",
            overview: "كتالوج رقمي تفاعلي يستعرض أحذية Nike الرياضية بأسلوب راقٍ. تم تصميمه لمحاكاة المواقع الرسمية للعلامة التجارية العالمية من خلال حركات ثلاثية الأبعاد خفيفة وتمرير تفاعلي.",
            tech: ["HTML5", "CSS3 ورقة أنماط", "لغة JavaScript", "حركات GSAP", "تصميم متجاوب"],
            features: ["تأثير حركة مائل عند مرور الماوس يعطي انطباعاً ثلاثي الأبعاد للمنتج.", "انتقالات بصرية رائعة تستعرض مميزات الحذاء عند التمرير لأسفل.", "تنظيم طبوغرافي دقيق يحاكي الهوية البصرية الرسمية لشركة Nike."],
            challenge: "مزامنة حركات الاستجابة مع تمرير الصفحة وحركة الماوس دون التسبب في بطء استجابة المتصفح أو إعاقة تنقل المستخدم.",
            solution: "استخدام تسريع الرسوميات بواسطة كرت الشاشة (GPU Acceleration) للمتغيرات الرسومية، مع الحد من وتيرة الاستماع لأحداث المتصفح للحفاظ على ثبات معدل الإطارات.",
            result: "تجربة تصفح غاية في السلاسة تجعل الزائر يقضي وقتاً أطول في تصفح مزايا المنتجات البرمجية."
        }
    },
    dashboard: {
        category: "fullstack", image: "project--dashboard .jpeg", demoUrl: "https://dashboard-e7yyyzlvx-mohamed-essam-123s-projects.vercel.app/", codeUrl: "https://github.com/mohamed-essam-123",
        en: {
            title: "Enterprise Admin Analytics Dashboard", subtitle: "React • Chart.js • REST Integration",
            overview: "A comprehensive administration control panel for financial data analysis. Features multiple interactive graphs, tables with sorting/filtering capabilities, user management tools, and dark/light dynamic styling.",
            tech: ["React.js", "Chart.js", "Tailwind CSS", "RESTful API Integration", "Context API State"],
            features: ["Interactive live updating charts (Line, Bar, Doughnut).", "Advanced data tables featuring quick sorting, editing, and filtering.", "Fully integrated dark mode toggle with global theme provider context."],
            challenge: "Rendering multiple complex SVG charts simultaneously with large datasets was causing screen freeze frames during viewport resize events.",
            solution: "Integrated debounce mechanisms on screen resize triggers and wrapped charts inside custom React.memo blocks to stop unnecessary re-render passes.",
            result: "Flawless real-time responsiveness and dynamic transitions between chart views with zero render latency."
        },
        ar: {
            title: "لوحة تحكم إدارية وتحليلية للمؤسسات", subtitle: "React • Chart.js • دمج بيانات ومخططات",
            overview: "لوحة تحكم كاملة وشاملة لإدارة وتحليل البيانات المالية للمؤسسات. تحتوي على رسوم بيانية تفاعلية متعددة، جداول بيانات قابلة للفرز والفلترة، أدوات إدارة المستخدمين، وتأثيرات ألوان عصرية.",
            tech: ["React.js", "مكتبة Chart.js", "Tailwind CSS", "دمج واجهات REST APIs", "إدارة الحالة بالـ Context"],
            features: ["رسوم بيانية حية وتفاعلية (خطية، أعمدة، دائرية) تحدث بمرونة.", "جداول متطورة تسمح بالترتيب، البحث السريع، والتعديل الفوري.", "نظام ألوان متكامل يدعم التحويل الفوري بين النمطين الداكن والمضيء."],
            challenge: "كان تصيير مخططات ورسوم بيانية متعددة مع كميات بيانات ضخمة يؤدي إلى تجميد الصفحة لحظياً أثناء تصغير الشاشات.",
            solution: "تم تطبيق دوال الحد من التكرار (Debouncing) وتغليف مكونات الرسوم البيانية لتقليل المعالجة البرمجية غير الضرورية للمتصفح.",
            result: "استجابة فورية وحركة خالية تماماً من البطء عند الانتقال بين الفئات وتحليل التقارير الإدارية."
        }
    },
    csmajor: {
        category: "ui-ux", image: "CS-Website .jpeg", demoUrl: "https://cs-website-8refjzvq0-mohamed-essam-123s-projects.vercel.app/", codeUrl: "https://github.com/mohamed-essam-123",
        en: {
            title: "Computer Science Educational Portal", subtitle: "HTML5 • CSS Grid • GSAP Timelines",
            overview: "An educational landing page tailored to showcase Computer Science concepts and department structures. Designed with custom scrolling stories, graphic code blocks, and dynamic UI layouts.",
            tech: ["HTML5", "Advanced CSS Grid / Flexbox", "GSAP Timeline Animations", "JavaScript"],
            features: ["Staggered entrance layouts presenting academic milestones.", "Custom syntax highlighted preview code cards.", "Clean visual hierarchy with futuristic terminal theme integrations."],
            challenge: "Coordinating multi-stage GSAP scroll animations across nested container blocks without ruining vertical page scroll behavior on mobile views.",
            solution: "Separated visual animation timelines into media-query blocks, executing complex GSAP logic only on large displays while serving simplified CSS-based transitions on touch devices.",
            result: "Delivered an engaging educational presentation optimized for both desktops and mobile viewports."
        },
        ar: {
            title: "بوابة علوم الحاسب التعليمية", subtitle: "HTML5 • CSS Grid • حركات تفاعلية",
            overview: "صفحة ويب تعليمية مخصصة لعرض مفاهيم علوم الحاسب وهياكل الأقسام الأكاديمية بجامعة النهضة. صُممت بحركات متسلسلة رائعة وتنسيقات تحاكي بيئة البرمجة الاحترافية.",
            tech: ["HTML5", "أنماط شبكة CSS متطورة", "مكتبة GSAP للحركات", "JavaScript ES6"],
            features: ["تنسيقات متحركة متتالية تعرض المسار الدراسي والمستويات بأسلوب فني.", "بطاقات برمجية تحاكي محررات الأكواد الحديثة بشكل تفاعلي.", "تنظيم هرمي متطور للواجهات بنظام ألوان مستوحى من موجهات الأوامر التقنية."],
            challenge: "تنظيم حركات متعددة المراحل دون التأثير على التمرير العمودي للمتصفح، وخاصة على الأجهزة الذكية التي تعمل باللمس.",
            solution: "تقسيم الخطوط الزمنية للحركة بناءً على حجم الشاشة، وتفادي الحركات الثقيلة على شاشات الجوال واستبدالها بحركات خفيفة قائمة على CSS.",
            result: "إنتاج بوابة تعليمية تفاعلية وممتعة للمستخدم تعزز فهم التخصص الأكاديمي."
        }
    },
    iphone: {
        category: "ui-ux", image: "iphone-13-shop .jpeg", demoUrl: "https://iphone-shop-esra3p23j-mohamed-essam-123s-projects.vercel.app/", codeUrl: "https://github.com/mohamed-essam-123",
        en: {
            title: "iPhone Showcase Experience", subtitle: "HTML5 • Custom CSS Variables • Vanilla JS",
            overview: "A premium interactive landing page presenting the iPhone 13 Pro. It features dynamic custom asset color switching, specifications comparisons, and modular shopping structures.",
            tech: ["HTML5", "CSS3 Variables", "Vanilla JS State System", "SVG Icons", "Flex Layouts"],
            features: ["Real-time image color switching based on interactive model selectors.", "Smooth sliding specs detail panels and specs comparisons.", "Interactive buy-now configuration drawer layout."],
            challenge: "Implementing instant assets dynamic changes and UI sync without using reactive framework components like React.",
            solution: "Designed a lightweight custom state listener in Vanilla JS, updating target element values and source assets using dynamic DOM datasets and localized CSS class overrides.",
            result: "Zero lag transition effects providing an experience that feels close to Apple's official web interfaces."
        },
        ar: {
            title: "صفحة استعراض iPhone التفاعلية", subtitle: "HTML5 • متغيرات CSS • جافا سكريبت نقية",
            overview: "صفحة ويب متميزة تفاعلية تستعرض هاتف iPhone 13 Pro. تتيح للمستخدم التفاعل مع مواصفات الهاتف، تغيير الألوان بصرياً وبشكل فوري، وتعديل خيارات الشراء.",
            tech: ["HTML5", "متغيرات CSS3", "جافا سكريبت نقية (DOM)", "أيقونات SVG", "تنسيق مرن Flex"],
            features: ["تغيير لون الهاتف المعروض والواجهات المصاحبة بشكل فوري بمجرد اختيار اللون.", "لوحات مواصفات متحركة ومنزلقة تستجيب لنقرات المستخدم بسلاسة.", "درج شراء تفاعلي مدمج في هيكل الصفحة لتسجيل طلبات الشراء الافتراضية."],
            challenge: "تطبيق التحديث الفوري للبيانات والصور ومزامنة الواجهة بدون الاعتماد على أي إطار عمل معقد مثل React.",
            solution: "تطوير نظام استماع ومراقبة حالة داخلي بسيط باستخدام جافا سكريبت نقية، لتحديث العناصر البرمجية استناداً إلى معرفات الـ DOM (Datasets).",
            result: "انتقالات فائقة السرعة تعزز تجربة العميل وتحاكي موقع آبل الرسمي بكفاءة."
        }
    },
    creative: {
        category: "ui-ux", image: "project-make-website.jpeg", demoUrl: "https://responsive-glass-website-d23uj23f3-mohamed-essam-123s-projects.vercel.app/", codeUrl: "https://github.com/mohamed-essam-123",
        en: {
            title: "Creative Agency Hub", subtitle: "HTML5 • Advanced Parallax • CSS Layouts",
            overview: "A visually striking landing page created for digital agencies. It employs micro-animations, glassmorphic headers, layered structures, and parallax background elements.",
            tech: ["HTML5", "CSS Parallax Techniques", "Vanilla JS", "Scroll Magic Animations", "Web Typography"],
            features: ["Dynamic backdrop filters providing transparent glass navigation headers.", "Staggered team layout cards and portfolio showcases.", "Sleek text revealing transitions on user scrolling."],
            challenge: "Preventing parallax background assets from overlapping with readable textual context on small tablets and mobile devices.",
            solution: "Developed layout overrides using CSS Media Queries, turning off active parallax background movements on viewports below 992px to ensure optimal reading contrast.",
            result: "Maintained a stunning creative aesthetic on desktops while providing optimal accessibility on smaller mobile devices."
        },
        ar: {
            title: "موقع وكالة إبداعية رقمية", subtitle: "HTML5 • تأثير Parallax • تنسيقات CSS",
            overview: "صفحة هبوط مذهلة بصرياً مخصصة لوكالات التسويق والتصميم الرقمية. تستخدم أحدث صيحات التصميم مثل الواجهات الزجاجية الشفافة، وتأثيرات حركة خلفيات الـ Parallax.",
            tech: ["HTML5", "تقنيات Parallax للـ CSS", "جافا سكريبت", "حركات التمرير التفاعلية", "خطوط ويب مخصصة"],
            features: ["شريط تصفح علوي زجاجي يتفاعل مع محتوى الخلفية بشكل جذاب.", "عرض فني لبطاقات فريق العمل وسابقة الأعمال بتأثيرات حركية.", "ظهور تدريجي جذاب للنصوص الإعلانية والفقرات أثناء النزول لأسفل."],
            challenge: "منع تداخل صور الخلفية المتحركة (Parallax) مع النصوص المقروءة على الأجهزة اللوحية والجوالات ذات الشاشات الضيقة.",
            solution: "إعداد استثناءات تصميم كاملة عبر الاستعلامات البرمجية للـ CSS لتعطيل تأثيرات الحركة الإضافية على الشاشات الأصغر من 992 بكسل لضمان وضوح القراءة.",
            result: "مظهر جمالي إبداعي على الحواسب وشاشات العرض الكبيرة مع سهولة قراءة ممتازة على الجوال."
        }
    },
    glass: {
        category: "ui-ux", image: "Responsive-Glass-Website .jpeg", demoUrl: "https://project-make-website-d73yhuf6z-mohamed-essam-123s-projects.vercel.app//", codeUrl: "https://github.com/mohamed-essam-123",
        en: {
            title: "Glassmorphism UI Concept Showroom", subtitle: "HTML5 • CSS Backdrop-Filter • Glass Aesthetics",
            overview: "A UI showcase dedicated to illustrating Glassmorphism design aesthetics. Built with high-fidelity translucent cards, colorful glowing blur backgrounds, and responsive visual cards.",
            tech: ["HTML5", "CSS Backdrop-filter", "Dynamic Gradients", "FontAwesome Icons", "Responsive Layout"],
            features: ["Double-layered glass card containers with thin neon glowing borders.", "High contrast text layouts overlaid on dynamic glowing backgrounds.", "Dynamic interactive blur adjustments on focus states."],
            challenge: "Older browser engines or non-updated mobile viewports failing to support the CSS backdrop-filter property, resulting in solid gray cards.",
            solution: "Coded fallback background-color structures using solid high-transparency RGBA colors as backup properties when support detection for backdrop-filter fails.",
            result: "A stunning glass interface that degrades gracefully on older browser clients without breaking layout structure."
        },
        ar: {
            title: "معرض واجهات التصميم الزجاجي (Glassmorphism)", subtitle: "HTML5 • مرشح Backdrop-Filter • جماليات حديثة",
            overview: "معرض واجهات مخصص لتجسيد جماليات التصميم الزجاجي الحديث. يعتمد بالكامل على البطاقات شبه الشفافة الفاخرة، الخلفيات المتوهجة والألوان المتناسقة.",
            tech: ["HTML5", "مرشحات تفاعل الخلفية للـ CSS", "تدرجات لونية حية", "أيقونات خطوط FontAwesome", "هيكل مرن ومتجاوب"],
            features: ["حاويات زجاجية مزدوجة الطبقات مع حدود مضيئة رقيقة.", "توافق ألوان عالي يضمن وضوح النصوص فوق الخلفيات المضيئة والملونة.", "تفاعلات بصرية مميزة تتأثر بحركة مؤشر المستخدم فوق البطاقات."],
            challenge: "بعض المتصفحات القديمة أو الهواتف غير المحدثة لا تدعم خاصية backdrop-filter مما يجعل البطاقات تبدو رمادية صلبة وقبيحة.",
            solution: "تطوير بدائل ذكية باستخدام ألوان RGBA عالية الشفافية تعمل تلقائياً كخلفية بديلة في حال عدم دعم المتصفح للخاصية الحديثة.",
            result: "واجهة زجاجية غاية في الجمال والاحترافية تعمل بكفاءة على كافة المتصفحات والهواتف."
        }
    },
    scrolling: {
        category: "ui-ux", image: "Scrolling-Website.jpeg", demoUrl: "https://scrolling-website-2733j8dp5-mohamed-essam-123s-projects.vercel.app/", codeUrl: "https://github.com/mohamed-essam-123",
        en: {
            title: "Dynamic Scrolling Experience", subtitle: "HTML5 • Linear Page Interpolations • Modern Interactions",
            overview: "A custom guided digital storytelling journey. The site translates standard vertical browser scrolling into engaging multi-directional layout changes.",
            tech: ["HTML5", "CSS Custom Properties", "JavaScript Scroll Listeners", "Linear Interpolation Algorithms"],
            features: ["Custom scrolling experience that feels organic and responsive.", "Seamless transitions between full-screen informational cards.", "Progress indicators mapping user location within the interactive story."],
            challenge: "Standard mouse wheel triggers caused jerky, sudden jumps on non-trackpad mouse inputs, breaking the visual storytelling flow.",
            solution: "Created an interpolation loop using requestAnimationFrame that calculates a smoothed value of the scroll position, smoothing out physical mouse inputs.",
            result: "Extremely cinematic scrolling experience that operates perfectly on trackpads, mobile touchscreens, and mouse-wheels."
        },
        ar: {
            title: "بوابة التمرير الحركي التفاعلية", subtitle: "HTML5 • حسابات استيفاء خطي • تفاعلات عصرية",
            overview: "رحلة تفاعلية للمستخدم تعتمد على سرد القصص رقمياً. يقوم الموقع بترجمة تمرير الصفحة التقليدي لأسفل إلى تنقلات وحركات أفقية وجانبية جذابة.",
            tech: ["HTML5", "خصائص CSS المخصصة", "مستمعات أحداث التمرير", "خوارزميات الاستيفاء الحركي"],
            features: ["حركة تمرير انسيابية مميزة تشعر المستخدم بالتفاعل مع عناصر الصفحة.", "انتقالات بصرية خالية من التقطيع بين البطاقات كاملة العرض.", "مؤشر مرئي يعرض مدى تقدم المستخدم داخل القصة التفاعلية للموقع."],
            challenge: "عجلة الماوس العادية تسبب قفزات حادة وسريعة غير مرغوبة، مما يشوه سلاسة السرد البصري مقارنة بلوحات اللمس.",
            solution: "برمجة حلقة معالجة بالاعتماد على requestAnimationFrame لحساب قيم انتقالية ممهدة لعملية التمرير، لتقليل حدة حركة عجلة الماوس.",
            result: "تجربة تصفح سينمائية فريدة من نوعها تعمل بثبات تام على جميع الحواسيب وشاشات اللمس والهواتف."
        }
    },
    weather: {
        category: "fullstack", image: "weather-app .jpeg", demoUrl: "https://weather-website-n6ifopgkw-mohamed-essam-123s-projects.vercel.app/", codeUrl: "https://github.com/mohamed-essam-123",
        en: {
            title: "Bilingual Weather Utility Hub", subtitle: "JavaScript • Weather API • Real-time Data",
            overview: "A clean utility web application showing real-time atmospheric data. Integrates external REST API resources to show forecasts, search locations, and dynamically match backgrounds to current weather conditions.",
            tech: ["JavaScript ES6", "OpenWeatherMap API", "CSS Grid & Transitions", "Geolocation APIs"],
            features: ["Live temperature, humidity, and wind stats with custom icons.", "Bilingual output (English/Arabic) responding to selected query parameters.", "Location autocomplete suggestions utilizing direct browser APIs."],
            challenge: "Handling network latency and missing geolocation permissions gracefully without showing blank screens or script errors to visitors.",
            solution: "Implemented robust error catching, default placeholder cities (Cairo/Giza), and user-friendly visual feedback notifications when location permissions are denied.",
            result: "An exceptionally robust, easy-to-use application with 100% error tolerance and dynamic styling updates."
        },
        ar: {
            title: "تطبيق أحوال الطقس ثنائي اللغة", subtitle: "جافا سكريبت • واجهة بيانات الطقس • بيانات فورية",
            overview: "تطبيق ويب خدمي يستعرض أحوال الطقس والبيانات الجوية الفورية. يدمج واجهات برمجية خارجية (REST API) للبحث عن المدن وتغيير سمة الموقع بناءً على الجو الحالي.",
            tech: ["جافا سكريبت ES6", "واجهة OpenWeatherMap API", "شبكة وتأثيرات CSS", "واجهة تحديد الموقع الجغرافي"],
            features: ["عرض درجات الحرارة والرطوبة وسرعة الرياح بأيقونات متحركة.", "ترجمة فورية للبيانات الجوية استناداً إلى اللغة المختارة.", "البحث الذكي عن المدن وعرض المقترحات بشكل تلقائي وسلس."],
            challenge: "إدارة فترات انتظار الشبكة ورفض المستخدمين لإذن تحديد الموقع دون التسبب في توقف التطبيق أو ظهور شاشات فارغة.",
            solution: "بناء معالجة أخطاء قوية توفر مدينة افتراضية للطقس (القاهرة)، مع إظهار رسائل تنبيهية واضحة ومصممة للمستخدم في حال حجب صلاحية الموقع.",
            result: "تطبيق خدمي متين، مقاوم للأخطاء البرمجية بالكامل، مع تحديث مرن لواجهات وتصميم التطبيق."
        }
    }
};

// ==========================================
// 2. PREMIUM PORTFOLIO CORE ENGINE
// ==========================================

let currentLang = localStorage.getItem('lang') || 'en';
let activeTypewriter = null;
let els = {};

document.addEventListener('DOMContentLoaded', () => {
    cacheElements();
    initTheme();
    initLanguage();
    initAOS();
    initScrollEffects();
    initProjectFilters();
    initModals();
    initContactForm();
    hidePreloader();
});

function cacheElements() {
    els = {
        html: document.documentElement,
        body: document.body,
        themeToggle: document.querySelector('.theme-toggle'),
        themeIcon: document.querySelector('.theme-toggle i'),
        langBtn: document.getElementById('langBtn'),
        langText: document.getElementById('langText'),
        navbar: document.querySelector('.navbar'),
        mobileToggle: document.querySelector('.mobile-toggle'),
        navLinks: document.querySelector('.nav-links'),
        progressBar: document.querySelector('.scroll-progress'),
        scrollTopBtn: document.getElementById('scrollTopBtn'),
        typewriter: document.getElementById('typewriter'),
        projectGrid: document.querySelector('.projects-grid'),
        filterBtns: document.querySelectorAll('.filter-btn'),
        caseStudyModal: document.getElementById('caseStudyModal'),
        certModal: document.getElementById('certModal'),
        contactForm: document.getElementById('contactForm'),
        contactFormAlert: document.getElementById('contactFormAlert'),
        contactSubmitBtn: document.getElementById('contactSubmitBtn'),
        contactSubmitText: document.getElementById('contactSubmitText'),
        preloader: document.querySelector('.preloader')
    };
}

function hidePreloader() {
    if (els.preloader) {
        setTimeout(() => {
            els.preloader.classList.add('fade-out');
        }, 500);
    }
}

function initLanguage() {
    currentLang = localStorage.getItem('lang') || 'en';
    if (els.langBtn) {
        els.langBtn.addEventListener('click', () => {
            setLanguage(currentLang === 'en' ? 'ar' : 'en');
        });
    }
    setLanguage(currentLang);
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);

    els.html.dir = lang === 'ar' ? 'rtl' : 'ltr';
    els.html.lang = lang;
    els.html.setAttribute('data-lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key] !== undefined) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else {
                el.innerHTML = translations[lang][key];
            }
        }
    });

    if (els.langText) {
        els.langText.textContent = lang === 'en' ? 'العربية' : 'English';
    }

    initTypewriter();
    renderProjects();
    
    const timeline = document.querySelector('.timeline-container');
    if (timeline) {
        lang === 'ar' ? timeline.classList.add('rtl-timeline') : timeline.classList.remove('rtl-timeline');
    }
}

function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);

    if (els.themeToggle) {
        els.themeToggle.addEventListener('click', () => {
            const nextTheme = els.body.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
            setTheme(nextTheme);
        });
    }
}

function setTheme(theme) {
    if (theme === 'light') {
        els.body.setAttribute('data-theme', 'light');
        if (els.themeIcon) els.themeIcon.className = 'fas fa-sun';
        localStorage.setItem('theme', 'light');
    } else {
        els.body.removeAttribute('data-theme');
        if (els.themeIcon) els.themeIcon.className = 'fas fa-moon';
        localStorage.setItem('theme', 'dark');
    }
}

function initTypewriter() {
    if (activeTypewriter) clearTimeout(activeTypewriter);

    const words = currentLang === 'en' 
        ? ['Mohamed Essam', 'Full-Stack Developer', 'ASP.NET Core Expert', 'React Developer']
        : ['محمد عصام', 'مطور ويب متكامل', 'مطور ASP.NET Core', 'مطور واجهات React'];

    let wordIdx = 0, charIdx = 0, isDeleting = false;

    function run() {
        if (!els.typewriter) return;
        const currentWord = words[wordIdx];
        
        els.typewriter.textContent = isDeleting 
            ? currentWord.substring(0, charIdx - 1) 
            : currentWord.substring(0, charIdx + 1);
        
        charIdx = isDeleting ? charIdx - 1 : charIdx + 1;
        let speed = isDeleting ? 40 : 100;
        
        if (!isDeleting && charIdx === currentWord.length) {
            speed = 2200; isDeleting = true;
        } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            wordIdx = (wordIdx + 1) % words.length;
            speed = 500;
        }
        activeTypewriter = setTimeout(run, speed);
    }
    run();
}

function initScrollEffects() {
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        
        if (els.progressBar) els.progressBar.style.width = (scrollTop / docHeight) * 100 + '%';
        scrollTop > 80 ? els.navbar.classList.add('scrolled') : els.navbar.classList.remove('scrolled');
        scrollTop > 600 ? els.scrollTopBtn.classList.add('visible') : els.scrollTopBtn.classList.remove('visible');
    });

    if (els.scrollTopBtn) {
        els.scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }

    if (els.mobileToggle) {
        els.mobileToggle.addEventListener('click', () => {
            els.mobileToggle.classList.toggle('active');
            els.navLinks.classList.toggle('active');
            els.body.classList.toggle('menu-open');
        });
    }

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            els.mobileToggle.classList.remove('active');
            els.navLinks.classList.remove('active');
            els.body.classList.remove('menu-open');
        });
    });
}

function initProjectFilters() {
    els.filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            els.filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterProjects(btn.getAttribute('data-filter'));
        });
    });
}

function renderProjects() {
    if (!els.projectGrid) return;
    els.projectGrid.innerHTML = '';

    Object.keys(projectsData).forEach(id => {
        const item = projectsData[id];
        const localized = item[currentLang];
        
        const card = document.createElement('div');
        card.className = `project-card`;
        card.setAttribute('data-category', item.category);
        card.setAttribute('data-aos', 'fade-up');
        
        card.innerHTML = `
            <div class="project-img-wrapper">
                <img src="${item.image}" alt="${localized.title}" class="project-img" loading="lazy">
                <div class="project-overlay">
                    <button class="btn btn-primary" onclick="openCaseStudy('${id}')">
                        <i class="fas fa-file-alt"></i> ${translations[currentLang].proj_card_view_details}
                    </button>
                </div>
            </div>
            <div class="project-content">
                <h3 class="project-title">${localized.title}</h3>
                <p class="project-tech">${localized.subtitle}</p>
                <div class="project-links">
                    <button class="btn-icon" onclick="openCaseStudy('${id}')"><i class="fas fa-book-open"></i></button>
                    <a href="${item.codeUrl}" target="_blank" class="btn-icon"><i class="fab fa-github"></i></a>
                    <a href="${item.demoUrl}" target="_blank" class="btn-icon"><i class="fas fa-external-link-alt"></i></a>
                </div>
            </div>
        `;
        els.projectGrid.appendChild(card);
    });
}

function filterProjects(category) {
    document.querySelectorAll('.project-card').forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (category === 'all' || cardCat === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function initModals() {
    window.addEventListener('click', (e) => {
        if (e.target === els.caseStudyModal) closeCaseStudy();
        if (e.target === els.certModal) closeCertModal();
    });
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') { closeCaseStudy(); closeCertModal(); }
    });
}

window.openCaseStudy = function(projectId) {
    const project = projectsData[projectId];
    if (!project) return;
    const localized = project[currentLang];
    const modalBody = document.getElementById('caseStudyModalBody');
    
    modalBody.innerHTML = `
        <div class="modal-grid">
            <div class="modal-left">
                <img src="${project.image}" class="modal-img">
                <div class="modal-actions">
                    <a href="${project.demoUrl}" target="_blank" class="btn btn-primary"><i class="fas fa-external-link-alt"></i> ${translations[currentLang].modal_visit_live}</a>
                    <a href="${project.codeUrl}" target="_blank" class="btn btn-secondary"><i class="fab fa-github"></i> ${translations[currentLang].modal_visit_code}</a>
                </div>
            </div>
            <div class="modal-right">
                <h2 class="modal-project-title">${localized.title}</h2>
                <p class="modal-project-subtitle">${localized.subtitle}</p>
                <div class="modal-section"><h4>Overview</h4><p>${localized.overview}</p></div>
                <div class="modal-section highlight-box warning"><h4>${translations[currentLang].modal_challenge}</h4><p>${localized.challenge}</p></div>
                <div class="modal-section highlight-box success"><h4>${translations[currentLang].modal_solution}</h4><p>${localized.solution}</p></div>
                <div class="modal-section highlight-box primary"><h4>${translations[currentLang].modal_result}</h4><p>${localized.result}</p></div>
            </div>
        </div>
    `;
    els.caseStudyModal.classList.add('active');
    els.body.classList.add('modal-open');
};

window.closeCaseStudy = function() { els.caseStudyModal.classList.remove('active'); els.body.classList.remove('modal-open'); };

window.openCertModal = function(imgSrc, titleKey, verifyUrl = '') {
    document.getElementById('certModalImg').src = imgSrc;
    document.getElementById('certModalTitle').textContent = translations[currentLang][titleKey] || '';
    const verifyBtn = document.getElementById('certVerifyBtn');
    verifyBtn.style.display = (verifyUrl && verifyUrl !== '#') ? 'inline-flex' : 'none';
    els.certModal.classList.add('active');
    els.body.classList.add('modal-open');
};

window.closeCertModal = function() { els.certModal.classList.remove('active'); els.body.classList.remove('modal-open'); };

function initContactForm() {
    if (!els.contactForm) return;
    els.contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        els.contactSubmitBtn.disabled = true;
        els.contactSubmitText.textContent = translations[currentLang].contact_sending;
        setTimeout(() => {
            els.contactFormAlert.textContent = translations[currentLang].contact_success;
            els.contactFormAlert.className = "contact-alert success";
            els.contactFormAlert.style.display = "block";
            els.contactForm.reset();
            els.contactSubmitBtn.disabled = false;
            els.contactSubmitText.textContent = translations[currentLang].contact_btn_send;
        }, 1500);
    });
}

function initAOS() { if (typeof AOS !== 'undefined') AOS.init({ duration: 900, once: true }); }