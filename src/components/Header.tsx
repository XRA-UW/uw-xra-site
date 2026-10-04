import { Link, useLocation } from "react-router-dom";
import { XraWordmark } from "@/components/Logo";

const Header = () => {
  const location = useLocation();

  /* Apache serves every route from its own directory and 301s "/hackathon" to
     "/hackathon/", so the canonical URL has the trailing slash and the links
     must carry it too, or every internal link costs a redirect hop.

     The home link is the exception: react-router normalises to="/" down to
     the bare basename, so it stays "/xra" and takes the one redirect. There is
     no way to express "/xra/" through <Link> without giving up client-side
     navigation for a full page load. */
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Hackathon", path: "/hackathon" },
    { name: "Projects", path: "/projects" },
    { name: "People", path: "/people" },
  ];

  /* The prerenderer renders at "/hackathon" while the browser is served
     "/hackathon/", so comparing raw pathnames highlights the right tab in the
     static HTML and then drops it the moment React takes over. Normalise. */
  const current = location.pathname.replace(/\/+$/, "") || "/";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-8">
        <Link to="/" className="group flex items-center gap-3">
          <XraWordmark className="h-5 w-auto text-foreground transition-colors group-hover:text-brand-green" />
          <span className="hidden font-light text-sm text-muted-foreground md:inline">
            Extended Reality Association
          </span>
        </Link>

        <nav className="flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path === "/" ? "/" : `${item.path}/`}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors sm:px-4 sm:py-2 sm:text-sm ${
                current === item.path ||
                (item.path !== "/" && current.startsWith(`${item.path}/`))
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground/70 hover:bg-white/5 hover:text-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
