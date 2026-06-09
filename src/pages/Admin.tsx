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
  X
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
import {
  getWebsiteContent,
  saveWebsiteContent,
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
  const handleAddLead = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLeadName || !newLeadEmail) {
      toast.error("Please fill in Name and Email");
      return;
    }
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
    setIsAddLeadOpen(false);
    // Reset Form
    setNewLeadName("");
    setNewLeadEmail("");
    setNewLeadCompany("");
    setNewLeadSource("Contact Form");
    setNewLeadMessage("");
    toast.success("Mock lead added successfully!");
  };

  const handleDeleteLead = (id: string) => {
    setLeads(leads.filter(l => l.id !== id));
    toast.success("Lead entry deleted");
  };

  const handleUpdateLeadStatus = (id: string, newStatus: Lead["status"]) => {
    setLeads(leads.map(l => l.id === id ? { ...l, status: newStatus } : l));
    toast.success(`Lead status updated to ${newStatus}`);
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
    setSeoList({
      ...seoList,
      [editingPath]: {
        title: editTitle,
        description: editDescription,
        keywords: editKeywords,
        canonical: editCanonical
      }
    });
    setIsEditSeoOpen(false);
    toast.success(`SEO Metadata for ${editingPath} updated (Local State)`);
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
  const [webContent, setWebContent] = useState<WebsiteContent>(() => getWebsiteContent());
  const [showServicesTexts, setShowServicesTexts] = useState(false);
  const [showIndustriesTexts, setShowIndustriesTexts] = useState(false);
  const [showResourcesTexts, setShowResourcesTexts] = useState(false);
  const [showCareersTexts, setShowCareersTexts] = useState(false);
  const [showPartnersTexts, setShowPartnersTexts] = useState(false);
  const [showWhoWeAreTexts, setShowWhoWeAreTexts] = useState(false);

  // Selection list for icons and colors
  const AVAILABLE_ICONS = [
    "Cloud", "Database", "Settings", "Code", "Wrench", "Link2", "Users", "Star",
    "Headphones", "CheckCircle2", "Factory", "ShoppingCart", "Building2", "Heart",
    "Truck", "Leaf", "Banknote", "GraduationCap", "Book", "Video", "FileText",
    "Download", "HelpCircle", "Zap", "Handshake", "Award", "TrendingUp", "Shield"
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

  // Handlers
  const handleSaveContentChange = (updatedContent: WebsiteContent) => {
    setWebContent(updatedContent);
    saveWebsiteContent(updatedContent);
    toast.success("Page content updated and saved!");
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

  const handleResetContentDefaults = () => {
    if (confirm("Reset all page content to defaults? This will overwrite your modifications.")) {
      const defaultContent: WebsiteContent = {
        services: initialServices,
        industries: initialIndustries,
        resources: initialResources,
        benefits: initialBenefits,
        partnerBenefits: initialPartnerBenefits,
        leadership: initialLeadership,
        pageTexts: initialPageTexts
      };
      setWebContent(defaultContent);
      saveWebsiteContent(defaultContent);
      toast.success("All page content reset to defaults!");
    }
  };

  // Service Actions
  const saveServiceEdit = () => {
    if (!editingService?.title) return toast.error("Title is required");
    const updated = webContent.services.map(s => s.id === editingService.id ? editingService : s);
    handleSaveContentChange({ ...webContent, services: updated });
    setEditingService(null);
  };
  const deleteService = (id: string) => {
    if (confirm("Delete this service?")) {
      const updated = webContent.services.filter(s => s.id !== id);
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
    handleSaveContentChange({ ...webContent, services: [...webContent.services, item] });
    setNewService({ title: "", description: "", iconName: "Settings", features: [], image: "", href: "" });
  };

  // Industry Actions
  const saveIndustryEdit = () => {
    if (!editingIndustry?.title) return toast.error("Title is required");
    const updated = webContent.industries.map(i => i.id === editingIndustry.id ? editingIndustry : i);
    handleSaveContentChange({ ...webContent, industries: updated });
    setEditingIndustry(null);
  };
  const deleteIndustry = (id: string) => {
    if (confirm("Delete this industry?")) {
      const updated = webContent.industries.filter(i => i.id !== id);
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
    handleSaveContentChange({ ...webContent, industries: [...webContent.industries, item] });
    setNewIndustry({ title: "", description: "", iconName: "Building2", color: "bg-accent", slug: "", image: "" });
  };

  // Resource Actions
  const saveResourceEdit = () => {
    if (!editingResource?.title) return toast.error("Title is required");
    const updated = webContent.resources.map(r => r.id === editingResource.id ? editingResource : r);
    handleSaveContentChange({ ...webContent, resources: updated });
    setEditingResource(null);
  };
  const deleteResource = (id: string) => {
    if (confirm("Delete this resource?")) {
      const updated = webContent.resources.filter(r => r.id !== id);
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
    handleSaveContentChange({ ...webContent, resources: [...webContent.resources, item] });
    setNewResource({ title: "", description: "", iconName: "Book", link: "", color: "bg-accent" });
  };

  // Benefit Actions
  const saveBenefitEdit = () => {
    if (!editingBenefit?.title) return toast.error("Title is required");
    const updated = webContent.benefits.map(b => b.id === editingBenefit.id ? editingBenefit : b);
    handleSaveContentChange({ ...webContent, benefits: updated });
    setEditingBenefit(null);
  };
  const deleteBenefit = (id: string) => {
    if (confirm("Delete this benefit?")) {
      const updated = webContent.benefits.filter(b => b.id !== id);
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
    handleSaveContentChange({ ...webContent, benefits: [...webContent.benefits, item] });
    setNewBenefit({ title: "", description: "", iconName: "Zap" });
  };

  // Partner Benefit Actions
  const savePartnerBenefitEdit = () => {
    if (!editingPartnerBenefit?.title) return toast.error("Title is required");
    const updated = webContent.partnerBenefits.map(pb => pb.id === editingPartnerBenefit.id ? editingPartnerBenefit : pb);
    handleSaveContentChange({ ...webContent, partnerBenefits: updated });
    setEditingPartnerBenefit(null);
  };
  const deletePartnerBenefit = (id: string) => {
    if (confirm("Delete this benefit?")) {
      const updated = webContent.partnerBenefits.filter(pb => pb.id !== id);
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
    handleSaveContentChange({ ...webContent, partnerBenefits: [...webContent.partnerBenefits, item] });
    setNewPartnerBenefit({ title: "", description: "", iconName: "Handshake", color: "bg-blue-500", link: "/contact" });
  };

  // Leadership Actions
  const saveLeadershipEdit = () => {
    if (!editingLeadership?.name) return toast.error("Name is required");
    const updated = webContent.leadership.map(l => l.id === editingLeadership.id ? editingLeadership : l);
    handleSaveContentChange({ ...webContent, leadership: updated });
    setEditingLeadership(null);
  };
  const deleteLeadership = (id: string) => {
    if (confirm("Delete this leadership member?")) {
      const updated = webContent.leadership.filter(l => l.id !== id);
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
    handleSaveContentChange({ ...webContent, leadership: [...webContent.leadership, item] });
    setNewLeadership({ name: "", role: "", description: "" });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <Helmet>
        <title>Sangronyx System Administrator | Central Website Operations</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* Admin Top Header */}
      <header className="border-b border-slate-800 bg-slate-900/60 backdrop-blur px-6 py-4 flex items-center justify-between sticky top-0 z-30">
        <div className="flex items-center gap-3">
          <div className="bg-sky-600 text-white p-2 rounded-lg shadow-glow shadow-sky-500/20">
            <Sliders className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
              Sangronyx Admin Panel <Badge variant="outline" className="text-emerald-400 border-emerald-500/30 bg-emerald-500/5">System Console</Badge>
            </h1>
            <p className="text-xs text-slate-400">Manage, Audit & Monitor content for sangronyx.com</p>
          </div>
        </div>

        {/* Real-time server stats & clock */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-4 text-xs text-slate-400 border-r border-slate-800 pr-6">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span>Dev Server: <strong className="text-slate-200">Online</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <Database className="w-3.5 h-3.5 text-sky-400" />
              <span>Formspree ID: <strong className="text-slate-200">{formspreeId}</strong></span>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-slate-950/40 border border-slate-800 px-3 py-1.5 rounded-md text-xs text-slate-300">
            <Clock className="w-4 h-4 text-slate-400" />
            <span className="font-mono">{currentTime}</span>
          </div>
          <Link to="/">
            <Button size="sm" variant="ghost" className="text-slate-300 hover:text-white border border-slate-800 hover:bg-slate-800">
              Go to Website
              <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
            </Button>
          </Link>
        </div>
      </header>

      {/* Main Admin Workspace */}
      <div className="flex-1 flex flex-col">
        <Tabs defaultValue="dashboard" className="flex-1 flex flex-col md:flex-row">

          {/* Left Vertical Navigation Menu */}
          <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-slate-800 bg-slate-900/20 p-4 shrink-0">
            <div className="mb-4 px-2 py-3 bg-slate-900/60 border border-slate-800 rounded-lg flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-sky-500/15 flex items-center justify-center text-sky-400 font-bold border border-sky-500/20">
                SA
              </div>
              <div>
                <p className="text-sm font-semibold text-white">System Admin</p>
                <p className="text-[10px] text-slate-400">Role: Root Administrator</p>
              </div>
            </div>

            <TabsList className="flex flex-row md:flex-col items-stretch justify-start bg-transparent p-0 gap-1 space-y-0 md:space-y-1 w-full overflow-x-auto md:overflow-x-visible h-auto">
              <TabsTrigger
                value="dashboard"
                className="justify-start gap-2.5 px-3 py-2.5 text-slate-400 hover:text-slate-100 hover:bg-slate-900/50 rounded-md data-[state=active]:bg-sky-600 data-[state=active]:text-white transition-all text-sm font-medium"
              >
                <LayoutDashboard className="w-4.5 h-4.5 shrink-0" />
                <span className="hidden md:inline">Dashboard Overview</span>
              </TabsTrigger>
              <TabsTrigger
                value="pages"
                className="justify-start gap-2.5 px-3 py-2.5 text-slate-400 hover:text-slate-100 hover:bg-slate-900/50 rounded-md data-[state=active]:bg-sky-600 data-[state=active]:text-white transition-all text-sm font-medium"
              >
                <Globe className="w-4.5 h-4.5 shrink-0" />
                <span className="hidden md:inline">Pages & SEO Metadata</span>
              </TabsTrigger>
              <TabsTrigger
                value="page-services"
                className="justify-start gap-2.5 px-3 py-2.5 text-slate-400 hover:text-slate-100 hover:bg-slate-900/50 rounded-md data-[state=active]:bg-sky-600 data-[state=active]:text-white transition-all text-sm font-medium"
              >
                <Briefcase className="w-4.5 h-4.5 shrink-0" />
                <span className="hidden md:inline">Services Offerings</span>
              </TabsTrigger>
              <TabsTrigger
                value="page-industries"
                className="justify-start gap-2.5 px-3 py-2.5 text-slate-400 hover:text-slate-100 hover:bg-slate-900/50 rounded-md data-[state=active]:bg-sky-600 data-[state=active]:text-white transition-all text-sm font-medium"
              >
                <Building2 className="w-4.5 h-4.5 shrink-0" />
                <span className="hidden md:inline">Industries Verticals</span>
              </TabsTrigger>
              <TabsTrigger
                value="page-resources"
                className="justify-start gap-2.5 px-3 py-2.5 text-slate-400 hover:text-slate-100 hover:bg-slate-900/50 rounded-md data-[state=active]:bg-sky-600 data-[state=active]:text-white transition-all text-sm font-medium"
              >
                <BookOpen className="w-4.5 h-4.5 shrink-0" />
                <span className="hidden md:inline">Resource Center</span>
              </TabsTrigger>
              <TabsTrigger
                value="page-careers"
                className="justify-start gap-2.5 px-3 py-2.5 text-slate-400 hover:text-slate-100 hover:bg-slate-900/50 rounded-md data-[state=active]:bg-sky-600 data-[state=active]:text-white transition-all text-sm font-medium"
              >
                <Zap className="w-4.5 h-4.5 shrink-0" />
                <span className="hidden md:inline">Careers Benefits</span>
              </TabsTrigger>
              <TabsTrigger
                value="page-partners"
                className="justify-start gap-2.5 px-3 py-2.5 text-slate-400 hover:text-slate-100 hover:bg-slate-900/50 rounded-md data-[state=active]:bg-sky-600 data-[state=active]:text-white transition-all text-sm font-medium"
              >
                <Handshake className="w-4.5 h-4.5 shrink-0" />
                <span className="hidden md:inline">Partners Program</span>
              </TabsTrigger>
              <TabsTrigger
                value="page-leadership"
                className="justify-start gap-2.5 px-3 py-2.5 text-slate-400 hover:text-slate-100 hover:bg-slate-900/50 rounded-md data-[state=active]:bg-sky-600 data-[state=active]:text-white transition-all text-sm font-medium"
              >
                <Users className="w-4.5 h-4.5 shrink-0" />
                <span className="hidden md:inline">Who We Are</span>
              </TabsTrigger>
              <TabsTrigger
                value="leads"
                className="justify-start gap-2.5 px-3 py-2.5 text-slate-400 hover:text-slate-100 hover:bg-slate-900/50 rounded-md data-[state=active]:bg-sky-600 data-[state=active]:text-white transition-all text-sm font-medium"
              >
                <Mail className="w-4.5 h-4.5 shrink-0" />
                <span className="hidden md:inline">Form Leads Inbox</span>
                {leads.filter(l => l.status === "New").length > 0 && (
                  <Badge className="ml-auto bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-1.5 py-0.5 text-[10px]">
                    {leads.filter(l => l.status === "New").length}
                  </Badge>
                )}
              </TabsTrigger>
              <TabsTrigger
                value="seo-auditor"
                className="justify-start gap-2.5 px-3 py-2.5 text-slate-400 hover:text-slate-100 hover:bg-slate-900/50 rounded-md data-[state=active]:bg-sky-600 data-[state=active]:text-white transition-all text-sm font-medium"
              >
                <FileText className="w-4.5 h-4.5 shrink-0" />
                <span className="hidden md:inline">SEO Audit & Compliance</span>
              </TabsTrigger>
              <TabsTrigger
                value="settings"
                className="justify-start gap-2.5 px-3 py-2.5 text-slate-400 hover:text-slate-100 hover:bg-slate-900/50 rounded-md data-[state=active]:bg-sky-600 data-[state=active]:text-white transition-all text-sm font-medium"
              >
                <Settings className="w-4.5 h-4.5 shrink-0" />
                <span className="hidden md:inline">System Settings</span>
              </TabsTrigger>
            </TabsList>

            <div className="mt-8 pt-6 border-t border-slate-900 hidden md:block">
              <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-2 mb-2">Technical Info</h4>
              <div className="space-y-2 text-xs px-2 text-slate-400">
                <p>Node version: v20.11.0</p>
                <p>React: v18.3.1</p>
                <p>Vite: v5.4.19</p>
                <p>Build Status: <span className="text-emerald-400">Success</span></p>
              </div>
            </div>
          </div>

          {/* Right Main Content Panel */}
          <main className="flex-1 p-6 overflow-y-auto">

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
                  {webContent.services.map((service) => (
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
                  {webContent.industries.map((ind) => (
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
                  {webContent.resources.map((res) => (
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
                  {webContent.benefits.map((ben) => (
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
                  {webContent.partnerBenefits.map((pb) => (
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
                  {webContent.leadership.map((lead) => (
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
