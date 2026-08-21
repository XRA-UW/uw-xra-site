import { Link, useLocation } from "react-router-dom";
import { XMark } from "@/components/Logo";

const Header = () => {
  const location = useLocation();
  const navItems = [
    { name: "Home", path: "/" },
    { name: "People", path: "/people" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="group flex items-center gap-3">
          <XMark className="h-6 w-6 text-foreground transition-colors group-hover:text-brand-green" />
          <span className="text-xl font-medium tracking-tight">xra</span>
          <span className="hidden font-light text-sm text-muted-foreground md:inline">
            Extended Reality Association
          </span>
        </Link>

        <nav className="flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                location.pathname === item.path
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
