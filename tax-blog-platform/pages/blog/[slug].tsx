import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import Layout from '../../components/Layout'
import FAQ from '../../components/FAQ'
import DataTable from '../../components/DataTable'
import { TaxBarChart, TaxLineChart, TaxPieChart } from '../../components/TaxChart'
import { generateBlogSEO, generateStructuredData, generateFAQStructuredData } from '../../lib/seo'
import { Calendar, Clock, User, Tag } from 'lucide-react'
import { format } from 'date-fns'

interface BlogPost {
  slug: string
  title: string
  description: string
  content: string
  category: string
  publishedDate: string
  modifiedDate?: string
  readTime: string
  author: string
  keywords: string[]
  faqs?: { question: string; answer: string }[]
  tableData?: {
    title: string
    columns: any[]
    data: any[]
  }
  chartData?: {
    type: 'bar' | 'line' | 'pie'
    title: string
    data: any[]
    config: any
  }
}

interface BlogPostPageProps {
  post: BlogPost
}

const BlogPostPage: NextPage<BlogPostPageProps> = ({ post }) => {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  const seoProps = generateBlogSEO({
    title: post.title,
    description: post.description,
    slug: post.slug,
    publishedDate: post.publishedDate,
    modifiedDate: post.modifiedDate,
    author: post.author,
    category: post.category,
    keywords: post.keywords,
  })

  const structuredData = generateStructuredData({
    title: post.title,
    description: post.description,
    slug: post.slug,
    publishedDate: post.publishedDate,
    modifiedDate: post.modifiedDate,
    author: post.author,
    category: post.category,
    keywords: post.keywords,
  })

  const faqStructuredData = post.faqs ? generateFAQStructuredData(post.faqs) : null

  return (
    <Layout>
      <NextSeo {...seoProps} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {faqStructuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
        />
      )}

      <article className="py-12">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <header className="mb-8">
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full font-medium">
                  {post.category}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                {post.title}
              </h1>
              
              <p className="text-xl text-gray-600 mb-6">
                {post.description}
              </p>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 pb-6 border-b">
                <span className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  {post.author}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {format(new Date(post.publishedDate), 'MMMM d, yyyy')}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </span>
              </div>
            </header>

            {/* Content */}
            <div className="prose-custom" dangerouslySetInnerHTML={{ __html: post.content }} />

            {/* Table if provided */}
            {post.tableData && (
              <DataTable
                title={post.tableData.title}
                columns={post.tableData.columns}
                data={post.tableData.data}
              />
            )}

            {/* Chart if provided */}
            {post.chartData && (
              <>
                {post.chartData.type === 'bar' && (
                  <TaxBarChart
                    title={post.chartData.title}
                    data={post.chartData.data}
                    {...post.chartData.config}
                  />
                )}
                {post.chartData.type === 'line' && (
                  <TaxLineChart
                    title={post.chartData.title}
                    data={post.chartData.data}
                    {...post.chartData.config}
                  />
                )}
                {post.chartData.type === 'pie' && (
                  <TaxPieChart
                    title={post.chartData.title}
                    data={post.chartData.data}
                    {...post.chartData.config}
                  />
                )}
              </>
            )}

            {/* FAQs */}
            {post.faqs && post.faqs.length > 0 && (
              <FAQ items={post.faqs} />
            )}

            {/* Tags */}
            <div className="mt-12 pt-8 border-t">
              <div className="flex items-center gap-2 mb-4">
                <Tag className="h-5 w-5 text-gray-400" />
                <span className="font-medium text-gray-700">Related Topics:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  // This will be replaced with actual blog post slugs
  const paths = [
    { params: { slug: 'corporation-tax-rates-2024' } },
    { params: { slug: 'self-assessment-deadlines-2024-25' } },
    { params: { slug: 'understanding-annual-accounts' } },
  ]

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<BlogPostPageProps> = async ({ params }) => {
  const slug = params?.slug as string

  // This is where we'll load the actual blog content
  // For now, returning sample data
  const post: BlogPost = {
    slug,
    title: 'Sample Blog Post',
    description: 'This is a sample blog post description',
    content: '<p>Blog content will go here...</p>',
    category: 'Corporation Tax',
    publishedDate: '2024-01-15',
    readTime: '8 min read',
    author: 'TaxBlog UK',
    keywords: ['corporation tax', 'uk tax', 'business tax'],
  }

  return {
    props: {
      post,
    },
  }
}

export default BlogPostPage