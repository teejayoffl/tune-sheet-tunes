import Services from "@/components/Services";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  return (
    <div className="bg-background">
      <SEO
        title="Services"
        description="Bookkeeping, tax planning, financial analysis, and more—delivered with modern tools and expert care."
      />

      <section className="bg-gradient-hero/20 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
              Services that Scale with You
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              From day-one bookkeeping to CFO-level strategy, we harmonize your finances with transparent pricing and proactive communication.
            </p>
            <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 shadow-glow">
              <Link to="/contact">
                Book a Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Services />
    </div>
  );
};

export default ServicesPage;