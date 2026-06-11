// Page Content Persistence Layer for SAP Vision Quest Admin
// This module defines the schemas and initial datasets for managing page content dynamically.

export interface ServiceItem {
  id: string;
  iconName: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  href: string;
}

export interface IndustryItem {
  id: string;
  iconName: string;
  title: string;
  description: string;
  color: string;
  slug: string;
  image: string;
  features?: string[];
}

export interface ResourceItem {
  id: string;
  iconName: string;
  title: string;
  description: string;
  link: string;
  color: string;
}

export interface BenefitItem {
  id: string;
  iconName: string;
  title: string;
  description: string;
}

export interface PartnerBenefitItem {
  id: string;
  iconName: string;
  title: string;
  description: string;
  color: string;
  link: string;
}

export interface LeadershipItem {
  id: string;
  name: string;
  role: string;
  description: string;
}

export interface PageTextConfig {
  heroTitle: string;
  heroDescription: string;
  heroLabel?: string;
  sectionTag?: string;
  sectionTitle?: string;
  sectionDescription?: string;
  ctaTitle?: string;
  ctaDescription?: string;
  ctaButtonText?: string;
  storyTitle?: string;
  storyParagraphs?: string[];
  cultureTitle?: string;
  cultureDescription?: string;
  principlesTitle?: string;
  principlesDescription?: string;
  stats?: { value: string; label: string }[];
}

export interface WebsiteContent {
  services: ServiceItem[];
  industries: IndustryItem[];
  resources: ResourceItem[];
  benefits: BenefitItem[];
  partnerBenefits: PartnerBenefitItem[];
  leadership: LeadershipItem[];
  seoData?: Record<string, { title: string; description: string; keywords: string; canonical?: string; structuredData?: object }>;
  products?: {
    id: string;
    iconName: string;
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    color: string;
    image: string;
    link: string;
  }[];
  homeFeatures?: {
    id: string;
    iconName: string;
    title: string;
    description: string;
    link: string;
    linkText: string;
    underlineColor: string;
  }[];
  homeReasons?: {
    id: string;
    iconName: string;
    title: string;
    description: string;
  }[];
  servicesWhyChoose?: {
    id: string;
    iconName: string;
    title: string;
    description: string;
  }[];
  contactMethods?: {
    id: string;
    iconName: string;
    title: string;
    description: string;
    contact: string;
    action: string;
    link: string;
    color: string;
  }[];
  customPages?: {
    id?: string;
    slug: string;
    title: string;
    description: string;
    sections: {
      id?: string;
      type: string;
      title?: string;
      subtitle?: string;
      content?: string;
      items?: { title: string; description: string; iconName?: string; link?: string }[];
    }[];
  }[];
  pageTexts: {
    services: PageTextConfig;
    industries: PageTextConfig;
    resources: PageTextConfig;
    careers: PageTextConfig;
    partners: PageTextConfig;
    whoWeAre: PageTextConfig;
    home?: {
      heroLabel?: string;
      heroTitle?: string;
      heroDescription?: string;
      sectionTitle?: string;
      whyChooseTitle?: string;
      whyChooseDescription?: string;
      ctaTitle?: string;
      ctaDescription?: string;
      ctaButtonText?: string;
    };
    productsPage?: {
      heroLabel?: string;
      heroTitle?: string;
      heroDescription?: string;
      ctaTitle?: string;
      ctaDescription?: string;
      ctaButtonText?: string;
    };
    contact?: {
      heroLabel?: string;
      heroTitle?: string;
      heroDescription?: string;
      sectionTitle?: string;
      sectionDescription?: string;
      ctaTitle?: string;
      ctaDescription?: string;
    };
  };
}

export const initialServices: ServiceItem[] = [
  {
    id: "ser-1",
    iconName: "Award",
    title: "SAP S/4HANA Implementation",
    description: "Implement SAP S/4HANA with confidence through our proven methodology. Accelerate business transformation.",
    features: [
      "Greenfield Implementation",
      "Brownfield Conversion",
      "Hybrid Implementation",
      "Process Reengineering",
      "User Training",
      "Go-Live Support"
    ],
    image: "/sap-s4hana-implementation.svg",
    href: "/services/sap-s4hana-implementation"
  },
  {
    id: "ser-2",
    iconName: "Database",
    title: "ECC to SAP S/4HANA Migration",
    description: "Move beyond SAP ECC and unlock next-generation capabilities with SAP S/4HANA. Future-proof your ERP landscape.",
    features: [
      "Readiness Assessment",
      "Landscape Analysis",
      "Data Cleansing",
      "Conversion Execution",
      "Hypercare Support"
    ],
    image: "/sap-ecc-migration.svg",
    href: "/services/sap-ecc-migration"
  },
  {
    id: "ser-3",
    iconName: "Settings",
    title: "SAP BTP Services",
    description: "SAP BTP enables organizations to extend, integrate, and innovate across business applications. Innovate faster with SAP Business Technology Platform.",
    features: [
      "SAP Integration Suite",
      "SAP Build",
      "HANA Cloud",
      "Event Mesh",
      "AI Services",
      "Process Automation"
    ],
    image: "/sap-btp-services.svg",
    href: "/services/sap-btp-services"
  },
  {
    id: "ser-4",
    iconName: "Code",
    title: "SAP RAP Development",
    description: "Leverage SAP RAP to create modern, cloud-ready applications with clean architecture and future-proof development standards. Build intelligent enterprise applications.",
    features: [
      "Business Objects",
      "OData Services",
      "Fiori Elements",
      "RAP APIs",
      "Custom Extensions"
    ],
    image: "/sap-rap-development.svg",
    href: "/services/sap-rap-development"
  },
  {
    id: "ser-5",
    iconName: "Cloud",
    title: "SAP CAP Development",
    description: "Develop scalable applications using SAP CAP and deploy seamlessly on SAP BTP. Cloud-native enterprise applications.",
    features: [
      "CAP Node.js",
      "CAP Java",
      "SAP HANA Cloud",
      "Cloud Foundry",
      "REST APIs"
    ],
    image: "/sap-cap-development.svg",
    href: "/services/sap-cap-development"
  },
  {
    id: "ser-6",
    iconName: "Layers",
    title: "SAP Fiori Development",
    description: "Transform traditional SAP screens into intuitive, role-based user experiences. Modern SAP user experience.",
    features: [
      "Fiori App Development",
      "Launchpad Design",
      "Workflow Applications",
      "Mobile Enablement"
    ],
    image: "/sap-fiori-development.svg",
    href: "/services/sap-fiori-development"
  },
  {
    id: "ser-7",
    iconName: "Layout",
    title: "SAP UI5 Development",
    description: "Create responsive applications using SAP UI5 framework. Enterprise-grade front-end solutions.",
    features: [
      "Custom UI5 Apps",
      "Dashboard Development",
      "SAP Integration",
      "Responsive Design"
    ],
    image: "/sap-ui5-development.svg",
    href: "/services/sap-ui5-development"
  },
  {
    id: "ser-8",
    iconName: "Sparkles",
    title: "SAP Joule & AI",
    description: "SAP Joule helps organizations unlock productivity using embedded AI capabilities. Bring AI into everyday business processes.",
    features: [
      "AI Chat Assistants",
      "Predictive Analytics",
      "Process Automation",
      "Intelligent Recommendations"
    ],
    image: "/sap-joule-ai.svg",
    href: "/services/sap-joule-ai"
  },
  {
    id: "ser-9",
    iconName: "Shield",
    title: "SAP Application Support",
    description: "Ensure business continuity with our managed SAP support services. Reliable SAP AMS Services.",
    features: [
      "Incident Management",
      "Problem Management",
      "Enhancement Requests",
      "Monitoring Services",
      "SLA-Based Support"
    ],
    image: "/sap-application-support.svg",
    href: "/services/sap-support-maintenance"
  },
  {
    id: "ser-10",
    iconName: "Globe",
    title: "SAP Rollout Services",
    description: "Deploy global templates efficiently across countries and locations. Expand SAP across business units.",
    features: [
      "Localization",
      "Master Data Migration",
      "Training",
      "Deployment Support"
    ],
    image: "/sap-rollout-services.svg",
    href: "/services/sap-rollout-services"
  },
  {
    id: "ser-11",
    iconName: "Terminal",
    title: "SAP ABAP Development",
    description: "Extend SAP capabilities through high-quality ABAP development. Custom SAP development services.",
    features: [
      "Reports",
      "Interfaces",
      "Enhancements",
      "Forms",
      "Workflow Development"
    ],
    image: "/sap-abap-development.svg",
    href: "/services/sap-abap-development"
  },
  {
    id: "ser-12",
    iconName: "Link2",
    title: "SAP Integration Services",
    description: "Integrate SAP with third-party systems, cloud platforms, and enterprise applications. Connect your enterprise ecosystem.",
    features: [
      "SAP CPI",
      "APIs",
      "EDI",
      "Web Services",
      "Middleware Solutions"
    ],
    image: "/sap-integration-services.svg",
    href: "/services/sap-integration-services"
  }
];

export const initialIndustries: IndustryItem[] = [
  {
    id: "ind-1",
    title: "Manufacturing Solutions",
    description: "Optimize production planning, scheduling, inventory, and shop floor operations. Smart manufacturing with SAP.",
    iconName: "Factory",
    color: "bg-accent",
    slug: "manufacturing",
    image: "/sap-industry-manufacturing.svg",
    features: [
      "SAP PP (Production Planning)",
      "SAP QM (Quality Management)",
      "SAP PM (Plant Maintenance)",
      "SAP EWM (Extended Warehouse Management)"
    ]
  },
  {
    id: "ind-2",
    title: "Automotive Solutions",
    description: "Enable digital supply chains, production excellence, and quality management. Accelerating automotive innovation.",
    iconName: "Car",
    color: "bg-sprinklr-purple",
    slug: "automotive",
    image: "/sap-industry-automotive.svg",
    features: [
      "Supplier Collaboration",
      "Production Optimization",
      "Inventory Visibility"
    ]
  },
  {
    id: "ind-3",
    title: "Pharmaceutical Solutions",
    description: "Support highly regulated environments with SAP-powered quality and compliance processes. Compliance-driven SAP solutions.",
    iconName: "Heart",
    color: "bg-sprinklr-green",
    slug: "pharma",
    image: "/sap-industry-pharma.svg",
    features: [
      "Batch Traceability",
      "GMP Compliance",
      "Quality Management"
    ]
  }
];

export const initialResources: ResourceItem[] = [
  {
    id: "res-1",
    iconName: "Book",
    title: "Documentation",
    description: "Comprehensive guides and documentation for our services and solutions.",
    link: "/resources/documentation",
    color: "bg-accent",
  },
  {
    id: "res-2",
    iconName: "Video",
    title: "Video Tutorials",
    description: "Step-by-step video tutorials to help you get started with our services.",
    link: "/resources/video-tutorials",
    color: "bg-sprinklr-green",
  },
  {
    id: "res-3",
    iconName: "FileText",
    title: "Whitepapers",
    description: "In-depth whitepapers on IT best practices and SAP implementation strategies.",
    link: "/resources/whitepapers",
    color: "bg-sprinklr-purple",
  },
  {
    id: "res-4",
    iconName: "Download",
    title: "Downloads",
    description: "Download resources, templates, and tools to support your projects.",
    link: "/resources/downloads",
    color: "bg-accent",
  },
  {
    id: "res-5",
    iconName: "HelpCircle",
    title: "FAQ",
    description: "Frequently asked questions about our services and how we can help you.",
    link: "/resources/faq",
    color: "bg-sprinklr-green",
  },
  {
    id: "res-6",
    iconName: "Code",
    title: "Developer Resources",
    description: "Resources for developers including APIs, SDKs, and integration guides.",
    link: "/resources/developer-resources",
    color: "bg-sprinklr-purple",
  },
  {
    id: "res-7",
    iconName: "GraduationCap",
    title: "Workshop Materials",
    description: "Workshop materials and resources for SAP modules and IT services.",
    link: "/resources/training-materials",
    color: "bg-accent",
  },
  {
    id: "res-8",
    iconName: "Users",
    title: "Workshop Classes",
    description: "Join our comprehensive SAP workshop classes led by industry experts.",
    link: "/resources/training-classes",
    color: "bg-sprinklr-green",
  },
];

export const initialBenefits: BenefitItem[] = [
  {
    id: "ben-1",
    iconName: "GraduationCap",
    title: "Learning Culture",
    description: "Continuous skill acquisition and certified training programs across advanced SAP technologies.",
  },
  {
    id: "ben-2",
    iconName: "Globe",
    title: "Global Projects",
    description: "Work on enterprise-level global deployments across multiple industries and regions.",
  },
  {
    id: "ben-3",
    iconName: "TrendingUp",
    title: "Career Growth",
    description: "Structured development tracks to fast-track your path to senior consulting roles.",
  },
];

export const initialPartnerBenefits: PartnerBenefitItem[] = [
  {
    id: "pb-1",
    iconName: "Handshake",
    title: "Co-Marketing Programs",
    description: "Generate demand and expand market reach with joint campaigns, case studies, and corporate events sponsorships.",
    color: "bg-blue-500",
    link: "/contact"
  },
  {
    id: "pb-2",
    iconName: "GraduationCap",
    title: "Technical Training Support",
    description: "Equip team members with direct access to training modules, preview environments, and certified courses.",
    color: "bg-orange-500",
    link: "/services"
  },
  {
    id: "pb-3",
    iconName: "Zap",
    title: "Joint Delivery Models",
    description: "Leverage our pool of certified SAP consultants to co-deliver complex system conversions and migrations.",
    color: "bg-green-500",
    link: "/services"
  }
];

export const initialLeadership: LeadershipItem[] = [
  {
    id: "lead-1",
    name: "Prasad Rao",
    role: "Founder & Managing Director",
    description: "Over 20 years of ERP implementation and advisory experience, guiding global brands through complex digital landscapes."
  },
  {
    id: "lead-2",
    name: "Srinivas Goud",
    role: "Director - SAP Practice",
    description: "Certified S/4HANA architect specializing in enterprise application integration, system migrations, and Basis administration."
  }
];

export const initialPageTexts: {
  services: PageTextConfig;
  industries: PageTextConfig;
  resources: PageTextConfig;
  careers: PageTextConfig;
  partners: PageTextConfig;
  whoWeAre: PageTextConfig;
  home?: {
    heroLabel?: string;
    heroTitle?: string;
    heroDescription?: string;
    sectionTitle?: string;
    whyChooseTitle?: string;
    whyChooseDescription?: string;
    ctaTitle?: string;
    ctaDescription?: string;
    ctaButtonText?: string;
  };
  productsPage?: {
    heroLabel?: string;
    heroTitle?: string;
    heroDescription?: string;
    ctaTitle?: string;
    ctaDescription?: string;
    ctaButtonText?: string;
  };
  contact?: {
    heroLabel?: string;
    heroTitle?: string;
    heroDescription?: string;
    sectionTitle?: string;
    sectionDescription?: string;
    ctaTitle?: string;
    ctaDescription?: string;
  };
} = {
  services: {
    heroTitle: "SAP Solutions Designed for Real Business Outcomes",
    heroDescription: "We deliver industry-aligned and process-driven SAP solutions that help enterprises improve efficiency, visibility, and control.",
    heroLabel: "SAP SERVICES",
    sectionTitle: "Comprehensive SAP Solutions",
    sectionDescription: "From implementation to support, we provide complete SAP services to drive your digital transformation.",
    stats: [
      { value: "45+", label: "SAP Projects" },
      { value: "10+", label: "Years of experience" },
      { value: "30+", label: "SAP Consultants" },
      { value: "98%", label: "Client satisfaction" }
    ]
  },
  industries: {
    heroTitle: "Industry-Focused SAP Solutions That Deliver Business Value",
    heroDescription: "We design and deliver SAP solutions tailored to the unique processes and challenges of different industries.",
    sectionTag: "Industries We Serve",
    sectionTitle: "Three Industry Verticals. One Unified SAP Platform."
  },
  resources: {
    heroTitle: "Resources",
    heroDescription: "Access helpful resources, documentation, and materials to support your business journey.",
    heroLabel: "RESOURCE CENTER",
    ctaButtonText: "Explore Resources",
    sectionTitle: "Everything You Need. One Resource Hub.",
    ctaTitle: "Need More Help?",
    ctaDescription: "Can't find what you're looking for? Contact our team for personalized assistance."
  },
  careers: {
    heroTitle: "Join Sangronyx",
    heroDescription: "Become part of a team shaping the future of enterprise technology.",
    heroLabel: "CAREERS",
    sectionTag: "Why Sangronyx?",
    sectionTitle: "Why Work at Sangronyx?",
    sectionDescription: "Learning Culture | Global Projects | Career Growth",
    cultureTitle: "Open Opportunities",
    cultureDescription: "We are seeking skilled candidates for the following positions: SAP Consultants, BTP Developers, RAP Developers, Fiori Developers, and Project Managers.",
    principlesTitle: "Learning & Culture",
    principlesDescription: "At Sangronyx, we foster a learning-driven culture where you can work on complex international projects, grow your career path organically, and enjoy excellent work-life balance."
  },
  partners: {
    heroTitle: "Partners",
    heroDescription: "Join our partner network and grow your business with Sangronyx.",
    heroLabel: "PARTNER PROGRAM",
    ctaButtonText: "Become a Partner",
    sectionTag: "Partnership Opportunities",
    sectionTitle: "Grow Your Business With Us",
    sectionDescription: "Join our partner network and unlock new opportunities for growth and success."
  },
  whoWeAre: {
    heroTitle: "Who We Are",
    heroDescription: "Sangronyx Technologies is a global SAP consulting and technology partner focused on helping organizations unlock business value through digital transformation.",
    heroLabel: "ABOUT US",
    sectionTag: "About Sangronyx",
    storyTitle: "Our Mission & Vision",
    storyParagraphs: [
      "Sangronyx Technologies is a global SAP consulting and technology partner focused on helping organizations unlock business value through digital transformation. Our consultants combine deep SAP expertise with industry knowledge to deliver measurable business outcomes.",
      "Our Mission: Empower enterprises with innovative SAP solutions.",
      "Our Vision: Become the most trusted SAP transformation partner worldwide."
    ],
    sectionTitle: "Our Values",
    sectionDescription: "The principles that guide everything we do",
    stats: [
      { value: "10+", label: "Years of Excellence" }
    ]
  },
  home: {
    heroLabel: "",
    heroTitle: "Transforming Businesses Through SAP Innovation",
    heroDescription: "Sangronyx Technologies Pvt Ltd helps organizations modernize their enterprise landscape through SAP S/4HANA, SAP BTP, SAP Fiori, SAP RAP, SAP CAP, SAP Joule, Implementation, Migration, Rollout, and Application Support Services.",
    sectionTitle: "We deliver intelligent, scalable, and future-ready SAP solutions that drive operational excellence, innovation, and business growth.",
    whyChooseTitle: "Your Trusted Partner for SAP Excellence",
    whyChooseDescription: "We combine deep SAP expertise, structured delivery, and a business-first mindset to help organizations implement, migrate, and support SAP systems with confidence.",
    ctaTitle: "Ready to transform your business?",
    ctaDescription: "Connect with Sangronyx to discover how our SAP services can help you achieve your business goals and drive digital transformation.",
    ctaButtonText: "Contact Us Now"
  },
  productsPage: {
    heroLabel: "SAP SERVICES",
    heroTitle: "Our SAP Services",
    heroDescription: "Complete SAP solutions for implementation, migration, training, support, and custom development.",
    ctaTitle: "Ready to Get Started?",
    ctaDescription: "Contact our SAP experts to discuss your requirements and get a personalized solution.",
    ctaButtonText: "Contact SAP Experts"
  },
  contact: {
    heroLabel: "GET IN TOUCH",
    heroTitle: "Let's Build the Intelligent Enterprise Together",
    heroDescription: "Whether you're planning an SAP implementation, migration, support engagement, or digital transformation initiative, Sangronyx is ready to help.",
    sectionTitle: "Get Started Today",
    sectionDescription: "Schedule a free consultation with our SAP experts and discover how Sangronyx can accelerate your transformation journey.",
    ctaTitle: "Contact Information",
    ctaDescription: "7-1-619/A/37, 101\nRevathi Apartments, Srinivas nagar\nAmeerpet, Hyderabad, Telangana\n500038"
  }
};

const CONTENT_STORAGE_KEY = "sangronyx_website_content";

export const getWebsiteContent = (): WebsiteContent => {
  try {
    const raw = localStorage.getItem(CONTENT_STORAGE_KEY);
    if (!raw) {
      const defaultContent: WebsiteContent = {
        services: initialServices,
        industries: initialIndustries,
        resources: initialResources,
        benefits: initialBenefits,
        partnerBenefits: initialPartnerBenefits,
        leadership: initialLeadership,
        pageTexts: initialPageTexts
      };
      localStorage.setItem(CONTENT_STORAGE_KEY, JSON.stringify(defaultContent));
      return defaultContent;
    }
    const parsed = JSON.parse(raw);
    // Backward compatibility merge for pageTexts
    if (!parsed.pageTexts) {
      parsed.pageTexts = initialPageTexts;
      localStorage.setItem(CONTENT_STORAGE_KEY, JSON.stringify(parsed));
    }
    return parsed;
  } catch (e) {
    console.error("Failed to parse website content from localStorage", e);
    return {
      services: initialServices,
      industries: initialIndustries,
      resources: initialResources,
      benefits: initialBenefits,
      partnerBenefits: initialPartnerBenefits,
      leadership: initialLeadership,
      pageTexts: initialPageTexts
    };
  }
};

export const saveWebsiteContent = (content: WebsiteContent): void => {
  try {
    localStorage.setItem(CONTENT_STORAGE_KEY, JSON.stringify(content));
  } catch (e) {
    console.error("Failed to save website content to localStorage", e);
  }
};
