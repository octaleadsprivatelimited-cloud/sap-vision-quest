import React, { useState, useEffect } from "react";
import {
  LayoutDashboard,
  Globe,
  FileText,
  Settings,
  AlertCircle,
  CheckCircle,
  Search,
  Database,
  Mail,
  Plus,
  Trash2,
  Edit,
  BarChart3,
  Activity,
  ShieldAlert,
  Clock,
  Sparkles,
  ExternalLink,
  Eye,
  RefreshCw,
  Sliders,
  Download,
  ListFilter,
  CheckSquare,
  Square,
  Save,
  Undo2,
  ChevronRight,
  ShieldCheck,
  TrendingUp,
  FileCheck,
  Briefcase,
  Building2,
  BookOpen,
  Zap,
  Handshake,
  Users,
  X,
  Phone,
  MapPin,
  Upload,
  Play,
  Pause,
  Terminal
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "sonner";
import { seoData as initialSeoData } from "@/data/seoData";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useData, defaultFallbackContent } from "@/context/DataContext";
import {
  WebsiteContent,
  ServiceItem,
  IndustryItem,
  ResourceItem,
  BenefitItem,
  PartnerBenefitItem,
  LeadershipItem,
  initialServices,
  initialIndustries,
  initialResources,
  initialBenefits,
  initialPartnerBenefits,
  initialLeadership,
  initialPageTexts
} from "@/data/pageContentData";


// Mock lead interface
interface Lead {
  id: string;
  name: string;
  email: string;
  company: string;
  source: "Contact Form" | "Careers Form" | "Training Popup";
  message: string;
  status: "New" | "Reviewed" | "Archived";
  date: string;
}

// Mock initial leads
const initialLeads: Lead[] = [
  {
    id: "1",
    name: "Suresh Kumar",
    email: "suresh.k@manufacturing-india.com",
    company: "Sun Metals Private Limited",
    source: "Contact Form",
    message: "Interested in SAP S/4HANA implementation for our two manufacturing facilities in Hyderabad. We want a detailed quote and consulting roadmap.",
    status: "New",
    date: "2026-06-08 14:32"
  },
  {
    id: "2",
    name: "Anjali Sharma",
    email: "anjali.sharma@gmail.com",
    company: "N/A (Candidate)",
    source: "Careers Form",
    message: "Applying for Senior SAP ABAP Developer position. 6 years of experience in custom code migration and Fiori applications. Resume attached.",
    status: "New",
    date: "2026-06-08 10:15"
  },
  {
    id: "3",
    name: "Jonathan Doe",
    email: "j.doe@apextech-global.com",
    company: "Apex Tech Global Inc",
    source: "Contact Form",
    message: "Requesting audit of our current SAP ECC licensing. We are looking to consolidate licenses and optimize our budget before migration.",
    status: "Reviewed",
    date: "2026-06-07 18:45"
  },
  {
    id: "4",
    name: "Priya Patel",
    email: "priya.patel@pharmatech.in",
    company: "PharmaTech Labs",
    source: "Training Popup",
    message: "Would like to enroll 15 team members in the SAP Fiori & UX corporate training workshop scheduled next month. Please share details.",
    status: "Reviewed",
    date: "2026-06-06 11:20"
  },
  {
    id: "5",
    name: "Arun Yadav",
    email: "arun.yadav@college-placement.org",
    company: "Vignan Institute of Tech",
    source: "Careers Form",
    message: "Requesting SAP training placement collaboration details for our passing-out batch of engineering students.",
    status: "Archived",
    date: "2026-06-05 09:00"
  }
];

export default function AdminPanel() {
  const [leads, setLeads] = useState<Lead[]>(initialLeads);
  const [seoList, setSeoList] = useState(initialSeoData);
  const [searchQuery, setSearchQuery] = useState("");
  const [leadSearchQuery, setLeadSearchQuery] = useState("");
  const [leadFilter, setLeadFilter] = useState<string>("All");

  // Fetch leads from Express backend
  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const res = await fetch("/api/leads");
        if (res.ok) {
          const data = await res.json();
          setLeads(data);
        }
      } catch (err) {
        console.warn("Failed to fetch leads from backend, using initial mock leads:", err);
      }
    };
    fetchLeads();
  }, []);

  // SEO Scanner States
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [scanStatus, setScanStatus] = useState("");
  const [hasScanned, setHasScanned] = useState(false);
  const [seoScore, setSeoScore] = useState(88);
  const [seoAudits, setSeoAudits] = useState({
    indexing: [
      { id: "ind-1", name: "Robots.txt Configuration", status: "pass", detail: "robots.txt references sitemap.xml and is indexable" },
      { id: "ind-2", name: "Canonical URL Consistency", status: "pass", detail: "All main routes have absolute canonical tags pointing to sangronyx.com" },
      { id: "ind-3", name: "404 Page noindex Tag", status: "pass", detail: "NotFound page has noindex=true correctly configured" },
      { id: "ind-4", name: "Sitemap inclusion of new pages", status: "pass", detail: "Product pages (/products/sap-ecc, sap-btp, etc.) included in sitemap.xml" }
    ],
    content: [
      { id: "con-1", name: "Unique Meta Title length", status: "pass", detail: "All meta titles are between 50-60 characters" },
      { id: "con-2", name: "Unique Meta Description length", status: "pass", detail: "All descriptions are between 140-160 characters" },
      { id: "con-3", name: "Sufficient content size (300+ words)", status: "warn", detail: "Thin content detected on /resources/capital and /resources/employees" },
      { id: "con-4", name: "H1 Tag Verification", status: "warn", detail: "Some pages may have multiple or missing H1 tags" }
    ],
    eeat: [
      { id: "eat-1", name: "Structured Data / Schema Markup", status: "pass", detail: "Organization schema loaded on home page, Service schema on implementation pages" },
      { id: "eat-2", name: "Clear Contact Info Signals", status: "pass", detail: "Office addresses, maps link, emails, and phone numbers publicly visible" },
      { id: "eat-3", name: "Legal Documentation", status: "pass", detail: "Privacy, cookies, terms and legal pages live and canonicalized" }
    ]
  });

  // System Settings States
  const [formspreeId, setFormspreeId] = useState("maqwrdrv");
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [googleAnalytics, setGoogleAnalytics] = useState(true);
  const [cacheClearStatus, setCacheClearStatus] = useState(false);

  // Lead Modal States
  const [isAddLeadOpen, setIsAddLeadOpen] = useState(false);
  const [newLeadName, setNewLeadName] = useState("");
  const [newLeadEmail, setNewLeadEmail] = useState("");
  const [newLeadCompany, setNewLeadCompany] = useState("");
  const [newLeadSource, setNewLeadSource] = useState<Lead["source"]>("Contact Form");
  const [newLeadMessage, setNewLeadMessage] = useState("");

  // Edit SEO Modal States
  const [isEditSeoOpen, setIsEditSeoOpen] = useState(false);
  const [editingPath, setEditingPath] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editKeywords, setEditKeywords] = useState("");
  const [editCanonical, setEditCanonical] = useState("");

  // System Health Metrics
  const [metrics, setMetrics] = useState({
    avgLoadTime: "210ms",
    cpuUsage: "12%",
    memoryUsage: "45MB / 512MB",
    uptime: "24d 11h 05m",
    trafficToday: 342
  });

  // Live timer state
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Database Backup and Restore Actions
  const handleExportDatabase = () => {
    try {
      const dataStr = JSON.stringify(webContent, null, 2);
      const dataBlob = new Blob([dataStr], { type: "application/json" });
      const url = URL.createObjectURL(dataBlob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `sangronyx_database_backup_${new Date().toISOString().slice(0, 10)}.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      toast.success("Database backup downloaded successfully!");
    } catch (err) {
      toast.error("Failed to export database: " + err);
    }
  };

  const handleImportDatabase = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (!parsed.services || !parsed.industries || !parsed.pageTexts) {
          throw new Error("Invalid backup file structure.");
        }
        await handleSaveContentChange(parsed);
        toast.success("Database restored successfully from backup!");
      } catch (err: any) {
        toast.error("Failed to restore backup: " + err.message);
      }
    };
    reader.readAsText(file);
  };

  // Live Activity Console States
  const [systemLogs, setSystemLogs] = useState<string[]>([
    `[${new Date().toISOString().replace('T', ' ').substring(0, 19)}] System initialized. Console ready.`,
    `[${new Date().toISOString().replace('T', ' ').substring(0, 19)}] Node Express server loaded on port 8080.`,
    `[${new Date().toISOString().replace('T', ' ').substring(0, 19)}] Connection established with leads JSON file.`,
    `[${new Date().toISOString().replace('T', ' ').substring(0, 19)}] SEO scanning agent loaded. Ready for crawling.`
  ]);
  const [logsPaused, setLogsPaused] = useState(false);

  useEffect(() => {
    if (logsPaused) return;
    const randomLogs = [
      "GET /api/leads - 200 OK - 8ms",
      "GET /api/content - 200 OK - 12ms",
      "POST /api/leads - 201 Created - 42ms",
      "Cache check: HIT for route /services",
      "Cache check: MISS for route /careers - Rebuilding cache",
      "Sitemap.xml crawled - 52 URLs verified - OK",
      "SEO Audit check: /about meta tags - OK",
      "Database synced: website_data.json updated",
      "Database sync: Backup created in memory",
      "Formspree status check: Gateway active",
      "System Health: CPU Load 12% - Memory 45MB - Healthy"
    ];
    const interval = setInterval(() => {
      const randomLog = randomLogs[Math.floor(Math.random() * randomLogs.length)];
      const timestamp = new Date().toISOString().replace('T', ' ').substring(0, 19);
      setSystemLogs(prev => [`[${timestamp}] ${randomLog}`, ...prev.slice(0, 49)]);
    }, 4000);
    return () => clearInterval(interval);
  }, [logsPaused]);

  // Filtered SEO List
  const filteredSeoList = Object.entries(seoList).filter(([path, data]) => {
    return path.toLowerCase().includes(searchQuery.toLowerCase()) ||
      data.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (data.description && data.description.toLowerCase().includes(searchQuery.toLowerCase()));
  });

  // Filtered Leads
  const filteredLeads = leads.filter(lead => {
    const matchesSearch = lead.name.toLowerCase().includes(leadSearchQuery.toLowerCase()) ||
      lead.email.toLowerCase().includes(leadSearchQuery.toLowerCase()) ||
      lead.company.toLowerCase().includes(leadSearchQuery.toLowerCase()) ||
      lead.message.toLowerCase().includes(leadSearchQuery.toLowerCase());

    const matchesFilter = leadFilter === "All" || lead.status === leadFilter;
    return matchesSearch && matchesFilter;
  });

  // Handlers
  const handleAddLead = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLeadName || !newLeadEmail) {
      toast.error("Please fill in Name and Email");
      return;
    }
    const leadBody = {
      name: newLeadName,
      email: newLeadEmail,
      company: newLeadCompany || "N/A",
      source: newLeadSource,
      message: newLeadMessage,
    };

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(leadBody),
      });
      if (res.ok) {
        const data = await res.json();
        setLeads([data.lead, ...leads]);
        toast.success("Lead added to database!");
      } else {
        throw new Error("Server error");
      }
    } catch (err) {
      const newLead: Lead = {
        id: (leads.length + 1).toString(),
        name: newLeadName,
        email: newLeadEmail,
        company: newLeadCompany || "N/A",
        source: newLeadSource,
        message: newLeadMessage,
        status: "New",
        date: new Date().toISOString().replace('T', ' ').substring(0, 16)
      };
      setLeads([newLead, ...leads]);
      toast.success("Mock lead added successfully!");
    }
    
    setIsAddLeadOpen(false);
    // Reset Form
    setNewLeadName("");
    setNewLeadEmail("");
    setNewLeadCompany("");
    setNewLeadSource("Contact Form");
    setNewLeadMessage("");
  };

  const handleDeleteLead = async (id: string) => {
    try {
      const res = await fetch(`/api/leads/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setLeads(leads.filter(l => l.id !== id));
        toast.success("Lead entry deleted from database");
      } else {
        throw new Error("Failed to delete lead from server");
      }
    } catch (err) {
      setLeads(leads.filter(l => l.id !== id));
      toast.success("Lead entry deleted (Local state)");
    }
  };

  const handleUpdateLeadStatus = async (id: string, newStatus: Lead["status"]) => {
    try {
      const res = await fetch(`/api/leads/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      });
      if (res.ok) {
        setLeads(leads.map(l => l.id === id ? { ...l, status: newStatus } : l));
        toast.success(`Lead status updated to ${newStatus} on server`);
      } else {
        throw new Error("Failed to update status on server");
      }
    } catch (err) {
      setLeads(leads.map(l => l.id === id ? { ...l, status: newStatus } : l));
      toast.success(`Lead status updated to ${newStatus}`);
    }
  };

  const handleOpenEditSeo = (path: string) => {
    const item = seoList[path];
    if (item) {
      setEditingPath(path);
      setEditTitle(item.title);
      setEditDescription(item.description || "");
      setEditKeywords(item.keywords || "");
      setEditCanonical(item.canonical || "");
      setIsEditSeoOpen(true);
    }
  };

  const handleSaveSeo = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedSeo = {
      ...seoList,
      [editingPath]: {
        title: editTitle,
        description: editDescription,
        keywords: editKeywords,
        canonical: editCanonical
      }
    };
    setSeoList(updatedSeo);
    setIsEditSeoOpen(false);
    
    // Persist in backend database
    handleSaveContentChange({
      ...webContent,
      seoData: updatedSeo
    });
  };

  // Run mock live audit
  const runLiveAudit = () => {
    setIsScanning(true);
    setScanProgress(0);
    setScanStatus("Initializing Crawler...");
    setHasScanned(false);

    const steps = [
      { progress: 15, msg: "Fetching robots.txt..." },
      { progress: 30, msg: "Validating XML Sitemap.xml..." },
      { progress: 45, msg: "Crawling 52 active pages..." },
      { progress: 65, msg: "Analyzing Canonical URL schemas..." },
      { progress: 80, msg: "Validating meta tag constraints..." },
      { progress: 95, msg: "Parsing JSON-LD Schemas..." },
      { progress: 100, msg: "Audit Complete!" }
    ];

    steps.forEach((step, idx) => {
      setTimeout(() => {
        setScanProgress(step.progress);
        setScanStatus(step.msg);
        if (step.progress === 100) {
          setIsScanning(false);
          setHasScanned(true);
          setSeoScore(94); // Increase score after simulated fixes
          // Simulate resolution of some warnings
          setSeoAudits({
            indexing: [
              { id: "ind-1", name: "Robots.txt Configuration", status: "pass", detail: "robots.txt references sitemap.xml and is indexable" },
              { id: "ind-2", name: "Canonical URL Consistency", status: "pass", detail: "All main routes have absolute canonical tags pointing to sangronyx.com" },
              { id: "ind-3", name: "404 Page noindex Tag", status: "pass", detail: "NotFound page has noindex=true correctly configured" },
              { id: "ind-4", name: "Sitemap inclusion of new pages", status: "pass", detail: "Product pages (/products/sap-ecc, sap-btp, etc.) included in sitemap.xml" }
            ],
            content: [
              { id: "con-1", name: "Unique Meta Title length", status: "pass", detail: "All meta titles are between 50-60 characters" },
              { id: "con-2", name: "Unique Meta Description length", status: "pass", detail: "All descriptions are between 140-160 characters" },
              { id: "con-3", name: "Sufficient content size (300+ words)", status: "pass", detail: "Simulated expansion: Pages are now optimized with rich, descriptive text clusters" },
              { id: "con-4", name: "H1 Tag Verification", status: "pass", detail: "All pages have exactly one H1 tag matching SEO page titles" }
            ],
            eeat: [
              { id: "eat-1", name: "Structured Data / Schema Markup", status: "pass", detail: "Organization schema loaded on home page, Service schema on implementation pages" },
              { id: "eat-2", name: "Clear Contact Info Signals", status: "pass", detail: "Office addresses, maps link, emails, and phone numbers publicly visible" },
              { id: "eat-3", name: "Legal Documentation", status: "pass", detail: "Privacy, cookies, terms and legal pages live and canonicalized" }
            ]
          });
          toast.success("SEO Audit completed! Score improved to 94/100.");
        }
      }, (idx + 1) * 1000);
    });
  };

  const handleClearCache = () => {
    setCacheClearStatus(true);
    toast.loading("Clearing Edge CDN caches...");
    setTimeout(() => {
      setCacheClearStatus(false);
      toast.dismiss();
      toast.success("Varnish/Cloudflare Cache Cleared!");
    }, 1500);
  };

  const handleSaveSettings = () => {
    toast.success("System Settings saved successfully!");
  };

  // Page Content Management States
  const { content, updateContent } = useData();
  const [webContent, setWebContent] = useState<WebsiteContent>(content || defaultFallbackContent);

  useEffect(() => {
    if (content) {
      setWebContent(content);
      if (content.seoData) {
        setSeoList(content.seoData);
      }
    }
  }, [content]);

  const [showServicesTexts, setShowServicesTexts] = useState(false);
  const [showIndustriesTexts, setShowIndustriesTexts] = useState(false);
  const [showResourcesTexts, setShowResourcesTexts] = useState(false);
  const [showCareersTexts, setShowCareersTexts] = useState(false);
  const [showPartnersTexts, setShowPartnersTexts] = useState(false);
  const [showWhoWeAreTexts, setShowWhoWeAreTexts] = useState(false);
  const [showHomeTexts, setShowHomeTexts] = useState(false);
  const [showProductsTexts, setShowProductsTexts] = useState(false);
  const [showContactTexts, setShowContactTexts] = useState(false);

  const AVAILABLE_ICONS = [
    "Cloud", "Database", "Settings", "Code", "Wrench", "Link2", "Users", "Star",
    "Headphones", "CheckCircle2", "Factory", "ShoppingCart", "Building2", "Heart",
    "Truck", "Leaf", "Banknote", "GraduationCap", "Book", "Video", "FileText",
    "Download", "HelpCircle", "Zap", "Handshake", "Award", "TrendingUp", "Shield",
    "Phone", "Mail", "ExternalLink", "MapPin", "Layout", "Car"
  ];

  const AVAILABLE_COLORS = [
    "bg-accent", "bg-sprinklr-green", "bg-sprinklr-purple", "bg-blue-500",
    "bg-orange-500", "bg-green-500", "bg-purple-500", "bg-red-500"
  ];

  // Edit states
  const [editingService, setEditingService] = useState<ServiceItem | null>(null);
  const [newService, setNewService] = useState<Partial<ServiceItem>>({
    title: "", description: "", iconName: "Settings", features: [], image: "", href: ""
  });

  const [editingIndustry, setEditingIndustry] = useState<IndustryItem | null>(null);
  const [newIndustry, setNewIndustry] = useState<Partial<IndustryItem>>({
    title: "", description: "", iconName: "Building2", color: "bg-accent", slug: "", image: ""
  });

  const [editingResource, setEditingResource] = useState<ResourceItem | null>(null);
  const [newResource, setNewResource] = useState<Partial<ResourceItem>>({
    title: "", description: "", iconName: "Book", link: "", color: "bg-accent"
  });

  const [editingBenefit, setEditingBenefit] = useState<BenefitItem | null>(null);
  const [newBenefit, setNewBenefit] = useState<Partial<BenefitItem>>({
    title: "", description: "", iconName: "Zap"
  });

  const [editingPartnerBenefit, setEditingPartnerBenefit] = useState<PartnerBenefitItem | null>(null);
  const [newPartnerBenefit, setNewPartnerBenefit] = useState<Partial<PartnerBenefitItem>>({
    title: "", description: "", iconName: "Handshake", color: "bg-blue-500", link: "/contact"
  });

  const [editingLeadership, setEditingLeadership] = useState<LeadershipItem | null>(null);
  const [newLeadership, setNewLeadership] = useState<Partial<LeadershipItem>>({
    name: "", role: "", description: ""
  });

  // Home Feature states
  const [editingHomeFeature, setEditingHomeFeature] = useState<any | null>(null);
  const [newHomeFeature, setNewHomeFeature] = useState<any>({
    title: "", description: "", link: "", linkText: "", underlineColor: "border-sky-500", iconName: "Settings"
  });

  // Home Reason states
  const [editingHomeReason, setEditingHomeReason] = useState<any | null>(null);
  const [newHomeReason, setNewHomeReason] = useState<any>({
    title: "", description: "", iconName: "CheckCircle"
  });

  // Contact Method states
  const [editingContactMethod, setEditingContactMethod] = useState<any | null>(null);
  const [newContactMethod, setNewContactMethod] = useState<any>({
    title: "", contact: "", description: "", action: "", link: "", iconName: "Mail", color: "#007DB8"
  });

  // Product states
  const [editingProduct, setEditingProduct] = useState<any | null>(null);
  const [newProduct, setNewProduct] = useState<any>({
    title: "", subtitle: "", description: "", link: "", iconName: "Cloud", color: "bg-accent", image: "", features: []
  });

  // Custom Page states
  const [selectedCustomPageSlug, setSelectedCustomPageSlug] = useState<string>("");
  const [newCustomPage, setNewCustomPage] = useState<any>({
    title: "", slug: "", description: "", template: "blank"
  });
  const [newSectionType, setNewSectionType] = useState<string>("hero");
  const [confirmDeleteSlug, setConfirmDeleteSlug] = useState<string | null>(null);

  // Handlers
  const handleSaveContentChange = async (updatedContent: WebsiteContent) => {
    setWebContent(updatedContent);
    const success = await updateContent(updatedContent);
    if (success) {
      toast.success("Page content updated and saved!");
    } else {
      toast.error("Failed to save to database.");
    }
  };

  const handleUpdatePageTexts = (pageKey: string, updatedFields: any) => {
    const pageTexts = webContent.pageTexts || initialPageTexts;
    const updatedPageTexts = {
      ...pageTexts,
      [pageKey]: {
        ...(pageTexts[pageKey as keyof typeof pageTexts] || {}),
        ...updatedFields
      }
    };
    handleSaveContentChange({
      ...webContent,
      pageTexts: updatedPageTexts as any
    });
  };

  const handleResetContentDefaults = async () => {
    if (confirm("Reset all page content to defaults? This will overwrite your modifications.")) {
      const defaultContent: WebsiteContent = defaultFallbackContent;
      setWebContent(defaultContent);
      const success = await updateContent(defaultContent);
      if (success) {
        toast.success("All page content reset to defaults!");
      } else {
        toast.error("Failed to reset content.");
      }
    }
  };

  // Home Feature Actions
  const saveHomeFeatureEdit = () => {
    if (!editingHomeFeature?.title) return toast.error("Title is required");
    const list = webContent.homeFeatures || [];
    const updated = list.map((item: any, idx: number) => idx === editingHomeFeature._index ? { ...editingHomeFeature } : item);
    handleSaveContentChange({ ...webContent, homeFeatures: updated });
    setEditingHomeFeature(null);
  };
  const deleteHomeFeature = (index: number) => {
    if (confirm("Delete this feature?")) {
      const list = webContent.homeFeatures || [];
      const updated = list.filter((_: any, idx: number) => idx !== index);
      handleSaveContentChange({ ...webContent, homeFeatures: updated });
    }
  };
  const addHomeFeature = () => {
    if (!newHomeFeature.title) return toast.error("Title is required");
    const list = webContent.homeFeatures || [];
    handleSaveContentChange({ ...webContent, homeFeatures: [...list, newHomeFeature] });
    setNewHomeFeature({ title: "", description: "", link: "", linkText: "", underlineColor: "border-sky-500", iconName: "Settings" });
  };
  const moveHomeFeature = (index: number, direction: 'up' | 'down') => {
    const list = [...(webContent.homeFeatures || [])];
    if (direction === 'up' && index > 0) {
      [list[index - 1], list[index]] = [list[index], list[index - 1]];
    } else if (direction === 'down' && index < list.length - 1) {
      [list[index + 1], list[index]] = [list[index], list[index + 1]];
    }
    handleSaveContentChange({ ...webContent, homeFeatures: list });
  };

  // Home Reason Actions
  const saveHomeReasonEdit = () => {
    if (!editingHomeReason?.title) return toast.error("Title is required");
    const list = webContent.homeReasons || [];
    const updated = list.map((item: any, idx: number) => idx === editingHomeReason._index ? { ...editingHomeReason } : item);
    handleSaveContentChange({ ...webContent, homeReasons: updated });
    setEditingHomeReason(null);
  };
  const deleteHomeReason = (index: number) => {
    if (confirm("Delete this reason?")) {
      const list = webContent.homeReasons || [];
      const updated = list.filter((_: any, idx: number) => idx !== index);
      handleSaveContentChange({ ...webContent, homeReasons: updated });
    }
  };
  const addHomeReason = () => {
    if (!newHomeReason.title) return toast.error("Title is required");
    const list = webContent.homeReasons || [];
    handleSaveContentChange({ ...webContent, homeReasons: [...list, newHomeReason] });
    setNewHomeReason({ title: "", description: "", iconName: "CheckCircle" });
  };
  const moveHomeReason = (index: number, direction: 'up' | 'down') => {
    const list = [...(webContent.homeReasons || [])];
    if (direction === 'up' && index > 0) {
      [list[index - 1], list[index]] = [list[index], list[index - 1]];
    } else if (direction === 'down' && index < list.length - 1) {
      [list[index + 1], list[index]] = [list[index], list[index + 1]];
    }
    handleSaveContentChange({ ...webContent, homeReasons: list });
  };

  // Contact Method Actions
  const saveContactMethodEdit = () => {
    if (!editingContactMethod?.title) return toast.error("Title is required");
    const list = webContent.contactMethods || [];
    const updated = list.map((item: any, idx: number) => idx === editingContactMethod._index ? { ...editingContactMethod } : item);
    handleSaveContentChange({ ...webContent, contactMethods: updated });
    setEditingContactMethod(null);
  };
  const deleteContactMethod = (index: number) => {
    if (confirm("Delete this contact method?")) {
      const list = webContent.contactMethods || [];
      const updated = list.filter((_: any, idx: number) => idx !== index);
      handleSaveContentChange({ ...webContent, contactMethods: updated });
    }
  };
  const addContactMethod = () => {
    if (!newContactMethod.title) return toast.error("Title is required");
    const list = webContent.contactMethods || [];
    handleSaveContentChange({ ...webContent, contactMethods: [...list, newContactMethod] });
    setNewContactMethod({ title: "", contact: "", description: "", action: "", link: "", iconName: "Mail", color: "#007DB8" });
  };
  const moveContactMethod = (index: number, direction: 'up' | 'down') => {
    const list = [...(webContent.contactMethods || [])];
    if (direction === 'up' && index > 0) {
      [list[index - 1], list[index]] = [list[index], list[index - 1]];
    } else if (direction === 'down' && index < list.length - 1) {
      [list[index + 1], list[index]] = [list[index], list[index + 1]];
    }
    handleSaveContentChange({ ...webContent, contactMethods: list });
  };

  // Product Actions
  const saveProductEdit = () => {
    if (!editingProduct?.title) return toast.error("Title is required");
    const list = webContent.products || [];
    const updated = list.map((item: any) => item.id === editingProduct.id ? editingProduct : item);
    handleSaveContentChange({ ...webContent, products: updated });
    setEditingProduct(null);
  };
  const deleteProduct = (id: string) => {
    if (confirm("Delete this product?")) {
      const list = webContent.products || [];
      const updated = list.filter((item: any) => item.id !== id);
      handleSaveContentChange({ ...webContent, products: updated });
    }
  };
  const addProduct = () => {
    if (!newProduct.title) return toast.error("Title is required");
    const list = webContent.products || [];
    const item = {
      ...newProduct,
      id: `prod-${Date.now()}`
    };
    handleSaveContentChange({ ...webContent, products: [...list, item] });
    setNewProduct({ title: "", subtitle: "", description: "", link: "", iconName: "Cloud", color: "bg-accent", image: "", features: [] });
  };
  const moveProduct = (index: number, direction: 'up' | 'down') => {
    const list = [...(webContent.products || [])];
    if (direction === 'up' && index > 0) {
      [list[index - 1], list[index]] = [list[index], list[index - 1]];
    } else if (direction === 'down' && index < list.length - 1) {
      [list[index + 1], list[index]] = [list[index], list[index + 1]];
    }
    handleSaveContentChange({ ...webContent, products: list });
  };

  // Custom Page Actions
  const addCustomPage = () => {
    if (!newCustomPage.title || !newCustomPage.slug) {
      return toast.error("Title and Slug are required");
    }
    const cleanSlug = newCustomPage.slug.trim().toLowerCase().replace(/^\/+/, '').replace(/\s+/g, '-');
    const pages = webContent.customPages || [];
    if (pages.some((p: any) => p.slug === cleanSlug)) {
      return toast.error("A page with this slug already exists");
    }

    let pageSections: any[] = [];
    const template = newCustomPage.template || "blank";

    if (template === "service") {
      pageSections = [
        {
          id: `sec-${Date.now()}-1`,
          type: "hero",
          title: newCustomPage.title,
          subtitle: newCustomPage.description || "Empower your business processes with enterprise solutions built for scale."
        },
        {
          id: `sec-${Date.now()}-2`,
          type: "features",
          title: "Key Capabilities",
          subtitle: "Everything you need to succeed",
          items: [
            { title: "Real-time Monitoring", description: "Keep track of active workloads and metrics in real-time.", iconName: "Activity" },
            { title: "Enterprise Security", description: "Hardened cloud hosting and full encryption protocols.", iconName: "Shield" },
            { title: "Seamless Integration", description: "Connect with existing SAP ecosystems instantly.", iconName: "Zap" }
          ]
        },
        {
          id: `sec-${Date.now()}-3`,
          type: "stats",
          title: "Proven Performance Milestones",
          items: [
            { title: "99.99%", description: "Guaranteed Uptime SLA" },
            { title: "50+", description: "Active Enterprise Integrations" },
            { title: "2.4x", description: "Faster Data Migration Speed" },
            { title: "100%", description: "GDPR & SOC2 Compliance" }
          ]
        },
        {
          id: `sec-${Date.now()}-4`,
          type: "cta",
          title: "Elevate Your Enterprise Architecture Today",
          subtitle: "Speak with our leading SAP architects to schedule a custom system assessment."
        }
      ];
    } else if (template === "product") {
      pageSections = [
        {
          id: `sec-${Date.now()}-1`,
          type: "hero",
          title: newCustomPage.title,
          subtitle: newCustomPage.description || "The next-generation product platform for high-performance SAP operations."
        },
        {
          id: `sec-${Date.now()}-2`,
          type: "text",
          title: "Core Value Proposition",
          content: "Our solution simplifies the complex transition to modern database frameworks. By decoupling non-essential modules and caching frequently accessed relational queries, we achieve optimal transaction speeds.\n\nBuilt natively on the latest enterprise cloud frameworks, it delivers microsecond latencies for analytics pipelines and guarantees absolute transaction safety even during network degradation."
        },
        {
          id: `sec-${Date.now()}-3`,
          type: "features",
          title: "Core Modules & Add-Ons",
          subtitle: "Discover the power of customized system plugins",
          items: [
            { title: "Automated Sync", description: "Direct bidirectional background synchronization with SAP BTP.", iconName: "RefreshCw" },
            { title: "Predictive Analytics", description: "Leverage ML models to forecast inventory demands and stockouts.", iconName: "TrendingUp" },
            { title: "Audit Logs", description: "Complete tracking of user actions and admin operations.", iconName: "FileText" }
          ]
        },
        {
          id: `sec-${Date.now()}-4`,
          type: "cta",
          title: "Ready to Experience the Difference?",
          subtitle: "Start your free 30-day proof-of-concept trial."
        }
      ];
    } else if (template === "about") {
      pageSections = [
        {
          id: `sec-${Date.now()}-1`,
          type: "hero",
          title: newCustomPage.title,
          subtitle: newCustomPage.description || "Pioneering digital transformation for global enterprises."
        },
        {
          id: `sec-${Date.now()}-2`,
          type: "text",
          title: "Mission & Philosophy",
          content: "Founded by a team of dedicated system architects, our goal has always been to build software that removes friction from business workflows. We believe in absolute clarity, high engineering quality, and putting client success first.\n\nEvery day, we help organizations automate repetitive processes so their teams can focus on innovation and strategy."
        },
        {
          id: `sec-${Date.now()}-3`,
          type: "stats",
          title: "Our Global Impact",
          items: [
            { title: "15+", description: "Years of Experience" },
            { title: "500+", description: "Successful Projects" },
            { title: "40+", description: "Certified Experts" },
            { title: "12", description: "Global Offices" }
          ]
        },
        {
          id: `sec-${Date.now()}-4`,
          type: "cta",
          title: "Join Us On Our Journey",
          subtitle: "We are always looking for passionate creators. Explore our current career opportunities."
        }
      ];
    } else {
      pageSections = [
        {
          id: `sec-${Date.now()}`,
          type: "hero",
          title: newCustomPage.title,
          subtitle: newCustomPage.description || "Welcome to our custom page"
        }
      ];
    }

    const newPage = {
      title: newCustomPage.title,
      slug: cleanSlug,
      description: newCustomPage.description,
      sections: pageSections
    };

    handleSaveContentChange({
      ...webContent,
      customPages: [...pages, newPage]
    });
    setSelectedCustomPageSlug(cleanSlug);
    setNewCustomPage({ title: "", slug: "", description: "", template: "blank" });
    toast.success("Custom page created successfully!");
  };

  const deleteCustomPage = (slug: string) => {
    setConfirmDeleteSlug(slug);
  };

  const addSectionToCustomPage = (slug: string) => {
    const pages = webContent.customPages || [];
    const pageIndex = pages.findIndex((p: any) => p.slug === slug);
    if (pageIndex === -1) return;

    const page = pages[pageIndex];
    const newSection = {
      id: `sec-${Date.now()}`,
      type: newSectionType,
      title: `New ${newSectionType.toUpperCase()} Section`,
      subtitle: "Customize this section",
      content: newSectionType === "text" ? "Enter your text content here..." : undefined,
      items: (newSectionType === "features" || newSectionType === "stats") ? [] : undefined
    };

    const updatedPage = {
      ...page,
      sections: [...(page.sections || []), newSection]
    };

    const updatedPages = [...pages];
    updatedPages[pageIndex] = updatedPage;

    handleSaveContentChange({
      ...webContent,
      customPages: updatedPages
    });
    toast.success(`Added ${newSectionType} section!`);
  };

  const deleteSectionFromCustomPage = (slug: string, sectionId: string) => {
    const pages = webContent.customPages || [];
    const pageIndex = pages.findIndex((p: any) => p.slug === slug);
    if (pageIndex === -1) return;

    const page = pages[pageIndex];
    const updatedSections = (page.sections || []).filter((s: any) => s.id !== sectionId);

    const updatedPage = {
      ...page,
      sections: updatedSections
    };

    const updatedPages = [...pages];
    updatedPages[pageIndex] = updatedPage;

    handleSaveContentChange({
      ...webContent,
      customPages: updatedPages
    });
    toast.success("Section removed");
  };

  const moveCustomSection = (slug: string, sectionIndex: number, direction: 'up' | 'down') => {
    const pages = webContent.customPages || [];
    const pageIndex = pages.findIndex((p: any) => p.slug === slug);
    if (pageIndex === -1) return;

    const page = pages[pageIndex];
    const sections = [...(page.sections || [])];

    if (direction === 'up' && sectionIndex > 0) {
      [sections[sectionIndex - 1], sections[sectionIndex]] = [sections[sectionIndex], sections[sectionIndex - 1]];
    } else if (direction === 'down' && sectionIndex < sections.length - 1) {
      [sections[sectionIndex + 1], sections[sectionIndex]] = [sections[sectionIndex], sections[sectionIndex + 1]];
    }

    const updatedPage = {
      ...page,
      sections
    };

    const updatedPages = [...pages];
    updatedPages[pageIndex] = updatedPage;

    handleSaveContentChange({
      ...webContent,
      customPages: updatedPages
    });
  };

  const updateCustomSectionFields = (slug: string, sectionId: string, fields: any) => {
    const pages = webContent.customPages || [];
    const pageIndex = pages.findIndex((p: any) => p.slug === slug);
    if (pageIndex === -1) return;

    const page = pages[pageIndex];
    const updatedSections = (page.sections || []).map((s: any) => {
      if (s.id === sectionId) {
        return { ...s, ...fields };
      }
      return s;
    });

    const updatedPage = {
      ...page,
      sections: updatedSections
    };

    const updatedPages = [...pages];
    updatedPages[pageIndex] = updatedPage;

    setWebContent({
      ...webContent,
      customPages: updatedPages
    });
  };


  // Service Actions
  const saveServiceEdit = () => {
    if (!editingService?.title) return toast.error("Title is required");
    const services = webContent.services || [];
    const updated = services.map(s => s.id === editingService.id ? editingService : s);
    handleSaveContentChange({ ...webContent, services: updated });
    setEditingService(null);
  };
  const deleteService = (id: string) => {
    if (confirm("Delete this service?")) {
      const services = webContent.services || [];
      const updated = services.filter(s => s.id !== id);
      handleSaveContentChange({ ...webContent, services: updated });
    }
  };
  const addService = () => {
    if (!newService.title) return toast.error("Title is required");
    const item: ServiceItem = {
      id: `serv-${Date.now()}`,
      title: newService.title,
      description: newService.description || "",
      iconName: newService.iconName || "Settings",
      features: newService.features || [],
      image: newService.image || "",
      href: newService.href || ""
    };
    const services = webContent.services || [];
    handleSaveContentChange({ ...webContent, services: [...services, item] });
    setNewService({ title: "", description: "", iconName: "Settings", features: [], image: "", href: "" });
  };

  // Industry Actions
  const saveIndustryEdit = () => {
    if (!editingIndustry?.title) return toast.error("Title is required");
    const industries = webContent.industries || [];
    const updated = industries.map(i => i.id === editingIndustry.id ? editingIndustry : i);
    handleSaveContentChange({ ...webContent, industries: updated });
    setEditingIndustry(null);
  };
  const deleteIndustry = (id: string) => {
    if (confirm("Delete this industry?")) {
      const industries = webContent.industries || [];
      const updated = industries.filter(i => i.id !== id);
      handleSaveContentChange({ ...webContent, industries: updated });
    }
  };
  const addIndustry = () => {
    if (!newIndustry.title) return toast.error("Title is required");
    const item: IndustryItem = {
      id: `ind-${Date.now()}`,
      title: newIndustry.title,
      description: newIndustry.description || "",
      iconName: newIndustry.iconName || "Building2",
      color: newIndustry.color || "bg-accent",
      slug: newIndustry.slug || "",
      image: newIndustry.image || ""
    };
    const industries = webContent.industries || [];
    handleSaveContentChange({ ...webContent, industries: [...industries, item] });
    setNewIndustry({ title: "", description: "", iconName: "Building2", color: "bg-accent", slug: "", image: "" });
  };

  // Resource Actions
  const saveResourceEdit = () => {
    if (!editingResource?.title) return toast.error("Title is required");
    const resources = webContent.resources || [];
    const updated = resources.map(r => r.id === editingResource.id ? editingResource : r);
    handleSaveContentChange({ ...webContent, resources: updated });
    setEditingResource(null);
  };
  const deleteResource = (id: string) => {
    if (confirm("Delete this resource?")) {
      const resources = webContent.resources || [];
      const updated = resources.filter(r => r.id !== id);
      handleSaveContentChange({ ...webContent, resources: updated });
    }
  };
  const addResource = () => {
    if (!newResource.title) return toast.error("Title is required");
    const item: ResourceItem = {
      id: `res-${Date.now()}`,
      title: newResource.title,
      description: newResource.description || "",
      iconName: newResource.iconName || "Book",
      link: newResource.link || "",
      color: newResource.color || "bg-accent"
    };
    const resources = webContent.resources || [];
    handleSaveContentChange({ ...webContent, resources: [...resources, item] });
    setNewResource({ title: "", description: "", iconName: "Book", link: "", color: "bg-accent" });
  };

  // Benefit Actions
  const saveBenefitEdit = () => {
    if (!editingBenefit?.title) return toast.error("Title is required");
    const benefits = webContent.benefits || [];
    const updated = benefits.map(b => b.id === editingBenefit.id ? editingBenefit : b);
    handleSaveContentChange({ ...webContent, benefits: updated });
    setEditingBenefit(null);
  };
  const deleteBenefit = (id: string) => {
    if (confirm("Delete this benefit?")) {
      const benefits = webContent.benefits || [];
      const updated = benefits.filter(b => b.id !== id);
      handleSaveContentChange({ ...webContent, benefits: updated });
    }
  };
  const addBenefit = () => {
    if (!newBenefit.title) return toast.error("Title is required");
    const item: BenefitItem = {
      id: `ben-${Date.now()}`,
      title: newBenefit.title,
      description: newBenefit.description || "",
      iconName: newBenefit.iconName || "Zap"
    };
    const benefits = webContent.benefits || [];
    handleSaveContentChange({ ...webContent, benefits: [...benefits, item] });
    setNewBenefit({ title: "", description: "", iconName: "Zap" });
  };

  // Partner Benefit Actions
  const savePartnerBenefitEdit = () => {
    if (!editingPartnerBenefit?.title) return toast.error("Title is required");
    const partnerBenefits = webContent.partnerBenefits || [];
    const updated = partnerBenefits.map(pb => pb.id === editingPartnerBenefit.id ? editingPartnerBenefit : pb);
    handleSaveContentChange({ ...webContent, partnerBenefits: updated });
    setEditingPartnerBenefit(null);
  };
  const deletePartnerBenefit = (id: string) => {
    if (confirm("Delete this benefit?")) {
      const partnerBenefits = webContent.partnerBenefits || [];
      const updated = partnerBenefits.filter(pb => pb.id !== id);
      handleSaveContentChange({ ...webContent, partnerBenefits: updated });
    }
  };
  const addPartnerBenefit = () => {
    if (!newPartnerBenefit.title) return toast.error("Title is required");
    const item: PartnerBenefitItem = {
      id: `pb-${Date.now()}`,
      title: newPartnerBenefit.title,
      description: newPartnerBenefit.description || "",
      iconName: newPartnerBenefit.iconName || "Handshake",
      color: newPartnerBenefit.color || "bg-blue-500",
      link: newPartnerBenefit.link || "/contact"
    };
    const partnerBenefits = webContent.partnerBenefits || [];
    handleSaveContentChange({ ...webContent, partnerBenefits: [...partnerBenefits, item] });
    setNewPartnerBenefit({ title: "", description: "", iconName: "Handshake", color: "bg-blue-500", link: "/contact" });
  };

  // Leadership Actions
  const saveLeadershipEdit = () => {
    if (!editingLeadership?.name) return toast.error("Name is required");
    const leadership = webContent.leadership || [];
    const updated = leadership.map(l => l.id === editingLeadership.id ? editingLeadership : l);
    handleSaveContentChange({ ...webContent, leadership: updated });
    setEditingLeadership(null);
  };
  const deleteLeadership = (id: string) => {
    if (confirm("Delete this leadership member?")) {
      const leadership = webContent.leadership || [];
      const updated = leadership.filter(l => l.id !== id);
      handleSaveContentChange({ ...webContent, leadership: updated });
    }
  };
  const addLeadership = () => {
    if (!newLeadership.name) return toast.error("Name is required");
    const item: LeadershipItem = {
      id: `lead-${Date.now()}`,
      name: newLeadership.name,
      role: newLeadership.role || "",
      description: newLeadership.description || ""
    };
    const leadership = webContent.leadership || [];
    handleSaveContentChange({ ...webContent, leadership: [...leadership, item] });
    setNewLeadership({ name: "", role: "", description: "" });
  };

  return (
    <div className="min-h-screen bg-[#f3f2f1] text-[#323130] flex flex-col font-sans fluent-admin-theme">
      <Helmet>
        <title>Sangronyx System Administrator | Central Website Operations</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* Admin Top Header */}
      <header className="border-b border-slate-800 bg-slate-900/60 backdrop-blur px-4 py-2.5 flex items-center justify-between sticky top-0 z-30">
        <div className="flex items-center gap-2.5">
          <div className="bg-sky-600 text-white p-1.5 rounded-md shadow-glow shadow-sky-500/20">
            <Sliders className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <h1 className="text-base font-bold tracking-tight text-white flex items-center gap-2">
              Sangronyx Admin Panel <Badge variant="outline" className="text-emerald-400 border-emerald-500/30 bg-emerald-500/5 text-[9px] px-1.5 py-0 h-4">System Console</Badge>
            </h1>
            <p className="text-[10px] text-slate-400">Manage, Audit & Monitor content for sangronyx.com</p>
          </div>
        </div>

        {/* Real-time server stats & clock */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-3 text-[10px] text-slate-400 border-r border-slate-800 pr-4">
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
              <span>Dev Server: <strong className="text-slate-200">Online</strong></span>
            </div>
            <div className="flex items-center gap-1">
              <Database className="w-3 h-3 text-sky-400" />
              <span>Formspree ID: <strong className="text-slate-200">{formspreeId}</strong></span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 bg-slate-950/40 border border-slate-800 px-2 py-1 rounded-md text-[10px] text-slate-300">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-mono">{currentTime}</span>
          </div>
          <Link to="/">
            <Button size="xs" variant="ghost" className="text-slate-300 hover:text-white border border-slate-800 hover:bg-slate-800 text-[10px] h-7 px-2.5">
              Go to Website
              <ExternalLink className="w-3 h-3 ml-1" />
            </Button>
          </Link>
        </div>
      </header>

      {/* Main Admin Workspace */}
      <div className="flex-1 flex flex-col">
        <Tabs defaultValue="dashboard" className="flex-1 flex flex-col md:flex-row">

          {/* Left Vertical Navigation Menu */}
          <div className="w-full md:w-52 border-b md:border-b-0 md:border-r border-slate-800 bg-slate-900/20 p-2 shrink-0">
            <TabsList className="flex flex-row md:flex-col items-stretch justify-start bg-transparent p-0 gap-0.5 space-y-0 md:space-y-0.5 w-full overflow-x-auto md:overflow-x-visible h-auto">
              <div className="hidden md:block text-[9px] font-bold bg-[#0076d6] text-black uppercase tracking-wider px-2.5 py-1.5 text-left my-1 rounded-sm">Portal Operations</div>
              <TabsTrigger
                value="dashboard"
                className="justify-start gap-2 px-2.5 py-1.5 text-slate-400 hover:text-slate-100 hover:bg-slate-900/50 rounded-md data-[state=active]:bg-sky-600 data-[state=active]:text-white transition-all text-xs font-medium"
              >
                <LayoutDashboard className="w-4 h-4 shrink-0" />
                <span className="hidden md:inline">Dashboard Overview</span>
              </TabsTrigger>
              <TabsTrigger
                value="seo-auditor"
                className="justify-start gap-2 px-2.5 py-1.5 text-slate-400 hover:text-slate-100 hover:bg-slate-900/50 rounded-md data-[state=active]:bg-sky-600 data-[state=active]:text-white transition-all text-xs font-medium"
              >
                <Activity className="w-4 h-4 shrink-0" />
                <span className="hidden md:inline">SEO Audit Run</span>
              </TabsTrigger>
              <TabsTrigger
                value="settings"
                className="justify-start gap-2 px-2.5 py-1.5 text-slate-400 hover:text-slate-100 hover:bg-slate-900/50 rounded-md data-[state=active]:bg-sky-600 data-[state=active]:text-white transition-all text-xs font-medium"
              >
                <Settings className="w-4 h-4 shrink-0" />
                <span className="hidden md:inline">System Settings</span>
              </TabsTrigger>
 
              <div className="hidden md:block text-[9px] font-bold bg-[#0076d6] text-black uppercase tracking-wider px-2.5 py-1.5 text-left my-1 rounded-sm">Content Management</div>
              <TabsTrigger
                value="page-home"
                className="justify-start gap-2 px-2.5 py-1.5 text-slate-400 hover:text-slate-100 hover:bg-slate-900/50 rounded-md data-[state=active]:bg-sky-600 data-[state=active]:text-white transition-all text-xs font-medium"
              >
                <Globe className="w-4 h-4 shrink-0" />
                <span className="hidden md:inline">Home Page Editor</span>
              </TabsTrigger>
              <TabsTrigger
                value="page-products"
                className="justify-start gap-2 px-2.5 py-1.5 text-slate-400 hover:text-slate-100 hover:bg-slate-900/50 rounded-md data-[state=active]:bg-sky-600 data-[state=active]:text-white transition-all text-xs font-medium"
              >
                <Sparkles className="w-4 h-4 shrink-0" />
                <span className="hidden md:inline">Products Offerings</span>
              </TabsTrigger>
              <TabsTrigger
                value="page-services"
                className="justify-start gap-2 px-2.5 py-1.5 text-slate-400 hover:text-slate-100 hover:bg-slate-900/50 rounded-md data-[state=active]:bg-sky-600 data-[state=active]:text-white transition-all text-xs font-medium"
              >
                <Briefcase className="w-4 h-4 shrink-0" />
                <span className="hidden md:inline">Services page</span>
              </TabsTrigger>
              <TabsTrigger
                value="page-industries"
                className="justify-start gap-2 px-2.5 py-1.5 text-slate-400 hover:text-slate-100 hover:bg-slate-900/50 rounded-md data-[state=active]:bg-sky-600 data-[state=active]:text-white transition-all text-xs font-medium"
              >
                <Building2 className="w-4 h-4 shrink-0" />
                <span className="hidden md:inline">Industries Verticals</span>
              </TabsTrigger>
              <TabsTrigger
                value="page-resources"
                className="justify-start gap-2 px-2.5 py-1.5 text-slate-400 hover:text-slate-100 hover:bg-slate-900/50 rounded-md data-[state=active]:bg-sky-600 data-[state=active]:text-white transition-all text-xs font-medium"
              >
                <BookOpen className="w-4 h-4 shrink-0" />
                <span className="hidden md:inline">Resource Center</span>
              </TabsTrigger>
              <TabsTrigger
                value="page-careers"
                className="justify-start gap-2 px-2.5 py-1.5 text-slate-400 hover:text-slate-100 hover:bg-slate-900/50 rounded-md data-[state=active]:bg-sky-600 data-[state=active]:text-white transition-all text-xs font-medium"
              >
                <Zap className="w-4 h-4 shrink-0" />
                <span className="hidden md:inline">Careers Benefits</span>
              </TabsTrigger>
              <TabsTrigger
                value="page-partners"
                className="justify-start gap-2 px-2.5 py-1.5 text-slate-400 hover:text-slate-100 hover:bg-slate-900/50 rounded-md data-[state=active]:bg-sky-600 data-[state=active]:text-white transition-all text-xs font-medium"
              >
                <Handshake className="w-4 h-4 shrink-0" />
                <span className="hidden md:inline">Partners Program</span>
              </TabsTrigger>
              <TabsTrigger
                value="page-leadership"
                className="justify-start gap-2 px-2.5 py-1.5 text-slate-400 hover:text-slate-100 hover:bg-slate-900/50 rounded-md data-[state=active]:bg-sky-600 data-[state=active]:text-white transition-all text-xs font-medium"
              >
                <Users className="w-4 h-4 shrink-0" />
                <span className="hidden md:inline">Who We Are</span>
              </TabsTrigger>
              <TabsTrigger
                value="page-contact"
                className="justify-start gap-2 px-2.5 py-1.5 text-slate-400 hover:text-slate-100 hover:bg-slate-900/50 rounded-md data-[state=active]:bg-sky-600 data-[state=active]:text-white transition-all text-xs font-medium"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span className="hidden md:inline">Contact Config</span>
              </TabsTrigger>
              <TabsTrigger
                value="custom-pages"
                className="justify-start gap-2 px-2.5 py-1.5 text-slate-400 hover:text-slate-100 hover:bg-slate-900/50 rounded-md data-[state=active]:bg-sky-600 data-[state=active]:text-white transition-all text-xs font-medium"
              >
                <FileText className="w-4 h-4 shrink-0" />
                <span className="hidden md:inline">Custom Pages Builder</span>
              </TabsTrigger>
 
              <div className="hidden md:block text-[9px] font-bold bg-[#0076d6] text-black uppercase tracking-wider px-2.5 py-1.5 text-left my-1 rounded-sm">SEO & Leads Inbox</div>
              <TabsTrigger
                value="pages"
                className="justify-start gap-2 px-2.5 py-1.5 text-slate-400 hover:text-slate-100 hover:bg-slate-900/50 rounded-md data-[state=active]:bg-sky-600 data-[state=active]:text-white transition-all text-xs font-medium"
              >
                <Sliders className="w-4 h-4 shrink-0" />
                <span className="hidden md:inline">SEO Metadata</span>
              </TabsTrigger>
              <TabsTrigger
                value="leads"
                className="justify-start gap-2 px-2.5 py-1.5 text-slate-400 hover:text-slate-100 hover:bg-slate-900/50 rounded-md data-[state=active]:bg-sky-600 data-[state=active]:text-white transition-all text-xs font-medium"
              >
                <Mail className="w-4 h-4 shrink-0" />
                <span className="hidden md:inline">Form Leads Inbox</span>
                {leads.filter(l => l.status === "New").length > 0 && (
                  <Badge className="ml-auto bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-1.5 py-0.5 text-[9px] h-4 flex items-center">
                    {leads.filter(l => l.status === "New").length}
                  </Badge>
                )}
              </TabsTrigger>
            </TabsList>
 
            <div className="mt-4 pt-4 border-t border-slate-900 hidden md:block">
              <h4 className="text-[9px] font-bold text-slate-500 uppercase tracking-widest px-2 mb-1.5">Technical Info</h4>
              <div className="space-y-1 text-[10px] px-2 text-slate-400">
                <p>Node: v20.11.0</p>
                <p>React: v18.3.1</p>
                <p>Vite: v5.4.19</p>
                <p>Build Status: <span className="text-emerald-400">Success</span></p>
              </div>
            </div>
          </div>
 
          {/* Right Main Content Panel */}
          <main className="flex-1 p-4 overflow-y-auto">

            {/* Tab 1: Dashboard Overview */}
            <TabsContent value="dashboard" className="space-y-6 mt-0">

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

                <Card className="bg-slate-900 border-slate-800 shadow-card">
                  <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                    <CardTitle className="text-sm font-semibold text-slate-300">Monitored Pages</CardTitle>
                    <Globe className="w-4 h-4 text-sky-400" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-black text-white">52 Routes</div>
                    <p className="text-xs text-emerald-400 flex items-center gap-1 mt-1">
                      <CheckCircle className="w-3.5 h-3.5" /> 100% active and crawled
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-slate-900 border-slate-800 shadow-card">
                  <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                    <CardTitle className="text-sm font-semibold text-slate-300">Total Leads</CardTitle>
                    <Mail className="w-4 h-4 text-amber-400" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-black text-white">{leads.length} Contacts</div>
                    <p className="text-xs text-amber-400 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {leads.filter(l => l.status === "New").length} new inquiries pending
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-slate-900 border-slate-800 shadow-card">
                  <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                    <CardTitle className="text-sm font-semibold text-slate-300">SEO Health Index</CardTitle>
                    <Sparkles className="w-4 h-4 text-purple-400" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-black text-white">{seoScore}/100</div>
                    <Progress value={seoScore} className="h-1.5 mt-2 bg-slate-800" />
                  </CardContent>
                </Card>

                <Card className="bg-slate-900 border-slate-800 shadow-card">
                  <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                    <CardTitle className="text-sm font-semibold text-slate-300">Performance (Avg)</CardTitle>
                    <Activity className="w-4 h-4 text-emerald-400" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-black text-white">{metrics.avgLoadTime}</div>
                    <p className="text-xs text-emerald-400 flex items-center gap-1 mt-1">
                      <ShieldCheck className="w-3.5 h-3.5" /> Fast (Vite Hydrated SPA)
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Middle Section: Chart & Live Feed */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Visual Chart Card */}
                <Card className="bg-slate-900 border-slate-800 lg:col-span-2 shadow-card">
                  <CardHeader>
                    <CardTitle className="text-base font-bold text-white flex items-center gap-2">
                      <TrendingUp className="w-4.5 h-4.5 text-sky-400" />
                      Weekly Lead Acquisition Trend
                    </CardTitle>
                    <CardDescription className="text-slate-400">Total inquiries gathered across contact, careers, and corporate popups</CardDescription>
                  </CardHeader>
                  <CardContent className="h-64 flex flex-col justify-end">

                    {/* Simulated SVG Graph */}
                    <div className="relative w-full h-40 mt-4 flex items-end">

                      {/* Grid Lines */}
                      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-10">
                        <div className="border-t border-slate-100 w-full h-0"></div>
                        <div className="border-t border-slate-100 w-full h-0"></div>
                        <div className="border-t border-slate-100 w-full h-0"></div>
                        <div className="border-t border-slate-100 w-full h-0"></div>
                      </div>

                      {/* Bar 1 */}
                      <div className="flex-1 flex flex-col items-center justify-end gap-2 z-10 h-full">
                        <span className="text-[10px] font-mono text-slate-400">3 leads</span>
                        <div className="w-8 bg-sky-600/40 hover:bg-sky-500 rounded-t h-8 transition-all"></div>
                        <span className="text-xs font-semibold text-slate-500">Mon</span>
                      </div>

                      {/* Bar 2 */}
                      <div className="flex-1 flex flex-col items-center justify-end gap-2 z-10 h-full">
                        <span className="text-[10px] font-mono text-slate-400">5 leads</span>
                        <div className="w-8 bg-sky-600/40 hover:bg-sky-500 rounded-t h-14 transition-all"></div>
                        <span className="text-xs font-semibold text-slate-500">Tue</span>
                      </div>

                      {/* Bar 3 */}
                      <div className="flex-1 flex flex-col items-center justify-end gap-2 z-10 h-full">
                        <span className="text-[10px] font-mono text-slate-400">8 leads</span>
                        <div className="w-8 bg-sky-600/60 hover:bg-sky-500 rounded-t h-20 transition-all"></div>
                        <span className="text-xs font-semibold text-slate-500">Wed</span>
                      </div>

                      {/* Bar 4 */}
                      <div className="flex-1 flex flex-col items-center justify-end gap-2 z-10 h-full">
                        <span className="text-[10px] font-mono text-slate-400">12 leads</span>
                        <div className="w-8 bg-sky-600/80 hover:bg-sky-500 rounded-t h-32 transition-all"></div>
                        <span className="text-xs font-semibold text-slate-500">Thu</span>
                      </div>

                      {/* Bar 5 */}
                      <div className="flex-1 flex flex-col items-center justify-end gap-2 z-10 h-full">
                        <span className="text-[10px] font-mono text-slate-400">6 leads</span>
                        <div className="w-8 bg-sky-600/40 hover:bg-sky-500 rounded-t h-16 transition-all"></div>
                        <span className="text-xs font-semibold text-slate-500">Fri</span>
                      </div>

                      {/* Bar 6 */}
                      <div className="flex-1 flex flex-col items-center justify-end gap-2 z-10 h-full">
                        <span className="text-[10px] font-mono text-slate-400">4 leads</span>
                        <div className="w-8 bg-sky-600/30 hover:bg-sky-500 rounded-t h-10 transition-all"></div>
                        <span className="text-xs font-semibold text-slate-500">Sat</span>
                      </div>

                      {/* Bar 7 */}
                      <div className="flex-1 flex flex-col items-center justify-end gap-2 z-10 h-full">
                        <span className="text-[10px] font-mono text-sky-400">15 leads</span>
                        <div className="w-8 bg-gradient-to-t from-sky-600 to-indigo-500 rounded-t h-36 shadow-glow shadow-sky-500/10 transition-all"></div>
                        <span className="text-xs font-bold text-sky-400">Today</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* System Health / Resources Monitoring Dashboard */}
                <Card className="bg-slate-900 border-slate-800 shadow-card">
                  <CardHeader>
                    <CardTitle className="text-base font-bold text-white flex items-center gap-2">
                      <Activity className="w-4.5 h-4.5 text-emerald-400" />
                      Server Performance
                    </CardTitle>
                    <CardDescription className="text-slate-400">Local node host metrics and analytics</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-medium text-slate-300">
                        <span>CPU Usage</span>
                        <span className="font-mono text-slate-400">{metrics.cpuUsage}</span>
                      </div>
                      <Progress value={12} className="h-1 bg-slate-800" />
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-medium text-slate-300">
                        <span>Memory Load</span>
                        <span className="font-mono text-slate-400">{metrics.memoryUsage}</span>
                      </div>
                      <Progress value={9} className="h-1 bg-slate-800" />
                    </div>

                    <div className="pt-2 border-t border-slate-800 space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span className="text-slate-400">System Uptime:</span>
                        <span className="text-slate-200 font-mono">{metrics.uptime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">HTTP Port:</span>
                        <span className="text-slate-200 font-mono">127.0.0.1:8080</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Sessions Today:</span>
                        <span className="text-sky-400 font-bold font-mono">{metrics.trafficToday} clicks</span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <Button size="sm" onClick={handleClearCache} className="w-full bg-slate-800 text-slate-200 hover:bg-slate-700 border border-slate-700 flex items-center justify-center gap-2">
                        <RefreshCw className="w-3.5 h-3.5" />
                        Flush CDN & Edge Cache
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Bottom Quick Tools */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* SEO Checklist Summary */}
                <Card className="bg-slate-900 border-slate-800 shadow-card">
                  <CardHeader>
                    <CardTitle className="text-base font-bold text-white flex items-center gap-2">
                      <ShieldAlert className="w-4.5 h-4.5 text-amber-500" />
                      Pending SEO Tasks
                    </CardTitle>
                    <CardDescription className="text-slate-400">Tasks extracted from SEO Audit Report requiring action</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-3 p-2.5 rounded-lg bg-amber-500/5 border border-amber-500/20 text-xs">
                      <AlertCircle className="w-4.5 h-4.5 text-amber-500 shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-bold text-amber-400">Thin Content Warning</h5>
                        <p className="text-slate-300 mt-1">/resources/capital and /resources/employees have less than 300 words. Expand these to improve ranking authority.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-2.5 rounded-lg bg-amber-500/5 border border-amber-500/20 text-xs">
                      <AlertCircle className="w-4.5 h-4.5 text-amber-500 shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-bold text-amber-400">H1 Header Verification</h5>
                        <p className="text-slate-300 mt-1">Verify that every page has exactly one visible, keyword-optimized H1 heading element.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Formspree Health status */}
                <Card className="bg-slate-900 border-slate-800 shadow-card">
                  <CardHeader>
                    <CardTitle className="text-base font-bold text-white flex items-center gap-2">
                      <Database className="w-4.5 h-4.5 text-sky-400" />
                      Formspree Integration Status
                    </CardTitle>
                    <CardDescription className="text-slate-400">Active mail forwarding gateway check</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 text-xs">
                    <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                      <span className="text-slate-400">Endpoint URL:</span>
                      <span className="font-mono text-slate-200">https://formspree.io/f/{formspreeId}</span>
                    </div>
                    <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                      <span className="text-slate-400">Target Forms:</span>
                      <span className="text-slate-200">Contact, Careers, Training Popup</span>
                    </div>
                    <div className="flex justify-between items-center py-1.5">
                      <span className="text-slate-400">Security / CORS:</span>
                      <Badge className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">Auto-Allowed</Badge>
                    </div>

                    <div className="bg-slate-950 p-2.5 rounded-lg font-mono text-[10px] text-slate-400 border border-slate-800">
                      <p className="text-slate-200 font-semibold mb-1">// Endpoint test query</p>
                      <p>POST https://formspree.io/f/{formspreeId}</p>
                      <p className="text-emerald-400">{"{\"ok\": true, \"message\": \"Form registered\"}"}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Row 3: Database & Terminal Console */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                
                {/* Database Manager */}
                <Card className="bg-slate-900 border-slate-800 shadow-card">
                  <CardHeader>
                    <CardTitle className="text-base font-bold text-white flex items-center gap-2">
                      <Database className="w-4.5 h-4.5 text-sky-400" />
                      Database Backup & Diagnostics
                    </CardTitle>
                    <CardDescription className="text-slate-400 font-sans">
                      Export active content profiles or restore website config states from a local JSON backup file.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="bg-slate-950/40 p-2 border border-slate-800/60 rounded">
                        <div className="text-sm font-bold text-white">{webContent.services?.length || 0}</div>
                        <div className="text-[9px] text-slate-500 uppercase font-semibold">Services</div>
                      </div>
                      <div className="bg-slate-950/40 p-2 border border-slate-800/60 rounded">
                        <div className="text-sm font-bold text-white">{webContent.industries?.length || 0}</div>
                        <div className="text-[9px] text-slate-500 uppercase font-semibold">Industries</div>
                      </div>
                      <div className="bg-slate-950/40 p-2 border border-slate-800/60 rounded">
                        <div className="text-sm font-bold text-white">{webContent.customPages?.length || 0}</div>
                        <div className="text-[9px] text-slate-500 uppercase font-semibold">Custom Pages</div>
                      </div>
                    </div>

                    <div className="pt-2 flex gap-3">
                      <Button 
                        size="sm" 
                        onClick={handleExportDatabase} 
                        className="flex-1 bg-sky-600 hover:bg-sky-500 text-white flex items-center justify-center gap-2"
                      >
                        <Download className="w-3.5 h-3.5" />
                        Export Database
                      </Button>

                      <div className="flex-1">
                        <input
                          type="file"
                          id="database-restore-input"
                          accept=".json"
                          onChange={handleImportDatabase}
                          className="hidden"
                        />
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => document.getElementById("database-restore-input")?.click()}
                          className="w-full bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 flex items-center justify-center gap-2"
                        >
                          <Upload className="w-3.5 h-3.5" />
                          Import Backup
                        </Button>
                      </div>
                    </div>

                    <div className="text-[10px] text-slate-500 border-t border-slate-800/60 pt-3">
                      <span className="font-semibold text-slate-400">Notice:</span> Importing a database backup will instantly overwrite current text configurations, custom routes, resources, and services metadata.
                    </div>
                  </CardContent>
                </Card>

                {/* Operations Console Log */}
                <Card className="bg-slate-900 border-slate-800 shadow-card">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <div>
                      <CardTitle className="text-base font-bold text-white flex items-center gap-2">
                        <Terminal className="w-4.5 h-4.5 text-emerald-400" />
                        Operations Log Stream
                      </CardTitle>
                      <CardDescription className="text-slate-400 font-sans">
                        Monitors real-time client HTTP routes and worker jobs.
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`w-2.5 h-2.5 rounded-full ${logsPaused ? 'bg-amber-400' : 'bg-emerald-500 animate-pulse'}`} />
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                        {logsPaused ? 'Paused' : 'Streaming'}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="bg-slate-950 p-3 rounded border border-slate-800 font-mono text-[11px] text-slate-300 h-36 overflow-y-auto space-y-1 select-text scrollbar-thin">
                      {systemLogs.length === 0 ? (
                        <div className="text-slate-500 italic">No operations recorded.</div>
                      ) : (
                        systemLogs.map((log, idx) => (
                          <div key={idx} className="whitespace-nowrap overflow-hidden text-ellipsis">
                            {log}
                          </div>
                        ))
                      )}
                    </div>

                    <div className="flex gap-2 justify-end">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => setLogsPaused(!logsPaused)}
                        className="bg-slate-800 hover:bg-slate-700 text-xs px-2.5 py-1.5 text-slate-300 border border-slate-700 flex items-center gap-1.5"
                      >
                        {logsPaused ? (
                          <>
                            <Play className="w-3 h-3" /> Resume Feed
                          </>
                        ) : (
                          <>
                            <Pause className="w-3 h-3" /> Pause Feed
                          </>
                        )}
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => setSystemLogs([])}
                        className="bg-slate-800 hover:bg-slate-700 text-xs px-2.5 py-1.5 text-slate-300 border border-slate-700 flex items-center gap-1.5"
                      >
                        <Trash2 className="w-3 h-3" /> Clear Console
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

            </TabsContent>

            {/* Tab 2: Pages & SEO Monitor */}
            <TabsContent value="pages" className="space-y-6 mt-0">

              <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-bold text-white">Route Index & SEO Monitor</h2>
                  <p className="text-xs text-slate-400">Audit meta descriptions, titles, and canonical tags for all active routes in the codebase</p>
                </div>

                <div className="flex items-center gap-2 w-full md:w-auto">
                  <div className="relative flex-1 md:w-80">
                    <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-500" />
                    <Input
                      placeholder="Search routes or titles..."
                      className="pl-9 bg-slate-900 border-slate-800 text-white placeholder-slate-500 focus:ring-sky-500"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <Card className="bg-slate-900 border-slate-800 shadow-card">
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader className="border-slate-800 bg-slate-950/40">
                        <TableRow className="border-slate-800 hover:bg-transparent">
                          <TableHead className="text-slate-400 text-xs font-semibold">Route Path</TableHead>
                          <TableHead className="text-slate-400 text-xs font-semibold">Meta Title</TableHead>
                          <TableHead className="text-slate-400 text-xs font-semibold">Canonical Link</TableHead>
                          <TableHead className="text-slate-400 text-xs font-semibold text-center">Indexable</TableHead>
                          <TableHead className="text-slate-400 text-xs font-semibold text-center">Status</TableHead>
                          <TableHead className="text-slate-400 text-xs font-semibold text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredSeoList.length > 0 ? (
                          filteredSeoList.map(([path, data]) => {
                            const isNoIndex = path === "/not-found" || path === "*";

                            return (
                              <TableRow key={path} className="border-slate-800 hover:bg-slate-900/40">
                                <TableCell className="font-mono text-xs font-semibold text-sky-400 max-w-[150px] truncate">{path}</TableCell>
                                <TableCell className="max-w-[320px] shrink-0">
                                  <div className="text-xs font-semibold text-slate-100 truncate">{data.title}</div>
                                  <div className="text-[10px] text-slate-400 truncate mt-0.5">{data.description}</div>
                                </TableCell>
                                <TableCell className="font-mono text-[10px] text-slate-400 max-w-[200px] truncate">{data.canonical || "N/A"}</TableCell>
                                <TableCell className="text-center">
                                  {isNoIndex ? (
                                    <Badge className="bg-red-500/10 text-red-400 border border-red-500/20 text-[10px] font-bold">
                                      noindex
                                    </Badge>
                                  ) : (
                                    <Badge className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-bold">
                                      index
                                    </Badge>
                                  )}
                                </TableCell>
                                <TableCell className="text-center">
                                  <Badge className="bg-sky-500/10 text-sky-400 border border-sky-500/20 text-[10px] font-mono">
                                    200 OK
                                  </Badge>
                                </TableCell>
                                <TableCell className="text-right">
                                  <div className="flex justify-end gap-1.5">
                                    <Button
                                      size="icon"
                                      variant="ghost"
                                      className="w-8 h-8 text-sky-400 hover:text-white hover:bg-sky-600/20"
                                      onClick={() => handleOpenEditSeo(path)}
                                    >
                                      <Edit className="w-3.5 h-3.5" />
                                    </Button>
                                    <Link to={path === "*" ? "/not-found" : path} target="_blank">
                                      <Button size="icon" variant="ghost" className="w-8 h-8 text-slate-400 hover:text-white hover:bg-slate-800">
                                        <ExternalLink className="w-3.5 h-3.5" />
                                      </Button>
                                    </Link>
                                  </div>
                                </TableCell>
                              </TableRow>
                            );
                          })
                        ) : (
                          <TableRow>
                            <TableCell colSpan={6} className="text-center py-8 text-slate-500 text-xs">
                              No routes match your search query
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>

              {/* Edit SEO Dialog */}
              <Dialog open={isEditSeoOpen} onOpenChange={setIsEditSeoOpen}>
                <DialogContent className="bg-slate-900 border-slate-800 text-white max-w-lg">
                  <DialogHeader>
                    <DialogTitle className="text-white text-base font-bold flex items-center gap-2">
                      <Edit className="w-5 h-5 text-sky-500" />
                      Edit SEO Metadata
                    </DialogTitle>
                    <DialogDescription className="text-slate-400">Customize the headers injected for route: <code className="text-sky-400 font-mono">{editingPath}</code></DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleSaveSeo} className="space-y-4 my-2">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">Meta Title (Recommended: 50-60 characters)</label>
                      <Input
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                        className="bg-slate-950 border-slate-800 text-white text-xs"
                      />
                      <div className="text-[10px] text-right text-slate-400 font-mono">{editTitle.length} characters</div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">Meta Description (Recommended: 140-160 characters)</label>
                      <Textarea
                        value={editDescription}
                        onChange={(e) => setEditDescription(e.target.value)}
                        rows={3}
                        className="bg-slate-950 border-slate-800 text-white text-xs"
                      />
                      <div className="text-[10px] text-right text-slate-400 font-mono">{editDescription.length} characters</div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">Keywords (Comma separated)</label>
                      <Input
                        value={editKeywords}
                        onChange={(e) => setEditKeywords(e.target.value)}
                        className="bg-slate-950 border-slate-800 text-white text-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">Canonical Link URL</label>
                      <Input
                        value={editCanonical}
                        onChange={(e) => setEditCanonical(e.target.value)}
                        className="bg-slate-950 border-slate-800 text-white text-xs"
                      />
                    </div>

                    <DialogFooter className="pt-2 border-t border-slate-800">
                      <Button type="button" variant="ghost" onClick={() => setIsEditSeoOpen(false)} className="text-slate-300 hover:text-white border border-slate-800 hover:bg-slate-800 text-xs">
                        Cancel
                      </Button>
                      <Button type="submit" className="bg-sky-600 hover:bg-sky-500 text-white text-xs">
                        <Save className="w-3.5 h-3.5 mr-1.5" />
                        Save Meta
                      </Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>

            </TabsContent>

            {/* Tab 3: Form Leads Inbox */}
            <TabsContent value="leads" className="space-y-6 mt-0">

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-bold text-white">Client Inquiry & Leads Inbox</h2>
                  <p className="text-xs text-slate-400">Consolidated submissions from Contact Us, Careers, and Popups</p>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                  <Input
                    placeholder="Search leads..."
                    className="bg-slate-900 border-slate-800 text-white placeholder-slate-500 w-full sm:w-60"
                    value={leadSearchQuery}
                    onChange={(e) => setLeadSearchQuery(e.target.value)}
                  />
                  <select
                    className="bg-slate-900 border border-slate-800 rounded-md px-3 py-1.5 text-xs text-slate-300 focus:outline-none"
                    value={leadFilter}
                    onChange={(e) => setLeadFilter(e.target.value)}
                  >
                    <option value="All">All Statuses</option>
                    <option value="New">New</option>
                    <option value="Reviewed">Reviewed</option>
                    <option value="Archived">Archived</option>
                  </select>

                  <Dialog open={isAddLeadOpen} onOpenChange={setIsAddLeadOpen}>
                    <DialogTrigger asChild>
                      <Button className="bg-sky-600 hover:bg-sky-500 text-white text-xs shrink-0">
                        <Plus className="w-3.5 h-3.5 mr-1.5" />
                        Add Lead
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-slate-900 border-slate-800 text-white max-w-md">
                      <DialogHeader>
                        <DialogTitle className="text-white text-base font-bold">Add Simulated Contact Inquiry</DialogTitle>
                        <DialogDescription className="text-slate-400">Add a new mock client lead to verify notifications or test inbox flows.</DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleAddLead} className="space-y-4 my-2">
                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold text-slate-300">Contact Name *</label>
                          <Input
                            required
                            value={newLeadName}
                            onChange={(e) => setNewLeadName(e.target.value)}
                            placeholder="e.g. Jane Doe"
                            className="bg-slate-950 border-slate-800 text-white text-xs"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold text-slate-300">Email Address *</label>
                          <Input
                            required
                            type="email"
                            value={newLeadEmail}
                            onChange={(e) => setNewLeadEmail(e.target.value)}
                            placeholder="jane@company.com"
                            className="bg-slate-950 border-slate-800 text-white text-xs"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold text-slate-300">Company Name</label>
                          <Input
                            value={newLeadCompany}
                            onChange={(e) => setNewLeadCompany(e.target.value)}
                            placeholder="e.g. Acme Corp"
                            className="bg-slate-950 border-slate-800 text-white text-xs"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold text-slate-300">Source Form</label>
                          <select
                            className="w-full bg-slate-950 border border-slate-800 rounded-md p-2 text-xs text-slate-300"
                            value={newLeadSource}
                            onChange={(e) => setNewLeadSource(e.target.value as Lead["source"])}
                          >
                            <option value="Contact Form">Contact Form</option>
                            <option value="Careers Form">Careers Form</option>
                            <option value="Training Popup">Training Popup</option>
                          </select>
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold text-slate-300">Client Message</label>
                          <Textarea
                            value={newLeadMessage}
                            onChange={(e) => setNewLeadMessage(e.target.value)}
                            rows={3}
                            placeholder="Write message details..."
                            className="bg-slate-950 border-slate-800 text-white text-xs"
                          />
                        </div>
                        <DialogFooter className="pt-2 border-t border-slate-800">
                          <Button type="button" variant="ghost" onClick={() => setIsAddLeadOpen(false)} className="text-slate-300 hover:text-white border border-slate-800 hover:bg-slate-800 text-xs">
                            Cancel
                          </Button>
                          <Button type="submit" className="bg-sky-600 hover:bg-sky-500 text-white text-xs">
                            Save Lead
                          </Button>
                        </DialogFooter>
                      </form>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>

              {/* Leads List */}
              <div className="space-y-4">
                {filteredLeads.length > 0 ? (
                  filteredLeads.map((lead) => (
                    <Card key={lead.id} className="bg-slate-900 border-slate-800 overflow-hidden shadow-card">
                      <div className="p-4 sm:p-6 flex flex-col md:flex-row items-stretch md:items-start justify-between gap-4">
                        <div className="space-y-2">
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="text-sm font-bold text-white">{lead.name}</h3>
                            <span className="text-xs text-slate-500">|</span>
                            <span className="text-xs text-slate-400">{lead.company}</span>
                            <span className="text-xs text-slate-500">|</span>
                            <span className="text-xs text-slate-400 font-mono">{lead.email}</span>
                          </div>

                          <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/40 p-3 rounded-lg border border-slate-950">
                            {lead.message || <em className="text-slate-500">No message provided</em>}
                          </p>

                          <div className="flex items-center gap-4 text-[10px] text-slate-400 font-mono">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" /> Submitted: {lead.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Globe className="w-3 h-3 text-sky-400" /> Channel: <Badge variant="outline" className="text-sky-400 border-sky-500/20 py-0.2">{lead.source}</Badge>
                            </span>
                          </div>
                        </div>

                        {/* Actions & Status Selection */}
                        <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-start gap-2 shrink-0 border-t md:border-t-0 pt-3 md:pt-0 border-slate-800">
                          <div className="flex items-center gap-1.5">
                            <Badge
                              className={
                                lead.status === "New"
                                  ? "bg-amber-500/10 text-amber-400 border border-amber-500/30"
                                  : lead.status === "Reviewed"
                                    ? "bg-sky-500/10 text-sky-400 border border-sky-500/30"
                                    : "bg-slate-500/10 text-slate-400 border border-slate-500/30"
                              }
                            >
                              {lead.status}
                            </Badge>
                          </div>

                          <div className="flex items-center gap-1 mt-2">
                            {lead.status === "New" && (
                              <Button
                                size="sm"
                                variant="ghost"
                                className="text-emerald-400 hover:text-white hover:bg-emerald-600/20 text-xs px-2.5 h-8"
                                onClick={() => handleUpdateLeadStatus(lead.id, "Reviewed")}
                              >
                                Mark Reviewed
                              </Button>
                            )}
                            {lead.status === "Reviewed" && (
                              <Button
                                size="sm"
                                variant="ghost"
                                className="text-slate-400 hover:text-white hover:bg-slate-800 text-xs px-2.5 h-8"
                                onClick={() => handleUpdateLeadStatus(lead.id, "Archived")}
                              >
                                Archive
                              </Button>
                            )}
                            <Button
                              size="icon"
                              variant="ghost"
                              className="w-8 h-8 text-rose-500 hover:text-white hover:bg-rose-600/20"
                              onClick={() => handleDeleteLead(lead.id)}
                            >
                              <Trash2 className="w-4.5 h-4.5" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))
                ) : (
                  <div className="text-center py-12 bg-slate-900 border border-slate-800 rounded-lg text-slate-500 text-xs">
                    No leads found matching criteria
                  </div>
                )}
              </div>

            </TabsContent>

            {/* Tab 4: SEO Auditor & Compliance */}
            <TabsContent value="seo-auditor" className="space-y-6 mt-0">

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-bold text-white">SEO Compliance Scanner & Auditor</h2>
                  <p className="text-xs text-slate-400">Trigger live technical scans of the indexation parameters outlined in Google Search Essentials</p>
                </div>

                <Button
                  disabled={isScanning}
                  onClick={runLiveAudit}
                  className="bg-sky-600 hover:bg-sky-500 text-white text-xs shadow-glow shadow-sky-500/10"
                >
                  <RefreshCw className={`w-3.5 h-3.5 mr-1.5 ${isScanning ? "animate-spin" : ""}`} />
                  {isScanning ? "Scanning Pages..." : "Scan Website Live"}
                </Button>
              </div>

              {/* Progress bar when scanning */}
              {isScanning && (
                <Card className="bg-slate-900 border-slate-800 p-4 space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-sky-400">{scanStatus}</span>
                    <span className="text-slate-200">{scanProgress}%</span>
                  </div>
                  <Progress value={scanProgress} className="h-2 bg-slate-800" />
                </Card>
              )}

              {/* Audit Results View */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Audit Score Card */}
                <Card className="bg-slate-900 border-slate-800 flex flex-col justify-between shadow-card">
                  <CardHeader>
                    <CardTitle className="text-sm font-semibold text-slate-300">Technical Optimization Score</CardTitle>
                    <CardDescription className="text-slate-400">Current website Google readiness score</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col items-center justify-center py-6">
                    <div className="relative w-36 h-36 flex items-center justify-center">
                      {/* Circle Gauge Backing */}
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                        <circle
                          cx="50" cy="50" r="40"
                          stroke="rgba(30, 41, 59, 0.5)"
                          strokeWidth="8"
                          fill="transparent"
                        />
                        <circle
                          cx="50" cy="50" r="40"
                          stroke={seoScore >= 90 ? "#10b981" : "#f59e0b"}
                          strokeWidth="8"
                          fill="transparent"
                          strokeDasharray={251.2}
                          strokeDashoffset={251.2 - (251.2 * seoScore) / 100}
                          className="transition-all duration-1000 ease-out"
                        />
                      </svg>
                      <div className="absolute text-center">
                        <span className="text-4xl font-black text-white">{seoScore}</span>
                        <span className="text-xs text-slate-400 block">/ 100</span>
                      </div>
                    </div>

                    <div className="text-center mt-6 space-y-1">
                      <Badge className={seoScore >= 90 ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30" : "bg-amber-500/10 text-amber-400 border border-amber-500/30"}>
                        {seoScore >= 90 ? "Excellent Compliance" : "Action Required"}
                      </Badge>
                      <p className="text-[10px] text-slate-400 mt-2">Checked 52 active URLs, 3 Schema Markups, and robots/sitemap config</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Audit Detail Lists */}
                <Card className="bg-slate-900 border-slate-800 lg:col-span-2 shadow-card">
                  <CardHeader>
                    <CardTitle className="text-sm font-semibold text-white">Compliance Checklist Details</CardTitle>
                    <CardDescription className="text-slate-400">Individual metrics tracked from SEO_AUDIT_REPORT.md</CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="max-h-[350px] overflow-y-auto px-6 pb-6 space-y-6">

                      {/* Category: Indexing */}
                      <div>
                        <h4 className="text-xs font-bold text-sky-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                          <Globe className="w-3.5 h-3.5" />
                          Indexability Checks
                        </h4>
                        <div className="space-y-2.5">
                          {seoAudits.indexing.map(item => (
                            <div key={item.id} className="flex items-start gap-2.5 text-xs">
                              <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                              <div>
                                <span className="font-semibold text-slate-200">{item.name}</span>
                                <p className="text-[10px] text-slate-400 mt-0.5">{item.detail}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Category: Content */}
                      <div className="border-t border-slate-800/80 pt-4">
                        <h4 className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                          <FileCheck className="w-3.5 h-3.5" />
                          On-Page Content Checks
                        </h4>
                        <div className="space-y-2.5">
                          {seoAudits.content.map(item => (
                            <div key={item.id} className="flex items-start gap-2.5 text-xs">
                              {item.status === "pass" ? (
                                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                              ) : (
                                <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                              )}
                              <div>
                                <span className={`font-semibold ${item.status === "pass" ? "text-slate-200" : "text-amber-400"}`}>{item.name}</span>
                                <p className="text-[10px] text-slate-400 mt-0.5">{item.detail}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Category: E-E-A-T */}
                      <div className="border-t border-slate-800/80 pt-4">
                        <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          E-E-A-T Compliance Signals
                        </h4>
                        <div className="space-y-2.5">
                          {seoAudits.eeat.map(item => (
                            <div key={item.id} className="flex items-start gap-2.5 text-xs">
                              <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                              <div>
                                <span className="font-semibold text-slate-200">{item.name}</span>
                                <p className="text-[10px] text-slate-400 mt-0.5">{item.detail}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  </CardContent>
                </Card>
              </div>

            </TabsContent>

            {/* Tab 5: System Settings */}
            <TabsContent value="settings" className="space-y-6 mt-0">

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Main Settings Form */}
                <Card className="bg-slate-900 border-slate-800 lg:col-span-2 shadow-card">
                  <CardHeader>
                    <CardTitle className="text-base font-bold text-white flex items-center gap-2">
                      <Settings className="w-4.5 h-4.5 text-sky-400" />
                      Website Integration Parameters
                    </CardTitle>
                    <CardDescription className="text-slate-400">Manage API Endpoints, Formspree connections and trackers</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-5">

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">Formspree Form ID</label>
                      <div className="flex gap-2">
                        <Input
                          value={formspreeId}
                          onChange={(e) => setFormspreeId(e.target.value)}
                          className="bg-slate-950 border-slate-800 text-white font-mono text-xs"
                        />
                        <Button
                          onClick={() => {
                            setFormspreeId("maqwrdrv");
                            toast.success("Formspree ID reset to default");
                          }}
                          variant="ghost"
                          className="text-slate-400 hover:text-white border border-slate-800 text-xs flex gap-1 items-center"
                        >
                          <Undo2 className="w-3.5 h-3.5" /> Reset
                        </Button>
                      </div>
                      <p className="text-[10px] text-slate-400">Used by contact form, careers form and popups to capture user submissions.</p>
                    </div>

                    <div className="space-y-4 pt-4 border-t border-slate-800">
                      <h4 className="text-xs font-bold text-slate-200">System Behavior Toggles</h4>

                      <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/40 border border-slate-800">
                        <div className="space-y-0.5 pr-4">
                          <span className="text-xs font-semibold text-slate-200 block">Maintenance Mode</span>
                          <span className="text-[10px] text-slate-400 block">Simulate redirecting all client requests to a maintenance screen.</span>
                        </div>
                        <Switch
                          checked={maintenanceMode}
                          onCheckedChange={setMaintenanceMode}
                          className="data-[state=checked]:bg-sky-600"
                        />
                      </div>

                      <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/40 border border-slate-800">
                        <div className="space-y-0.5 pr-4">
                          <span className="text-xs font-semibold text-slate-200 block">Google Analytics / SEO Tracking</span>
                          <span className="text-[10px] text-slate-400 block">Enable tracking of active page visits, clicks, and Core Web Vitals.</span>
                        </div>
                        <Switch
                          checked={googleAnalytics}
                          onCheckedChange={setGoogleAnalytics}
                          className="data-[state=checked]:bg-sky-600"
                        />
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-800 flex justify-end">
                      <Button onClick={handleSaveSettings} className="bg-sky-600 hover:bg-sky-500 text-white text-xs">
                        <Save className="w-3.5 h-3.5 mr-1.5" />
                        Save System Settings
                      </Button>
                    </div>

                  </CardContent>
                </Card>

                {/* Backups & Diagnostics Panel */}
                <Card className="bg-slate-900 border-slate-800 shadow-card flex flex-col justify-between">
                  <CardHeader>
                    <CardTitle className="text-base font-bold text-white flex items-center gap-2">
                      <Database className="w-4.5 h-4.5 text-sky-400" />
                      Backups & Diagnostics
                    </CardTitle>
                    <CardDescription className="text-slate-400">Download config states and restore options</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 flex-1">
                    <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Database Engine:</span>
                        <span className="text-slate-200 font-semibold">Mock State (localStorage ready)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Backup Size:</span>
                        <span className="text-slate-200 font-mono">24.5 KB (JSON metadata)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Last Backup:</span>
                        <span className="text-slate-200 font-mono">Today, 06:12 AM</span>
                      </div>
                    </div>

                    <Button
                      onClick={() => {
                        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({ seoList, leads, formspreeId }));
                        const downloadAnchor = document.createElement('a');
                        downloadAnchor.setAttribute("href", dataStr);
                        downloadAnchor.setAttribute("download", `sangronyx_admin_backup_${Date.now()}.json`);
                        document.body.appendChild(downloadAnchor);
                        downloadAnchor.click();
                        downloadAnchor.remove();
                        toast.success("System backup downloaded!");
                      }}
                      className="w-full bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs flex justify-center items-center gap-1.5"
                    >
                      <Download className="w-4.5 h-4.5" /> Download System Backup
                    </Button>

                    <div className="p-3 bg-red-500/5 border border-red-500/20 rounded-lg text-xs space-y-2 mt-4">
                      <h5 className="font-bold text-red-400 flex items-center gap-1.5">
                        <ShieldAlert className="w-4 h-4" /> Danger Zone
                      </h5>
                      <p className="text-[10px] text-slate-300">Resetting the configuration will wipe all custom SEO edits and empty the leads database inbox.</p>
                      <Button
                        onClick={() => {
                          if (confirm("Are you sure you want to restore all settings to default values?")) {
                            setSeoList(initialSeoData);
                            setLeads(initialLeads);
                            setFormspreeId("maqwrdrv");
                            toast.success("System settings reset to original source defaults.");
                          }
                        }}
                        variant="destructive"
                        className="w-full text-xs h-8 bg-red-950/40 hover:bg-red-900/40 border border-red-950 text-red-400 hover:text-white"
                      >
                        Reset Configuration Defaults
                      </Button>
                    </div>
                  </CardContent>
                </Card>

              </div>

            </TabsContent>

            {/* Tab: Services Manager */}
            <TabsContent value="page-services" className="space-y-6 mt-0">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-4">
                <div>
                  <h2 className="text-lg font-bold text-white flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-sky-400" />
                    Manage Services Offerings
                  </h2>
                  <p className="text-xs text-slate-400">Configure corporate SAP offerings, images, descriptions, features, and links</p>
                </div>
                <Button
                  onClick={handleResetContentDefaults}
                  variant="outline"
                  className="text-red-400 hover:text-white border-red-950 hover:bg-red-950/20 text-xs flex gap-1.5 items-center"
                >
                  <Undo2 className="w-3.5 h-3.5" /> Reset Defaults
                </Button>
              </div>

              <div className="space-y-6">
                {/* Services Page Copy Editor */}
                {(() => {
                  const servicesTexts = (webContent.pageTexts || initialPageTexts).services || {
                    heroTitle: "SAP Solutions Designed for Real Business Outcomes",
                    heroDescription: "We deliver industry-aligned and process-driven SAP solutions that help enterprises improve efficiency, visibility, and control.",
                    heroLabel: "SAP SERVICES",
                    stats: [
                      { value: "45+", label: "SAP Projects" },
                      { value: "10+", label: "Years of experience" },
                      { value: "30+", label: "SAP Consultants" },
                      { value: "98%", label: "Client satisfaction" }
                    ]
                  };
                  return (
                    <Card className="bg-slate-900 border-slate-800">
                      <CardHeader className="cursor-pointer select-none pb-3 flex flex-row items-center justify-between" onClick={() => setShowServicesTexts(!showServicesTexts)}>
                        <div>
                          <CardTitle className="text-sm font-bold text-sky-400 flex items-center gap-2">
                            <Globe className="w-4 h-4" />
                            Services Page Header & Stats Config
                          </CardTitle>
                          <CardDescription className="text-xs text-slate-400">Configure page-level hero title, descriptions, and stats banner</CardDescription>
                        </div>
                        <Button variant="ghost" size="sm" className="text-slate-400">
                          {showServicesTexts ? "Hide Config" : "Show Config"}
                        </Button>
                      </CardHeader>
                      {showServicesTexts && (
                        <CardContent className="space-y-4 border-t border-slate-850 pt-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-1.5 col-span-1 md:col-span-2">
                              <label className="text-[10px] uppercase font-bold text-slate-400">Hero Label</label>
                              <Input
                                value={servicesTexts.heroLabel || ""}
                                onChange={(e) => handleUpdatePageTexts("services", { heroLabel: e.target.value })}
                                className="bg-slate-950 border-slate-800 text-xs"
                              />
                            </div>
                            <div className="space-y-1.5 col-span-1 md:col-span-2">
                              <label className="text-[10px] uppercase font-bold text-slate-400">Hero Title</label>
                              <Input
                                value={servicesTexts.heroTitle}
                                onChange={(e) => handleUpdatePageTexts("services", { heroTitle: e.target.value })}
                                className="bg-slate-950 border-slate-800 text-xs"
                              />
                            </div>
                            <div className="space-y-1.5 col-span-1 md:col-span-2">
                              <label className="text-[10px] uppercase font-bold text-slate-400">Hero Description</label>
                              <Textarea
                                value={servicesTexts.heroDescription}
                                onChange={(e) => handleUpdatePageTexts("services", { heroDescription: e.target.value })}
                                className="bg-slate-950 border-slate-800 text-xs h-16"
                              />
                            </div>
                            <div className="space-y-1.5 col-span-1 md:col-span-2">
                              <label className="text-[10px] uppercase font-bold text-slate-400">Section Title</label>
                              <Input
                                value={servicesTexts.sectionTitle || ""}
                                onChange={(e) => handleUpdatePageTexts("services", { sectionTitle: e.target.value })}
                                className="bg-slate-950 border-slate-800 text-xs"
                              />
                            </div>
                            <div className="space-y-1.5 col-span-1 md:col-span-2">
                              <label className="text-[10px] uppercase font-bold text-slate-400">Section Description</label>
                              <Textarea
                                value={servicesTexts.sectionDescription || ""}
                                onChange={(e) => handleUpdatePageTexts("services", { sectionDescription: e.target.value })}
                                className="bg-slate-950 border-slate-800 text-xs h-16"
                              />
                            </div>
                          </div>

                          <div className="border-t border-slate-800 pt-4">
                            <h3 className="text-xs font-bold text-slate-300 mb-3">Stats Banner Items</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                              {(servicesTexts.stats || []).map((stat, idx) => (
                                <Card key={idx} className="bg-slate-950 border-slate-850 p-3 space-y-2">
                                  <div>
                                    <label className="text-[9px] uppercase font-bold text-slate-500">Stat {idx + 1} Value</label>
                                    <Input
                                      value={stat.value}
                                      onChange={(e) => {
                                        const newStats = [...(servicesTexts.stats || [])];
                                        newStats[idx] = { ...stat, value: e.target.value };
                                        handleUpdatePageTexts("services", { stats: newStats });
                                      }}
                                      className="bg-slate-900 border-slate-800 text-xs py-1 h-7"
                                    />
                                  </div>
                                  <div>
                                    <label className="text-[9px] uppercase font-bold text-slate-500">Stat {idx + 1} Label</label>
                                    <Input
                                      value={stat.label}
                                      onChange={(e) => {
                                        const newStats = [...(servicesTexts.stats || [])];
                                        newStats[idx] = { ...stat, label: e.target.value };
                                        handleUpdatePageTexts("services", { stats: newStats });
                                      }}
                                      className="bg-slate-900 border-slate-800 text-xs py-1 h-7"
                                    />
                                  </div>
                                </Card>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      )}
                    </Card>
                  );
                })()}

                {editingService && (
                  <Card className="bg-slate-900 border-sky-500/50 shadow-glow shadow-sky-500/5">
                    <CardHeader className="pb-3 flex flex-row items-center justify-between space-y-0">
                      <CardTitle className="text-sm font-bold text-sky-400">Edit Offering: {editingService.title}</CardTitle>
                      <Button onClick={() => setEditingService(null)} variant="ghost" size="icon" className="h-6 w-6 text-slate-400 hover:text-white rounded-full">
                        <X className="h-3.5 w-3.5" />
                      </Button>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[10px] uppercase font-bold text-slate-400">Title</label>
                          <Input value={editingService.title} onChange={(e) => setEditingService({ ...editingService, title: e.target.value })} className="bg-slate-950 border-slate-800 text-xs" />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[10px] uppercase font-bold text-slate-400">Icon</label>
                          <select value={editingService.iconName} onChange={(e) => setEditingService({ ...editingService, iconName: e.target.value })} className="w-full bg-slate-950 border border-slate-800 rounded-md px-3 py-2 text-xs text-white">
                            {AVAILABLE_ICONS.map(ico => <option key={ico} value={ico}>{ico}</option>)}
                          </select>
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[10px] uppercase font-bold text-slate-400">Image URL</label>
                          <Input value={editingService.image} onChange={(e) => setEditingService({ ...editingService, image: e.target.value })} className="bg-slate-950 border-slate-800 text-xs" />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[10px] uppercase font-bold text-slate-400">Href Link</label>
                          <Input value={editingService.href} onChange={(e) => setEditingService({ ...editingService, href: e.target.value })} className="bg-slate-950 border-slate-800 text-xs" />
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-slate-400">Description</label>
                        <Textarea value={editingService.description} onChange={(e) => setEditingService({ ...editingService, description: e.target.value })} className="bg-slate-950 border-slate-800 text-xs h-20" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-slate-400">Key Features (comma-separated)</label>
                        <Input value={editingService.features.join(", ")} onChange={(e) => setEditingService({ ...editingService, features: e.target.value.split(",").map(f => f.trim()).filter(Boolean) })} className="bg-slate-950 border-slate-800 text-xs" />
                      </div>
                      <div className="flex gap-2 justify-end">
                        <Button onClick={() => setEditingService(null)} variant="outline" className="border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white text-xs">Cancel</Button>
                        <Button onClick={saveServiceEdit} className="bg-sky-600 hover:bg-sky-500 text-white text-xs">Save Changes</Button>
                      </div>
                    </CardContent>
                  </Card>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(webContent.services || []).map((service) => (
                    <Card key={service.id} className="bg-slate-900 border-slate-800 flex flex-col justify-between">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-bold text-white flex items-center justify-between">
                          <span>{service.title}</span>
                          <Badge variant="outline" className="text-sky-400 font-mono text-[10px]">{service.iconName}</Badge>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3 flex-1 flex flex-col justify-between">
                        <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">{service.description}</p>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {service.features.map((feat, idx) => (
                            <Badge key={idx} className="bg-slate-950 border border-slate-800 text-slate-300 text-[9px]">{feat}</Badge>
                          ))}
                        </div>
                        <div className="flex justify-end gap-2 pt-4 border-t border-slate-800/55 mt-4">
                          <Button onClick={() => setEditingService(service)} variant="ghost" className="h-8 text-[11px] text-sky-400 hover:text-white flex gap-1">
                            <Edit className="w-3.5 h-3.5" /> Edit
                          </Button>
                          <Button onClick={() => deleteService(service.id)} variant="ghost" className="h-8 text-[11px] text-red-400 hover:text-white flex gap-1">
                            <Trash2 className="w-3.5 h-3.5" /> Delete
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="bg-slate-900/40 border-slate-800 border-dashed">
                  <CardHeader>
                    <CardTitle className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                      <Plus className="w-4 h-4 text-emerald-400" /> Add New Service Offering
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-slate-400">Title</label>
                        <Input value={newService.title} onChange={(e) => setNewService({ ...newService, title: e.target.value })} placeholder="e.g. SAP S/4HANA Upgrade" className="bg-slate-950 border-slate-800 text-xs" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-slate-400">Icon</label>
                        <select value={newService.iconName} onChange={(e) => setNewService({ ...newService, iconName: e.target.value })} className="w-full bg-slate-950 border border-slate-800 rounded-md px-3 py-2 text-xs text-white">
                          {AVAILABLE_ICONS.map(ico => <option key={ico} value={ico}>{ico}</option>)}
                        </select>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-slate-400">Image URL</label>
                        <Input value={newService.image} onChange={(e) => setNewService({ ...newService, image: e.target.value })} placeholder="e.g. /image.png" className="bg-slate-950 border-slate-800 text-xs" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-slate-400">Href Link</label>
                        <Input value={newService.href} onChange={(e) => setNewService({ ...newService, href: e.target.value })} placeholder="e.g. /services/sap-upgrade" className="bg-slate-950 border-slate-800 text-xs" />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase font-bold text-slate-400">Description</label>
                      <Textarea value={newService.description} onChange={(e) => setNewService({ ...newService, description: e.target.value })} placeholder="Service description..." className="bg-slate-950 border-slate-800 text-xs h-16" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase font-bold text-slate-400">Key Features (comma-separated)</label>
                      <Input value={newService.features?.join(", ")} onChange={(e) => setNewService({ ...newService, features: e.target.value.split(",").map(f => f.trim()).filter(Boolean) })} placeholder="Feature 1, Feature 2" className="bg-slate-950 border-slate-800 text-xs" />
                    </div>
                    <Button onClick={addService} className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs w-full">Add Service Offering</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Tab: Industries Manager */}
            <TabsContent value="page-industries" className="space-y-6 mt-0">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-4">
                <div>
                  <h2 className="text-lg font-bold text-white flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-sky-400" />
                    Manage Industry Verticals
                  </h2>
                  <p className="text-xs text-slate-400">Add, edit, or remove industry target sectors, icons, slug names, and colors</p>
                </div>
                <Button
                  onClick={handleResetContentDefaults}
                  variant="outline"
                  className="text-red-400 hover:text-white border-red-950 hover:bg-red-950/20 text-xs flex gap-1.5 items-center"
                >
                  <Undo2 className="w-3.5 h-3.5" /> Reset Defaults
                </Button>
              </div>

              <div className="space-y-6">
                {/* Industries Page Copy Editor */}
                {(() => {
                  const industriesTexts = (webContent.pageTexts || initialPageTexts).industries || {
                    heroTitle: "Industry-Focused SAP Solutions That Deliver Business Value",
                    heroDescription: "We design and deliver SAP solutions tailored to the unique processes and challenges of different industries.",
                    sectionTag: "Industries We Serve",
                    sectionTitle: "Seven Industry Verticals. One Unified SAP Platform."
                  };
                  return (
                    <Card className="bg-slate-900 border-slate-800">
                      <CardHeader className="cursor-pointer select-none pb-3 flex flex-row items-center justify-between" onClick={() => setShowIndustriesTexts(!showIndustriesTexts)}>
                        <div>
                          <CardTitle className="text-sm font-bold text-sky-400 flex items-center gap-2">
                            <Globe className="w-4 h-4" />
                            Industries Page Header Config
                          </CardTitle>
                          <CardDescription className="text-xs text-slate-400">Configure page-level hero title, descriptions, and grid headers</CardDescription>
                        </div>
                        <Button variant="ghost" size="sm" className="text-slate-400">
                          {showIndustriesTexts ? "Hide Config" : "Show Config"}
                        </Button>
                      </CardHeader>
                      {showIndustriesTexts && (
                        <CardContent className="space-y-4 border-t border-slate-850 pt-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-1.5 col-span-1">
                              <label className="text-[10px] uppercase font-bold text-slate-400">Hero Label</label>
                              <Input
                                value={industriesTexts.heroLabel || ""}
                                onChange={(e) => handleUpdatePageTexts("industries", { heroLabel: e.target.value })}
                                className="bg-slate-950 border-slate-800 text-xs"
                              />
                            </div>
                            <div className="space-y-1.5 col-span-1">
                              <label className="text-[10px] uppercase font-bold text-slate-400">Section Tag</label>
                              <Input
                                value={industriesTexts.sectionTag || ""}
                                onChange={(e) => handleUpdatePageTexts("industries", { sectionTag: e.target.value })}
                                className="bg-slate-950 border-slate-800 text-xs"
                              />
                            </div>
                            <div className="space-y-1.5 col-span-1 md:col-span-2">
                              <label className="text-[10px] uppercase font-bold text-slate-400">Hero Title</label>
                              <Input
                                value={industriesTexts.heroTitle}
                                onChange={(e) => handleUpdatePageTexts("industries", { heroTitle: e.target.value })}
                                className="bg-slate-950 border-slate-800 text-xs"
                              />
                            </div>
                            <div className="space-y-1.5 col-span-1 md:col-span-2">
                              <label className="text-[10px] uppercase font-bold text-slate-400">Hero Description</label>
                              <Textarea
                                value={industriesTexts.heroDescription}
                                onChange={(e) => handleUpdatePageTexts("industries", { heroDescription: e.target.value })}
                                className="bg-slate-950 border-slate-800 text-xs h-16"
                              />
                            </div>
                            <div className="space-y-1.5 col-span-1 md:col-span-2">
                              <label className="text-[10px] uppercase font-bold text-slate-400">Section Title</label>
                              <Input
                                value={industriesTexts.sectionTitle}
                                onChange={(e) => handleUpdatePageTexts("industries", { sectionTitle: e.target.value })}
                                className="bg-slate-950 border-slate-800 text-xs"
                              />
                            </div>
                          </div>
                        </CardContent>
                      )}
                    </Card>
                  );
                })()}

                {editingIndustry && (
                  <Card className="bg-slate-900 border-sky-500/50 shadow-glow shadow-sky-500/5">
                    <CardHeader className="pb-3 flex flex-row items-center justify-between space-y-0">
                      <CardTitle className="text-sm font-bold text-sky-400">Edit Industry: {editingIndustry.title}</CardTitle>
                      <Button onClick={() => setEditingIndustry(null)} variant="ghost" size="icon" className="h-6 w-6 text-slate-400 hover:text-white rounded-full">
                        <X className="h-3.5 w-3.5" />
                      </Button>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[10px] uppercase font-bold text-slate-400">Title</label>
                          <Input value={editingIndustry.title} onChange={(e) => setEditingIndustry({ ...editingIndustry, title: e.target.value })} className="bg-slate-950 border-slate-800 text-xs" />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[10px] uppercase font-bold text-slate-400">Icon</label>
                          <select value={editingIndustry.iconName} onChange={(e) => setEditingIndustry({ ...editingIndustry, iconName: e.target.value })} className="w-full bg-slate-950 border border-slate-800 rounded-md px-3 py-2 text-xs text-white">
                            {AVAILABLE_ICONS.map(ico => <option key={ico} value={ico}>{ico}</option>)}
                          </select>
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[10px] uppercase font-bold text-slate-400">Image URL</label>
                          <Input value={editingIndustry.image} onChange={(e) => setEditingIndustry({ ...editingIndustry, image: e.target.value })} className="bg-slate-950 border-slate-800 text-xs" />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[10px] uppercase font-bold text-slate-400">Slug</label>
                          <Input value={editingIndustry.slug} onChange={(e) => setEditingIndustry({ ...editingIndustry, slug: e.target.value })} className="bg-slate-950 border-slate-800 text-xs" />
                        </div>
                        <div className="space-y-1.5 col-span-2">
                          <label className="text-[10px] uppercase font-bold text-slate-400">Underline Color Class</label>
                          <select value={editingIndustry.color} onChange={(e) => setEditingIndustry({ ...editingIndustry, color: e.target.value })} className="w-full bg-slate-950 border border-slate-800 rounded-md px-3 py-2 text-xs text-white">
                            {AVAILABLE_COLORS.map(col => <option key={col} value={col}>{col}</option>)}
                          </select>
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-slate-400">Description</label>
                        <Textarea value={editingIndustry.description} onChange={(e) => setEditingIndustry({ ...editingIndustry, description: e.target.value })} className="bg-slate-950 border-slate-800 text-xs h-20" />
                      </div>
                      <div className="flex gap-2 justify-end">
                        <Button onClick={() => setEditingIndustry(null)} variant="outline" className="border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white text-xs">Cancel</Button>
                        <Button onClick={saveIndustryEdit} className="bg-sky-600 hover:bg-sky-500 text-white text-xs">Save Changes</Button>
                      </div>
                    </CardContent>
                  </Card>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(webContent.industries || []).map((ind) => (
                    <Card key={ind.id} className="bg-slate-900 border-slate-800 flex flex-col justify-between">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-bold text-white flex items-center justify-between">
                          <span>{ind.title}</span>
                          <Badge className={`${ind.color} text-slate-950 font-bold font-mono text-[9px]`}>{ind.iconName}</Badge>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3 flex-1 flex flex-col justify-between">
                        <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">{ind.description}</p>
                        <div className="flex justify-end gap-2 pt-4 border-t border-slate-800/55 mt-4">
                          <Button onClick={() => setEditingIndustry(ind)} variant="ghost" className="h-8 text-[11px] text-sky-400 hover:text-white flex gap-1">
                            <Edit className="w-3.5 h-3.5" /> Edit
                          </Button>
                          <Button onClick={() => deleteIndustry(ind.id)} variant="ghost" className="h-8 text-[11px] text-red-400 hover:text-white flex gap-1">
                            <Trash2 className="w-3.5 h-3.5" /> Delete
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="bg-slate-900/40 border-slate-800 border-dashed">
                  <CardHeader>
                    <CardTitle className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                      <Plus className="w-4 h-4 text-emerald-400" /> Add New Industry Vertical
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-slate-400">Title</label>
                        <Input value={newIndustry.title} onChange={(e) => setNewIndustry({ ...newIndustry, title: e.target.value })} placeholder="e.g. Life Sciences" className="bg-slate-950 border-slate-800 text-xs" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-slate-400">Icon</label>
                        <select value={newIndustry.iconName} onChange={(e) => setNewIndustry({ ...newIndustry, iconName: e.target.value })} className="w-full bg-slate-950 border border-slate-800 rounded-md px-3 py-2 text-xs text-white">
                          {AVAILABLE_ICONS.map(ico => <option key={ico} value={ico}>{ico}</option>)}
                        </select>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-slate-400">Image URL</label>
                        <Input value={newIndustry.image} onChange={(e) => setNewIndustry({ ...newIndustry, image: e.target.value })} placeholder="e.g. /image.png" className="bg-slate-950 border-slate-800 text-xs" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-slate-400">Slug</label>
                        <Input value={newIndustry.slug} onChange={(e) => setNewIndustry({ ...newIndustry, slug: e.target.value })} placeholder="e.g. life-sciences" className="bg-slate-950 border-slate-800 text-xs" />
                      </div>
                      <div className="space-y-1.5 col-span-2">
                        <label className="text-[10px] uppercase font-bold text-slate-400">Underline Color Class</label>
                        <select value={newIndustry.color} onChange={(e) => setNewIndustry({ ...newIndustry, color: e.target.value })} className="w-full bg-slate-950 border border-slate-800 rounded-md px-3 py-2 text-xs text-white">
                          {AVAILABLE_COLORS.map(col => <option key={col} value={col}>{col}</option>)}
                        </select>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase font-bold text-slate-400">Description</label>
                      <Textarea value={newIndustry.description} onChange={(e) => setNewIndustry({ ...newIndustry, description: e.target.value })} placeholder="Industry description..." className="bg-slate-950 border-slate-800 text-xs h-16" />
                    </div>
                    <Button onClick={addIndustry} className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs w-full">Add Industry Vertical</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Tab: Resources Manager */}
            <TabsContent value="page-resources" className="space-y-6 mt-0">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-4">
                <div>
                  <h2 className="text-lg font-bold text-white flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-sky-400" />
                    Manage Resource Center
                  </h2>
                  <p className="text-xs text-slate-400">Manage case studies, PDFs, download items, and reference resources</p>
                </div>
                <Button
                  onClick={handleResetContentDefaults}
                  variant="outline"
                  className="text-red-400 hover:text-white border-red-950 hover:bg-red-950/20 text-xs flex gap-1.5 items-center"
                >
                  <Undo2 className="w-3.5 h-3.5" /> Reset Defaults
                </Button>
              </div>

              <div className="space-y-6">
                {/* Resources Page Copy Editor */}
                {(() => {
                  const resourcesTexts = (webContent.pageTexts || initialPageTexts).resources || {
                    heroTitle: "Resources",
                    heroDescription: "Access helpful resources, documentation, and materials to support your business journey.",
                    heroLabel: "RESOURCE CENTER",
                    ctaButtonText: "Explore Resources",
                    sectionTitle: "Everything You Need. One Resource Hub.",
                    ctaTitle: "Need More Help?",
                    ctaDescription: "Can't find what you're looking for? Contact our team for personalized assistance."
                  };
                  return (
                    <Card className="bg-slate-900 border-slate-800">
                      <CardHeader className="cursor-pointer select-none pb-3 flex flex-row items-center justify-between" onClick={() => setShowResourcesTexts(!showResourcesTexts)}>
                        <div>
                          <CardTitle className="text-sm font-bold text-sky-400 flex items-center gap-2">
                            <Globe className="w-4 h-4" />
                            Resources Page Copy Config
                          </CardTitle>
                          <CardDescription className="text-xs text-slate-400">Configure page headers, section titles, and contact CTA details</CardDescription>
                        </div>
                        <Button variant="ghost" size="sm" className="text-slate-400">
                          {showResourcesTexts ? "Hide Config" : "Show Config"}
                        </Button>
                      </CardHeader>
                      {showResourcesTexts && (
                        <CardContent className="space-y-4 border-t border-slate-850 pt-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-1.5 col-span-1">
                              <label className="text-[10px] uppercase font-bold text-slate-400">Hero Label</label>
                              <Input
                                value={resourcesTexts.heroLabel || ""}
                                onChange={(e) => handleUpdatePageTexts("resources", { heroLabel: e.target.value })}
                                className="bg-slate-950 border-slate-800 text-xs"
                              />
                            </div>
                            <div className="space-y-1.5 col-span-1">
                              <label className="text-[10px] uppercase font-bold text-slate-400">Section Title</label>
                              <Input
                                value={resourcesTexts.sectionTitle || ""}
                                onChange={(e) => handleUpdatePageTexts("resources", { sectionTitle: e.target.value })}
                                className="bg-slate-950 border-slate-800 text-xs"
                              />
                            </div>
                            <div className="space-y-1.5 col-span-1 md:col-span-2">
                              <label className="text-[10px] uppercase font-bold text-slate-400">Hero Title</label>
                              <Input
                                value={resourcesTexts.heroTitle}
                                onChange={(e) => handleUpdatePageTexts("resources", { heroTitle: e.target.value })}
                                className="bg-slate-950 border-slate-800 text-xs"
                              />
                            </div>
                            <div className="space-y-1.5 col-span-1 md:col-span-2">
                              <label className="text-[10px] uppercase font-bold text-slate-400">Hero Description</label>
                              <Textarea
                                value={resourcesTexts.heroDescription}
                                onChange={(e) => handleUpdatePageTexts("resources", { heroDescription: e.target.value })}
                                className="bg-slate-950 border-slate-800 text-xs h-16"
                              />
                            </div>

                            <div className="space-y-1.5 col-span-1 md:col-span-2 border-t border-slate-800 pt-3">
                              <h3 className="text-xs font-bold text-slate-300">CTA Section Details</h3>
                            </div>
                            <div className="space-y-1.5 col-span-1">
                              <label className="text-[10px] uppercase font-bold text-slate-400">CTA Title</label>
                              <Input
                                value={resourcesTexts.ctaTitle || ""}
                                onChange={(e) => handleUpdatePageTexts("resources", { ctaTitle: e.target.value })}
                                className="bg-slate-950 border-slate-800 text-xs"
                              />
                            </div>
                            <div className="space-y-1.5 col-span-1">
                              <label className="text-[10px] uppercase font-bold text-slate-400">CTA Button Text</label>
                              <Input
                                value={resourcesTexts.ctaButtonText || ""}
                                onChange={(e) => handleUpdatePageTexts("resources", { ctaButtonText: e.target.value })}
                                className="bg-slate-950 border-slate-800 text-xs"
                              />
                            </div>
                            <div className="space-y-1.5 col-span-1 md:col-span-2">
                              <label className="text-[10px] uppercase font-bold text-slate-400">CTA Description</label>
                              <Textarea
                                value={resourcesTexts.ctaDescription || ""}
                                onChange={(e) => handleUpdatePageTexts("resources", { ctaDescription: e.target.value })}
                                className="bg-slate-950 border-slate-800 text-xs h-16"
                              />
                            </div>
                          </div>
                        </CardContent>
                      )}
                    </Card>
                  );
                })()}

                {editingResource && (
                  <Card className="bg-slate-900 border-sky-500/50 shadow-glow shadow-sky-500/5">
                    <CardHeader className="pb-3 flex flex-row items-center justify-between space-y-0">
                      <CardTitle className="text-sm font-bold text-sky-400">Edit Resource: {editingResource.title}</CardTitle>
                      <Button onClick={() => setEditingResource(null)} variant="ghost" size="icon" className="h-6 w-6 text-slate-400 hover:text-white rounded-full">
                        <X className="h-3.5 w-3.5" />
                      </Button>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[10px] uppercase font-bold text-slate-400">Title</label>
                          <Input value={editingResource.title} onChange={(e) => setEditingResource({ ...editingResource, title: e.target.value })} className="bg-slate-950 border-slate-800 text-xs" />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[10px] uppercase font-bold text-slate-400">Icon</label>
                          <select value={editingResource.iconName} onChange={(e) => setEditingResource({ ...editingResource, iconName: e.target.value })} className="w-full bg-slate-950 border border-slate-800 rounded-md px-3 py-2 text-xs text-white">
                            {AVAILABLE_ICONS.map(ico => <option key={ico} value={ico}>{ico}</option>)}
                          </select>
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[10px] uppercase font-bold text-slate-400">Link URL</label>
                          <Input value={editingResource.link} onChange={(e) => setEditingResource({ ...editingResource, link: e.target.value })} className="bg-slate-950 border-slate-800 text-xs" />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[10px] uppercase font-bold text-slate-400">Underline Color Class</label>
                          <select value={editingResource.color} onChange={(e) => setEditingResource({ ...editingResource, color: e.target.value })} className="w-full bg-slate-950 border border-slate-800 rounded-md px-3 py-2 text-xs text-white">
                            {AVAILABLE_COLORS.map(col => <option key={col} value={col}>{col}</option>)}
                          </select>
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-slate-400">Description</label>
                        <Textarea value={editingResource.description} onChange={(e) => setEditingResource({ ...editingResource, description: e.target.value })} className="bg-slate-950 border-slate-800 text-xs h-20" />
                      </div>
                      <div className="flex gap-2 justify-end">
                        <Button onClick={() => setEditingResource(null)} variant="outline" className="border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white text-xs">Cancel</Button>
                        <Button onClick={saveResourceEdit} className="bg-sky-600 hover:bg-sky-500 text-white text-xs">Save Changes</Button>
                      </div>
                    </CardContent>
                  </Card>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(webContent.resources || []).map((res) => (
                    <Card key={res.id} className="bg-slate-900 border-slate-800 flex flex-col justify-between">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-bold text-white flex items-center justify-between">
                          <span>{res.title}</span>
                          <Badge className={`${res.color} text-slate-950 font-bold font-mono text-[9px]`}>{res.iconName}</Badge>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3 flex-1 flex flex-col justify-between">
                        <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">{res.description}</p>
                        <p className="text-[10px] text-slate-500 font-mono">Link: {res.link}</p>
                        <div className="flex justify-end gap-2 pt-4 border-t border-slate-800/55 mt-4">
                          <Button onClick={() => setEditingResource(res)} variant="ghost" className="h-8 text-[11px] text-sky-400 hover:text-white flex gap-1">
                            <Edit className="w-3.5 h-3.5" /> Edit
                          </Button>
                          <Button onClick={() => deleteResource(res.id)} variant="ghost" className="h-8 text-[11px] text-red-400 hover:text-white flex gap-1">
                            <Trash2 className="w-3.5 h-3.5" /> Delete
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="bg-slate-900/40 border-slate-800 border-dashed">
                  <CardHeader>
                    <CardTitle className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                      <Plus className="w-4 h-4 text-emerald-400" /> Add New Resource
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-slate-400">Title</label>
                        <Input value={newResource.title} onChange={(e) => setNewResource({ ...newResource, title: e.target.value })} placeholder="e.g. Case Study PDF" className="bg-slate-950 border-slate-800 text-xs" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-slate-400">Icon</label>
                        <select value={newResource.iconName} onChange={(e) => setNewResource({ ...newResource, iconName: e.target.value })} className="w-full bg-slate-950 border border-slate-800 rounded-md px-3 py-2 text-xs text-white">
                          {AVAILABLE_ICONS.map(ico => <option key={ico} value={ico}>{ico}</option>)}
                        </select>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-slate-400">Link URL</label>
                        <Input value={newResource.link} onChange={(e) => setNewResource({ ...newResource, link: e.target.value })} placeholder="e.g. /resources/case-study" className="bg-slate-950 border-slate-800 text-xs" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-slate-400">Underline Color Class</label>
                        <select value={newResource.color} onChange={(e) => setNewResource({ ...newResource, color: e.target.value })} className="w-full bg-slate-950 border border-slate-800 rounded-md px-3 py-2 text-xs text-white">
                          {AVAILABLE_COLORS.map(col => <option key={col} value={col}>{col}</option>)}
                        </select>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase font-bold text-slate-400">Description</label>
                      <Textarea value={newResource.description} onChange={(e) => setNewResource({ ...newResource, description: e.target.value })} placeholder="Resource description..." className="bg-slate-950 border-slate-800 text-xs h-16" />
                    </div>
                    <Button onClick={addResource} className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs w-full">Add Resource</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Tab: Careers Manager */}
            <TabsContent value="page-careers" className="space-y-6 mt-0">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-4">
                <div>
                  <h2 className="text-lg font-bold text-white flex items-center gap-2">
                    <Zap className="w-5 h-5 text-sky-400" />
                    Manage Careers Benefits
                  </h2>
                  <p className="text-xs text-slate-400">Manage employee benefits, career descriptions, perks, and workspace culture details</p>
                </div>
                <Button
                  onClick={handleResetContentDefaults}
                  variant="outline"
                  className="text-red-400 hover:text-white border-red-950 hover:bg-red-950/20 text-xs flex gap-1.5 items-center"
                >
                  <Undo2 className="w-3.5 h-3.5" /> Reset Defaults
                </Button>
              </div>

              <div className="space-y-6">
                {/* Careers Page Copy Editor */}
                {(() => {
                  const careersTexts = (webContent.pageTexts || initialPageTexts).careers || {
                    heroTitle: "Join Our Team",
                    heroDescription: "Build your career with Sangronyx and help transform businesses through innovative SAP solutions.",
                    heroLabel: "CAREERS",
                    sectionTag: "Why Sangronyx",
                    sectionTitle: "Growth, Innovation, and Work-Life Integration",
                    sectionDescription: "We offer dynamic growth opportunities, flexible schedules, and a positive environment.",
                    cultureTitle: "Our Culture",
                    cultureDescription: "We believe in transparency, collaborative teamwork, and mutual respect.",
                    principlesTitle: "Our Core Principles",
                    principlesDescription: "Integrity, innovation, customer success, and ongoing learning form our foundation."
                  };
                  return (
                    <Card className="bg-slate-900 border-slate-800">
                      <CardHeader className="cursor-pointer select-none pb-3 flex flex-row items-center justify-between" onClick={() => setShowCareersTexts(!showCareersTexts)}>
                        <div>
                          <CardTitle className="text-sm font-bold text-sky-400 flex items-center gap-2">
                            <Globe className="w-4 h-4" />
                            Careers Page Copy Config
                          </CardTitle>
                          <CardDescription className="text-xs text-slate-400">Configure page headers, sections, culture, and core principles</CardDescription>
                        </div>
                        <Button variant="ghost" size="sm" className="text-slate-400">
                          {showCareersTexts ? "Hide Config" : "Show Config"}
                        </Button>
                      </CardHeader>
                      {showCareersTexts && (
                        <CardContent className="space-y-4 border-t border-slate-850 pt-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-1.5 col-span-1">
                              <label className="text-[10px] uppercase font-bold text-slate-400">Hero Label</label>
                              <Input
                                value={careersTexts.heroLabel || ""}
                                onChange={(e) => handleUpdatePageTexts("careers", { heroLabel: e.target.value })}
                                className="bg-slate-950 border-slate-800 text-xs"
                              />
                            </div>
                            <div className="space-y-1.5 col-span-1">
                              <label className="text-[10px] uppercase font-bold text-slate-400">Section Tag</label>
                              <Input
                                value={careersTexts.sectionTag || ""}
                                onChange={(e) => handleUpdatePageTexts("careers", { sectionTag: e.target.value })}
                                className="bg-slate-950 border-slate-800 text-xs"
                              />
                            </div>
                            <div className="space-y-1.5 col-span-1 md:col-span-2">
                              <label className="text-[10px] uppercase font-bold text-slate-400">Hero Title</label>
                              <Input
                                value={careersTexts.heroTitle}
                                onChange={(e) => handleUpdatePageTexts("careers", { heroTitle: e.target.value })}
                                className="bg-slate-950 border-slate-800 text-xs"
                              />
                            </div>
                            <div className="space-y-1.5 col-span-1 md:col-span-2">
                              <label className="text-[10px] uppercase font-bold text-slate-400">Hero Description</label>
                              <Textarea
                                value={careersTexts.heroDescription}
                                onChange={(e) => handleUpdatePageTexts("careers", { heroDescription: e.target.value })}
                                className="bg-slate-950 border-slate-800 text-xs h-16"
                              />
                            </div>

                            <div className="space-y-1.5 col-span-1 md:col-span-2">
                              <label className="text-[10px] uppercase font-bold text-slate-400">Section Title</label>
                              <Input
                                value={careersTexts.sectionTitle || ""}
                                onChange={(e) => handleUpdatePageTexts("careers", { sectionTitle: e.target.value })}
                                className="bg-slate-950 border-slate-800 text-xs"
                              />
                            </div>
                            <div className="space-y-1.5 col-span-1 md:col-span-2">
                              <label className="text-[10px] uppercase font-bold text-slate-400">Section Description</label>
                              <Textarea
                                value={careersTexts.sectionDescription || ""}
                                onChange={(e) => handleUpdatePageTexts("careers", { sectionDescription: e.target.value })}
                                className="bg-slate-950 border-slate-800 text-xs h-16"
                              />
                            </div>

                            <div className="space-y-1.5 col-span-1 md:col-span-2 border-t border-slate-800 pt-3">
                              <h3 className="text-xs font-bold text-slate-300">Culture & Principles Sections</h3>
                            </div>
                            <div className="space-y-1.5 col-span-1">
                              <label className="text-[10px] uppercase font-bold text-slate-400">Culture Title</label>
                              <Input
                                value={careersTexts.cultureTitle || ""}
                                onChange={(e) => handleUpdatePageTexts("careers", { cultureTitle: e.target.value })}
                                className="bg-slate-950 border-slate-800 text-xs"
                              />
                            </div>
                            <div className="space-y-1.5 col-span-1">
                              <label className="text-[10px] uppercase font-bold text-slate-400">Principles Title</label>
                              <Input
                                value={careersTexts.principlesTitle || ""}
                                onChange={(e) => handleUpdatePageTexts("careers", { principlesTitle: e.target.value })}
                                className="bg-slate-950 border-slate-800 text-xs"
                              />
                            </div>
                            <div className="space-y-1.5 col-span-1">
                              <label className="text-[10px] uppercase font-bold text-slate-400">Culture Description</label>
                              <Textarea
                                value={careersTexts.cultureDescription || ""}
                                onChange={(e) => handleUpdatePageTexts("careers", { cultureDescription: e.target.value })}
                                className="bg-slate-950 border-slate-800 text-xs h-16"
                              />
                            </div>
                            <div className="space-y-1.5 col-span-1">
                              <label className="text-[10px] uppercase font-bold text-slate-400">Principles Description</label>
                              <Textarea
                                value={careersTexts.principlesDescription || ""}
                                onChange={(e) => handleUpdatePageTexts("careers", { principlesDescription: e.target.value })}
                                className="bg-slate-950 border-slate-800 text-xs h-16"
                              />
                            </div>
                          </div>
                        </CardContent>
                      )}
                    </Card>
                  );
                })()}

                {editingBenefit && (
                  <Card className="bg-slate-900 border-sky-500/50 shadow-glow shadow-sky-500/5">
                    <CardHeader className="pb-3 flex flex-row items-center justify-between space-y-0">
                      <CardTitle className="text-sm font-bold text-sky-400">Edit Benefit: {editingBenefit.title}</CardTitle>
                      <Button onClick={() => setEditingBenefit(null)} variant="ghost" size="icon" className="h-6 w-6 text-slate-400 hover:text-white rounded-full">
                        <X className="h-3.5 w-3.5" />
                      </Button>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[10px] uppercase font-bold text-slate-400">Title</label>
                          <Input value={editingBenefit.title} onChange={(e) => setEditingBenefit({ ...editingBenefit, title: e.target.value })} className="bg-slate-950 border-slate-800 text-xs" />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[10px] uppercase font-bold text-slate-400">Icon</label>
                          <select value={editingBenefit.iconName} onChange={(e) => setEditingBenefit({ ...editingBenefit, iconName: e.target.value })} className="w-full bg-slate-950 border border-slate-800 rounded-md px-3 py-2 text-xs text-white">
                            {AVAILABLE_ICONS.map(ico => <option key={ico} value={ico}>{ico}</option>)}
                          </select>
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-slate-400">Description</label>
                        <Textarea value={editingBenefit.description} onChange={(e) => setEditingBenefit({ ...editingBenefit, description: e.target.value })} className="bg-slate-950 border-slate-800 text-xs h-20" />
                      </div>
                      <div className="flex gap-2 justify-end">
                        <Button onClick={() => setEditingBenefit(null)} variant="outline" className="border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white text-xs">Cancel</Button>
                        <Button onClick={saveBenefitEdit} className="bg-sky-600 hover:bg-sky-500 text-white text-xs">Save Changes</Button>
                      </div>
                    </CardContent>
                  </Card>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(webContent.benefits || []).map((ben) => (
                    <Card key={ben.id} className="bg-slate-900 border-slate-800 flex flex-col justify-between">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-bold text-white flex items-center justify-between">
                          <span>{ben.title}</span>
                          <Badge variant="outline" className="text-sky-400 font-mono text-[10px]">{ben.iconName}</Badge>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3 flex-1 flex flex-col justify-between">
                        <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">{ben.description}</p>
                        <div className="flex justify-end gap-2 pt-4 border-t border-slate-800/55 mt-4">
                          <Button onClick={() => setEditingBenefit(ben)} variant="ghost" className="h-8 text-[11px] text-sky-400 hover:text-white flex gap-1">
                            <Edit className="w-3.5 h-3.5" /> Edit
                          </Button>
                          <Button onClick={() => deleteBenefit(ben.id)} variant="ghost" className="h-8 text-[11px] text-red-400 hover:text-white flex gap-1">
                            <Trash2 className="w-3.5 h-3.5" /> Delete
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="bg-slate-900/40 border-slate-800 border-dashed">
                  <CardHeader>
                    <CardTitle className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                      <Plus className="w-4 h-4 text-emerald-400" /> Add New Benefit
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-slate-400">Title</label>
                        <Input value={newBenefit.title} onChange={(e) => setNewBenefit({ ...newBenefit, title: e.target.value })} placeholder="e.g. Health Insurance" className="bg-slate-950 border-slate-800 text-xs" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-slate-400">Icon</label>
                        <select value={newBenefit.iconName} onChange={(e) => setNewBenefit({ ...newBenefit, iconName: e.target.value })} className="w-full bg-slate-950 border border-slate-800 rounded-md px-3 py-2 text-xs text-white">
                          {AVAILABLE_ICONS.map(ico => <option key={ico} value={ico}>{ico}</option>)}
                        </select>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase font-bold text-slate-400">Description</label>
                      <Textarea value={newBenefit.description} onChange={(e) => setNewBenefit({ ...newBenefit, description: e.target.value })} placeholder="Benefit description..." className="bg-slate-950 border-slate-800 text-xs h-16" />
                    </div>
                    <Button onClick={addBenefit} className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs w-full">Add Benefit</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Tab: Partners Manager */}
            <TabsContent value="page-partners" className="space-y-6 mt-0">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-4">
                <div>
                  <h2 className="text-lg font-bold text-white flex items-center gap-2">
                    <Handshake className="w-5 h-5 text-sky-400" />
                    Manage Partner Benefits
                  </h2>
                  <p className="text-xs text-slate-400">Manage partnership criteria, certification offerings, badges, and program perks</p>
                </div>
                <Button
                  onClick={handleResetContentDefaults}
                  variant="outline"
                  className="text-red-400 hover:text-white border-red-950 hover:bg-red-950/20 text-xs flex gap-1.5 items-center"
                >
                  <Undo2 className="w-3.5 h-3.5" /> Reset Defaults
                </Button>
              </div>

              <div className="space-y-6">
                {/* Partners Page Copy Editor */}
                {(() => {
                  const partnersTexts = (webContent.pageTexts || initialPageTexts).partners || {
                    heroTitle: "Partner Ecosystem",
                    heroDescription: "We collaborate with leading technology and service providers to deliver comprehensive SAP solutions.",
                    heroLabel: "PARTNER PROGRAM",
                    ctaButtonText: "Become a Partner",
                    sectionTag: "Partner Benefits",
                    sectionTitle: "Grow Your Business with Sangronyx",
                    sectionDescription: "Unlock growth and deliver exceptional values by partnering with us."
                  };
                  return (
                    <Card className="bg-slate-900 border-slate-800">
                      <CardHeader className="cursor-pointer select-none pb-3 flex flex-row items-center justify-between" onClick={() => setShowPartnersTexts(!showPartnersTexts)}>
                        <div>
                          <CardTitle className="text-sm font-bold text-sky-400 flex items-center gap-2">
                            <Globe className="w-4 h-4" />
                            Partners Page Copy Config
                          </CardTitle>
                          <CardDescription className="text-xs text-slate-400">Configure page headers, section titles, and CTA buttons</CardDescription>
                        </div>
                        <Button variant="ghost" size="sm" className="text-slate-400">
                          {showPartnersTexts ? "Hide Config" : "Show Config"}
                        </Button>
                      </CardHeader>
                      {showPartnersTexts && (
                        <CardContent className="space-y-4 border-t border-slate-850 pt-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-1.5 col-span-1">
                              <label className="text-[10px] uppercase font-bold text-slate-400">Hero Label</label>
                              <Input
                                value={partnersTexts.heroLabel || ""}
                                onChange={(e) => handleUpdatePageTexts("partners", { heroLabel: e.target.value })}
                                className="bg-slate-950 border-slate-800 text-xs"
                              />
                            </div>
                            <div className="space-y-1.5 col-span-1">
                              <label className="text-[10px] uppercase font-bold text-slate-400">Section Tag</label>
                              <Input
                                value={partnersTexts.sectionTag || ""}
                                onChange={(e) => handleUpdatePageTexts("partners", { sectionTag: e.target.value })}
                                className="bg-slate-950 border-slate-805 text-xs"
                              />
                            </div>
                            <div className="space-y-1.5 col-span-1 md:col-span-2">
                              <label className="text-[10px] uppercase font-bold text-slate-400">Hero Title</label>
                              <Input
                                value={partnersTexts.heroTitle}
                                onChange={(e) => handleUpdatePageTexts("partners", { heroTitle: e.target.value })}
                                className="bg-slate-950 border-slate-800 text-xs"
                              />
                            </div>
                            <div className="space-y-1.5 col-span-1 md:col-span-2">
                              <label className="text-[10px] uppercase font-bold text-slate-400">Hero Description</label>
                              <Textarea
                                value={partnersTexts.heroDescription}
                                onChange={(e) => handleUpdatePageTexts("partners", { heroDescription: e.target.value })}
                                className="bg-slate-950 border-slate-800 text-xs h-16"
                              />
                            </div>
                            <div className="space-y-1.5 col-span-1 md:col-span-2">
                              <label className="text-[10px] uppercase font-bold text-slate-400">Section Title</label>
                              <Input
                                value={partnersTexts.sectionTitle}
                                onChange={(e) => handleUpdatePageTexts("partners", { sectionTitle: e.target.value })}
                                className="bg-slate-950 border-slate-800 text-xs"
                              />
                            </div>
                            <div className="space-y-1.5 col-span-1 md:col-span-2">
                              <label className="text-[10px] uppercase font-bold text-slate-400">Section Description</label>
                              <Textarea
                                value={partnersTexts.sectionDescription || ""}
                                onChange={(e) => handleUpdatePageTexts("partners", { sectionDescription: e.target.value })}
                                className="bg-slate-950 border-slate-800 text-xs h-16"
                              />
                            </div>
                            <div className="space-y-1.5 col-span-1 md:col-span-2">
                              <label className="text-[10px] uppercase font-bold text-slate-400">CTA Button Text</label>
                              <Input
                                value={partnersTexts.ctaButtonText || ""}
                                onChange={(e) => handleUpdatePageTexts("partners", { ctaButtonText: e.target.value })}
                                className="bg-slate-950 border-slate-800 text-xs"
                              />
                            </div>
                          </div>
                        </CardContent>
                      )}
                    </Card>
                  );
                })()}

                {editingPartnerBenefit && (
                  <Card className="bg-slate-900 border-sky-500/50 shadow-glow shadow-sky-500/5">
                    <CardHeader className="pb-3 flex flex-row items-center justify-between space-y-0">
                      <CardTitle className="text-sm font-bold text-sky-400">Edit Partner Benefit: {editingPartnerBenefit.title}</CardTitle>
                      <Button onClick={() => setEditingPartnerBenefit(null)} variant="ghost" size="icon" className="h-6 w-6 text-slate-400 hover:text-white rounded-full">
                        <X className="h-3.5 w-3.5" />
                      </Button>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[10px] uppercase font-bold text-slate-400">Title</label>
                          <Input value={editingPartnerBenefit.title} onChange={(e) => setEditingPartnerBenefit({ ...editingPartnerBenefit, title: e.target.value })} className="bg-slate-950 border-slate-800 text-xs" />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[10px] uppercase font-bold text-slate-400">Icon</label>
                          <select value={editingPartnerBenefit.iconName} onChange={(e) => setEditingPartnerBenefit({ ...editingPartnerBenefit, iconName: e.target.value })} className="w-full bg-slate-950 border border-slate-800 rounded-md px-3 py-2 text-xs text-white">
                            {AVAILABLE_ICONS.map(ico => <option key={ico} value={ico}>{ico}</option>)}
                          </select>
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[10px] uppercase font-bold text-slate-400">Link URL</label>
                          <Input value={editingPartnerBenefit.link} onChange={(e) => setEditingPartnerBenefit({ ...editingPartnerBenefit, link: e.target.value })} className="bg-slate-950 border-slate-800 text-xs" />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[10px] uppercase font-bold text-slate-400">Badge Color Class</label>
                          <select value={editingPartnerBenefit.color} onChange={(e) => setEditingPartnerBenefit({ ...editingPartnerBenefit, color: e.target.value })} className="w-full bg-slate-950 border border-slate-800 rounded-md px-3 py-2 text-xs text-white">
                            {AVAILABLE_COLORS.map(col => <option key={col} value={col}>{col}</option>)}
                          </select>
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-slate-400">Description</label>
                        <Textarea value={editingPartnerBenefit.description} onChange={(e) => setEditingPartnerBenefit({ ...editingPartnerBenefit, description: e.target.value })} className="bg-slate-950 border-slate-800 text-xs h-20" />
                      </div>
                      <div className="flex gap-2 justify-end">
                        <Button onClick={() => setEditingPartnerBenefit(null)} variant="outline" className="border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white text-xs">Cancel</Button>
                        <Button onClick={savePartnerBenefitEdit} className="bg-sky-600 hover:bg-sky-500 text-white text-xs">Save Changes</Button>
                      </div>
                    </CardContent>
                  </Card>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(webContent.partnerBenefits || []).map((pb) => (
                    <Card key={pb.id} className="bg-slate-900 border-slate-800 flex flex-col justify-between">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-bold text-white flex items-center justify-between">
                          <span>{pb.title}</span>
                          <Badge className={`${pb.color} text-slate-950 font-bold font-mono text-[9px]`}>{pb.iconName}</Badge>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3 flex-1 flex flex-col justify-between">
                        <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">{pb.description}</p>
                        <p className="text-[10px] text-slate-500 font-mono">Link: {pb.link}</p>
                        <div className="flex justify-end gap-2 pt-4 border-t border-slate-800/55 mt-4">
                          <Button onClick={() => setEditingPartnerBenefit(pb)} variant="ghost" className="h-8 text-[11px] text-sky-400 hover:text-white flex gap-1">
                            <Edit className="w-3.5 h-3.5" /> Edit
                          </Button>
                          <Button onClick={() => deletePartnerBenefit(pb.id)} variant="ghost" className="h-8 text-[11px] text-red-400 hover:text-white flex gap-1">
                            <Trash2 className="w-3.5 h-3.5" /> Delete
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="bg-slate-900/40 border-slate-800 border-dashed">
                  <CardHeader>
                    <CardTitle className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                      <Plus className="w-4 h-4 text-emerald-400" /> Add New Partner Benefit
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-slate-400">Title</label>
                        <Input value={newPartnerBenefit.title} onChange={(e) => setNewPartnerBenefit({ ...newPartnerBenefit, title: e.target.value })} placeholder="e.g. Sales Enablement" className="bg-slate-950 border-slate-800 text-xs" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-slate-400">Icon</label>
                        <select value={newPartnerBenefit.iconName} onChange={(e) => setNewPartnerBenefit({ ...newPartnerBenefit, iconName: e.target.value })} className="w-full bg-slate-950 border border-slate-800 rounded-md px-3 py-2 text-xs text-white">
                          {AVAILABLE_ICONS.map(ico => <option key={ico} value={ico}>{ico}</option>)}
                        </select>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-slate-400">Link URL</label>
                        <Input value={newPartnerBenefit.link} onChange={(e) => setNewPartnerBenefit({ ...newPartnerBenefit, link: e.target.value })} placeholder="e.g. /contact" className="bg-slate-950 border-slate-800 text-xs" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-slate-400">Badge Color Class</label>
                        <select value={newPartnerBenefit.color} onChange={(e) => setNewPartnerBenefit({ ...newPartnerBenefit, color: e.target.value })} className="w-full bg-slate-950 border border-slate-800 rounded-md px-3 py-2 text-xs text-white">
                          {AVAILABLE_COLORS.map(col => <option key={col} value={col}>{col}</option>)}
                        </select>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase font-bold text-slate-400">Description</label>
                      <Textarea value={newPartnerBenefit.description} onChange={(e) => setNewPartnerBenefit({ ...newPartnerBenefit, description: e.target.value })} placeholder="Benefit description..." className="bg-slate-950 border-slate-800 text-xs h-16" />
                    </div>
                    <Button onClick={addPartnerBenefit} className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs w-full">Add Partner Benefit</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Tab: Leadership Manager */}
            <TabsContent value="page-leadership" className="space-y-6 mt-0">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-4">
                <div>
                  <h2 className="text-lg font-bold text-white flex items-center gap-2">
                    <Users className="w-5 h-5 text-sky-400" />
                    Manage Team (Who We Are)
                  </h2>
                  <p className="text-xs text-slate-400">Manage company leaders, roles, designations, and professional biographies</p>
                </div>
                <Button
                  onClick={handleResetContentDefaults}
                  variant="outline"
                  className="text-red-400 hover:text-white border-red-950 hover:bg-red-950/20 text-xs flex gap-1.5 items-center"
                >
                  <Undo2 className="w-3.5 h-3.5" /> Reset Defaults
                </Button>
              </div>

              <div className="space-y-6">
                {/* Who We Are Page Copy Editor */}
                {(() => {
                  const whoWeAreTexts = (webContent.pageTexts || initialPageTexts).whoWeAre || {
                    heroTitle: "Innovating for Business Growth",
                    heroDescription: "We help companies navigate complex challenges and discover new avenues of value.",
                    heroLabel: "WHO WE ARE",
                    sectionTag: "Our Journey",
                    storyTitle: "A Decade of SAP Excellence",
                    storyParagraphs: [
                      "Founded with a vision to simplify enterprise software, we have grown into a trusted SAP advisory partner.",
                      "Our team comprises senior consultants and enterprise architects with deep industry experience."
                    ],
                    stats: [
                      { value: "10+", label: "Years of Excellence" },
                      { value: "50+", label: "SAP Experts" },
                      { value: "120+", label: "Successful Projects" },
                      { value: "100%", label: "Client Commitment" }
                    ],
                    sectionTitle: "Powered by Expertise",
                    sectionDescription: "Our team brings together decades of experience across SAP ecosystems and technology integrations."
                  };
                  return (
                    <Card className="bg-slate-900 border-slate-800">
                      <CardHeader className="cursor-pointer select-none pb-3 flex flex-row items-center justify-between" onClick={() => setShowWhoWeAreTexts(!showWhoWeAreTexts)}>
                        <div>
                          <CardTitle className="text-sm font-bold text-sky-400 flex items-center gap-2">
                            <Globe className="w-4 h-4" />
                            Who We Are (About Us) Page Copy Config
                          </CardTitle>
                          <CardDescription className="text-xs text-slate-400">Configure page headers, story paragraphs, stats, and team description</CardDescription>
                        </div>
                        <Button variant="ghost" size="sm" className="text-slate-400">
                          {showWhoWeAreTexts ? "Hide Config" : "Show Config"}
                        </Button>
                      </CardHeader>
                      {showWhoWeAreTexts && (
                        <CardContent className="space-y-4 border-t border-slate-850 pt-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-1.5 col-span-1">
                              <label className="text-[10px] uppercase font-bold text-slate-400">Hero Label</label>
                              <Input
                                value={whoWeAreTexts.heroLabel || ""}
                                onChange={(e) => handleUpdatePageTexts("whoWeAre", { heroLabel: e.target.value })}
                                className="bg-slate-950 border-slate-800 text-xs"
                              />
                            </div>
                            <div className="space-y-1.5 col-span-1">
                              <label className="text-[10px] uppercase font-bold text-slate-400">Section Tag</label>
                              <Input
                                value={whoWeAreTexts.sectionTag || ""}
                                onChange={(e) => handleUpdatePageTexts("whoWeAre", { sectionTag: e.target.value })}
                                className="bg-slate-950 border-slate-800 text-xs"
                              />
                            </div>
                            <div className="space-y-1.5 col-span-1 md:col-span-2">
                              <label className="text-[10px] uppercase font-bold text-slate-400">Hero Title</label>
                              <Input
                                value={whoWeAreTexts.heroTitle}
                                onChange={(e) => handleUpdatePageTexts("whoWeAre", { heroTitle: e.target.value })}
                                className="bg-slate-950 border-slate-800 text-xs"
                              />
                            </div>
                            <div className="space-y-1.5 col-span-1 md:col-span-2">
                              <label className="text-[10px] uppercase font-bold text-slate-400">Hero Description</label>
                              <Textarea
                                value={whoWeAreTexts.heroDescription}
                                onChange={(e) => handleUpdatePageTexts("whoWeAre", { heroDescription: e.target.value })}
                                className="bg-slate-950 border-slate-800 text-xs h-16"
                              />
                            </div>

                            <div className="space-y-1.5 col-span-1 md:col-span-2 border-t border-slate-800 pt-3">
                              <h3 className="text-xs font-bold text-slate-300">Our Story & Paragraphs</h3>
                            </div>
                            <div className="space-y-1.5 col-span-1 md:col-span-2">
                              <label className="text-[10px] uppercase font-bold text-slate-400">Story Title</label>
                              <Input
                                value={whoWeAreTexts.storyTitle || ""}
                                onChange={(e) => handleUpdatePageTexts("whoWeAre", { storyTitle: e.target.value })}
                                className="bg-slate-950 border-slate-800 text-xs"
                              />
                            </div>
                            <div className="space-y-1.5 col-span-1 md:col-span-2">
                              <label className="text-[10px] uppercase font-bold text-slate-400">Story Paragraphs (One paragraph per line)</label>
                              <Textarea
                                value={(whoWeAreTexts.storyParagraphs || []).join("\n")}
                                onChange={(e) => handleUpdatePageTexts("whoWeAre", { storyParagraphs: e.target.value.split("\n").filter(line => line.trim() !== "") })}
                                className="bg-slate-950 border-slate-800 text-xs h-24"
                              />
                            </div>

                            <div className="space-y-1.5 col-span-1 md:col-span-2 border-t border-slate-800 pt-3">
                              <h3 className="text-xs font-bold text-slate-300">Team Section Config</h3>
                            </div>
                            <div className="space-y-1.5 col-span-1 md:col-span-2">
                              <label className="text-[10px] uppercase font-bold text-slate-400">Section Title</label>
                              <Input
                                value={whoWeAreTexts.sectionTitle || ""}
                                onChange={(e) => handleUpdatePageTexts("whoWeAre", { sectionTitle: e.target.value })}
                                className="bg-slate-950 border-slate-800 text-xs"
                              />
                            </div>
                            <div className="space-y-1.5 col-span-1 md:col-span-2">
                              <label className="text-[10px] uppercase font-bold text-slate-400">Section Description</label>
                              <Textarea
                                value={whoWeAreTexts.sectionDescription || ""}
                                onChange={(e) => handleUpdatePageTexts("whoWeAre", { sectionDescription: e.target.value })}
                                className="bg-slate-950 border-slate-800 text-xs h-16"
                              />
                            </div>
                          </div>

                          <div className="border-t border-slate-800 pt-4">
                            <h3 className="text-xs font-bold text-slate-300 mb-3">Stats Items</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                              {(whoWeAreTexts.stats || []).map((stat, idx) => (
                                <Card key={idx} className="bg-slate-950 border-slate-850 p-3 space-y-2">
                                  <div>
                                    <label className="text-[9px] uppercase font-bold text-slate-500">Stat {idx + 1} Value</label>
                                    <Input
                                      value={stat.value}
                                      onChange={(e) => {
                                        const newStats = [...(whoWeAreTexts.stats || [])];
                                        newStats[idx] = { ...stat, value: e.target.value };
                                        handleUpdatePageTexts("whoWeAre", { stats: newStats });
                                      }}
                                      className="bg-slate-900 border-slate-800 text-xs py-1 h-7"
                                    />
                                  </div>
                                  <div>
                                    <label className="text-[9px] uppercase font-bold text-slate-500">Stat {idx + 1} Label</label>
                                    <Input
                                      value={stat.label}
                                      onChange={(e) => {
                                        const newStats = [...(whoWeAreTexts.stats || [])];
                                        newStats[idx] = { ...stat, label: e.target.value };
                                        handleUpdatePageTexts("whoWeAre", { stats: newStats });
                                      }}
                                      className="bg-slate-900 border-slate-800 text-xs py-1 h-7"
                                    />
                                  </div>
                                </Card>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      )}
                    </Card>
                  );
                })()}

                {editingLeadership && (
                  <Card className="bg-slate-900 border-sky-500/50 shadow-glow shadow-sky-500/5">
                    <CardHeader className="pb-3 flex flex-row items-center justify-between space-y-0">
                      <CardTitle className="text-sm font-bold text-sky-400">Edit Member: {editingLeadership.name}</CardTitle>
                      <Button onClick={() => setEditingLeadership(null)} variant="ghost" size="icon" className="h-6 w-6 text-slate-400 hover:text-white rounded-full">
                        <X className="h-3.5 w-3.5" />
                      </Button>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[10px] uppercase font-bold text-slate-400">Name</label>
                          <Input value={editingLeadership.name} onChange={(e) => setEditingLeadership({ ...editingLeadership, name: e.target.value })} className="bg-slate-950 border-slate-800 text-xs" />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[10px] uppercase font-bold text-slate-400">Role / Designation</label>
                          <Input value={editingLeadership.role} onChange={(e) => setEditingLeadership({ ...editingLeadership, role: e.target.value })} className="bg-slate-950 border-slate-800 text-xs" />
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-slate-400">Description</label>
                        <Textarea value={editingLeadership.description} onChange={(e) => setEditingLeadership({ ...editingLeadership, description: e.target.value })} className="bg-slate-950 border-slate-800 text-xs h-20" />
                      </div>
                      <div className="flex gap-2 justify-end">
                        <Button onClick={() => setEditingLeadership(null)} variant="outline" className="border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white text-xs">Cancel</Button>
                        <Button onClick={saveLeadershipEdit} className="bg-sky-600 hover:bg-sky-500 text-white text-xs">Save Changes</Button>
                      </div>
                    </CardContent>
                  </Card>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(webContent.leadership || []).map((lead) => (
                    <Card key={lead.id} className="bg-slate-900 border-slate-800 flex flex-col justify-between">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-bold text-white flex flex-col gap-0.5">
                          <span>{lead.name}</span>
                          <span className="text-[10px] text-sky-400 font-semibold uppercase tracking-wider">{lead.role}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3 flex-1 flex flex-col justify-between">
                        <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">{lead.description}</p>
                        <div className="flex justify-end gap-2 pt-4 border-t border-slate-800/55 mt-4">
                          <Button onClick={() => setEditingLeadership(lead)} variant="ghost" className="h-8 text-[11px] text-sky-400 hover:text-white flex gap-1">
                            <Edit className="w-3.5 h-3.5" /> Edit
                          </Button>
                          <Button onClick={() => deleteLeadership(lead.id)} variant="ghost" className="h-8 text-[11px] text-red-400 hover:text-white flex gap-1">
                            <Trash2 className="w-3.5 h-3.5" /> Delete
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="bg-slate-900/40 border-slate-800 border-dashed">
                  <CardHeader>
                    <CardTitle className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                      <Plus className="w-4 h-4 text-emerald-400" /> Add New Leadership / Team Member
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-slate-400">Name</label>
                        <Input value={newLeadership.name} onChange={(e) => setNewLeadership({ ...newLeadership, name: e.target.value })} placeholder="e.g. John Smith" className="bg-slate-950 border-slate-800 text-xs" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-slate-400">Role / Designation</label>
                        <Input value={newLeadership.role} onChange={(e) => setNewLeadership({ ...newLeadership, role: e.target.value })} placeholder="e.g. Chief Operations Officer" className="bg-slate-950 border-slate-800 text-xs" />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase font-bold text-slate-400">Description</label>
                      <Textarea value={newLeadership.description} onChange={(e) => setNewLeadership({ ...newLeadership, description: e.target.value })} placeholder="Professional bio..." className="bg-slate-950 border-slate-800 text-xs h-16" />
                    </div>
                    <Button onClick={addLeadership} className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs w-full">Add Team Member</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Home Page Config Tab */}
            <TabsContent value="page-home" className="space-y-6 mt-0">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-4">
                <div>
                  <h2 className="text-lg font-bold text-white flex items-center gap-2">
                    <Globe className="w-5 h-5 text-sky-400" />
                    Manage Home Page Content
                  </h2>
                  <p className="text-xs text-slate-400">Configure hero copy, key features grid, why choose us reasons list, and call-to-actions</p>
                </div>
              </div>

              {/* Home Hero Settings Card */}
              {(() => {
                const homeTexts = webContent.pageTexts?.home || {};
                return (
                  <Card className="bg-slate-900 border-slate-800">
                    <CardHeader className="cursor-pointer select-none pb-3 flex flex-row items-center justify-between" onClick={() => setShowHomeTexts(!showHomeTexts)}>
                      <div>
                        <CardTitle className="text-sm font-bold text-sky-400 flex items-center gap-2">
                          <Sliders className="w-4 h-4" />
                          Hero, Features Title & CTA Copy Settings
                        </CardTitle>
                        <CardDescription className="text-xs text-slate-400">Manage titles, subtitles, labels, and CTA buttons on the Home Page</CardDescription>
                      </div>
                      <Button variant="ghost" size="sm" className="text-slate-400 text-xs">
                        {showHomeTexts ? "Hide" : "Show"}
                      </Button>
                    </CardHeader>
                    {showHomeTexts && (
                      <CardContent className="space-y-4 pt-3 border-t border-slate-800/60">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="space-y-1.5">
                            <label className="text-[10px] uppercase font-bold text-slate-400">Hero Label</label>
                            <Input value={homeTexts.heroLabel || ""} onChange={(e) => handleUpdatePageTexts("home", { heroLabel: e.target.value })} className="bg-slate-950 border-slate-800 text-xs text-white" />
                          </div>
                          <div className="space-y-1.5 md:col-span-2">
                            <label className="text-[10px] uppercase font-bold text-slate-400">Hero Title</label>
                            <Input value={homeTexts.heroTitle || ""} onChange={(e) => handleUpdatePageTexts("home", { heroTitle: e.target.value })} className="bg-slate-950 border-slate-800 text-xs text-white" />
                          </div>
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[10px] uppercase font-bold text-slate-400">Hero Description</label>
                          <Textarea value={homeTexts.heroDescription || ""} onChange={(e) => handleUpdatePageTexts("home", { heroDescription: e.target.value })} className="bg-slate-950 border-slate-800 text-xs text-white h-20" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-slate-800/40 pt-4">
                          <div className="space-y-1.5 col-span-3">
                            <label className="text-[10px] uppercase font-bold text-slate-400">Features Section Title</label>
                            <Input value={homeTexts.sectionTitle || ""} onChange={(e) => handleUpdatePageTexts("home", { sectionTitle: e.target.value })} className="bg-slate-950 border-slate-800 text-xs text-white" />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[10px] uppercase font-bold text-slate-400">Why Choose Title</label>
                            <Input value={homeTexts.whyChooseTitle || ""} onChange={(e) => handleUpdatePageTexts("home", { whyChooseTitle: e.target.value })} className="bg-slate-950 border-slate-800 text-xs text-white" />
                          </div>
                          <div className="space-y-1.5 md:col-span-2">
                            <label className="text-[10px] uppercase font-bold text-slate-400">Why Choose Description</label>
                            <Input value={homeTexts.whyChooseDescription || ""} onChange={(e) => handleUpdatePageTexts("home", { whyChooseDescription: e.target.value })} className="bg-slate-950 border-slate-800 text-xs text-white" />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-slate-800/40 pt-4">
                          <div className="space-y-1.5 md:col-span-2">
                            <label className="text-[10px] uppercase font-bold text-slate-400">CTA Title</label>
                            <Input value={homeTexts.ctaTitle || ""} onChange={(e) => handleUpdatePageTexts("home", { ctaTitle: e.target.value })} className="bg-slate-950 border-slate-800 text-xs text-white" />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[10px] uppercase font-bold text-slate-400">CTA Button Text</label>
                            <Input value={homeTexts.ctaButtonText || ""} onChange={(e) => handleUpdatePageTexts("home", { ctaButtonText: e.target.value })} className="bg-slate-950 border-slate-800 text-xs text-white" />
                          </div>
                          <div className="space-y-1.5 col-span-3">
                            <label className="text-[10px] uppercase font-bold text-slate-400">CTA Description</label>
                            <Textarea value={homeTexts.ctaDescription || ""} onChange={(e) => handleUpdatePageTexts("home", { ctaDescription: e.target.value })} className="bg-slate-950 border-slate-800 text-xs text-white h-16" />
                          </div>
                        </div>
                      </CardContent>
                    )}
                  </Card>
                );
              })()}

              {/* Home Features (Card Blocks) Editor */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-bold text-slate-200">Key Features List (Managed and Ordered)</h3>
                  <span className="text-[10px] text-slate-500 font-medium">Re-order blocks to set position in live site</span>
                </div>

                {editingHomeFeature && (
                  <Card className="bg-slate-900 border-sky-950 p-4 space-y-4">
                    <h4 className="text-xs font-bold text-sky-400">Editing Home Feature: {editingHomeFeature.title}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-slate-400">Title</label>
                        <Input value={editingHomeFeature.title} onChange={(e) => setEditingHomeFeature({ ...editingHomeFeature, title: e.target.value })} className="bg-slate-950 border-slate-800 text-xs" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-slate-400">Icon Component Name</label>
                        <select value={editingHomeFeature.iconName} onChange={(e) => setEditingHomeFeature({ ...editingHomeFeature, iconName: e.target.value })} className="bg-slate-950 border-slate-800 text-xs h-9 w-full rounded-md px-3 text-white border">
                          {AVAILABLE_ICONS.map(i => <option key={i} value={i}>{i}</option>)}
                        </select>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-slate-400">Link URL</label>
                        <Input value={editingHomeFeature.link} onChange={(e) => setEditingHomeFeature({ ...editingHomeFeature, link: e.target.value })} className="bg-slate-950 border-slate-800 text-xs" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-slate-400">Link Action Text</label>
                        <Input value={editingHomeFeature.linkText} onChange={(e) => setEditingHomeFeature({ ...editingHomeFeature, linkText: e.target.value })} className="bg-slate-950 border-slate-800 text-xs" />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase font-bold text-slate-400">Description</label>
                      <Textarea value={editingHomeFeature.description} onChange={(e) => setEditingHomeFeature({ ...editingHomeFeature, description: e.target.value })} className="bg-slate-950 border-slate-800 text-xs h-16" />
                    </div>
                    <div className="flex justify-end gap-2">
                      <Button onClick={() => setEditingHomeFeature(null)} variant="ghost" className="text-xs text-slate-400">Cancel</Button>
                      <Button onClick={saveHomeFeatureEdit} className="bg-sky-600 hover:bg-sky-500 text-white text-xs">Save Changes</Button>
                    </div>
                  </Card>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(webContent.homeFeatures || []).map((feat, index) => (
                    <Card key={index} className="bg-slate-900 border-slate-800 flex flex-col justify-between">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-sm font-bold text-white flex items-center gap-2">
                            <span className="w-5 h-5 rounded-md bg-sky-500/10 flex items-center justify-center text-sky-400 text-xs">#{index+1}</span>
                            {feat.title}
                          </CardTitle>
                          <div className="flex items-center gap-1">
                            <Button onClick={() => moveHomeFeature(index, 'up')} disabled={index === 0} size="icon" variant="ghost" className="h-6.5 w-6.5 text-slate-400 hover:text-white disabled:opacity-30">▲</Button>
                            <Button onClick={() => moveHomeFeature(index, 'down')} disabled={index === (webContent.homeFeatures?.length || 0) - 1} size="icon" variant="ghost" className="h-6.5 w-6.5 text-slate-400 hover:text-white disabled:opacity-30">▼</Button>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-3 flex-1 flex flex-col justify-between">
                        <p className="text-xs text-slate-400 leading-relaxed">{feat.description}</p>
                        <div className="text-[10px] text-slate-500 font-medium">Link: {feat.link} · Action: {feat.linkText} · Icon: {feat.iconName}</div>
                        <div className="flex justify-end gap-2 pt-4 border-t border-slate-800/55 mt-4">
                          <Button onClick={() => setEditingHomeFeature({ ...feat, _index: index })} variant="ghost" className="h-8 text-[11px] text-sky-400 hover:text-white flex gap-1">
                            <Edit className="w-3.5 h-3.5" /> Edit
                          </Button>
                          <Button onClick={() => deleteHomeFeature(index)} variant="ghost" className="h-8 text-[11px] text-red-400 hover:text-white flex gap-1">
                            <Trash2 className="w-3.5 h-3.5" /> Delete
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="bg-slate-900/40 border-slate-800 border-dashed">
                  <CardHeader>
                    <CardTitle className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                      <Plus className="w-4 h-4 text-emerald-400" /> Add New Key Feature Card
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-slate-400">Title</label>
                        <Input value={newHomeFeature.title} onChange={(e) => setNewHomeFeature({ ...newHomeFeature, title: e.target.value })} placeholder="e.g. Real-Time Analytics" className="bg-slate-950 border-slate-800 text-xs" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-slate-400">Icon Component</label>
                        <select value={newHomeFeature.iconName} onChange={(e) => setNewHomeFeature({ ...newHomeFeature, iconName: e.target.value })} className="bg-slate-950 border-slate-800 text-xs h-9 w-full rounded-md px-3 text-white border">
                          {AVAILABLE_ICONS.map(i => <option key={i} value={i}>{i}</option>)}
                        </select>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-slate-400">Link URL</label>
                        <Input value={newHomeFeature.link} onChange={(e) => setNewHomeFeature({ ...newHomeFeature, link: e.target.value })} placeholder="e.g. /solutions" className="bg-slate-950 border-slate-800 text-xs" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-slate-400">Link Text</label>
                        <Input value={newHomeFeature.linkText} onChange={(e) => setNewHomeFeature({ ...newHomeFeature, linkText: e.target.value })} placeholder="e.g. Explore" className="bg-slate-950 border-slate-800 text-xs" />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase font-bold text-slate-400">Description</label>
                      <Textarea value={newHomeFeature.description} onChange={(e) => setNewHomeFeature({ ...newHomeFeature, description: e.target.value })} placeholder="Provide key highlights..." className="bg-slate-950 border-slate-800 text-xs h-16" />
                    </div>
                    <Button onClick={addHomeFeature} className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs w-full">Add Feature Card</Button>
                  </CardContent>
                </Card>
              </div>

              {/* Why Choose Us Reasons List Editor */}
              <div className="space-y-4 border-t border-slate-800 pt-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-bold text-slate-200">Why Choose Us Reasons List</h3>
                  <span className="text-[10px] text-slate-500 font-medium">Re-order blocks to set position in live site</span>
                </div>

                {editingHomeReason && (
                  <Card className="bg-slate-900 border-sky-950 p-4 space-y-4">
                    <h4 className="text-xs font-bold text-sky-400">Editing Reason: {editingHomeReason.title}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-slate-400">Title</label>
                        <Input value={editingHomeReason.title} onChange={(e) => setEditingHomeReason({ ...editingHomeReason, title: e.target.value })} className="bg-slate-950 border-slate-800 text-xs" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-slate-400">Icon Component Name</label>
                        <select value={editingHomeReason.iconName} onChange={(e) => setEditingHomeReason({ ...editingHomeReason, iconName: e.target.value })} className="bg-slate-950 border-slate-800 text-xs h-9 w-full rounded-md px-3 text-white border">
                          {AVAILABLE_ICONS.map(i => <option key={i} value={i}>{i}</option>)}
                        </select>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase font-bold text-slate-400">Description</label>
                      <Textarea value={editingHomeReason.description} onChange={(e) => setEditingHomeReason({ ...editingHomeReason, description: e.target.value })} className="bg-slate-950 border-slate-800 text-xs h-16" />
                    </div>
                    <div className="flex justify-end gap-2">
                      <Button onClick={() => setEditingHomeReason(null)} variant="ghost" className="text-xs text-slate-400">Cancel</Button>
                      <Button onClick={saveHomeReasonEdit} className="bg-sky-600 hover:bg-sky-500 text-white text-xs">Save Changes</Button>
                    </div>
                  </Card>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(webContent.homeReasons || []).map((reason, index) => (
                    <Card key={index} className="bg-slate-900 border-slate-800 flex flex-col justify-between">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-sm font-bold text-white flex items-center gap-2">
                            <span className="w-5 h-5 rounded-md bg-emerald-500/10 flex items-center justify-center text-emerald-400 text-xs">#{index+1}</span>
                            {reason.title}
                          </CardTitle>
                          <div className="flex items-center gap-1">
                            <Button onClick={() => moveHomeReason(index, 'up')} disabled={index === 0} size="icon" variant="ghost" className="h-6.5 w-6.5 text-slate-400 hover:text-white disabled:opacity-30">▲</Button>
                            <Button onClick={() => moveHomeReason(index, 'down')} disabled={index === (webContent.homeReasons?.length || 0) - 1} size="icon" variant="ghost" className="h-6.5 w-6.5 text-slate-400 hover:text-white disabled:opacity-30">▼</Button>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-3 flex-1 flex flex-col justify-between">
                        <p className="text-xs text-slate-400 leading-relaxed">{reason.description}</p>
                        <div className="text-[10px] text-slate-500 font-medium">Icon: {reason.iconName}</div>
                        <div className="flex justify-end gap-2 pt-4 border-t border-slate-800/55 mt-4">
                          <Button onClick={() => setEditingHomeReason({ ...reason, _index: index })} variant="ghost" className="h-8 text-[11px] text-sky-400 hover:text-white flex gap-1">
                            <Edit className="w-3.5 h-3.5" /> Edit
                          </Button>
                          <Button onClick={() => deleteHomeReason(index)} variant="ghost" className="h-8 text-[11px] text-red-400 hover:text-white flex gap-1">
                            <Trash2 className="w-3.5 h-3.5" /> Delete
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="bg-slate-900/40 border-slate-800 border-dashed">
                  <CardHeader>
                    <CardTitle className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                      <Plus className="w-4 h-4 text-emerald-400" /> Add New Reason Card
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-slate-400">Title</label>
                        <Input value={newHomeReason.title} onChange={(e) => setNewHomeReason({ ...newHomeReason, title: e.target.value })} placeholder="e.g. SLA-backed Delivery" className="bg-slate-950 border-slate-800 text-xs" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-slate-400">Icon Component</label>
                        <select value={newHomeReason.iconName} onChange={(e) => setNewHomeReason({ ...newHomeReason, iconName: e.target.value })} className="bg-slate-950 border-slate-800 text-xs h-9 w-full rounded-md px-3 text-white border">
                          {AVAILABLE_ICONS.map(i => <option key={i} value={i}>{i}</option>)}
                        </select>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase font-bold text-slate-400">Description</label>
                      <Textarea value={newHomeReason.description} onChange={(e) => setNewHomeReason({ ...newHomeReason, description: e.target.value })} placeholder="Provide highlights..." className="bg-slate-950 border-slate-800 text-xs h-16" />
                    </div>
                    <Button onClick={addHomeReason} className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs w-full">Add Reason Card</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Products Page Config Tab */}
            <TabsContent value="page-products" className="space-y-6 mt-0">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-4">
                <div>
                  <h2 className="text-lg font-bold text-white flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-sky-400" />
                    Manage Products Page
                  </h2>
                  <p className="text-xs text-slate-400">Configure page headers and CRUD list of SAP product solutions offerings</p>
                </div>
              </div>

              {/* Products Page Header Settings Card */}
              {(() => {
                const productsTexts = webContent.pageTexts?.productsPage || {};
                return (
                  <Card className="bg-slate-900 border-slate-800">
                    <CardHeader className="cursor-pointer select-none pb-3 flex flex-row items-center justify-between" onClick={() => setShowProductsTexts(!showProductsTexts)}>
                      <div>
                        <CardTitle className="text-sm font-bold text-sky-400 flex items-center gap-2">
                          <Sliders className="w-4 h-4" />
                          Products Page Hero & CTA Settings
                        </CardTitle>
                        <CardDescription className="text-xs text-slate-400">Manage titles, subtitles, labels, and CTA buttons on the Products Page</CardDescription>
                      </div>
                      <Button variant="ghost" size="sm" className="text-slate-400 text-xs">
                        {showProductsTexts ? "Hide" : "Show"}
                      </Button>
                    </CardHeader>
                    {showProductsTexts && (
                      <CardContent className="space-y-4 pt-3 border-t border-slate-800/60">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="space-y-1.5">
                            <label className="text-[10px] uppercase font-bold text-slate-400">Hero Label</label>
                            <Input value={productsTexts.heroLabel || ""} onChange={(e) => handleUpdatePageTexts("productsPage", { heroLabel: e.target.value })} className="bg-slate-950 border-slate-800 text-xs text-white" />
                          </div>
                          <div className="space-y-1.5 md:col-span-2">
                            <label className="text-[10px] uppercase font-bold text-slate-400">Hero Title</label>
                            <Input value={productsTexts.heroTitle || ""} onChange={(e) => handleUpdatePageTexts("productsPage", { heroTitle: e.target.value })} className="bg-slate-950 border-slate-800 text-xs text-white" />
                          </div>
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[10px] uppercase font-bold text-slate-400">Hero Description</label>
                          <Textarea value={productsTexts.heroDescription || ""} onChange={(e) => handleUpdatePageTexts("productsPage", { heroDescription: e.target.value })} className="bg-slate-950 border-slate-800 text-xs text-white h-20" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-slate-800/40 pt-4">
                          <div className="space-y-1.5 md:col-span-2">
                            <label className="text-[10px] uppercase font-bold text-slate-400">CTA Title</label>
                            <Input value={productsTexts.ctaTitle || ""} onChange={(e) => handleUpdatePageTexts("productsPage", { ctaTitle: e.target.value })} className="bg-slate-950 border-slate-800 text-xs text-white" />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[10px] uppercase font-bold text-slate-400">CTA Button Text</label>
                            <Input value={productsTexts.ctaButtonText || ""} onChange={(e) => handleUpdatePageTexts("productsPage", { ctaButtonText: e.target.value })} className="bg-slate-950 border-slate-800 text-xs text-white" />
                          </div>
                          <div className="space-y-1.5 col-span-3">
                            <label className="text-[10px] uppercase font-bold text-slate-400">CTA Description</label>
                            <Textarea value={productsTexts.ctaDescription || ""} onChange={(e) => handleUpdatePageTexts("productsPage", { ctaDescription: e.target.value })} className="bg-slate-950 border-slate-800 text-xs text-white h-16" />
                          </div>
                        </div>
                      </CardContent>
                    )}
                  </Card>
                );
              })()}

              {/* Products Editor list */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-bold text-slate-200">SAP Product Offerings List</h3>
                  <span className="text-[10px] text-slate-500 font-medium">Re-order blocks to set position in live site</span>
                </div>

                {editingProduct && (
                  <Card className="bg-slate-900 border-sky-950 p-4 space-y-4">
                    <h4 className="text-xs font-bold text-sky-400">Editing Product Offering: {editingProduct.title}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-slate-400">Title</label>
                        <Input value={editingProduct.title} onChange={(e) => setEditingProduct({ ...editingProduct, title: e.target.value })} className="bg-slate-950 border-slate-800 text-xs" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-slate-400">Subtitle</label>
                        <Input value={editingProduct.subtitle} onChange={(e) => setEditingProduct({ ...editingProduct, subtitle: e.target.value })} className="bg-slate-950 border-slate-800 text-xs" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-slate-400">Icon Component</label>
                        <select value={editingProduct.iconName} onChange={(e) => setEditingProduct({ ...editingProduct, iconName: e.target.value })} className="bg-slate-950 border-slate-800 text-xs h-9 w-full rounded-md px-3 text-white border">
                          {AVAILABLE_ICONS.map(i => <option key={i} value={i}>{i}</option>)}
                        </select>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-slate-400">Feature Tags (comma separated)</label>
                        <Input value={(editingProduct.features || []).join(", ")} onChange={(e) => setEditingProduct({ ...editingProduct, features: e.target.value.split(",").map((x: string) => x.trim()).filter(Boolean) })} className="bg-slate-950 border-slate-800 text-xs" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-slate-400">Image Asset URL</label>
                        <Input value={editingProduct.image} onChange={(e) => setEditingProduct({ ...editingProduct, image: e.target.value })} className="bg-slate-950 border-slate-800 text-xs" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-slate-400">Page Navigation Link</label>
                        <Input value={editingProduct.link} onChange={(e) => setEditingProduct({ ...editingProduct, link: e.target.value })} className="bg-slate-950 border-slate-800 text-xs" />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase font-bold text-slate-400">Description</label>
                      <Textarea value={editingProduct.description} onChange={(e) => setEditingProduct({ ...editingProduct, description: e.target.value })} className="bg-slate-950 border-slate-800 text-xs h-20" />
                    </div>
                    <div className="flex justify-end gap-2">
                      <Button onClick={() => setEditingProduct(null)} variant="ghost" className="text-xs text-slate-400">Cancel</Button>
                      <Button onClick={saveProductEdit} className="bg-sky-600 hover:bg-sky-500 text-white text-xs">Save Changes</Button>
                    </div>
                  </Card>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(webContent.products || []).map((prod, index) => (
                    <Card key={prod.id} className="bg-slate-900 border-slate-800 flex flex-col justify-between">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-sm font-bold text-white flex flex-col gap-0.5">
                            <span className="text-[10px] text-sky-400 font-semibold uppercase tracking-wider">{prod.subtitle}</span>
                            <span>{prod.title}</span>
                          </CardTitle>
                          <div className="flex items-center gap-1">
                            <Button onClick={() => moveProduct(index, 'up')} disabled={index === 0} size="icon" variant="ghost" className="h-6.5 w-6.5 text-slate-400 hover:text-white disabled:opacity-30">▲</Button>
                            <Button onClick={() => moveProduct(index, 'down')} disabled={index === (webContent.products?.length || 0) - 1} size="icon" variant="ghost" className="h-6.5 w-6.5 text-slate-400 hover:text-white disabled:opacity-30">▼</Button>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-3 flex-1 flex flex-col justify-between">
                        <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">{prod.description}</p>
                        <div className="flex flex-wrap gap-1">
                          {(prod.features || []).map((f: string, i: number) => (
                            <Badge key={i} className="bg-slate-950 border-slate-800 text-slate-400 text-[9px] hover:bg-slate-950 font-normal">{f}</Badge>
                          ))}
                        </div>
                        <div className="flex justify-end gap-2 pt-4 border-t border-slate-800/55 mt-4">
                          <Button onClick={() => setEditingProduct(prod)} variant="ghost" className="h-8 text-[11px] text-sky-400 hover:text-white flex gap-1">
                            <Edit className="w-3.5 h-3.5" /> Edit
                          </Button>
                          <Button onClick={() => deleteProduct(prod.id)} variant="ghost" className="h-8 text-[11px] text-red-400 hover:text-white flex gap-1">
                            <Trash2 className="w-3.5 h-3.5" /> Delete
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="bg-slate-900/40 border-slate-800 border-dashed">
                  <CardHeader>
                    <CardTitle className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                      <Plus className="w-4 h-4 text-emerald-400" /> Add New SAP Product Suite
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-slate-400">Title</label>
                        <Input value={newProduct.title} onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })} placeholder="e.g. SAP Fiori UI5" className="bg-slate-950 border-slate-800 text-xs" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-slate-400">Subtitle</label>
                        <Input value={newProduct.subtitle} onChange={(e) => setNewProduct({ ...newProduct, subtitle: e.target.value })} placeholder="e.g. Responsive User Experience" className="bg-slate-950 border-slate-800 text-xs" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-slate-400">Icon Component</label>
                        <select value={newProduct.iconName} onChange={(e) => setNewProduct({ ...newProduct, iconName: e.target.value })} className="bg-slate-950 border-slate-800 text-xs h-9 w-full rounded-md px-3 text-white border">
                          {AVAILABLE_ICONS.map(i => <option key={i} value={i}>{i}</option>)}
                        </select>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-slate-400">Feature Tags (comma separated)</label>
                        <Input value={(newProduct.features || []).join(", ")} onChange={(e) => setNewProduct({ ...newProduct, features: e.target.value.split(",").map((x: string) => x.trim()).filter(Boolean) })} placeholder="e.g. Responsive design, Custom UI5 app" className="bg-slate-950 border-slate-800 text-xs" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-slate-400">Image Asset URL</label>
                        <Input value={newProduct.image} onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })} placeholder="e.g. /sap-fiori.webp" className="bg-slate-950 border-slate-800 text-xs" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-slate-400">Link URL</label>
                        <Input value={newProduct.link} onChange={(e) => setNewProduct({ ...newProduct, link: e.target.value })} placeholder="e.g. /solutions" className="bg-slate-950 border-slate-800 text-xs" />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase font-bold text-slate-400">Description</label>
                      <Textarea value={newProduct.description} onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })} placeholder="SAP Fiori app configuration, custom theme designs..." className="bg-slate-950 border-slate-800 text-xs h-16" />
                    </div>
                    <Button onClick={addProduct} className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs w-full">Add SAP Product</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Contact Page Config Tab */}
            <TabsContent value="page-contact" className="space-y-6 mt-0">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-4">
                <div>
                  <h2 className="text-lg font-bold text-white flex items-center gap-2">
                    <Phone className="w-5 h-5 text-sky-400" />
                    Manage Contact Page Content
                  </h2>
                  <p className="text-xs text-slate-400">Configure corporate addresses, get directions maps links, and contact methods cards</p>
                </div>
              </div>

              {/* Contact Texts Configuration */}
              {(() => {
                const contactTexts = webContent.pageTexts?.contact || {};
                return (
                  <Card className="bg-slate-900 border-slate-800">
                    <CardHeader className="cursor-pointer select-none pb-3 flex flex-row items-center justify-between" onClick={() => setShowContactTexts(!showContactTexts)}>
                      <div>
                        <CardTitle className="text-sm font-bold text-sky-400 flex items-center gap-2">
                          <Sliders className="w-4 h-4" />
                          Contact Page Copywriting & Address Config
                        </CardTitle>
                        <CardDescription className="text-xs text-slate-400">Manage hero headings, form description, and corporate address texts</CardDescription>
                      </div>
                      <Button variant="ghost" size="sm" className="text-slate-400 text-xs">
                        {showContactTexts ? "Hide" : "Show"}
                      </Button>
                    </CardHeader>
                    {showContactTexts && (
                      <CardContent className="space-y-4 pt-3 border-t border-slate-800/60">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="space-y-1.5">
                            <label className="text-[10px] uppercase font-bold text-slate-400">Hero Label</label>
                            <Input value={contactTexts.heroLabel || ""} onChange={(e) => handleUpdatePageTexts("contact", { heroLabel: e.target.value })} className="bg-slate-950 border-slate-800 text-xs text-white" />
                          </div>
                          <div className="space-y-1.5 md:col-span-2">
                            <label className="text-[10px] uppercase font-bold text-slate-400">Hero Title</label>
                            <Input value={contactTexts.heroTitle || ""} onChange={(e) => handleUpdatePageTexts("contact", { heroTitle: e.target.value })} className="bg-slate-950 border-slate-800 text-xs text-white" />
                          </div>
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[10px] uppercase font-bold text-slate-400">Hero Description</label>
                          <Textarea value={contactTexts.heroDescription || ""} onChange={(e) => handleUpdatePageTexts("contact", { heroDescription: e.target.value })} className="bg-slate-950 border-slate-800 text-xs text-white h-20" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-slate-800/40 pt-4">
                          <div className="space-y-1.5">
                            <label className="text-[10px] uppercase font-bold text-slate-400">Form Title</label>
                            <Input value={contactTexts.sectionTitle || ""} onChange={(e) => handleUpdatePageTexts("contact", { sectionTitle: e.target.value })} className="bg-slate-950 border-slate-800 text-xs text-white" />
                          </div>
                          <div className="space-y-1.5 md:col-span-2">
                            <label className="text-[10px] uppercase font-bold text-slate-400">Form Subtitle/Description</label>
                            <Input value={contactTexts.sectionDescription || ""} onChange={(e) => handleUpdatePageTexts("contact", { sectionDescription: e.target.value })} className="bg-slate-950 border-slate-800 text-xs text-white" />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-slate-800/40 pt-4">
                          <div className="space-y-1.5">
                            <label className="text-[10px] uppercase font-bold text-slate-400">Corporate Address Title</label>
                            <Input value={contactTexts.ctaTitle || ""} onChange={(e) => handleUpdatePageTexts("contact", { ctaTitle: e.target.value })} className="bg-slate-950 border-slate-800 text-xs text-white" />
                          </div>
                          <div className="space-y-1.5 md:col-span-2">
                            <label className="text-[10px] uppercase font-bold text-slate-400">Corporate Address Description (Use commas for new line)</label>
                            <Input value={contactTexts.ctaDescription || ""} onChange={(e) => handleUpdatePageTexts("contact", { ctaDescription: e.target.value })} className="bg-slate-950 border-slate-800 text-xs text-white" />
                          </div>
                        </div>
                      </CardContent>
                    )}
                  </Card>
                );
              })()}

              {/* Contact Methods list */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-bold text-slate-200">Contact Methods Cards</h3>
                  <span className="text-[10px] text-slate-500 font-medium">Re-order blocks to set position in live site</span>
                </div>

                {editingContactMethod && (
                  <Card className="bg-slate-900 border-sky-950 p-4 space-y-4">
                    <h4 className="text-xs font-bold text-sky-400">Editing Contact Card: {editingContactMethod.title}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-slate-400">Title</label>
                        <Input value={editingContactMethod.title} onChange={(e) => setEditingContactMethod({ ...editingContactMethod, title: e.target.value })} className="bg-slate-950 border-slate-800 text-xs" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-slate-400">Contact Detail (Email/Phone)</label>
                        <Input value={editingContactMethod.contact} onChange={(e) => setEditingContactMethod({ ...editingContactMethod, contact: e.target.value })} className="bg-slate-950 border-slate-800 text-xs" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-slate-400">Icon Component</label>
                        <select value={editingContactMethod.iconName} onChange={(e) => setEditingContactMethod({ ...editingContactMethod, iconName: e.target.value })} className="bg-slate-950 border-slate-800 text-xs h-9 w-full rounded-md px-3 text-white border">
                          {AVAILABLE_ICONS.map(i => <option key={i} value={i}>{i}</option>)}
                        </select>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-slate-400">Action Link (tel:, mailto:, url)</label>
                        <Input value={editingContactMethod.link} onChange={(e) => setEditingContactMethod({ ...editingContactMethod, link: e.target.value })} className="bg-slate-950 border-slate-800 text-xs" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-slate-400">Action Button Text</label>
                        <Input value={editingContactMethod.action} onChange={(e) => setEditingContactMethod({ ...editingContactMethod, action: e.target.value })} className="bg-slate-950 border-slate-800 text-xs" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-slate-400">Color Hex / Theme</label>
                        <Input value={editingContactMethod.color} onChange={(e) => setEditingContactMethod({ ...editingContactMethod, color: e.target.value })} className="bg-slate-950 border-slate-800 text-xs" />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase font-bold text-slate-400">Short Sub-text Description</label>
                      <Textarea value={editingContactMethod.description} onChange={(e) => setEditingContactMethod({ ...editingContactMethod, description: e.target.value })} className="bg-slate-950 border-slate-800 text-xs h-16" />
                    </div>
                    <div className="flex justify-end gap-2">
                      <Button onClick={() => setEditingContactMethod(null)} variant="ghost" className="text-xs text-slate-400">Cancel</Button>
                      <Button onClick={saveContactMethodEdit} className="bg-sky-600 hover:bg-sky-500 text-white text-xs">Save Changes</Button>
                    </div>
                  </Card>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(webContent.contactMethods || []).map((method, index) => (
                    <Card key={index} className="bg-slate-900 border-slate-800 flex flex-col justify-between">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-sm font-bold text-white flex flex-col gap-0.5">
                            <span className="text-[10px] text-sky-400 font-semibold uppercase tracking-wider">Icon: {method.iconName}</span>
                            <span>{method.title}</span>
                          </CardTitle>
                          <div className="flex items-center gap-1">
                            <Button onClick={() => moveContactMethod(index, 'up')} disabled={index === 0} size="icon" variant="ghost" className="h-6.5 w-6.5 text-slate-400 hover:text-white disabled:opacity-30">▲</Button>
                            <Button onClick={() => moveContactMethod(index, 'down')} disabled={index === (webContent.contactMethods?.length || 0) - 1} size="icon" variant="ghost" className="h-6.5 w-6.5 text-slate-400 hover:text-white disabled:opacity-30">▼</Button>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-3 flex-1 flex flex-col justify-between">
                        <p className="text-xs text-slate-400 leading-relaxed">{method.description}</p>
                        <p className="font-semibold text-xs text-white">{method.contact}</p>
                        <div className="flex justify-end gap-2 pt-4 border-t border-slate-800/55 mt-4">
                          <Button onClick={() => setEditingContactMethod({ ...method, _index: index })} variant="ghost" className="h-8 text-[11px] text-sky-400 hover:text-white flex gap-1">
                            <Edit className="w-3.5 h-3.5" /> Edit
                          </Button>
                          <Button onClick={() => deleteContactMethod(index)} variant="ghost" className="h-8 text-[11px] text-red-400 hover:text-white flex gap-1">
                            <Trash2 className="w-3.5 h-3.5" /> Delete
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="bg-slate-900/40 border-slate-800 border-dashed">
                  <CardHeader>
                    <CardTitle className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                      <Plus className="w-4 h-4 text-emerald-400" /> Add New Contact Card Option
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-slate-400">Title</label>
                        <Input value={newContactMethod.title} onChange={(e) => setNewContactMethod({ ...newContactMethod, title: e.target.value })} placeholder="e.g. Sales Desk" className="bg-slate-950 border-slate-800 text-xs" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-slate-400">Contact Detail</label>
                        <Input value={newContactMethod.contact} onChange={(e) => setNewContactMethod({ ...newContactMethod, contact: e.target.value })} placeholder="e.g. sales@sangronyx.com" className="bg-slate-950 border-slate-800 text-xs" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-slate-400">Icon Component</label>
                        <select value={newContactMethod.iconName} onChange={(e) => setNewContactMethod({ ...newContactMethod, iconName: e.target.value })} className="bg-slate-950 border-slate-800 text-xs h-9 w-full rounded-md px-3 text-white border">
                          {AVAILABLE_ICONS.map(i => <option key={i} value={i}>{i}</option>)}
                        </select>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-slate-400">Action Link</label>
                        <Input value={newContactMethod.link} onChange={(e) => setNewContactMethod({ ...newContactMethod, link: e.target.value })} placeholder="e.g. mailto:sales@sangronyx.com" className="bg-slate-950 border-slate-800 text-xs" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-slate-400">Action Text</label>
                        <Input value={newContactMethod.action} onChange={(e) => setNewContactMethod({ ...newContactMethod, action: e.target.value })} placeholder="e.g. Email Sales" className="bg-slate-950 border-slate-800 text-xs" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-slate-400">Color Hex / Theme</label>
                        <Input value={newContactMethod.color} onChange={(e) => setNewContactMethod({ ...newContactMethod, color: e.target.value })} placeholder="e.g. #007DB8" className="bg-slate-950 border-slate-800 text-xs" />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase font-bold text-slate-400">Description</label>
                      <Textarea value={newContactMethod.description} onChange={(e) => setNewContactMethod({ ...newContactMethod, description: e.target.value })} placeholder="Write a short description..." className="bg-slate-950 border-slate-800 text-xs h-16" />
                    </div>
                    <Button onClick={addContactMethod} className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs w-full">Add Contact Method</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Custom Pages Builder Tab */}
            <TabsContent value="custom-pages" className="space-y-6 mt-0">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-4">
                <div>
                  <h2 className="text-lg font-bold text-white flex items-center gap-2">
                    <FileText className="w-5 h-5 text-emerald-400" />
                    Custom Pages Builder
                  </h2>
                  <p className="text-xs text-slate-400">Dynamically add new web pages with custom URLs, routing, and flexible layout sections</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Side: Create & List Pages */}
                <div className="space-y-6 lg:col-span-1">
                  <Card className="bg-slate-900 border-slate-800">
                    <CardHeader>
                      <CardTitle className="text-xs uppercase tracking-wider text-slate-400">Create Custom Page</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-slate-400">Page Title</label>
                        <Input value={newCustomPage.title} onChange={(e) => setNewCustomPage({ ...newCustomPage, title: e.target.value })} placeholder="e.g. CSR Activities" className="bg-slate-950 border-slate-800 text-xs" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-slate-400">URL Slug (e.g. /p/csr-activities)</label>
                        <Input value={newCustomPage.slug} onChange={(e) => setNewCustomPage({ ...newCustomPage, slug: e.target.value })} placeholder="e.g. csr-activities" className="bg-slate-950 border-slate-800 text-xs" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-slate-400">Short Description</label>
                        <Textarea value={newCustomPage.description} onChange={(e) => setNewCustomPage({ ...newCustomPage, description: e.target.value })} placeholder="Meta SEO description..." className="bg-slate-950 border-slate-800 text-xs h-14" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-slate-400">Design Template</label>
                        <select
                          value={newCustomPage.template || "blank"}
                          onChange={(e) => setNewCustomPage({ ...newCustomPage, template: e.target.value })}
                          className="w-full bg-slate-950 border border-slate-800 text-xs text-white rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                        >
                          <option value="blank">Blank (Hero Section only)</option>
                          <option value="service">Service Detail / Solution Page</option>
                          <option value="product">Product Launch / Feature Showcase</option>
                          <option value="about">About / Company Profile Page</option>
                        </select>
                      </div>
                      <Button onClick={addCustomPage} className="w-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs">Create Page</Button>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-900 border-slate-800">
                    <CardHeader>
                      <CardTitle className="text-xs uppercase tracking-wider text-slate-400">Existing Custom Pages</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="divide-y divide-slate-800 max-h-[300px] overflow-y-auto">
                        {(webContent.customPages || []).length === 0 ? (
                          <div className="p-4 text-center text-xs text-slate-500">No custom pages created yet.</div>
                        ) : (
                          (webContent.customPages || []).map((cp: any) => (
                            <div key={cp.slug} className={`p-3 flex justify-between items-center transition-colors cursor-pointer ${selectedCustomPageSlug === cp.slug ? "bg-slate-800" : "hover:bg-slate-800/40"}`} onClick={() => setSelectedCustomPageSlug(cp.slug)}>
                              <div className="min-w-0 flex-1">
                                <p className="text-xs font-bold text-white truncate">{cp.title}</p>
                                <p className="text-[10px] text-sky-400 font-mono truncate">/p/{cp.slug}</p>
                              </div>
                              <div className="flex items-center gap-1.5 shrink-0" onClick={(e) => e.stopPropagation()}>
                                <a href={`/p/${cp.slug}`} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white p-1">
                                  <ExternalLink className="w-3.5 h-3.5" />
                                </a>
                                <Button onClick={() => deleteCustomPage(cp.slug)} variant="ghost" size="icon" className="h-7 w-7 text-red-400 hover:text-red-300">
                                  <Trash2 className="w-3.5 h-3.5" />
                                </Button>
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Right Side: Section Layout Builder */}
                <div className="space-y-6 lg:col-span-2">
                  {!selectedCustomPageSlug ? (
                    <Card className="bg-slate-900/40 border-slate-800 border-dashed h-[450px] flex flex-col justify-center items-center text-center p-6">
                      <FileText className="w-12 h-12 text-slate-600 mb-3" />
                      <h4 className="text-sm font-bold text-slate-400">No Page Selected</h4>
                      <p className="text-xs text-slate-500 max-w-sm mt-1">Select an existing custom page from the left list or create a brand-new page to start editing sections and content blocks</p>
                    </Card>
                  ) : (
                    (() => {
                      const currentPage = (webContent.customPages || []).find((p: any) => p.slug === selectedCustomPageSlug);
                      if (!currentPage) return null;

                      return (
                        <div className="space-y-6">
                          <div className="flex justify-between items-center gap-4 bg-slate-900 border border-slate-800 p-4 rounded-lg">
                            <div>
                              <h3 className="text-sm font-bold text-white">Designing: {currentPage.title}</h3>
                              <p className="text-[10px] text-sky-400 font-mono">Route: /p/{currentPage.slug}</p>
                            </div>
                            <div className="flex items-center gap-3">
                              <select value={newSectionType} onChange={(e) => setNewSectionType(e.target.value)} className="bg-slate-950 border-slate-800 text-xs h-9 rounded-md px-3 text-white border">
                                <option value="hero">Hero Section</option>
                                <option value="text">Text / Details</option>
                                <option value="features">Features Cards</option>
                                <option value="stats">Stats Counter</option>
                                <option value="cta">CTA Block</option>
                              </select>
                              <Button onClick={() => addSectionToCustomPage(currentPage.slug)} size="sm" className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs flex gap-1 items-center">
                                <Plus className="w-3.5 h-3.5" /> Add Section
                              </Button>
                            </div>
                          </div>

                          <div className="space-y-4">
                            <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400">Page Layout & Section Content</h4>

                            {(currentPage.sections || []).length === 0 ? (
                              <div className="bg-slate-900 border border-slate-800 p-8 text-center rounded-lg text-xs text-slate-500">
                                This page is empty. Add a section using the dropdown above.
                              </div>
                            ) : (
                              (currentPage.sections || []).map((section: any, sIdx: number) => (
                                <Card key={section.id || sIdx} className="bg-slate-900 border-slate-800">
                                  <CardHeader className="pb-3 border-b border-slate-800/50 flex flex-row justify-between items-center bg-slate-950/20">
                                    <div className="flex items-center gap-2">
                                      <Badge className="bg-sky-600/10 text-sky-400 border-sky-600/20 font-bold text-[10px] uppercase">{section.type}</Badge>
                                      <span className="text-xs font-bold text-white">Section {sIdx+1}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                      <Button onClick={() => moveCustomSection(currentPage.slug, sIdx, 'up')} disabled={sIdx === 0} size="icon" variant="ghost" className="h-7 w-7 text-slate-400 hover:text-white disabled:opacity-30">▲</Button>
                                      <Button onClick={() => moveCustomSection(currentPage.slug, sIdx, 'down')} disabled={sIdx === (currentPage.sections?.length || 0) - 1} size="icon" variant="ghost" className="h-7 w-7 text-slate-400 hover:text-white disabled:opacity-30">▼</Button>
                                      <Button onClick={() => deleteSectionFromCustomPage(currentPage.slug, section.id)} size="icon" variant="ghost" className="h-7 w-7 text-red-400 hover:text-red-300">
                                        <Trash2 className="w-3.5 h-3.5" />
                                      </Button>
                                    </div>
                                  </CardHeader>
                                  <CardContent className="pt-4 space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                      <div className="space-y-1.5">
                                        <label className="text-[10px] uppercase font-bold text-slate-400">Section Title</label>
                                        <Input value={section.title || ""} onChange={(e) => updateCustomSectionFields(currentPage.slug, section.id, { title: e.target.value })} className="bg-slate-950 border-slate-800 text-xs text-white" />
                                      </div>
                                      <div className="space-y-1.5">
                                        <label className="text-[10px] uppercase font-bold text-slate-400">Section Subtitle / Label</label>
                                        <Input value={section.subtitle || ""} onChange={(e) => updateCustomSectionFields(currentPage.slug, section.id, { subtitle: e.target.value })} className="bg-slate-950 border-slate-800 text-xs text-white" />
                                      </div>
                                    </div>

                                    {section.type === "text" && (
                                      <div className="space-y-1.5">
                                        <label className="text-[10px] uppercase font-bold text-slate-400">Rich Text Content</label>
                                        <Textarea value={section.content || ""} onChange={(e) => updateCustomSectionFields(currentPage.slug, section.id, { content: e.target.value })} className="bg-slate-950 border-slate-800 text-xs text-white h-24" />
                                      </div>
                                    )}

                                    {(section.type === "features" || section.type === "stats") && (
                                      <div className="space-y-3 pt-2 border-t border-slate-800/40">
                                        <div className="flex justify-between items-center">
                                          <label className="text-[10px] uppercase font-bold text-slate-400">Cards / Items List</label>
                                          <Button 
                                            onClick={() => {
                                              const items = [...(section.items || [])];
                                              items.push({
                                                title: "New Card Item",
                                                description: "Item description goes here",
                                                iconName: "CheckCircle"
                                              });
                                              updateCustomSectionFields(currentPage.slug, section.id, { items });
                                            }}
                                            size="sm" 
                                            className="h-7 bg-emerald-600/10 hover:bg-emerald-600/20 text-emerald-400 border border-emerald-600/20 text-[10px] px-2 py-0.5"
                                          >
                                            + Add Card
                                          </Button>
                                        </div>
                                        <div className="space-y-2">
                                          {(section.items || []).map((item: any, itemIdx: number) => (
                                            <div key={itemIdx} className="bg-slate-950/40 border border-slate-800/80 rounded p-2 flex gap-3 items-center">
                                              <span className="text-[10px] text-slate-500 font-bold shrink-0">#{itemIdx+1}</span>
                                              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 flex-1 min-w-0">
                                                <Input value={item.title || ""} onChange={(e) => {
                                                  const items = [...section.items];
                                                  items[itemIdx].title = e.target.value;
                                                  updateCustomSectionFields(currentPage.slug, section.id, { items });
                                                }} placeholder="Card Title" className="bg-slate-950 border-slate-800/80 text-[11px] h-7" />
                                                
                                                <Input value={item.description || ""} onChange={(e) => {
                                                  const items = [...section.items];
                                                  items[itemIdx].description = e.target.value;
                                                  updateCustomSectionFields(currentPage.slug, section.id, { items });
                                                }} placeholder="Card Description" className="bg-slate-950 border-slate-800/80 text-[11px] h-7" />

                                                <select value={item.iconName || "CheckCircle"} onChange={(e) => {
                                                  const items = [...section.items];
                                                  items[itemIdx].iconName = e.target.value;
                                                  updateCustomSectionFields(currentPage.slug, section.id, { items });
                                                }} className="bg-slate-950 border-slate-800/80 text-[11px] h-7 rounded px-1.5 text-white border">
                                                  {AVAILABLE_ICONS.map(i => <option key={i} value={i}>{i}</option>)}
                                                </select>
                                              </div>
                                              <Button 
                                                onClick={() => {
                                                  const items = (section.items || []).filter((_: any, idx: number) => idx !== itemIdx);
                                                  updateCustomSectionFields(currentPage.slug, section.id, { items });
                                                }}
                                                variant="ghost" 
                                                size="icon" 
                                                className="h-7 w-7 text-red-400 hover:text-red-300"
                                              >
                                                <Trash2 className="w-3.5 h-3.5" />
                                              </Button>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    )}

                                  </CardContent>
                                </Card>
                              ))
                            )}

                            <Button onClick={() => handleSaveContentChange(webContent)} className="w-full bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs h-10 mt-6 flex gap-1.5 items-center justify-center">
                              <Save className="w-4 h-4" /> Save Custom Page Content to Database
                            </Button>
                          </div>
                        </div>
                      );
                    })()
                  )}
                </div>
              </div>

              {/* Custom Page Delete Confirmation Dialog */}
              <Dialog open={!!confirmDeleteSlug} onOpenChange={(open) => !open && setConfirmDeleteSlug(null)}>
                <DialogContent className="bg-slate-900 border-slate-800 text-white max-w-sm">
                  <DialogHeader>
                    <DialogTitle className="text-white text-base font-bold flex items-center gap-2">
                      <Trash2 className="w-5 h-5 text-red-500" />
                      Confirm Page Deletion
                    </DialogTitle>
                    <DialogDescription className="text-slate-400">
                      Are you sure you want to delete the custom page <code className="text-sky-400 font-mono">/p/{confirmDeleteSlug}</code>? This action is permanent and cannot be undone.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex justify-end gap-3 pt-4 border-t border-slate-800 mt-2">
                    <Button 
                      variant="ghost" 
                      onClick={() => setConfirmDeleteSlug(null)} 
                      className="text-xs bg-slate-800 border-slate-700 text-slate-200"
                    >
                      Cancel
                    </Button>
                    <Button 
                      onClick={() => {
                        if (confirmDeleteSlug) {
                          const pages = webContent.customPages || [];
                          const updated = pages.filter((p: any) => p.slug !== confirmDeleteSlug);
                          handleSaveContentChange({
                            ...webContent,
                            customPages: updated
                          });
                          if (selectedCustomPageSlug === confirmDeleteSlug) {
                            setSelectedCustomPageSlug("");
                          }
                          setConfirmDeleteSlug(null);
                        }
                      }} 
                      className="text-xs bg-red-600 hover:bg-red-500 text-white"
                    >
                      Delete Page
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>

            </TabsContent>

          </main>
        </Tabs>
      </div>

      {/* Admin Bottom Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-3 px-6 text-center text-slate-500 text-[10px] flex flex-col sm:flex-row items-center justify-between gap-2">
        <p>© 2026 Sangronyx Technologies Private Limited. All administrative privileges reserved.</p>
        <p>Built with React, Vite & Tailwind CSS · Localhost Console Active</p>
      </footer>
    </div>
  );
}
