import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Calculator, 
  BookOpen, 
  TrendingUp, 
  Users, 
  Building2,
  FileText,
  Shield,
  Briefcase,
  LineChart,
  ArrowRight,
  CheckCircle2,
  Target,
  Lightbulb,
  Award
} from "lucide-react";
import { Link } from "react-router-dom";

const WhatWeDo = () => {
  const coreServices = [
    {
      icon: Calculator,
      title: "Tax Services",
      description: "Comprehensive tax planning and compliance for individuals and businesses",
      features: [
        "Self Assessment tax returns",
        "Corporation tax planning",
        "VAT registration and returns",
        "Capital gains tax advice",
        "R&D tax credits",
        "HMRC investigations support"
      ]
    },
    {
      icon: BookOpen,
      title: "Accounting & Bookkeeping",
      description: "Keep your finances organised with our professional bookkeeping services",
      features: [
        "Monthly bookkeeping",
        "Year-end accounts preparation",
        "Management accounts",
        "Cloud accounting setup",
        "Bank reconciliation",
        "Financial reporting"
      ]
    },
    {
      icon: Building2,
      title: "Company Services",
      description: "Complete company administration and compliance solutions",
      features: [
        "Company formation",
        "Company secretarial services",
        "Annual accounts filing",
        "Confirmation statements",
        "Directors' responsibilities",
        "Share transfers and changes"
      ]
    },
    {
      icon: Users,
      title: "Payroll & HR",
      description: "Streamlined payroll processing and HR compliance",
      features: [
        "Monthly payroll processing",
        "PAYE and NI calculations",
        "Auto-enrolment pensions",
        "P60s and P45s",
        "HR documentation",
        "Employment law guidance"
      ]
    }
  ];

  const industries = [
    "Tech Startups",
    "E-commerce",
    "Professional Services",
    "Construction",
    "Healthcare",
    "Creative Industries",
    "Property & Real Estate",
    "Hospitality"
  ];

  const process = [
    {
      icon: Target,
      title: "Understanding Your Needs",
      description: "We start by listening to understand your unique business challenges and goals"
    },
    {
      icon: Lightbulb,
      title: "Tailored Solutions",
      description: "Our experts design a customised approach that fits your specific requirements"
    },
    {
      icon: Shield,
      title: "Implementation",
      description: "We seamlessly integrate our services with your existing processes"
    },
    {
      icon: LineChart,
      title: "Ongoing Support",
      description: "Regular reviews and proactive advice to help your business grow"
    }
  ];

  return (
    <>
      <SEO 
        title="What We Do - Digital Accountant UK"
        description="Discover our comprehensive range of UK accounting services. From tax planning to payroll, we provide expert financial solutions for businesses across London and the UK."
        keywords={["UK accountant services", "what we do", "accounting services London", "business accountant UK", "HMRC compliance"]}
      />
      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-24 pb-12 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                What We <span className="text-primary">Do</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                We're more than just accountants. We're your financial partners, providing 
                comprehensive solutions to help UK businesses thrive in today's economy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-glow">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Link to="/services">
                  <Button size="lg" variant="outline">
                    View All Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Core Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Core Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive financial solutions tailored to meet the unique needs of UK businesses
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {coreServices.map((service, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-xl transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                        <p className="text-muted-foreground mb-4">{service.description}</p>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We follow a proven process to deliver exceptional results for every client
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              {process.map((step, index) => (
                <div 
                  key={index}
                  className="text-center animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-1/4 -right-3">
                      <ArrowRight className="w-6 h-6 text-primary/30" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Industries We Serve</h2>
                <p className="text-lg text-muted-foreground">
                  Specialised expertise across diverse UK business sectors
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {industries.map((industry, index) => (
                  <div 
                    key={index}
                    className="backdrop-blur-md bg-card/30 border border-border/50 rounded-lg p-4 text-center hover:bg-card/50 transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <span className="font-medium">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Why UK Businesses Choose Us</h2>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Award className="w-6 h-6 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-1">ACCA & CIMA Qualified</h3>
                        <p className="text-muted-foreground">
                          Our team holds prestigious UK accounting qualifications
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Shield className="w-6 h-6 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-1">HMRC Authorised</h3>
                        <p className="text-muted-foreground">
                          Registered agents with direct HMRC filing capabilities
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Briefcase className="w-6 h-6 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-1">Fixed Fee Pricing</h3>
                        <p className="text-muted-foreground">
                          Transparent pricing with no hidden charges
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <LineChart className="w-6 h-6 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-1">Proactive Advice</h3>
                        <p className="text-muted-foreground">
                          Regular updates on tax savings and growth opportunities
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <Card className="backdrop-blur-md bg-card/40 border border-border/50">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Finances?</h3>
                      <p className="text-muted-foreground mb-6">
                        Join hundreds of UK businesses who trust us with their financial success.
                      </p>
                      <Button className="w-full bg-gradient-primary hover:opacity-90 shadow-glow">
                        Schedule Free Consultation
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                      <p className="text-sm text-muted-foreground mt-4 text-center">
                        No obligation • 30-minute call • Expert advice
                      </p>
                    </CardContent>
                  </Card>
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-pulse-slow" />
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-glow" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default WhatWeDo;