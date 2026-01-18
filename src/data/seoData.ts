export const seoData: Record<string, {
  title: string;
  description: string;
  keywords: string;
  canonical?: string;
  structuredData?: object;
}> = {
  // Homepage
  "/": {
    title: "Sangronyx – SAP Solutions | Complete SAP Implementation & Support Services",
    description: "Sangronyx provides comprehensive SAP S/4HANA implementation, ECC to S/4HANA migration, and custom development services. Expert SAP consultants delivering end-to-end digital solutions for business transformation. Trusted SAP partner for manufacturing, retail, pharma, logistics, education, finance, and small businesses.",
    keywords: "Sangronyx, Sangronyx Technologies, SAP S/4HANA, SAP implementation, SAP migration, SAP training, SAP support, SAP consulting, SAP ECC to S/4HANA, SAP corporate training, SAP AMC, SAP custom development, SAP integration services, SAP module implementation, SAP licensing, SAP hypercare support, SAP workshop, SAP solutions, SAP services, SAP consulting company, SAP implementation partner, SAP migration services, SAP S/4HANA implementation, SAP ECC migration, SAP support and maintenance, SAP custom development services, SAP integration, SAP corporate training programs, SAP consulting services, digital transformation, ERP implementation, business transformation, enterprise resource planning, SAP Fiori, SAP HANA, SAP BTP, cloud ERP, on-premise SAP, hybrid SAP solutions",
    canonical: "https://sangronyx.com",
  },

  // Products
  "/products": {
    title: "SAP Products & Solutions – Sangronyx | Enterprise ERP Software",
    description: "Explore comprehensive SAP products and solutions including SAP S/4HANA, SAP ECC, SAP Business One, SAP Fiori, and more. Find the right SAP solution for your business needs with expert guidance from Sangronyx.",
    keywords: "Sangronyx, SAP products, SAP S/4HANA, SAP ECC, SAP Business One, SAP Fiori, SAP HANA, SAP BTP, SAP solutions, enterprise ERP software, SAP modules, SAP cloud solutions, SAP on-premise, SAP hybrid solutions, SAP software products",
    canonical: "https://sangronyx.com/products",
  },

  // Services
  "/services": {
    title: "SAP Services – Sangronyx | Implementation, Migration & Support",
    description: "Comprehensive SAP services including S/4HANA implementation, ECC to S/4HANA migration, SAP module implementations, custom development, integration services, 24/7 support & maintenance, and licensing solutions. Expert SAP consultants delivering excellence.",
    keywords: "Sangronyx, SAP services, SAP implementation services, SAP migration services, SAP training services, SAP support services, SAP consulting services, SAP S/4HANA implementation, SAP ECC migration, SAP module implementation, SAP custom development, SAP integration services, SAP support and maintenance, SAP corporate training, SAP licensing, SAP AMC, SAP hypercare support, SAP rollout services",
    canonical: "https://sangronyx.com/services",
  },

  // Industries
  "/industries": {
    title: "SAP Solutions by Industry – Sangronyx | Manufacturing, Retail, Pharma, Finance & More",
    description: "Industry-specific SAP solutions tailored for manufacturing, retail, pharma, logistics, education, finance, and small businesses. Expert SAP implementation and consulting services for your industry vertical.",
    keywords: "Sangronyx, SAP for manufacturing, SAP for retail, SAP for pharma, SAP for logistics, SAP for education, SAP for finance, SAP for small business, industry-specific SAP solutions, SAP vertical solutions, SAP industry expertise, SAP manufacturing solutions, SAP retail solutions, SAP pharma solutions",
    canonical: "https://sangronyx.com/industries",
  },

  "/industries/manufacturing": {
    title: "SAP Solutions for Manufacturing Industry – Production Planning & Quality Management",
    description: "Comprehensive SAP solutions for manufacturing industry including SAP PP (Production Planning), SAP MM (Materials Management), SAP QM (Quality Management), SAP PM (Plant Maintenance), and SAP WM (Warehouse Management). Expert SAP implementation for manufacturing companies.",
    keywords: "SAP for manufacturing, SAP manufacturing solutions, SAP PP, SAP Production Planning, SAP MM for manufacturing, SAP QM, SAP Quality Management, SAP PM, SAP Plant Maintenance, SAP WM, SAP Warehouse Management, manufacturing ERP, production planning software, manufacturing SAP implementation, SAP manufacturing modules",
    canonical: "https://sangronyx.com/industries/manufacturing",
  },

  "/industries/retail": {
    title: "SAP Solutions for Retail Industry – Point of Sale & Inventory Management",
    description: "Tailored SAP solutions for retail industry including SAP SD (Sales & Distribution), SAP MM (Materials Management), SAP IS-Retail, point of sale integration, inventory management, and customer relationship management. Expert SAP retail implementation.",
    keywords: "SAP for retail, SAP retail solutions, SAP IS-Retail, SAP SD for retail, SAP point of sale, SAP POS integration, retail inventory management, SAP retail implementation, retail ERP solutions, SAP retail modules, omnichannel retail SAP, SAP for retail chains",
    canonical: "https://sangronyx.com/industries/retail",
  },

  "/industries/pharma": {
    title: "SAP Solutions for Pharmaceutical Industry – Compliance & Quality Control",
    description: "Specialized SAP solutions for pharmaceutical industry with focus on regulatory compliance, quality management, batch tracking, serialization, and GMP compliance. Expert SAP pharma implementation and consulting.",
    keywords: "SAP for pharma, SAP pharmaceutical solutions, SAP pharma compliance, SAP batch tracking, SAP serialization, SAP GMP compliance, pharma quality management, SAP pharma implementation, pharmaceutical ERP, SAP pharma modules, regulatory compliance SAP, pharma supply chain SAP",
    canonical: "https://sangronyx.com/industries/pharma",
  },

  "/industries/logistics": {
    title: "SAP Solutions for Logistics & Supply Chain Management",
    description: "Comprehensive SAP solutions for logistics and supply chain management including SAP TM (Transportation Management), SAP WM (Warehouse Management), SAP LE (Logistics Execution), and supply chain optimization. Expert SAP logistics implementation.",
    keywords: "SAP for logistics, SAP logistics solutions, SAP TM, SAP Transportation Management, SAP WM, SAP Warehouse Management, SAP LE, SAP Logistics Execution, logistics ERP, supply chain management SAP, SAP logistics implementation, SAP logistics modules, freight management SAP",
    canonical: "https://sangronyx.com/industries/logistics",
  },

  "/industries/education": {
    title: "SAP Solutions for Education Sector – Student Information & Financial Management",
    description: "Tailored SAP solutions for education sector including student information systems, financial management, HR management, and campus management. Expert SAP implementation for educational institutions.",
    keywords: "SAP for education, SAP education solutions, SAP student information system, SAP for universities, SAP for colleges, education ERP, campus management SAP, SAP education implementation, student management SAP, SAP education modules, educational institution SAP",
    canonical: "https://sangronyx.com/industries/education",
  },

  "/industries/finance": {
    title: "SAP Solutions for Finance Industry – Financial Accounting & Risk Management",
    description: "Specialized SAP solutions for finance industry including SAP FICO (Financial Accounting & Controlling), SAP TRM (Treasury & Risk Management), SAP Bank Analyzer, and financial reporting. Expert SAP finance implementation.",
    keywords: "SAP for finance, SAP finance solutions, SAP FICO, SAP Financial Accounting, SAP Controlling, SAP TRM, SAP Treasury Management, SAP Bank Analyzer, finance ERP, financial management SAP, SAP finance implementation, SAP finance modules, banking SAP solutions",
    canonical: "https://sangronyx.com/industries/finance",
  },

  "/industries/small-business": {
    title: "SAP Solutions for Small Business – SAP Business One & Affordable ERP",
    description: "Affordable SAP solutions for small businesses including SAP Business One, simplified SAP implementations, cost-effective SAP support, and tailored solutions. Expert SAP consulting for small and medium enterprises.",
    keywords: "SAP for small business, SAP Business One, SAP for SMEs, small business ERP, affordable SAP solutions, SAP small business implementation, SAP Business One implementation, SME SAP solutions, SAP for startups, cost-effective SAP, SAP small business modules",
    canonical: "https://sangronyx.com/industries/small-business",
  },

  // Service Detail Pages
  "/services/sap-s4hana-implementation": {
    title: "SAP S/4HANA Implementation Services – Sangronyx | Cloud, On-Premise & Hybrid",
    description: "Complete SAP S/4HANA implementation services including cloud, on-premise, and hybrid deployment options. Expert SAP S/4HANA consultants providing end-to-end implementation, business process mapping, module configuration, UAT, and go-live support.",
    keywords: "Sangronyx, SAP S/4HANA implementation, SAP S/4HANA cloud, SAP S/4HANA on-premise, SAP S/4HANA hybrid, SAP S/4HANA consultants, SAP S/4HANA implementation services, SAP S/4HANA deployment, SAP S/4HANA migration, SAP S/4HANA setup, SAP S/4HANA configuration, SAP S/4HANA go-live, SAP S/4HANA implementation partner",
    canonical: "https://sangronyx.com/services/sap-s4hana-implementation",
  },

  "/services/sap-ecc-migration": {
    title: "SAP ECC to S/4HANA Migration Services – Seamless Migration",
    description: "Expert SAP ECC to S/4HANA migration services with minimal downtime. Comprehensive migration including readiness check, database migration, custom code adaptation, and data migration. Trusted SAP migration partner.",
    keywords: "SAP ECC to S/4HANA migration, SAP ECC migration, SAP migration services, SAP S/4HANA migration, SAP system migration, SAP database migration, SAP custom code migration, SAP data migration, SAP migration partner, SAP migration consultants, SAP ECC upgrade, SAP migration project",
    canonical: "https://sangronyx.com/services/sap-ecc-migration",
  },

  "/services/sap-licensing": {
    title: "SAP Licensing & Software Solutions – Cost Optimization",
    description: "Comprehensive SAP licensing solutions including SAP S/4HANA subscriptions, module-based licensing, cost optimization guidance, license management, and software procurement. Expert SAP licensing consultants.",
    keywords: "SAP licensing, SAP software licensing, SAP S/4HANA licensing, SAP license management, SAP license optimization, SAP subscription, SAP software procurement, SAP license consulting, SAP license audit, SAP license cost optimization, SAP licensing solutions",
    canonical: "https://sangronyx.com/services/sap-licensing",
  },

  "/services/sap-module-implementations": {
    title: "SAP Module Implementation Services – PP, MM, SD, FICO, HR & More",
    description: "Expert SAP module implementation services for all major functional and technical modules including PP, MM, SD, FICO, CO, QM, PM, HR, ABAP, BASIS, HANA, and Fiori. Comprehensive SAP module implementation.",
    keywords: "SAP module implementation, SAP PP implementation, SAP MM implementation, SAP SD implementation, SAP FICO implementation, SAP HR implementation, SAP ABAP, SAP BASIS, SAP HANA implementation, SAP Fiori implementation, SAP module consultants, SAP functional modules, SAP technical modules",
    canonical: "https://sangronyx.com/services/sap-module-implementations",
  },

  "/services/sap-custom-development": {
    title: "SAP Custom Development Services – ABAP, Forms & Fiori Apps",
    description: "Tailored SAP custom development services including ABAP reports, enhancements, SmartForms, Adobe Forms, Fiori UI apps, and custom SAP solutions. Expert SAP developers delivering custom SAP solutions.",
    keywords: "SAP custom development, SAP ABAP development, SAP enhancements, SAP SmartForms, SAP Adobe Forms, SAP Fiori apps, SAP custom solutions, SAP development services, SAP programming, SAP custom reports, SAP UI development, SAP custom applications",
    canonical: "https://sangronyx.com/services/sap-custom-development",
  },

  "/services/sap-support-maintenance": {
    title: "SAP Support & Maintenance Services – 24/7 AMC Support",
    description: "Comprehensive SAP support and maintenance services including 24/7 technical support, SAP AMC (Annual Maintenance Contract), system monitoring, performance optimization, bug fixes, and proactive maintenance. Reliable SAP support partner.",
    keywords: "SAP support, SAP maintenance, SAP AMC, SAP annual maintenance contract, SAP 24/7 support, SAP technical support, SAP system maintenance, SAP support services, SAP maintenance services, SAP helpdesk, SAP support partner, SAP maintenance contract",
    canonical: "https://sangronyx.com/services/sap-support-maintenance",
  },

  "/services/sap-integration-services": {
    title: "SAP Integration Services – API, EDI & Third-Party Integration",
    description: "Expert SAP integration services including API integration, EDI integration, third-party system integration, cloud integration, middleware integration, and data synchronization. Seamless SAP integration solutions.",
    keywords: "SAP integration, SAP API integration, SAP EDI integration, SAP third-party integration, SAP cloud integration, SAP middleware, SAP data integration, SAP system integration, SAP integration services, SAP integration consultants, SAP interface development",
    canonical: "https://sangronyx.com/services/sap-integration-services",
  },

  // Resources
  "/resources": {
    title: "SAP Resources – Sangronyx | Documentation, Training & Support",
    description: "Comprehensive SAP resources including documentation, video tutorials, whitepapers, downloads, FAQ, and developer resources. Access valuable SAP knowledge and resources.",
    keywords: "Sangronyx, SAP resources, SAP documentation, SAP tutorials, SAP whitepapers, SAP downloads, SAP FAQ, SAP developer resources, SAP training materials, SAP training classes, SAP knowledge base, SAP learning resources",
    canonical: "https://sangronyx.com/resources",
  },

  "/resources/faq": {
    title: "SAP FAQ – Frequently Asked Questions",
    description: "Find answers to frequently asked questions about SAP solutions, implementation, migration, training, support, licensing, and more. Comprehensive SAP FAQ section with expert answers.",
    keywords: "SAP FAQ, SAP frequently asked questions, SAP questions, SAP answers, SAP help, SAP information, SAP queries, SAP common questions, SAP FAQ section",
    canonical: "https://sangronyx.com/resources/faq",
  },

  // Partners
  "/partners": {
    title: "SAP Partner Program – Sangronyx | Partnership Opportunities & Support",
    description: "Join Sangronyx SAP partner network and grow your business. Explore partnership opportunities, collaborative approaches, certified partner programs, business growth opportunities, and comprehensive partner support & training.",
    keywords: "Sangronyx, SAP partner, SAP partner program, SAP partnership, SAP certified partner, SAP business partner, SAP partner network, SAP partner opportunities, SAP partner support, SAP partner training, SAP collaboration",
    canonical: "https://sangronyx.com/partners",
  },

  // About
  "/about": {
    title: "About Us – Sangronyx Technologies | SAP Solutions Provider",
    description: "Learn about Sangronyx Technologies, a leading SAP solutions provider with 10+ years of experience, 45+ SAP projects, and 30+ SAP consultants. Discover our values, mission, and commitment to delivering SAP excellence.",
    keywords: "about Sangronyx, Sangronyx Technologies, SAP solutions provider, SAP company, SAP consultants, SAP expertise, SAP experience, SAP values, SAP mission, about SAP company",
    canonical: "https://sangronyx.com/about",
  },

  "/who-we-are": {
    title: "Who We Are – Sangronyx | Expert SAP Consultants & Team",
    description: "Meet the expert SAP consultants and team at Sangronyx Technologies. Learn about our leadership, expertise, and commitment to delivering exceptional SAP solutions and services to clients worldwide.",
    keywords: "Sangronyx, who we are, Sangronyx team, SAP consultants, SAP experts, SAP leadership, SAP team, SAP professionals, SAP specialists, SAP expertise, SAP consultants team",
    canonical: "https://sangronyx.com/who-we-are",
  },

  // Contact
  "/contact": {
    title: "Contact Us – Get in Touch with Sangronyx SAP Experts",
    description: "Contact Sangronyx Technologies for SAP consultation, implementation, and support services. Reach out via phone, email, or contact form. Located in Hyderabad, India.",
    keywords: "contact Sangronyx, SAP contact, SAP consultation, SAP inquiry, contact SAP experts, SAP support contact, SAP services contact, Sangronyx contact information, SAP company contact",
    canonical: "https://sangronyx.com/contact",
  },

  // Careers
  "/careers": {
    title: "Careers at Sangronyx – Join Our SAP Team",
    description: "Explore career opportunities at Sangronyx Technologies. Join our team of expert SAP consultants and professionals. Discover open positions, company culture, principles, and why you should join us.",
    keywords: "SAP careers, SAP jobs, SAP consultant jobs, SAP career opportunities, SAP employment, SAP job openings, SAP positions, careers at Sangronyx, SAP jobs in India, SAP consultant careers",
    canonical: "https://sangronyx.com/careers",
  },

  // Legal Pages
  "/privacy": {
    title: "Privacy Policy – Sangronyx Technologies",
    description: "Read Sangronyx Technologies privacy policy to understand how we collect, use, and protect your personal information and data.",
    keywords: "privacy policy, Sangronyx privacy, data protection, privacy statement",
    canonical: "https://sangronyx.com/privacy",
  },

  "/terms": {
    title: "Terms of Service – Sangronyx Technologies",
    description: "Review Sangronyx Technologies terms of service and conditions for using our website and services.",
    keywords: "terms of service, terms and conditions, Sangronyx terms, service terms",
    canonical: "https://sangronyx.com/terms",
  },

  "/legal": {
    title: "Legal Information – Sangronyx Technologies",
    description: "Legal information, policies, and terms for Sangronyx Technologies website and services.",
    keywords: "legal information, legal policies, Sangronyx legal, legal terms",
    canonical: "https://sangronyx.com/legal",
  },

  "/cookies": {
    title: "Cookie Policy – Sangronyx Technologies",
    description: "Learn about how Sangronyx Technologies uses cookies on our website and how to manage your cookie preferences.",
    keywords: "cookie policy, cookies, cookie management, Sangronyx cookies",
    canonical: "https://sangronyx.com/cookies",
  },
};

