import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowRight, 
  CheckCircle2, 
  Phone, 
  Mail,
  Clock,
  Shield,
  Award,
  ChevronRight
} from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceDetailProps {
  service: {
    id: string;
    title: string;
    tagline: string;
    description: string;
    icon: React.ElementType;
    benefits: string[];
    process: {
      title: string;
      description: string;
    }[];
    pricing: {
      name: string;
      price: string;
      features: string[];
      highlighted?: boolean;
    }[];
    faqs: {
      question: string;
      answer: string;
    }[];
  };
}

const ServiceDetail = ({ service }: ServiceDetailProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex p-4 rounded-2xl bg-primary/10 mb-6">
              <service.icon className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {service.tagline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-glow">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline">
                <Phone className="w-5 h-5 mr-2" />
                Book a Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Choose Our {service.title}?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {service.benefits.slice(0, Math.ceil(service.benefits.length / 2)).map((benefit, index) => (
                  <div 
                    key={index} 
                    className="flex items-start space-x-4 animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-lg">{benefit}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-6">
                {service.benefits.slice(Math.ceil(service.benefits.length / 2)).map((benefit, index) => (
                  <div 
                    key={index} 
                    className="flex items-start space-x-4 animate-slide-up"
                    style={{ animationDelay: `${(index + Math.ceil(service.benefits.length / 2)) * 0.1}s` }}
                  >
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-lg">{benefit}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Process
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {service.process.map((step, index) => (
                <div 
                  key={index}
                  className="relative animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-4xl font-bold text-primary/20">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        {index < service.process.length - 1 && (
                          <ChevronRight className="w-6 h-6 text-primary hidden md:block absolute -right-7 top-1/2 -translate-y-1/2" />
                        )}
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">
              Transparent Pricing
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Choose the plan that fits your needs. All plans include our core features and dedicated support.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {service.pricing.map((plan, index) => (
                <Card 
                  key={index}
                  className={`relative hover:shadow-xl transition-all ${
                    plan.highlighted ? 'border-primary shadow-lg scale-105' : ''
                  } animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardContent className="pt-8">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="mb-6">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      {plan.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mr-3 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full ${
                        plan.highlighted ? 'bg-gradient-primary hover:opacity-90' : ''
                      }`}
                      variant={plan.highlighted ? "default" : "outline"}
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center animate-fade-in">
              <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Bank-Level Security</h3>
              <p className="text-muted-foreground">
                Your data is encrypted and protected with the highest security standards
              </p>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-muted-foreground">
                Our expert team is always available to help you succeed
              </p>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Industry Leader</h3>
              <p className="text-muted-foreground">
                Trusted by thousands of businesses for over 10 years
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {service.faqs.map((faq, index) => (
                <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied clients who trust us with their {service.title.toLowerCase()} needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-glow">
              Start Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline">
              <Mail className="w-5 h-5 mr-2" />
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;