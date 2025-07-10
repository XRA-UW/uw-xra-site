import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
const Index = () => {
  return <div className="min-h-screen bg-gradient-bg cyber-grid relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-4 h-4 border border-cyber-cyan animate-rotate-slow"></div>
        <div className="absolute top-40 right-20 w-6 h-6 border border-cyber-pink animate-float"></div>
        <div className="absolute bottom-40 left-20 w-5 h-5 border border-cyber-purple rotate-45 animate-pulse"></div>
        
        {/* Glowing orbs */}
        <div className="absolute top-60 right-10 w-3 h-3 bg-cyber-cyan rounded-full shadow-cyan-glow animate-pulse"></div>
        <div className="absolute bottom-20 right-40 w-2 h-2 bg-cyber-pink rounded-full shadow-glow animate-pulse"></div>
      </div>

      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center relative">
        <div className="max-w-4xl mx-auto">
          {/* Main XRA Logo */}
          <div className="mb-8 flex justify-center">
            <img 
              src="/lovable-uploads/f97362a6-edb5-490f-82e1-fa4ff5d6a22d.png" 
              alt="Extended Reality Association" 
              className="h-48 md:h-64 w-auto animate-pulse-glow"
            />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold font-orbitron mb-6 bg-gradient-cyber bg-clip-text text-transparent text-glow-pink">
            Extended Reality Association
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto font-rajdhani font-medium">
            Exploring the frontiers of <span className="text-cyber-pink font-semibold">Virtual Reality</span>, 
            <span className="text-cyber-cyan font-semibold"> Augmented Reality</span>, and 
            <span className="text-cyber-purple font-semibold"> Mixed Reality</span> technologies
          </p>
          
          {/* Mascot */}
          <div className="mb-8 flex justify-center">
            <img 
              src="/lovable-uploads/7ee1a00a-1ae3-4525-89a9-44c19eee2a3b.png" 
              alt="XRA Mascot" 
              className="h-32 w-auto animate-float"
            />
          </div>
          
          <Button size="lg" className="shadow-cyber-glow border-glow-pink font-rajdhani font-bold text-lg px-8">
            Join Our Community
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Events Section with Luma Integration */}
      <section className="container mx-auto px-4 py-16 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-4 bg-gradient-cyber bg-clip-text text-transparent text-glow-cyan">
            Upcoming Events
          </h2>
          <p className="text-lg text-foreground/80 font-rajdhani font-medium">
            Join us for exciting <span className="text-cyber-pink">XR experiences</span> and 
            <span className="text-cyber-cyan"> networking opportunities</span>
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="bg-gradient-card rounded-lg p-6 border border-glow-cyan max-w-full overflow-hidden relative">
            {/* Decorative corner elements */}
            <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-cyber-pink"></div>
            <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-cyber-cyan"></div>
            <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-cyber-purple"></div>
            <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-neon-orange"></div>
            
            <iframe 
              src="https://lu.ma/embed/calendar/cal-rx7JDbb4ZqgZ8lR/events" 
              width="600" 
              height="450" 
              style={{
                border: "1px solid hsl(var(--cyber-cyan) / 0.3)",
                borderRadius: "8px",
                maxWidth: "100%",
                background: "hsl(var(--background) / 0.5)"
              }} 
              allowFullScreen 
              aria-hidden="false" 
              tabIndex={0} 
              className="w-full max-w-[600px]" 
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      
    </div>;
};
export default Index;