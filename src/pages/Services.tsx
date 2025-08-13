import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Calculator, 
  BookOpen, 
  TrendingUp, 
  Users, 
  ArrowRight,
  Shield,
  Clock,
  Award
} from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const services = [
  {
    id: "tax-preparation",
    title: "Tax Preparation",
    description: "Expert tax preparation and planning services to maximize your returns and minimize liabilities",
    icon: Calculator,
    features: ["Individual Tax Returns", "Business Tax Filing", "Tax Planning & Strategy", "IRS Representation"],
    color: "from-blue-500 to-blue-600"
  },
  {
    id: "bookkeeping",
    title: "Bookkeeping",
    description: "Comprehensive bookkeeping solutions to keep your finances organized and up-to-date",
    icon: BookOpen,
    features: ["Monthly Reconciliation", "Financial Statements", "Account Management", "Cloud Accounting"],
    color: "from-purple-500 to-purple-600"
  },
  {
    id: "financial-planning",
    title: "Financial Planning",
    description: "Strategic financial planning to help you achieve your business and personal goals",
    icon: TrendingUp,
    features: ["Cash Flow Analysis", "Budget Planning", "Investment Advisory", "Growth Strategy"],
    color: "from-green-500 to-green-600"
  },
  {
    id: "payroll",
    title: "Payroll Services",
    description: "Streamlined payroll processing to ensure accurate and timely employee payments",
    icon: Users,
    features: ["Payroll Processing", "Tax Compliance", "Direct Deposits", "Employee Benefits"],
    color: "from-orange-500 to-orange-600"
  }
];

const Services = () => {
  return (
    <>
      <SEO 
        title="Our Services - Digital Accountant"
        description="Comprehensive financial services including tax preparation, bookkeeping, financial planning, and payroll. Expert solutions tailored to your business needs."
        keywords={["accounting services", "tax preparation", "bookkeeping services", "financial planning", "payroll services", "business accounting"]}
      />
      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-24 pb-12 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto animate-fade-in">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Our <span className="text-primary">Services</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Comprehensive financial solutions tailored to your needs. We combine expertise 
                with cutting-edge technology to deliver exceptional results.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
              <div className="flex items-center justify-center space-x-3 animate-slide-up">
                <Shield className="w-8 h-8 text-primary" />
                <div>
                  <div className="font-semibold">Secure & Compliant</div>
                  <div className="text-sm text-muted-foreground">Bank-level security</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3 animate-slide-up" style={{ animationDelay: "0.1s" }}>
                <Clock className="w-8 h-8 text-primary" />
                <div>
                  <div className="font-semibold">24/7 Access</div>
                  <div className="text-sm text-muted-foreground">Always available</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3 animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <Award className="w-8 h-8 text-primary" />
                <div>
                  <div className="font-semibold">Award Winning</div>
                  <div className="text-sm text-muted-foreground">Industry recognized</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card 
                  key={service.id} 
                  className="group hover:shadow-xl transition-all duration-300 overflow-hidden animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${service.color} text-white mb-4`}>
                        <service.icon className="w-6 h-6" />
                      </div>
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-base mt-2">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link to={`/services/${service.id}`}>
                      <Button 
                        variant="outline" 
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      >
                        Learn More 
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Transform Your Finances?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your financial goals. 
              Schedule a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-glow">
                Schedule Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline">
                Download Service Guide
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Services;