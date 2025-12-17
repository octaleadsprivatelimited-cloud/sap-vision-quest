import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
          <Route path="/partners" element={<Partners />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
