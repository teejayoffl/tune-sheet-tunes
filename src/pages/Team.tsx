import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Twitter, Mail, Award, Users, Target, Sparkles } from "lucide-react";
import { useState } from "react";

const Team = () => {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);
  
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      bio: "With over 15 years of experience in digital accounting, Sarah leads our vision of transforming financial management for UK businesses.",
      specialties: ["Strategic Planning", "Digital Innovation", "Client Relations"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sarah@digitalaccountant.uk"
      },
      color: "from-blue-500 to-purple-500"
    },
    {
      name: "Michael Chen",
      role: "Head of Technology",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      bio: "Michael architects our cutting-edge platform, ensuring seamless integration of AI and automation in accounting processes.",
      specialties: ["Cloud Architecture", "AI Integration", "Security"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "michael@digitalaccountant.uk"
      },
      color: "from-green-500 to-blue-500"
    },
    {
      name: "Emma Williams",
      role: "Chief Accountant",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      bio: "Emma ensures all our clients stay compliant with HMRC regulations while maximizing their tax efficiency.",
      specialties: ["Tax Planning", "HMRC Compliance", "Financial Strategy"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "emma@digitalaccountant.uk"
      },
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "David Patel",
      role: "Client Success Manager",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      bio: "David leads our client success team, ensuring every business gets the most out of our digital accounting platform.",
      specialties: ["Client Onboarding", "Support Excellence", "Training"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "david@digitalaccountant.uk"
      },
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Jessica Thompson",
      role: "Head of Innovation",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      bio: "Jessica drives innovation by identifying new technologies and methodologies to enhance our accounting services.",
      specialties: ["R&D", "Process Automation", "Blockchain"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "jessica@digitalaccountant.uk"
      },
      color: "from-pink-500 to-yellow-500"
    },
    {
      name: "Robert Brown",
      role: "Senior Tax Advisor",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      bio: "Robert specializes in complex tax scenarios, helping businesses navigate the intricacies of UK tax law.",
      specialties: ["Corporate Tax", "VAT", "International Tax"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "robert@digitalaccountant.uk"
      },
      color: "from-indigo-500 to-blue-500"
    }
  ];

  const stats = [
    { icon: Users, label: "Team Members", value: "25+" },
    { icon: Award, label: "Years Combined Experience", value: "150+" },
    { icon: Target, label: "Client Satisfaction", value: "98%" },
    { icon: Sparkles, label: "Innovations Launched", value: "50+" }
  ];

  return (
    <>
      <SEO 
        title="Our Team - Digital Accountant"
        description="Meet the expert team behind Digital Accountant. Our certified accountants and technology specialists are dedicated to transforming your financial management."
        keywords={["team", "accountants", "financial experts", "digital accounting team"]}
      />
      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-hero opacity-30" />
          
          {/* Animated particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${5 + Math.random() * 10}s`
                }}
              />
            ))}
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
                <Users className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-sm font-medium text-primary">Meet Our Experts</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                The People Behind
                <span className="text-primary block">Your Success</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                Our team of certified accountants and technology experts work tirelessly to deliver 
                exceptional financial solutions for your business.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.3s" }}>
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-3">
                      <stat.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="group relative animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onMouseEnter={() => setHoveredMember(index)}
                  onMouseLeave={() => setHoveredMember(null)}
                >
                  <Card className="overflow-hidden backdrop-blur-md bg-card/40 border-border/50 hover:bg-card/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    
                    {/* Image container with animation */}
                    <div className="relative h-80 overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
                      
                      {/* Floating badge */}
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-primary/90 text-white backdrop-blur-sm animate-float">
                          {member.role}
                        </Badge>
                      </div>
                      
                      {/* Social links - appear on hover */}
                      <div className={`absolute bottom-4 left-4 flex space-x-3 transition-all duration-500 ${
                        hoveredMember === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`}>
                        <a href={member.social.linkedin} className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                          <Linkedin className="w-5 h-5 text-white" />
                        </a>
                        <a href={member.social.twitter} className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                          <Twitter className="w-5 h-5 text-white" />
                        </a>
                        <a href={`mailto:${member.social.email}`} className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                          <Mail className="w-5 h-5 text-white" />
                        </a>
                      </div>
                    </div>
                    
                    <CardContent className="p-6 relative">
                      <h3 className="text-2xl font-bold text-foreground mb-2">{member.name}</h3>
                      <p className="text-muted-foreground mb-4 line-clamp-3">{member.bio}</p>
                      
                      {/* Specialties */}
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((specialty, idx) => (
                          <Badge 
                            key={idx} 
                            variant="outline" 
                            className="text-xs border-primary/20 text-primary/80"
                          >
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Card className="backdrop-blur-md bg-card/40 border-border/50 max-w-4xl mx-auto">
              <CardContent className="py-12 text-center">
                <h2 className="text-4xl font-bold text-foreground mb-4">
                  Join Our Growing Team
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  We're always looking for talented individuals who share our passion for 
                  transforming financial management through technology.
                </p>
                <a 
                  href="#careers" 
                  className="inline-flex items-center space-x-2 bg-gradient-primary text-white px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
                >
                  <span className="text-base font-medium">View Open Positions</span>
                  <Sparkles className="w-5 h-5" />
                </a>
              </CardContent>
            </Card>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Team;