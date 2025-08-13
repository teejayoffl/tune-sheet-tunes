import { FC } from 'react'
import Link from 'next/link'
import { LucideIcon, ArrowRight } from 'lucide-react'

interface CategoryCardProps {
  category: {
    title: string
    description: string
    icon: LucideIcon
    href: string
    color: string
    articleCount: number
  }
}

const CategoryCard: FC<CategoryCardProps> = ({ category }) => {
  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { bg: string; text: string; hover: string } } = {
      blue: {
        bg: 'bg-blue-50',
        text: 'text-blue-600',
        hover: 'hover:bg-blue-100'
      },
      green: {
        bg: 'bg-green-50',
        text: 'text-green-600',
        hover: 'hover:bg-green-100'
      },
      purple: {
        bg: 'bg-purple-50',
        text: 'text-purple-600',
        hover: 'hover:bg-purple-100'
      },
      orange: {
        bg: 'bg-orange-50',
        text: 'text-orange-600',
        hover: 'hover:bg-orange-100'
      }
    }
    return colors[color] || colors.blue
  }

  const colorClasses = getColorClasses(category.color)
  const Icon = category.icon

  return (
    <Link href={category.href}>
      <div className={`card p-6 ${colorClasses.hover} transition-all duration-300 group cursor-pointer`}>
        <div className="flex items-start gap-4">
          <div className={`p-3 rounded-lg ${colorClasses.bg}`}>
            <Icon className={`h-8 w-8 ${colorClasses.text}`} />
          </div>
          
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-600 transition-colors">
              {category.title}
            </h3>
            <p className="text-gray-600 mb-3">
              {category.description}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">
                {category.articleCount} articles
              </span>
              <ArrowRight className={`h-5 w-5 ${colorClasses.text} group-hover:translate-x-1 transition-transform`} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CategoryCard