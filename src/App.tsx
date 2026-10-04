import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { canonicalUrl, metaForPath } from "@/seo";
import Index from "./pages/Index";
import People from "./pages/People";
import Projects from "./pages/Projects";
import Hackathon from "./pages/Hackathon";
import Hackathon2026 from "./pages/Hackathon2026";
import Hackathon2027 from "./pages/Hackathon2027";
import HackathonSponsors from "./pages/HackathonSponsors";
import HackathonMentors from "./pages/HackathonMentors";
import HackathonSchedule from "./pages/HackathonSchedule";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

/* BrowserRouter, not HashRouter: a "#/hackathon" fragment is not a URL to a
   crawler, so every route collapsed into one indexable page. Real paths need
   two things on GitHub Pages, both handled by scripts/prerender.mjs: a
   prerendered index.html inside a directory per route, and a 404.html. */
const basename = import.meta.env.BASE_URL.replace(/\/$/, "");

/** Keeps the head in sync on client-side navigation. The first paint's head is
 *  already correct because the prerenderer baked it in; this only matters once
 *  the user clicks between tabs. */
const DocumentMeta = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const { title, description } = metaForPath(pathname);
    document.title = title;

    const setAttr = (selector: string, attr: string, value: string) => {
      const el = document.head.querySelector(selector);
      if (el) el.setAttribute(attr, value);
    };

    const url = canonicalUrl(pathname);
    setAttr('meta[name="description"]', "content", description);
    setAttr('meta[property="og:title"]', "content", title);
    setAttr('meta[property="og:description"]', "content", description);
    setAttr('meta[property="og:url"]', "content", url);
    setAttr('meta[name="twitter:title"]', "content", title);
    setAttr('meta[name="twitter:description"]', "content", description);
    setAttr('link[rel="canonical"]', "href", url);
  }, [pathname]);

  return null;
};

/** Routes without a router around them, so the client and the prerenderer can
 *  each supply their own (BrowserRouter / StaticRouter). */
export const AppRoutes = () => (
  <>
    <DocumentMeta />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/people" element={<People />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/hackathon" element={<Hackathon />} />
      <Route path="/hackathon/2026" element={<Hackathon2026 />} />
      <Route path="/hackathon/2027" element={<Hackathon2027 />} />
      <Route path="/hackathon/2027/sponsors" element={<HackathonSponsors />} />
      <Route path="/hackathon/2027/mentors" element={<HackathonMentors />} />
      <Route path="/hackathon/2027/schedule" element={<HackathonSchedule />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE.
          New routes must also be added to ROUTE_META in src/seo.ts, or they
          ship with the 404 title and stay out of the sitemap. */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={basename}>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
