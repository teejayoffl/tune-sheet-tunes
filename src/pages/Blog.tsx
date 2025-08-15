import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { useState } from "react";

// Sample blog posts data - in a real app, this would come from an API/CMS
const blogPosts = [
  {
    slug: "tax-season-preparation-guide",
    title: "Your Complete Tax Season Preparation Guide for 2024",
    excerpt: "Get ahead of tax season with our comprehensive guide. Learn about new tax laws, deduction strategies, and filing tips to maximize your return.",
    author: "Sarah Johnson, CPA",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Tax Planning",
    featured: true,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80"
  },
  {
    slug: "small-business-bookkeeping-essentials",
    title: "Small Business Bookkeeping: 5 Essential Practices",
    excerpt: "Master the fundamentals of bookkeeping to keep your small business finances organized and compliant. Includes practical tips and tools.",
    author: "Michael Chen",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Bookkeeping",
    featured: false,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
  },
  {
    slug: "financial-planning-millennials",
    title: "Financial Planning for Millennials: Building Wealth in Your 30s",
    excerpt: "Discover strategies tailored for millennials to build wealth, manage debt, and plan for retirement while navigating today's economic challenges.",
    author: "Emily Rodriguez",
    date: "2024-01-08",
    readTime: "10 min read",
    category: "Financial Planning",
    featured: false,
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80"
  },
  {
    slug: "payroll-compliance-updates-2024",
    title: "Payroll Compliance: What Changed in 2024",
    excerpt: "Stay compliant with the latest payroll regulations. We break down the key changes affecting employers and what you need to do.",
    author: "David Thompson",
    date: "2024-01-05",
    readTime: "5 min read",
    category: "Payroll",
    featured: true,
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&q=80"
  },
  {
    slug: "cryptocurrency-tax-guide",
    title: "Cryptocurrency and Taxes: A Complete Guide",
    excerpt: "Navigate the complex world of cryptocurrency taxation. Learn how to report crypto transactions and minimize your tax liability.",
    author: "Alex Kim, CPA",
    date: "2024-01-03",
    readTime: "12 min read",
    category: "Tax Planning",
    featured: false,
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&q=80"
  },
  {
    slug: "business-expense-tracking",
    title: "Master Business Expense Tracking in 2024",
    excerpt: "Learn the best practices and tools for tracking business expenses efficiently. Save time and maximize deductions with our expert tips.",
    author: "Rachel Green",
    date: "2023-12-28",
    readTime: "7 min read",
    category: "Bookkeeping",
    featured: false,
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80"
  }
];

const categories = ["All", "Tax Planning", "Bookkeeping", "Financial Planning", "Payroll"];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Financial <span className="text-primary">Insights</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Expert advice, industry updates, and practical tips to help you make 
              smarter financial decisions for your business and personal wealth.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search articles..."
                className="pl-10 pr-4 py-6 text-base"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mt-8 max-w-2xl mx-auto">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-gradient-primary" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === "All" && !searchTerm && (
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow animate-fade-in">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent md:hidden" />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <Badge className="w-fit mb-4" variant="secondary">Featured</Badge>
                  <h2 className="text-3xl font-bold mb-4">
                    <Link to={`/blog/${featuredPost.slug}`} className="hover:text-primary transition-colors">
                      {featuredPost.title}
                    </Link>
                  </h2>
                  <p className="text-muted-foreground mb-6 line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(featuredPost.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <Link to={`/blog/${featuredPost.slug}`}>
                      <Button variant="ghost" size="sm" className="group">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                No articles found matching your search criteria.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <Card 
                  key={post.slug} 
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                    <Badge className="absolute top-4 right-4">
                      {post.category}
                    </Badge>
                  </div>
                  <CardHeader className="pb-4">
                    <CardTitle className="line-clamp-2">
                      <Link to={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                        {post.title}
                      </Link>
                    </CardTitle>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-2">
                      <span className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="line-clamp-3 mb-4">
                      {post.excerpt}
                    </CardDescription>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        By {post.author}
                      </span>
                      <Link to={`/blog/${post.slug}`}>
                        <Button variant="ghost" size="sm" className="group/btn">
                          Read
                          <ArrowRight className="w-3 h-3 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Stay Informed
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get the latest financial insights, tax updates, and business tips delivered 
            to your inbox every week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1"
            />
            <Button className="bg-gradient-primary hover:opacity-90 shadow-glow">
              Subscribe
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;