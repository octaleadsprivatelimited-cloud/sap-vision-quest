import React, { createContext, useContext, useState, useEffect } from "react";
import { 
  WebsiteContent, 
  getWebsiteContent, 
  saveWebsiteContent,
  initialServices,
  initialIndustries,
  initialResources,
  initialBenefits,
  initialPartnerBenefits,
  initialLeadership,
  initialPageTexts
} from "@/data/pageContentData";
import { seoData as initialSeoData } from "@/data/seoData";
import { db, isFirebaseConfigured } from "@/lib/firebase";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

// Define default initial fallback state
export const defaultFallbackContent: WebsiteContent = {
  services: initialServices,
  industries: initialIndustries,
  resources: initialResources,
  benefits: initialBenefits,
  partnerBenefits: initialPartnerBenefits,
  leadership: initialLeadership,
  products: [
    {
      id: "prod-1",
      iconName: "Cloud",
      title: "SAP S/4HANA Private Cloud",
      subtitle: "NEXT-GEN ERP",
      description: "Scale your business with the ultimate cloud ERP solution, designed to run mission-critical processes in a secure, dedicated environment.",
      features: ["Custom extensions allowed", "Dedicated infrastructure", "Flexible upgrade schedule", "Premium SAP support"],
      color: "bg-accent",
      image: "/sap-s4hana-implementation.webp",
      link: "/products/sap-s4hana"
    },
    {
      id: "prod-2",
      iconName: "Database",
      title: "SAP ECC Business Suite",
      subtitle: "STABLE CORE SYSTEMS",
      description: "Maintain and optimize your existing SAP ECC ERP system with our functional support and development solutions.",
      features: ["Full lifecycle maintenance", "Performance optimization", "Custom enhancements", "Global support desk"],
      color: "bg-sprinklr-purple",
      image: "/SAP ECC TO S4 HANA MIGRANATION.png",
      link: "/products/sap-ecc"
    },
    {
      id: "prod-3",
      iconName: "Settings",
      title: "SAP Business Technology Platform",
      subtitle: "INTEGRATION & EXTENSION",
      description: "Build, integrate, and extend business processes on SAP BTP. Connect your systems seamlessly and develop custom Fiori apps.",
      features: ["Enterprise integrations", "Fiori development environment", "Real-time analytics", "Secure cloud connectivity"],
      color: "bg-sprinklr-green",
      image: "/sap-btp-services.svg",
      link: "/products/sap-btp"
    }
  ],
  homeFeatures: [
    {
      id: "hf-1",
      iconName: "Award",
      title: "SAP S/4HANA Implementation",
      description: "Accelerate Business Transformation. Implement SAP S/4HANA with confidence through our proven methodology. Greenfield, Brownfield, or Hybrid conversion.",
      link: "/services/sap-s4hana-implementation",
      linkText: "Explore S/4HANA",
      underlineColor: "bg-[#0076d6]"
    },
    {
      id: "hf-2",
      iconName: "Database",
      title: "ECC to S/4HANA Migration",
      description: "Future-Proof Your ERP Landscape. Move beyond SAP ECC and unlock next-generation capabilities with SAP S/4HANA. High fidelity conversions.",
      link: "/services/sap-ecc-migration",
      linkText: "Explore Migration",
      underlineColor: "bg-sprinklr-green"
    },
    {
      id: "hf-3",
      iconName: "Settings",
      title: "SAP BTP Services",
      description: "Innovate Faster with SAP Business Technology Platform. Extend, integrate, and build enterprise-grade apps.",
      link: "/services/sap-btp-services",
      linkText: "Explore BTP",
      underlineColor: "bg-sprinklr-purple"
    },
    {
      id: "hf-4",
      iconName: "Shield",
      title: "SAP Application Support",
      description: "Reliable SAP AMS Services. Ensure business continuity with incident management, service request handling, and SLA-based support.",
      link: "/services/sap-support-maintenance",
      linkText: "Explore Support",
      underlineColor: "bg-accent"
    },
    {
      id: "hf-5",
      iconName: "Layout",
      title: "SAP Fiori & UX Development",
      description: "Deliver Intuitive User Experiences. Modernize your SAP UI landscape with custom SAP Fiori and UI5 applications built for all devices.",
      link: "/services/sap-fiori-development",
      linkText: "Explore UX",
      underlineColor: "bg-[#0076d6]"
    }
  ],
  homeReasons: [
    {
      id: "hr-1",
      iconName: "Trophy",
      title: "Certified SAP Experts",
      description: "Our team comprises certified SAP professionals with deep expertise across all SAP modules and technologies."
    },
    {
      id: "hr-2",
      iconName: "Building2",
      title: "Enterprise-Grade Solutions",
      description: "We deliver scalable, enterprise-ready SAP implementations that grow with your business needs."
    },
    {
      id: "hr-3",
      iconName: "Users",
      title: "Client-Centric Approach",
      description: "Every solution is tailored to your unique business requirements with dedicated project teams."
    },
    {
      id: "hr-4",
      iconName: "Zap",
      title: "Rapid Deployment",
      description: "Accelerated implementation methodologies ensure faster time-to-value for your SAP investments."
    }
  ],
  servicesWhyChoose: [
    {
      id: "wc-1",
      iconName: "CheckCircle",
      title: "Proven Track Record",
      description: "We have successfully completed complex SAP implementations and migrations for companies worldwide."
    },
    {
      id: "wc-2",
      iconName: "Clock",
      title: "Rapid Turnaround",
      description: "Our structured project delivery protocols ensure faster system go-lives and immediate productivity returns."
    },
    {
      id: "wc-3",
      iconName: "ShieldCheck",
      title: "Guaranteed Continuity",
      description: "We provide L1-L3 AMS support with aggressive SLAs to protect your system uptime and runtime stability."
    }
  ],
  contactMethods: [
    {
      id: "cm-1",
      iconName: "Phone",
      title: "Call us",
      description: "Speak directly to our SAP consultants.",
      contact: "+91 9177651034",
      action: "Call now",
      link: "tel:+919177651034",
      color: "bg-[#0076d6]/10 text-[#0076d6]"
    },
    {
      id: "cm-2",
      iconName: "Mail",
      title: "Email support",
      description: "Send us your queries any time.",
      contact: "info@sangronyx.com",
      action: "Email us",
      link: "mailto:info@sangronyx.com",
      color: "bg-[#0076d6]/10 text-[#0076d6]"
    },
    {
      id: "cm-3",
      iconName: "MapPin",
      title: "Visit office",
      description: "Our doors are open Monday to Friday.",
      contact: "Ameerpet, Hyderabad",
      action: "Directions",
      link: "https://maps.google.com",
      color: "bg-[#0076d6]/10 text-[#0076d6]"
    }
  ],
  pageTexts: initialPageTexts,
  customPages: [],
  seoData: initialSeoData
};

interface DataContextType {
  content: WebsiteContent;
  loading: boolean;
  error: string | null;
  isFirebase: boolean;
  updateContent: (newContent: WebsiteContent) => Promise<boolean>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<WebsiteContent>(defaultFallbackContent);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Initialize and fetch content
  useEffect(() => {
    const fetchContent = async () => {
      try {
        // Try calling the Express Backend API first
        try {
          const apiRes = await fetch("/api/content");
          if (apiRes.ok) {
            const apiData = await apiRes.json();
            const merged = { ...defaultFallbackContent, ...apiData };
            setContent(merged);
            setLoading(false);
            console.log("Website content loaded successfully from Express Backend API.");
            return;
          }
        } catch (apiErr) {
          console.warn("Express Backend API not available, trying Firebase/LocalStorage fallback...", apiErr);
        }

        if (isFirebaseConfigured) {
          const docRef = doc(db, "content", "website_data");
          const docSnap = await getDoc(docRef);
          
          if (docSnap.exists()) {
            const data = docSnap.data() as WebsiteContent;
            const merged = { ...defaultFallbackContent, ...data };
            setContent(merged);
          } else {
            await setDoc(docRef, defaultFallbackContent);
            setContent(defaultFallbackContent);
          }
        } else {
          // Fall back to LocalStorage
          const localData = getWebsiteContent();
          const merged = { 
            ...defaultFallbackContent, 
            ...localData,
            pageTexts: {
              ...defaultFallbackContent.pageTexts,
              ...(localData?.pageTexts || {})
            }
          };
          setContent(merged);
        }
      } catch (err: any) {
        console.error("Error fetching content:", err);
        setError(err.message || "Failed to fetch website content.");
        setContent(defaultFallbackContent);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  const updateContent = async (newContent: WebsiteContent): Promise<boolean> => {
    try {
      let backendSuccess = false;
      // Try updating via Express Backend API
      try {
        const apiRes = await fetch("/api/content", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newContent),
        });
        if (apiRes.ok) {
          backendSuccess = true;
        }
      } catch (apiErr) {
        console.warn("Failed to update via Express Backend API:", apiErr);
      }

      // Also persist to Firebase/LocalStorage as secondary
      if (isFirebaseConfigured) {
        const docRef = doc(db, "content", "website_data");
        await setDoc(docRef, newContent);
      } else {
        saveWebsiteContent(newContent);
      }

      setContent(newContent);
      return true;
    } catch (err: any) {
      console.error("Error updating content:", err);
      return false;
    }
  };

  return (
    <DataContext.Provider value={{ content, loading, error, isFirebase: isFirebaseConfigured, updateContent }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
