import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Award, Target } from "lucide-react";

const features = [
  "Certified Public Accountants",
  "20+ Years Combined Experience",
  "Advanced Technology Integration",
  "Personalized Service Approach"
];

const stats = [
  { icon: Users, value: "500+", label: "Satisfied Clients" },
  { icon: Award, value: "15+", label: "Industry Awards" },
  { icon: Target, value: "98%", label: "Client Retention" }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
                Why Choose Our
                <span className="text-primary block">Digital Platform?</span>
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground">
                We've revolutionized accounting by combining traditional expertise with 
                cutting-edge technology, creating an experience as smooth as your favorite playlist.
              </p>
            </div>

            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 shadow-glow text-base px-8 py-6"
            >
              Learn More About Us
            </Button>
          </div>

          {/* Right Content - Stats */}
          <div className="space-y-8 animate-slide-up">
            <div className="grid gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-gradient-card p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <stat.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">{stat.value}</div>
                      <div className="text-muted-foreground">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-card p-8 rounded-xl border border-border/50">
              <blockquote className="text-foreground italic mb-4">
                "Digital Accountant transformed how we manage our finances. It's like having 
                a financial conductor orchestrating our business success."
              </blockquote>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold">JS</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">John Smith</div>
                  <div className="text-sm text-muted-foreground">CEO, TechCorp</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;