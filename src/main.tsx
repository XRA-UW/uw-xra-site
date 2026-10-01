import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

/* Legacy HashRouter links. The site used "#/hackathon" style URLs until the
   switch to BrowserRouter, and those links are still out there in bookmarks,
   Discord messages, slides and anywhere the URL was pasted. Without this the
   fragment is simply ignored and every one of them lands on the home page,
   silently and with no error.

   Runs before createRoot so BrowserRouter reads the corrected location on its
   first render. replaceState rather than assigning location, to avoid a
   reload and to keep the back button sane. */
const legacyHash = window.location.hash;
if (legacyHash.startsWith("#/")) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  window.history.replaceState(null, "", base + legacyHash.slice(1));
}

/* createRoot, not hydrateRoot, even though #root now arrives prefilled by
   scripts/prerender.mjs. The prerendered markup is a build-time snapshot and
   some of it is time-dependent (the buildspace deadline in Index.tsx, the
   copyright year in Footer.tsx), so hydrating would produce mismatch errors
   once the snapshot ages. React clears the container and renders fresh in the
   same frame. The prerendered HTML still does its job: it is what a crawler
   reads, and it is what paints first. */
createRoot(document.getElementById("root")!).render(<App />);
