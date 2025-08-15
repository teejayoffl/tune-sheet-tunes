import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Clock, Calendar, ArrowRight } from 'lucide-react'
import { format } from 'date-fns'

interface BlogCardProps {
  article: {
    id: number
    title: string
    excerpt: string
    category: string
    readTime: string
    date: string
    slug: string
    image?: string
  }
}

const BlogCard: FC<BlogCardProps> = ({ article }) => {
  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Annual Accounts': 'bg-blue-100 text-blue-800',
      'Corporation Tax': 'bg-green-100 text-green-800',
      'Self-Assessment': 'bg-purple-100 text-purple-800',
      'Allowable Expenses': 'bg-orange-100 text-orange-800',
    }
    return colors[category] || 'bg-gray-100 text-gray-800'
  }

  return (
    <article className="card group hover:shadow-lg transition-all duration-300">
      <Link href={`/blog/${article.slug}`}>
        <div className="relative h-48 overflow-hidden bg-gray-100">
          {article.image ? (
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="h-full flex items-center justify-center bg-gradient-to-br from-primary-100 to-primary-200">
              <span className="text-primary-600 text-6xl font-bold opacity-20">
                {article.title.charAt(0)}
              </span>
            </div>
          )}
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1 text-xs font-medium rounded-full ${getCategoryColor(article.category)}`}>
              {article.category}
            </span>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors">
            {article.title}
          </h3>
          
          <p className="text-gray-600 mb-4 line-clamp-3">
            {article.excerpt}
          </p>
          
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {format(new Date(article.date), 'MMM d, yyyy')}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {article.readTime}
              </span>
            </div>
            
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </article>
  )
}

export default BlogCard