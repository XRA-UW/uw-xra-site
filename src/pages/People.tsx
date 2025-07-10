import Header from "@/components/Header";

const People = () => {
  return (
    <div className="min-h-screen bg-gradient-bg">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Our Officers</h1>
          <p className="text-xl text-muted-foreground">
            Meet the team behind Extended Reality Association
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder for officer cards - will be populated later */}
          <div className="bg-card p-6 rounded-lg shadow-sm border text-center">
            <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4"></div>
            <h3 className="text-lg font-semibold mb-2">Officer Name</h3>
            <p className="text-muted-foreground mb-1">Position</p>
            <p className="text-sm text-muted-foreground">Brief description or major</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;