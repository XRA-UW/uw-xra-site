import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { XMark } from "@/components/Logo";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 bg-gradient-hero" />
      <div className="pointer-events-none absolute inset-0 x-pattern" />

      <div className="relative text-center">
        <XMark className="mx-auto mb-6 h-16 w-16 animate-float text-brand-green" />
        <h1 className="mb-3 text-6xl font-medium tracking-tight">404</h1>
        <p className="mb-8 text-xl font-light text-muted-foreground">
          This reality doesn't exist (yet).
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 font-medium text-primary-foreground transition-all hover:shadow-glow-blue"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
