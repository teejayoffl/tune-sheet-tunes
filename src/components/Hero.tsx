import { Button } from "@/components/ui/button";
import { ArrowRight, Play, TrendingUp, Shield, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const partnerLogos = [
    { name: "HMRC", text: "HMRC Recognised" },
    { name: "ACCA", text: "ACCA Certified" },
    { name: "CIMA", text: "CIMA Member" },
    { name: "Xero", text: "Xero Partner" },
    { name: "QuickBooks", text: "QB ProAdvisor" },
    { name: "Sage", text: "Sage Partner" }
  ];

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-hero">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3Cpattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse"%3E%3Cpath d="M 60 0 L 0 0 0 60" fill="none" stroke="white" stroke-width="0.5" opacity="0.1"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width="100%25" height="100%25" fill="url(%23grid)"/%3E%3C/svg%3E')] opacity-30" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Animated badge */}
            <div className="inline-flex items-center space-x-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 animate-fade-in">
              <Zap className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">UK's Leading Digital Accountancy</span>
            </div>

            <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Your Financial
                <span className="relative">
                  <span className="text-primary block">Symphony</span>
                  <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8">
                    <path d="M0 4 Q50 0 100 4 T200 4" stroke="url(#gradient)" strokeWidth="3" fill="none" className="animate-draw-line" />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="100%" stopColor="#2563EB" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                Starts Here
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Expert UK accountancy services with a digital edge. From HMRC compliance to 
                year-end accounts, we harmonise your finances with precision and clarity.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 shadow-glow group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 animate-shimmer" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/20 text-primary hover:bg-primary/10 backdrop-blur-sm"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            {/* Stats with glass morphism */}
            <div className="flex gap-6 pt-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              {[
                { value: "500+", label: "UK Clients", icon: Shield },
                { value: "£2M+", label: "Tax Saved", icon: TrendingUp },
                { value: "98%", label: "HMRC Success", icon: Zap }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="backdrop-blur-md bg-card/30 border border-border/50 rounded-xl p-4 hover:bg-card/50 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <div className="flex items-center space-x-2 mb-1">
                    <stat.icon className="w-4 h-4 text-primary" />
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Partner Logos - Faded */}
            <div className="pt-8 animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <p className="text-xs text-muted-foreground/60 mb-4 uppercase tracking-wider">Trusted by</p>
              <div className="flex flex-wrap gap-6 items-center">
                {partnerLogos.map((partner, index) => (
                  <div 
                    key={index}
                    className="opacity-40 hover:opacity-60 transition-opacity duration-300"
                    style={{ animationDelay: `${0.6 + index * 0.05}s` }}
                  >
                    <div className="text-muted-foreground/50 font-medium text-sm">
                      {partner.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Interactive Dashboard Preview */}
          <div className="relative animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
              {/* Glass morphism cards */}
              <div className="absolute -top-8 -right-8 backdrop-blur-md bg-card/40 border border-border/50 rounded-xl p-4 shadow-xl animate-float z-10">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">VAT Returns</p>
                    <p className="text-lg font-bold">On Time</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-8 -left-8 backdrop-blur-md bg-card/40 border border-border/50 rounded-xl p-4 shadow-xl animate-float z-10" style={{ animationDelay: "1s" }}>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Corporation Tax</p>
                    <p className="text-lg font-bold">£12,450 Saved</p>
                  </div>
                </div>
              </div>

              {/* Main dashboard preview */}
              <div className="backdrop-blur-md bg-card/20 border border-border/50 rounded-2xl p-8 shadow-2xl">
                <div className="space-y-6">
                  {/* Mock chart */}
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-end p-4 space-x-2">
                    {[40, 65, 45, 80, 55, 90, 70, 85].map((height, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-primary rounded-t animate-grow-up"
                        style={{ 
                          height: `${height}%`,
                          animationDelay: `${0.5 + i * 0.1}s`
                        }}
                      />
                    ))}
                  </div>
                  
                  {/* Mock metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    {["Annual Revenue", "Expenses", "Net Profit", "Tax Rate"].map((label, i) => (
                      <div key={i} className="space-y-1">
                        <p className="text-xs text-muted-foreground">{label}</p>
                        <div className="h-2 bg-muted/50 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-primary animate-slide-right"
                            style={{ 
                              width: `${60 + i * 10}%`,
                              animationDelay: `${0.8 + i * 0.1}s`
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-pulse-slow"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-glow"></div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;