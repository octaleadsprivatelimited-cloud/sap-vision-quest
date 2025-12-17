import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import Index from "./pages/Index";
import Products from "./pages/Products";
import Solutions from "./pages/Solutions";
import Industries from "./pages/Industries";
import Resources from "./pages/Resources";
import Documentation from "./pages/resources/Documentation";
import VideoTutorials from "./pages/resources/VideoTutorials";
import Whitepapers from "./pages/resources/Whitepapers";
import Downloads from "./pages/resources/Downloads";
import FAQ from "./pages/resources/FAQ";
import DeveloperResources from "./pages/resources/DeveloperResources";
import TrainingMaterials from "./pages/resources/TrainingMaterials";
import TrainingClasses from "./pages/resources/TrainingClasses";
import Partners from "./pages/Partners";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import WhoWeAre from "./pages/WhoWeAre";
import WhatWeDo from "./pages/WhatWeDo";
import NotFound from "./pages/NotFound";
import SapS4HanaImplementation from "./pages/services/SapS4HanaImplementation";
import SapEccMigration from "./pages/services/SapEccMigration";
import SapLicensing from "./pages/services/SapLicensing";
import SapModuleImplementations from "./pages/services/SapModuleImplementations";
import SapCustomDevelopment from "./pages/services/SapCustomDevelopment";
import SapCorporateTraining from "./pages/services/SapCorporateTraining";
import SapSupportMaintenance from "./pages/services/SapSupportMaintenance";
import SapIntegrationServices from "./pages/services/SapIntegrationServices";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<Products />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/documentation" element={<Documentation />} />
          <Route path="/resources/video-tutorials" element={<VideoTutorials />} />
          <Route path="/resources/whitepapers" element={<Whitepapers />} />
          <Route path="/resources/downloads" element={<Downloads />} />
          <Route path="/resources/faq" element={<FAQ />} />
          <Route path="/resources/developer-resources" element={<DeveloperResources />} />
          <Route path="/resources/training-materials" element={<TrainingMaterials />} />
          <Route path="/resources/training-classes" element={<TrainingClasses />} />
          <Route path="/services/sap-s4hana-implementation" element={<SapS4HanaImplementation />} />
          <Route path="/services/sap-ecc-migration" element={<SapEccMigration />} />
          <Route path="/services/sap-licensing" element={<SapLicensing />} />
          <Route path="/services/sap-module-implementations" element={<SapModuleImplementations />} />
          <Route path="/services/sap-custom-development" element={<SapCustomDevelopment />} />
          <Route path="/services/sap-corporate-training" element={<SapCorporateTraining />} />
          <Route path="/services/sap-support-maintenance" element={<SapSupportMaintenance />} />
          <Route path="/services/sap-integration-services" element={<SapIntegrationServices />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
