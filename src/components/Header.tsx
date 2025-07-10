import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  const location = useLocation();
  
  const navItems = [
    { name: "Home", path: "/" },
    { name: "People", path: "/people" }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Extended Reality Association
          </h1>
        </div>
        
        <nav className="flex items-center space-x-1">
          {navItems.map((item) => (
            <Button
              key={item.name}
              asChild
              variant={location.pathname === item.path ? "default" : "ghost"}
            >
              <Link to={item.path}>{item.name}</Link>
            </Button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;