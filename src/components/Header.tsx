import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
const Header = () => {
  const location = useLocation();
  const navItems = [{
    name: "Home",
    path: "/"
  }, {
    name: "People",
    path: "/people"
  }];
  return <header className="sticky top-0 z-50 w-full border-b border-glow-pink bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Animated scan line */}
      <div className="absolute top-0 h-[1px] w-8 bg-gradient-to-r from-transparent via-cyber-cyan to-transparent animate-scan-line"></div>
      
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-3">
          
          <h1 className="text-xl font-bold font-orbitron bg-gradient-cyber bg-clip-text text-transparent text-glow-pink">
            XRA
          </h1>
        </div>
        
        <nav className="flex items-center space-x-1">
          {navItems.map(item => <Button key={item.name} asChild variant={location.pathname === item.path ? "default" : "ghost"} className="font-rajdhani font-semibold">
              <Link to={item.path}>{item.name}</Link>
            </Button>)}
        </nav>
      </div>
    </header>;
};
export default Header;