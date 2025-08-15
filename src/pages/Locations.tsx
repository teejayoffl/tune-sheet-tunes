import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight, Building2, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { londonLocations } from "@/data/locations";

const Locations = () => {
  return (
    <>
      <SEO 
        title="Our London Locations - Digital Accountant UK"
        description="Find your nearest Digital Accountant office across London. Expert chartered accountants with offices in City of London, Westminster, Canary Wharf, and more."
        keywords={["accountant locations London", "London accountants", "chartered accountants near me", "local accountant London"]}
      />
      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-24 pb-12 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto animate-fade-in">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Accountants Across <span className="text-primary">London</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                With offices strategically located across London, we're always nearby to provide 
                expert accounting services tailored to your local business needs.
              </p>
            </div>
          </div>
        </section>

        {/* London Map Overview */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="backdrop-blur-md bg-card/30 border border-border/50 rounded-2xl p-8 text-center">
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <Building2 className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold">10+ Offices</div>
                    <p className="text-sm text-muted-foreground">Across Greater London</p>
                  </div>
                  <div>
                    <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold">1,500+ Clients</div>
                    <p className="text-sm text-muted-foreground">London Businesses Served</p>
                  </div>
                  <div>
                    <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold">< 30 min</div>
                    <p className="text-sm text-muted-foreground">Average Travel Time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Locations Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(londonLocations).map(([key, location], index) => (
                <Card 
                  key={key}
                  className="hover:shadow-xl transition-all duration-300 animate-fade-in group"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{location.name}</h3>
                        <div className="flex items-center text-sm text-muted-foreground mb-3">
                          <MapPin className="w-4 h-4 mr-1" />
                          {location.postcode}
                        </div>
                      </div>
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Building2 className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {location.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-sm">
                        <span className="text-muted-foreground">Businesses served:</span>
                        <span className="ml-auto font-medium">{location.stats.businesses}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <span className="text-muted-foreground">Avg. tax saving:</span>
                        <span className="ml-auto font-medium text-primary">{location.stats.averageSaving}</span>
                      </div>
                    </div>
                    
                    <Link to={`/locations/${location.slug}`}>
                      <Button 
                        variant="outline" 
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      >
                        View Office Details
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Local Matters */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-12">Why Choose a Local Accountant?</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Local Knowledge</h3>
                  <p className="text-sm text-muted-foreground">
                    We understand your area's business landscape, local regulations, and opportunities
                  </p>
                </div>
                
                <div>
                  <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Face-to-Face Meetings</h3>
                  <p className="text-sm text-muted-foreground">
                    Build real relationships with your accountant through in-person consultations
                  </p>
                </div>
                
                <div>
                  <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                    <Clock className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Quick Response</h3>
                  <p className="text-sm text-muted-foreground">
                    Same-day meetings possible with our convenient London locations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Find Your Nearest Office
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you prefer to meet in person or connect virtually, we're here to help 
              your business thrive. Choose your preferred location to get started.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-glow">
              Schedule Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Locations;