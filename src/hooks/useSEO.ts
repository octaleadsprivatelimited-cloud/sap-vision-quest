import { useLocation } from "react-router-dom";
import { seoData } from "@/data/seoData";

export const useSEO = () => {
  const location = useLocation();
  const pathname = location.pathname;
  
  // Get SEO data for current path, fallback to homepage
  const seo = seoData[pathname] || seoData["/"];
  
  return seo;
};

