import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Cloud, Shield, Zap, Smartphone, BarChart3, Clock, CheckCircle2, TrendingUp, Users, FileText, Calculator } from "lucide-react";

const DigitalAccountant = () => {
  const features = [
    {
      icon: Cloud,
      title: "Cloud-Based Solutions",
      description: "Access your financial data anytime, anywhere with secure cloud technology.",
      color: "text-blue-500"
    },
    {
      icon: Shield,
      title: "Bank-Level Security",
      description: "Your data is protected with enterprise-grade encryption and security protocols.",
      color: "text-green-500"
    },
    {
      icon: Zap,
      title: "Real-Time Updates",
      description: "Get instant insights into your financial position with live data synchronization.",
      color: "text-yellow-500"
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      description: "Manage your finances on the go with our mobile-optimized platform.",
      color: "text-purple-500"
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Save Time",
      description: "Automate repetitive tasks and focus on growing your business",
      stat: "70%",
      statLabel: "Time Saved"
    },
    {
      icon: TrendingUp,
      title: "Increase Accuracy",
      description: "Reduce human error with automated data entry and calculations",
      stat: "99.9%",
      statLabel: "Accuracy Rate"
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Access to certified accountants whenever you need guidance",
      stat: "24/7",
      statLabel: "Support Available"
    },
    {
      icon: FileText,
      title: "Compliance Ready",
      description: "Stay compliant with HMRC regulations automatically",
      stat: "100%",
      statLabel: "HMRC Compliant"
    }
  ];

  const services = [
    {
      icon: Calculator,
      title: "Automated Bookkeeping",
      description: "Smart categorization and reconciliation of transactions"
    },
    {
      icon: BarChart3,
      title: "Financial Reporting",
      description: "Real-time dashboards and customizable reports"
    },
    {
      icon: FileText,
      title: "Tax Preparation",
      description: "Automated tax calculations and filing"
    },
    {
      icon: CheckCircle2,
      title: "Audit Trail",
      description: "Complete visibility of all financial activities"
    }
  ];

  return (
    <>
      <SEO 
        title="Digital Accountant - Transform Your Financial Management"
        description="Discover how our digital accounting platform revolutionizes financial management with cloud-based solutions, real-time insights, and expert support."
        keywords={["digital accountant", "cloud accounting", "automated bookkeeping", "financial technology", "fintech accounting"]}
      />
      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-hero opacity-50" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3Cpattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse"%3E%3Cpath d="M 60 0 L 0 0 0 60" fill="none" stroke="white" stroke-width="0.5" opacity="0.1"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width="100%25" height="100%25" fill="url(%23grid)"/%3E%3C/svg%3E')] opacity-30" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
                <Zap className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-sm font-medium text-primary">The Future of Accounting</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                Meet Your
                <span className="text-primary block">Digital Accountant</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                Experience the perfect blend of cutting-edge technology and expert accounting knowledge. 
                Streamline your finances with intelligent automation and real-time insights.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-glow text-base px-8 py-6">
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="border-primary/20 text-primary hover:bg-primary/10 text-base px-8 py-6">
                  Schedule Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-card/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Powered by Innovation
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our digital platform combines the latest technology with accounting expertise
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card 
                  key={index} 
                  className="backdrop-blur-md bg-card/40 border-border/50 hover:bg-card/60 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <feature.icon className={`w-12 h-12 ${feature.color} mb-4`} />
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Transform Your Financial Management
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                See the tangible benefits of switching to digital accounting
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="text-center space-y-4 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                    <benefit.icon className="w-10 h-10 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground mb-4">{benefit.description}</p>
                    <div className="text-3xl font-bold text-primary">{benefit.stat}</div>
                    <div className="text-sm text-muted-foreground">{benefit.statLabel}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-card/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Comprehensive Digital Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Everything you need to manage your finances digitally
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 p-6 rounded-xl backdrop-blur-md bg-card/40 border border-border/50 hover:bg-card/60 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="backdrop-blur-md bg-gradient-primary text-white border-0 overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3Cpattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse"%3E%3Cpath d="M 60 0 L 0 0 0 60" fill="none" stroke="white" stroke-width="0.5" opacity="0.1"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width="100%25" height="100%25" fill="url(%23grid)"/%3E%3C/svg%3E')] opacity-20" />
              <CardContent className="py-16 text-center relative z-10">
                <h2 className="text-4xl font-bold mb-4">
                  Ready to Go Digital?
                </h2>
                <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                  Join thousands of UK businesses who have transformed their financial management with our digital accounting platform.
                </p>
                <Button size="lg" variant="secondary" className="text-primary hover:text-primary/90 text-base px-8 py-6">
                  Start Your Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default DigitalAccountant;