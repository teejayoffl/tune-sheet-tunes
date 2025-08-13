import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <>
      <SEO 
        title="Digital Accountant - Transform Your Financial Management"
        description="Expert accounting services powered by cutting-edge technology. Tax preparation, bookkeeping, financial planning, and payroll solutions for modern businesses."
        keywords={["digital accounting", "tax services", "bookkeeping", "financial planning", "payroll", "CPA", "accounting software"]}
      />
      <div className="min-h-screen bg-background">
        <Navigation />
        <Hero />
        <Services />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Index;
