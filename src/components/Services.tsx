import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, FileText, Calculator, PieChart, Shield, Clock } from "lucide-react";

const services = [
  {
    icon: Calculator,
    title: "Bookkeeping",
    description: "Keep your financial records in perfect harmony with our automated bookkeeping solutions.",
    color: "bg-primary/10"
  },
  {
    icon: FileText,
    title: "Tax Planning",
    description: "Strategic tax optimization that hits all the right notes for your business.",
    color: "bg-accent/10"
  },
  {
    icon: TrendingUp,
    title: "Financial Analysis",
    description: "Deep insights into your financial performance with beautiful, easy-to-understand reports.",
    color: "bg-primary/10"
  },
  {
    icon: PieChart,
    title: "Budget Planning",
    description: "Create and manage budgets that keep your business performing at its peak.",
    color: "bg-accent/10"
  },
  {
    icon: Shield,
    title: "Compliance",
    description: "Stay compliant with all regulations while we handle the complex paperwork.",
    color: "bg-primary/10"
  },
  {
    icon: Clock,
    title: "Real-time Monitoring",
    description: "24/7 financial monitoring with instant alerts and updates on your business health.",
    color: "bg-accent/10"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Financial <span className="text-primary">Playlist</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our comprehensive suite of accounting services designed to keep your business in perfect rhythm.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-glow transition-all duration-300 bg-gradient-card border-border/50 hover:border-primary/50 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;