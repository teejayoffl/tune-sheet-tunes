import { Card, CardContent } from "@/components/ui/card";
import SEO from "@/components/SEO";
import { blogPosts } from "@/data/blog";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="bg-background">
      <SEO
        title="Blog"
        description="Insights on bookkeeping, tax planning, and financial strategy from Digital Accountant."
      />

      <section className="border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
            Insights & Resources
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Practical guides and opinions to help you run a financially sound business.
          </p>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Card key={post.slug} className="bg-gradient-card border-border/50 hover:border-primary/50 transition-colors">
                <CardContent className="p-0">
                  {post.coverImage && (
                    <img src={post.coverImage} alt="" className="w-full h-40 object-cover rounded-t-xl" />
                  )}
                  <div className="p-6 space-y-3">
                    <div className="text-sm text-muted-foreground">{new Date(post.date).toLocaleDateString()}</div>
                    <h2 className="text-xl font-semibold">
                      <Link to={`/blog/${post.slug}`} className="hover:text-primary">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-muted-foreground">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {post.tags.map((t) => (
                        <span key={t} className="text-xs px-2 py-1 rounded bg-primary/10 text-primary">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;