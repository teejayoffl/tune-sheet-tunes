import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Train,
  Bus,
  Car,
  Building2,
  Users,
  TrendingUp,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { Link } from "react-router-dom";

interface LocationData {
  name: string;
  slug: string;
  title: string;
  description: string;
  address: string;
  postcode: string;
  nearestTube: string[];
  landmarks: string[];
  businessTypes: string[];
  stats: {
    businesses: string;
    averageSaving: string;
    responseTime: string;
  };
  services: string[];
}

interface LocationTemplateProps {
  location: LocationData;
}

const LocationTemplate = ({ location }: LocationTemplateProps) => {
  return (
    <>
      <SEO 
        title={`Accountants in ${location.name} - Digital Accountant UK`}
        description={`Expert chartered accountants serving ${location.name}, London. ${location.description}`}
        keywords={[
          `accountants ${location.name}`,
          `${location.name} accountant`,
          `chartered accountants ${location.name}`,
          `tax advisor ${location.name}`,
          `bookkeeping ${location.name}`,
          `${location.postcode} accountant`
        ]}
      />
      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-24 pb-12 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto animate-fade-in">
              <div className="flex items-center space-x-2 text-primary mb-4">
                <MapPin className="w-5 h-5" />
                <span className="font-medium">{location.name}, London</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                {location.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {location.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-glow">
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline">
                  <Phone className="w-5 h-5 mr-2" />
                  020 7123 4567
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Local Stats */}
        <section className="py-12 -mt-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="backdrop-blur-md bg-card/40 border border-border/50 animate-fade-in">
                <CardContent className="p-6 text-center">
                  <Building2 className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold">{location.stats.businesses}</div>
                  <p className="text-sm text-muted-foreground">Local Businesses Served</p>
                </CardContent>
              </Card>
              <Card className="backdrop-blur-md bg-card/40 border border-border/50 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <CardContent className="p-6 text-center">
                  <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold">{location.stats.averageSaving}</div>
                  <p className="text-sm text-muted-foreground">Average Tax Saving</p>
                </CardContent>
              </Card>
              <Card className="backdrop-blur-md bg-card/40 border border-border/50 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <CardContent className="p-6 text-center">
                  <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold">{location.stats.responseTime}</div>
                  <p className="text-sm text-muted-foreground">Response Time</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About the Area */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Serving Businesses in {location.name}
                </h2>
                <p className="text-muted-foreground mb-6">
                  Our expert accountants understand the unique needs of businesses in {location.name}. 
                  Whether you're a startup in a co-working space or an established company, we provide 
                  tailored financial solutions to help you thrive.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div>
                    <h3 className="font-semibold mb-2">Popular Business Types We Serve:</h3>
                    <div className="flex flex-wrap gap-2">
                      {location.businessTypes.map((type, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-primary/10 rounded-full text-sm"
                        >
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Key Services for {location.name} Businesses:</h3>
                    <ul className="space-y-2">
                      {location.services.map((service, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-sm">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <Card className="sticky top-24">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-4">Visit Our {location.name} Office</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Address</p>
                          <p className="text-sm text-muted-foreground">
                            {location.address}<br />
                            London {location.postcode}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Train className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Nearest Stations</p>
                          <p className="text-sm text-muted-foreground">
                            {location.nearestTube.join(", ")}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Building2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Nearby Landmarks</p>
                          <p className="text-sm text-muted-foreground">
                            {location.landmarks.join(", ")}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Office Hours</p>
                          <p className="text-sm text-muted-foreground">
                            Monday - Friday: 9:00 AM - 6:00 PM<br />
                            Saturday: By appointment only
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t">
                      <p className="text-sm text-muted-foreground mb-4">
                        Can't visit in person? No problem! We offer video consultations 
                        and serve clients across {location.name} remotely.
                      </p>
                      <Button className="w-full bg-gradient-primary hover:opacity-90">
                        Book Appointment
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Transport Options */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-12">Easy to Reach from Anywhere in London</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                    <Train className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">By Tube</h3>
                  <p className="text-sm text-muted-foreground">
                    {location.nearestTube[0]} station is just a 5-minute walk away
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                    <Bus className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">By Bus</h3>
                  <p className="text-sm text-muted-foreground">
                    Multiple bus routes stop within 2 minutes of our office
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                    <Car className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">By Car</h3>
                  <p className="text-sm text-muted-foreground">
                    Pay & display parking available nearby
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
              Ready to Work with {location.name}'s Top Accountants?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of successful {location.name} businesses who trust us with their finances. 
              Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-glow">
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline">
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </Button>
            </div>
          </div>
        </section>

        {/* Other Locations */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold mb-4">Our Other London Locations</h2>
              <p className="text-muted-foreground">
                We have offices across London to serve you better
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {["City of London", "Westminster", "Canary Wharf", "Camden", "Shoreditch", "Kensington"].map((area) => (
                <Link
                  key={area}
                  to={`/locations/${area.toLowerCase().replace(/\s+/g, '-')}`}
                  className="px-4 py-2 bg-card hover:bg-card/80 border border-border rounded-lg transition-colors"
                >
                  {area}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default LocationTemplate;