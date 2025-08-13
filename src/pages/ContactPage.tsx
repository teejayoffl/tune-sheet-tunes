import Contact from "@/components/Contact";
import SEO from "@/components/SEO";

const ContactPage = () => {
  return (
    <div className="bg-background">
      <SEO title="Contact" description="Get in touch to streamline your bookkeeping, taxes, and financial strategy." />
      <section className="border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">Contact</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mt-4">
            Let's discuss how we can harmonize your finances and help you grow with confidence.
          </p>
        </div>
      </section>
      <Contact />
    </div>
  );
};

export default ContactPage;