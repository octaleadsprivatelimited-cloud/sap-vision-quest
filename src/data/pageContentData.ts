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
  pageTexts: {
    services: PageTextConfig;
    industries: PageTextConfig;
    resources: PageTextConfig;
    careers: PageTextConfig;
    partners: PageTextConfig;
    whoWeAre: PageTextConfig;
  };
}

export const initialServices: ServiceItem[] = [
  {
    id: "serv-1",
    iconName: "Cloud",
    title: "SAP S/4HANA Implementation",
    description: "Complete implementation services for SAP S/4HANA with cloud, on-premises, or hybrid deployment options.",
    features: ["Cloud / On-prem / Hybrid setup", "Business process mapping", "Module configuration", "UAT & go-live support"],
    image: "/sap-s4hana-implementation.webp",
    href: "/services/sap-s4hana-implementation",
  },
  {
    id: "serv-2",
    iconName: "Database",
    title: "SAP ECC to S/4HANA Migration",
    description: "Seamless migration from ECC to S/4HANA with minimal downtime and comprehensive data integrity.",
    features: ["Readiness check & assessment", "Database migration", "Custom code adaptation", "End-user training"],
    image: "/SAP ECC TO S4 HANA MIGRANATION.png",
    href: "/services/sap-ecc-migration",
  },
  {
    id: "serv-3",
    iconName: "Settings",
    title: "SAP Licensing & Software",
    description: "Comprehensive SAP licensing solutions optimized for your business needs and budget.",
    features: ["SAP S/4HANA subscription", "Module-based licensing", "Cost optimisation guidance"],
    image: "/SAP LISENCING & SOFTWARE.jpg",
    href: "/services/sap-licensing",
  },
  {
    id: "serv-4",
    iconName: "Settings",
    title: "SAP Module Implementations",
    description: "Expert implementation of all major SAP functional and technical modules.",
    features: ["Functional: PP, MM, SD, FI, CO, QM, PM", "Technical: ABAP, BASIS, HANA, Fiori"],
    image: "/SAP MODULE IMPLEMENTATION.png",
    href: "/services/sap-module-implementations",
  },
  {
    id: "serv-5",
    iconName: "Code",
    title: "SAP Custom Development",
    description: "Tailored SAP development and enhancements to meet your unique business requirements.",
    features: ["ABAP reports & enhancements", "SmartForms / Adobe Forms", "Fiori UI apps"],
    image: "/SAP CUSTOM DEVELOPMENT.jpg",
    href: "/services/sap-custom-development",
  },
  {
    id: "serv-6",
    iconName: "Wrench",
    title: "SAP Support & Maintenance",
    description: "24/7 ongoing SAP support and maintenance for uninterrupted business operations.",
    features: ["Functional & technical support", "Performance tuning", "Monthly health checks"],
    image: "/services hero background.jpg",
    href: "/services/sap-support-maintenance",
  },
  {
    id: "serv-7",
    iconName: "Link2",
    title: "SAP Integration Services",
    description: "Seamless SAP integration with your existing enterprise systems and applications.",
    features: ["SAP ↔ ERP integration", "API / Middleware integrations", "Third-party app connections"],
    image: "/SAP INTEGRATION SERVICES.png",
    href: "/services/sap-integration-services",
  },
];

export const initialIndustries: IndustryItem[] = [
  {
    id: "ind-1",
    iconName: "Factory",
    title: "Manufacturing",
    description: "SAP solutions for manufacturing to optimize production, quality, and supply chain operations.",
    color: "bg-accent",
    slug: "manufacturing",
    image: "/manufacturing hero section background.jpg",
  },
  {
    id: "ind-2",
    iconName: "ShoppingCart",
    title: "Retail & FMCG",
    description: "SAP solutions for retail and FMCG to deliver seamless experiences and optimize inventory.",
    color: "bg-sprinklr-green",
    slug: "retail",
    image: "/Retail and FMCG hero section background.jpg",
  },
  {
    id: "ind-3",
    iconName: "Heart",
    title: "Pharma",
    description: "SAP solutions for pharmaceutical companies to ensure compliance and streamline operations.",
    color: "bg-sprinklr-purple",
    slug: "pharma",
    image: "/PHARMA hero section background.jpg",
  },
  {
    id: "ind-4",
    iconName: "Truck",
    title: "Logistics & Supply Chain",
    description: "SAP solutions for logistics to build resilient supply chains with end-to-end visibility.",
    color: "bg-accent",
    slug: "logistics",
    image: "/logistics and supply chain hero section background.jpg",
  },
  {
    id: "ind-5",
    iconName: "GraduationCap",
    title: "Education",
    description: "SAP solutions for educational institutions to transform operations and student experiences.",
    color: "bg-sprinklr-green",
    slug: "education",
    image: "/EDUCATION hero section background.jpg",
  },
  {
    id: "ind-6",
    iconName: "Banknote",
    title: "Finance",
    description: "SAP solutions for finance to modernize operations with real-time insights and compliance.",
    color: "bg-sprinklr-purple",
    slug: "finance",
    image: "/FINANCE hero section background.jpg",
  },
  {
    id: "ind-7",
    iconName: "Building2",
    title: "Small & Mid Businesses",
    description: "Tailored SAP solutions for small and mid-sized businesses to drive growth and efficiency.",
    color: "bg-accent",
    slug: "small-business",
    image: "/SMALL & MID BUSINESS.jpg",
  },
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
    iconName: "Zap",
    title: "Innovation First",
    description: "Work with cutting-edge SAP technologies and shape the future of enterprise solutions.",
  },
  {
    id: "ben-2",
    iconName: "Users",
    title: "Collaborative Culture",
    description: "Join a team of passionate experts who support and learn from each other.",
  },
  {
    id: "ben-3",
    iconName: "GraduationCap",
    title: "Continuous Learning",
    description: "Access to SAP certifications, training programs, and professional development.",
  },
  {
    id: "ben-4",
    iconName: "Heart",
    title: "Work-Life Balance",
    description: "Flexible work arrangements and comprehensive wellness programs.",
  },
];

export const initialPartnerBenefits: PartnerBenefitItem[] = [
  {
    id: "pb-1",
    iconName: "Handshake",
    title: "Partnership Opportunities",
    description: "Join our partner network and grow your business with Sangronyx.",
    color: "bg-blue-500",
    link: "/contact",
  },
  {
    id: "pb-2",
    iconName: "Users",
    title: "Collaborative Approach",
    description: "Work together to deliver exceptional solutions to clients.",
    color: "bg-orange-500",
    link: "/contact",
  },
  {
    id: "pb-3",
    iconName: "Award",
    title: "Certified Partners",
    description: "Become a certified partner and gain access to exclusive resources.",
    color: "bg-green-500",
    link: "/contact",
  },
  {
    id: "pb-4",
    iconName: "TrendingUp",
    title: "Business Growth",
    description: "Expand your business with our comprehensive partner program.",
    color: "bg-purple-500",
    link: "/contact",
  },
  {
    id: "pb-5",
    iconName: "Shield",
    title: "Support & Training",
    description: "Receive ongoing support and training to help you succeed.",
    color: "bg-red-500",
    link: "/contact",
  },
];

export const initialLeadership: LeadershipItem[] = [
  {
    id: "lead-1",
    name: "Leadership Excellence",
    role: "Strategic Vision",
    description: "Our leadership team brings decades of combined experience in enterprise software and SAP implementations.",
  },
  {
    id: "lead-2",
    name: "Technical Expertise",
    role: "Innovation Hub",
    description: "A dedicated team of certified SAP consultants and developers driving technical excellence.",
  },
  {
    id: "lead-3",
    name: "Client Success",
    role: "Partnership Focus",
    description: "Dedicated client success managers ensuring every engagement exceeds expectations.",
  },
];

export const initialPageTexts: {
  services: PageTextConfig;
  industries: PageTextConfig;
  resources: PageTextConfig;
  careers: PageTextConfig;
  partners: PageTextConfig;
  whoWeAre: PageTextConfig;
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
    sectionTitle: "Seven Industry Verticals. One Unified SAP Platform."
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
    heroTitle: "Join Our Team",
    heroDescription: "Build your career with Sangronyx and help transform businesses through innovative SAP solutions. We're looking for talented individuals who share our passion for excellence.",
    heroLabel: "CAREERS",
    sectionTag: "Why Join Us",
    sectionTitle: "Why Work at Sangronyx?",
    sectionDescription: "We offer more than just a job – we offer a career path filled with growth opportunities, meaningful work, and a supportive environment.",
    cultureTitle: "Our Culture",
    cultureDescription: "Step into a workplace defined by warmth, positivity, and collaboration. At Sangronyx, we balance focused work with moments to connect whether it's over a cup of coffee, a team activity, or shared successes. Our open-door and inclusive culture encourages ideas, teamwork, and continuous growth.",
    principlesTitle: "Our Principles",
    principlesDescription: "Sangronyx Technologies is proud to be an equal employment opportunity employer. We provide fair and equal opportunities to all individuals, regardless of race, religion, gender, age, national origin, disability, marital status, or any other characteristic protected by law."
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
    heroDescription: "A team of passionate professionals dedicated to transforming enterprises through innovative SAP solutions and exceptional service.",
    heroLabel: "About Sangronyx",
    sectionTag: "Our Story",
    storyTitle: "Building the Future of Enterprise Solutions",
    storyParagraphs: [
      "Sangronyx Technologies was founded with a clear vision: to help businesses simplify complexity and unlock real value from their SAP investments.",
      "What began as a focused initiative by SAP professionals with hands-on enterprise experience has grown into a trusted SAP services partner for organizations seeking reliable implementation, migration, and support services. We identified a common challenge across businesses: powerful SAP systems were often underutilized due to lack of clarity, alignment, and ongoing support. Sangronyx was created to change that.",
      "From SAP S/4HANA implementations and migrations to AMS and Hypercare support, we deliver solutions that are practical, scalable, and aligned with real business needs. Our approach combines deep SAP expertise, structured delivery, and an unwavering commitment to client success."
    ],
    sectionTitle: "Powered by Expertise",
    sectionDescription: "Our diverse team of experts brings together deep industry knowledge and technical excellence.",
    stats: [
      { value: "10+", label: "Years of Excellence" }
    ]
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
