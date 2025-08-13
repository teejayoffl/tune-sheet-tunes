import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Home"
        description="Experience accounting like never before. Bookkeeping, tax planning, and financial analysis with a modern digital platform."
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Digital Accountant",
          url: typeof window !== 'undefined' ? window.location.origin : undefined,
          logo: "/favicon.ico",
        }}
      />
      <Hero />
      <Services />
      <About />
      <Contact />
    </div>
  );
};

export default Index;
