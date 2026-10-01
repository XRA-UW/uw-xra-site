import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

/* createRoot, not hydrateRoot, even though #root now arrives prefilled by
   scripts/prerender.mjs. The prerendered markup is a build-time snapshot and
   some of it is time-dependent (the buildspace deadline in Index.tsx, the
   copyright year in Footer.tsx), so hydrating would produce mismatch errors
   once the snapshot ages. React clears the container and renders fresh in the
   same frame. The prerendered HTML still does its job: it is what a crawler
   reads, and it is what paints first. */
createRoot(document.getElementById("root")!).render(<App />);
