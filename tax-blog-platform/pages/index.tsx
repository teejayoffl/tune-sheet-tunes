import { NextPage } from 'next'
import Layout from '../components/Layout'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calculator, FileText, PoundSterling, Receipt, TrendingUp, Clock, ArrowRight, BookOpen } from 'lucide-react'
import BlogCard from '../components/BlogCard'
import CategoryCard from '../components/CategoryCard'

const HomePage: NextPage = () => {
  // Featured articles data (will be replaced with actual data later)
  const featuredArticles = [
    {
      id: 1,
      title: "Corporation Tax Rates 2024: Complete UK Guide",
      excerpt: "Everything you need to know about the latest corporation tax rates, including changes for small companies and marginal relief calculations.",
      category: "Corporation Tax",
      readTime: "8 min read",
      date: "2024-01-15",
      slug: "corporation-tax-rates-2024",
      image: "/images/corp-tax.jpg"
    },
    {
      id: 2,
      title: "Self-Assessment Deadlines 2024/25: Don't Miss These Dates",
      excerpt: "Key dates for self-assessment tax returns, payment deadlines, and penalties for late submission. Stay compliant with HMRC requirements.",
      category: "Self-Assessment",
      readTime: "6 min read",
      date: "2024-01-14",
      slug: "self-assessment-deadlines-2024-25",
      image: "/images/self-assessment.jpg"
    },
    {
      id: 3,
      title: "Understanding Annual Accounts: A Complete Guide for UK Businesses",
      excerpt: "Learn how to prepare and file annual accounts with Companies House. Includes micro-entity, small, and medium company requirements.",
      category: "Annual Accounts",
      readTime: "10 min read",
      date: "2024-01-13",
      slug: "understanding-annual-accounts",
      image: "/images/annual-accounts.jpg"
    }
  ]

  const categories = [
    {
      title: "Annual Accounts",
      description: "Comprehensive guides on preparing and filing company accounts",
      icon: FileText,
      href: "/category/annual-accounts",
      color: "blue",
      articleCount: 12
    },
    {
      title: "Corporation Tax",
      description: "Expert advice on corporation tax compliance and planning",
      icon: Calculator,
      href: "/category/corporation-tax",
      color: "green",
      articleCount: 13
    },
    {
      title: "Self-Assessment",
      description: "Everything you need for personal tax returns",
      icon: PoundSterling,
      href: "/category/self-assessment",
      color: "purple",
      articleCount: 13
    },
    {
      title: "Allowable Expenses",
      description: "Maximize your tax deductions with our expense guides",
      icon: Receipt,
      href: "/category/allowable-expenses",
      color: "orange",
      articleCount: 12
    }
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <motion.div 
          className="container-custom py-24 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Your Complete Guide to UK Tax & Accounting
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Expert insights on annual accounts, corporation tax, self-assessment, and allowable expenses. 
              Stay compliant and maximize your tax efficiency with our comprehensive guides.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/articles" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                <BookOpen className="h-5 w-5" />
                Browse All Articles
              </Link>
              <Link href="#categories" className="btn-secondary bg-primary-700 text-white hover:bg-primary-900">
                Explore Categories
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          {/* Animated graphic */}
          <motion.div 
            className="absolute right-0 top-1/2 -translate-y-1/2 opacity-20 hidden lg:block"
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              rotate: { duration: 60, repeat: Infinity, ease: "linear" },
              scale: { duration: 10, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <TrendingUp className="h-96 w-96" />
          </motion.div>
        </motion.div>
      </section>

      {/* Key Statistics */}
      <section className="bg-white py-12 border-b">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div 
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-4xl font-bold gradient-text">50+</p>
              <p className="text-gray-600">Expert Articles</p>
            </motion.div>
            <motion.div 
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-4xl font-bold gradient-text">4</p>
              <p className="text-gray-600">Main Categories</p>
            </motion.div>
            <motion.div 
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p className="text-4xl font-bold gradient-text">2024</p>
              <p className="text-gray-600">Updated Content</p>
            </motion.div>
            <motion.div 
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-4xl font-bold gradient-text">100%</p>
              <p className="text-gray-600">Free Access</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Featured Articles</h2>
            <p className="text-xl text-gray-600">
              Start with our most popular and comprehensive guides
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <BlogCard article={article} />
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/articles" className="btn-primary">
              View All Articles
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Browse by Category</h2>
            <p className="text-xl text-gray-600">
              Find exactly what you need with our organized tax topics
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CategoryCard category={category} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <motion.div 
          className="container-custom text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated with Tax Changes
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Subscribe to our newsletter for the latest UK tax updates and expert tips
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="px-6 py-3 bg-white text-primary-600 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </form>
        </motion.div>
      </section>
    </Layout>
  )
}

export default HomePage