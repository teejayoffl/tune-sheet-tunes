import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    content: "hello@digitalaccountant.com",
    action: "Send Email"
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "+1 (555) 123-4567",
    action: "Call Now"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    content: "123 Financial District, NY 10004",
    action: "Get Directions"
  }
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Let's Start Your Financial
            <span className="text-primary block">Success Story</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your accounting experience? Get in touch and let's compose your financial future together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-gradient-card border-border/50 animate-slide-up">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Send us a message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input 
                    placeholder="First Name" 
                    className="bg-muted/50 border-border focus:border-primary"
                  />
                  <Input 
                    placeholder="Last Name" 
                    className="bg-muted/50 border-border focus:border-primary"
                  />
                </div>
                <Input 
                  placeholder="Email Address" 
                  type="email"
                  className="bg-muted/50 border-border focus:border-primary"
                />
                <Input 
                  placeholder="Phone Number" 
                  type="tel"
                  className="bg-muted/50 border-border focus:border-primary"
                />
                <Textarea 
                  placeholder="Tell us about your accounting needs..."
                  rows={4}
                  className="bg-muted/50 border-border focus:border-primary resize-none"
                />
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-primary hover:opacity-90 shadow-glow group"
                >
                  Send Message
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6 animate-slide-up">
            {contactInfo.map((info, index) => (
              <Card 
                key={index}
                className="group hover:shadow-glow transition-all duration-300 bg-gradient-card border-border/50 hover:border-primary/50"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{info.title}</h4>
                        <p className="text-muted-foreground">{info.content}</p>
                      </div>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-primary hover:bg-primary/10"
                    >
                      {info.action}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* CTA Card */}
            <Card className="bg-gradient-primary border-0">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-primary-foreground mb-3">
                  Ready to Get Started?
                </h3>
                <p className="text-primary-foreground/80 mb-6">
                  Book a free consultation and discover how we can streamline your finances.
                </p>
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="bg-background text-foreground hover:bg-background/90"
                >
                  Schedule Free Consultation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;