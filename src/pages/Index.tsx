import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-bg">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Extended Reality Association
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Exploring the frontiers of Virtual Reality, Augmented Reality, and Mixed Reality technologies
          </p>
          <Button size="lg" className="shadow-glow">
            Join Our Community
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Events Section with Luma Integration */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Events</h2>
          <p className="text-lg text-muted-foreground">
            Join us for exciting XR experiences and networking opportunities
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="bg-card rounded-lg p-4 shadow-lg border max-w-full overflow-hidden">
            <iframe
              src="https://lu.ma/embed/calendar/cal-rx7JDbb4ZqgZ8lR/events"
              width="600"
              height="450"
              style={{ 
                border: "1px solid #bfcbda88", 
                borderRadius: "4px",
                maxWidth: "100%"
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
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-semibold mb-3 text-primary">Virtual Reality</h3>
            <p className="text-muted-foreground">
              Immerse yourself in completely digital worlds and explore the limitless possibilities of VR technology.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-semibold mb-3 text-accent">Augmented Reality</h3>
            <p className="text-muted-foreground">
              Overlay digital information onto the real world and discover how AR enhances our daily experiences.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-semibold mb-3 text-primary">Mixed Reality</h3>
            <p className="text-muted-foreground">
              Bridge the gap between physical and digital realms with cutting-edge MR technologies and applications.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
