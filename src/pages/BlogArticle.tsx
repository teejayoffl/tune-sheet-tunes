import SEO from "@/components/SEO";
import { getPostBySlug } from "@/data/blog";
import { useParams } from "react-router-dom";

const BlogArticle = () => {
  const { slug } = useParams();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-3xl font-bold mb-2">Article not found</h1>
        <p className="text-muted-foreground">We couldn't find the article you're looking for.</p>
      </div>
    );
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.date,
    author: { "@type": "Person", name: post.author },
    articleSection: post.tags,
    image: post.coverImage,
  };

  return (
    <article className="bg-background">
      <SEO
        title={post.title}
        description={post.excerpt}
        type="article"
        publishedTime={post.date}
        structuredData={structuredData}
        image={post.coverImage}
      />

      <header className="border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="space-y-3 max-w-3xl">
            <div className="text-sm text-muted-foreground">
              {new Date(post.date).toLocaleDateString()} • {post.author}
            </div>
            <h1 className="text-4xl font-extrabold leading-tight">{post.title}</h1>
            <div className="flex gap-2">
              {post.tags.map((t) => (
                <span key={t} className="text-xs px-2 py-1 rounded bg-primary/10 text-primary">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
        {post.coverImage && (
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-8">
            <img src={post.coverImage} alt="" className="w-full rounded-xl border border-border/50" />
          </div>
        )}
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div
          className="prose prose-invert max-w-3xl"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </div>
    </article>
  );
};

export default BlogArticle;