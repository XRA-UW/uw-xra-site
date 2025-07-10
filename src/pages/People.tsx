import Header from "@/components/Header";

const People = () => {
  const officers = [
    { name: "Boe Zhou", position: "President" },
    { name: "Dawson Harris", position: "Officer" },
    { name: "Takaharu Tanaka", position: "Officer" },
    { name: "Evan Zhao", position: "Officer" },
    { name: "Hitender Oswal", position: "Officer" },
  ];

  const advisors = [
    { name: "Laura Estela Luna Castillo", position: "advisor" },
    { name: "John Akers", position: "advisor" },
  ];

  return (
    <div className="min-h-screen bg-gradient-bg cyber-grid relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-16 w-6 h-6 border border-cyber-pink animate-rotate-slow"></div>
        <div className="absolute top-60 right-24 w-4 h-4 border border-cyber-cyan animate-float"></div>
        <div className="absolute bottom-32 left-32 w-5 h-5 border border-cyber-purple rotate-45 animate-pulse"></div>
      </div>

      <Header />
      <div className="container mx-auto px-4 py-8 relative">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-orbitron mb-4 bg-gradient-cyber bg-clip-text text-transparent text-glow-pink">
            Our Team
          </h1>
          <p className="text-xl text-foreground/80 font-rajdhani font-medium">
            Meet the <span className="text-cyber-cyan">visionaries</span> behind 
            <span className="text-cyber-pink"> Extended Reality Association</span>
          </p>
        </div>
        
        {/* Officers Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold font-orbitron mb-8 text-center text-cyber-cyan">
            Officers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {officers.map((person, i) => (
              <div key={i} className="bg-gradient-card p-6 rounded-lg border border-glow-cyan text-center relative group hover:border-glow-pink transition-all duration-300">
                {/* Decorative corner elements */}
                <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-cyber-pink opacity-60"></div>
                <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-cyber-cyan opacity-60"></div>
                <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-cyber-purple opacity-60"></div>
                <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-neon-orange opacity-60"></div>
                
                <div className="w-24 h-24 bg-gradient-cyber rounded-full mx-auto mb-4 animate-pulse-glow"></div>
                <h3 className="text-lg font-semibold font-orbitron mb-2 text-cyber-cyan">{person.name}</h3>
                <p className="text-cyber-pink font-rajdhani font-medium mb-1">{person.position}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Advisors Section */}
        <div>
          <h2 className="text-3xl font-bold font-orbitron mb-8 text-center text-cyber-purple">
            Advisors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {advisors.map((person, i) => (
              <div key={i} className="bg-gradient-card p-6 rounded-lg border border-glow-purple text-center relative group hover:border-glow-cyan transition-all duration-300">
                {/* Decorative corner elements */}
                <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-cyber-purple opacity-60"></div>
                <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-cyber-cyan opacity-60"></div>
                <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-cyber-pink opacity-60"></div>
                <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-neon-orange opacity-60"></div>
                
                <div className="w-24 h-24 bg-gradient-cyber rounded-full mx-auto mb-4 animate-pulse-glow"></div>
                <h3 className="text-lg font-semibold font-orbitron mb-2 text-cyber-cyan">{person.name}</h3>
                <p className="text-cyber-purple font-rajdhani font-medium mb-1">{person.position}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;