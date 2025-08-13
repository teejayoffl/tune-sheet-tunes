import About from "@/components/About";
import SEO from "@/components/SEO";

const AboutPage = () => {
  return (
    <div className="bg-background">
      <SEO title="About" description="Certified accountants combining decades of experience with modern tools." />
      <section className="border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">About Us</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mt-4">
            We blend traditional expertise with cutting-edge technology to deliver proactive, reliable accounting.
          </p>
        </div>
      </section>
      <About />
    </div>
  );
};

export default AboutPage;