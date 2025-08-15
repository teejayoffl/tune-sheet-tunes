import { NextSeoProps } from 'next-seo'

export interface BlogSEOProps {
  title: string
  description: string
  slug: string
  publishedDate: string
  modifiedDate?: string
  author?: string
  category: string
  keywords?: string[]
}

export const generateBlogSEO = ({
  title,
  description,
  slug,
  publishedDate,
  modifiedDate,
  author = 'TaxBlog UK',
  category,
  keywords = []
}: BlogSEOProps): NextSeoProps => {
  const url = `https://yourdomain.com/blog/${slug}`
  
  return {
    title: `${title} | UK Tax & Accounting Blog`,
    description,
    canonical: url,
    openGraph: {
      type: 'article',
      article: {
        publishedTime: publishedDate,
        modifiedTime: modifiedDate || publishedDate,
        authors: [author],
        section: category,
        tags: keywords,
      },
      url,
      title,
      description,
      images: [
        {
          url: `https://yourdomain.com/og-images/${slug}.jpg`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    additionalMetaTags: [
      {
        name: 'keywords',
        content: keywords.join(', '),
      },
      {
        name: 'author',
        content: author,
      },
    ],
  }
}

export const generateStructuredData = (props: BlogSEOProps) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: props.title,
    description: props.description,
    author: {
      '@type': 'Organization',
      name: props.author || 'TaxBlog UK',
    },
    datePublished: props.publishedDate,
    dateModified: props.modifiedDate || props.publishedDate,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://yourdomain.com/blog/${props.slug}`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'TaxBlog UK',
      logo: {
        '@type': 'ImageObject',
        url: 'https://yourdomain.com/logo.png',
      },
    },
    articleSection: props.category,
    keywords: props.keywords?.join(', '),
  }
}

export const generateFAQStructuredData = (faqs: { question: string; answer: string }[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}