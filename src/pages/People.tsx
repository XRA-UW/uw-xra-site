import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PeopleSection from "@/components/PeopleSection";
import PeopleMarquee from "@/components/PeopleMarquee";
import { officers, formerExecutiveBoard, advisors } from "@/data/people";

const People = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 bg-gradient-hero" />
      <div className="pointer-events-none absolute inset-0 x-pattern" />

      <div className="relative">
        <Header />

        <div className="container px-4 py-16">
          <div className="mb-14 text-center">
            <h1 className="mb-4 text-4xl font-medium tracking-tight md:text-6xl">
              Our Team
            </h1>
            <p className="text-lg font-light text-muted-foreground md:text-xl">
              Thank you all for making XRA an amazing community!
            </p>
          </div>

          <PeopleSection title="Officers" people={officers} />
          <PeopleSection
            title="Advisors"
            people={advisors}
            maxWidth="max-w-3xl"
            cols="md:grid-cols-2"
          />
          <PeopleMarquee
            title="Former Executive Board"
            subtitle="Past leadership who helped build XRA."
            people={formerExecutiveBoard}
          />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default People;
