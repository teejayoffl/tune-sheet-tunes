import { useParams, Navigate, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Calendar, 
  Clock, 
  ArrowLeft, 
  Share2, 
  Twitter, 
  Linkedin, 
  Facebook,
  User
} from "lucide-react";
import { useEffect } from "react";

// Sample blog posts data - in a real app, this would come from an API/CMS
const blogPosts = {
  "tax-season-preparation-guide": {
    slug: "tax-season-preparation-guide",
    title: "Your Complete Tax Season Preparation Guide for 2024",
    excerpt: "Get ahead of tax season with our comprehensive guide. Learn about new tax laws, deduction strategies, and filing tips to maximize your return.",
    content: `
      <p>Tax season can be stressful, but with proper preparation, you can navigate it smoothly and potentially save thousands of dollars. This comprehensive guide will walk you through everything you need to know for the 2024 tax season.</p>

      <h2>Key Tax Law Changes for 2024</h2>
      <p>The tax landscape has seen several significant changes this year. Understanding these changes is crucial for accurate filing and maximizing your returns:</p>
      
      <ul>
        <li><strong>Standard Deduction Increases:</strong> The standard deduction has increased to $14,600 for single filers and $29,200 for married couples filing jointly.</li>
        <li><strong>Tax Bracket Adjustments:</strong> All tax brackets have been adjusted for inflation, potentially putting you in a lower bracket.</li>
        <li><strong>Retirement Contribution Limits:</strong> 401(k) contribution limits have increased to $23,000, with catch-up contributions for those 50+ at $7,500.</li>
      </ul>

      <h2>Essential Documents to Gather</h2>
      <p>Start collecting these documents as soon as possible:</p>
      
      <ol>
        <li>W-2 forms from all employers</li>
        <li>1099 forms for freelance income, investments, and other sources</li>
        <li>Receipts for deductible expenses</li>
        <li>Previous year's tax return</li>
        <li>Bank and investment statements</li>
      </ol>

      <h2>Maximizing Your Deductions</h2>
      <p>Don't leave money on the table. Here are often-overlooked deductions:</p>
      
      <ul>
        <li><strong>Home Office Deduction:</strong> If you work from home, you may qualify for this valuable deduction.</li>
        <li><strong>Charitable Contributions:</strong> Keep detailed records of all donations, including non-cash contributions.</li>
        <li><strong>Medical Expenses:</strong> If they exceed 7.5% of your AGI, these become deductible.</li>
        <li><strong>Education Expenses:</strong> Student loan interest and certain education credits can reduce your tax bill.</li>
      </ul>

      <h2>Common Mistakes to Avoid</h2>
      <p>Steer clear of these frequent filing errors:</p>
      
      <ul>
        <li>Mathematical errors - Double-check all calculations</li>
        <li>Incorrect Social Security numbers</li>
        <li>Missing signatures on joint returns</li>
        <li>Forgetting to report all income sources</li>
        <li>Claiming ineligible dependents</li>
      </ul>

      <h2>When to Seek Professional Help</h2>
      <p>Consider hiring a tax professional if you:</p>
      
      <ul>
        <li>Own a business or rental property</li>
        <li>Have significant investment income</li>
        <li>Experienced major life changes (marriage, divorce, new baby)</li>
        <li>Need to file in multiple states</li>
        <li>Have complex deductions or credits</li>
      </ul>

      <h2>Planning for Next Year</h2>
      <p>The best time to start tax planning is right after you file. Consider these strategies:</p>
      
      <ul>
        <li>Adjust your withholdings if you owed money or got a large refund</li>
        <li>Maximize retirement contributions throughout the year</li>
        <li>Keep better records with a dedicated tax folder or digital system</li>
        <li>Schedule quarterly check-ins with your tax professional</li>
      </ul>

      <p>Remember, tax preparation doesn't have to be overwhelming. With the right approach and professional guidance, you can file confidently and maximize your returns.</p>
    `,
    author: "Sarah Johnson, CPA",
    authorBio: "Sarah is a Certified Public Accountant with over 15 years of experience helping individuals and businesses navigate complex tax situations.",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Tax Planning",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80",
    relatedPosts: ["cryptocurrency-tax-guide", "small-business-bookkeeping-essentials"]
  },
  // Add other blog posts here...
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = slug ? blogPosts[slug as keyof typeof blogPosts] : null;

  useEffect(() => {
    // Update page title for SEO
    if (post) {
      document.title = `${post.title} | Digital Accountant Blog`;
      
      // Add meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', post.excerpt);
      }
    }
  }, [post]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const shareUrl = window.location.href;
  const shareTitle = post.title;

  const handleShare = (platform: string) => {
    const urls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
    };
    
    window.open(urls[platform as keyof typeof urls], '_blank', 'width=600,height=400');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-12">
        <div className="absolute inset-0 h-96 bg-gradient-to-b from-primary/10 to-background" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog">
            <Button variant="ghost" size="sm" className="mb-8 animate-fade-in">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
          
          <article className="max-w-4xl mx-auto">
            <header className="text-center mb-12 animate-fade-in">
              <Badge className="mb-4">{post.category}</Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                {post.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
                <span className="flex items-center">
                  <User className="w-4 h-4 mr-1" />
                  {post.author}
                </span>
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    month: 'long', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}
                </span>
                <span className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {post.readTime}
                </span>
              </div>
            </header>

            {/* Featured Image */}
            <div className="mb-12 rounded-2xl overflow-hidden animate-slide-up">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-[400px] object-cover"
              />
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-lg dark:prose-invert max-w-none mb-12 animate-fade-in"
              dangerouslySetInnerHTML={{ __html: post.content }}
              style={{ animationDelay: "0.2s" }}
            />

            {/* Author Bio */}
            <Card className="mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">About {post.author}</h3>
                    <p className="text-muted-foreground">{post.authorBio}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Share Section */}
            <div className="flex items-center justify-between border-t border-b py-4 mb-12">
              <span className="text-sm text-muted-foreground">Share this article</span>
              <div className="flex items-center space-x-2">
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => handleShare('twitter')}
                >
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => handleShare('linkedin')}
                >
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => handleShare('facebook')}
                >
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => navigator.clipboard.writeText(shareUrl)}
                >
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Related Posts */}
            {post.relatedPosts && post.relatedPosts.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {post.relatedPosts.map((relatedSlug) => {
                    // In a real app, you'd fetch the related post data
                    return (
                      <Card key={relatedSlug} className="hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          <h3 className="font-semibold text-lg mb-2">
                            <Link to={`/blog/${relatedSlug}`} className="hover:text-primary transition-colors">
                              Related Post Title
                            </Link>
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            Brief description of the related post...
                          </p>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            )}
          </article>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Need Professional Tax Help?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our expert team is ready to help you navigate tax season with confidence. 
            Schedule a consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-glow">
              Schedule Consultation
            </Button>
            <Link to="/services/tax-preparation">
              <Button size="lg" variant="outline">
                View Tax Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;