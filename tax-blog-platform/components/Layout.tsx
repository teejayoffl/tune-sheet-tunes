import { ReactNode, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Menu, X, Calculator, FileText, PoundSterling, Receipt, Search, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const router = useRouter()

  const navigation = [
    { name: 'Home', href: '/' },
    {
      name: 'Categories',
      href: '#',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Annual Accounts', href: '/category/annual-accounts', icon: FileText },
        { name: 'Corporation Tax', href: '/category/corporation-tax', icon: Calculator },
        { name: 'Self-Assessment', href: '/category/self-assessment', icon: PoundSterling },
        { name: 'Allowable Expenses', href: '/category/allowable-expenses', icon: Receipt },
      ]
    },
    { name: 'All Articles', href: '/articles' },
    { name: 'About', href: '/about' },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="container-custom">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Calculator className="h-8 w-8 text-primary-600" />
              <span className="font-bold text-xl gradient-text">TaxBlog UK</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 font-medium transition-colors"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`h-4 w-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {dropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute top-full mt-2 w-56 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                          >
                            <div className="py-1">
                              {item.dropdownItems?.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.name}
                                  href={dropdownItem.href}
                                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary-600"
                                  onClick={() => setDropdownOpen(false)}
                                >
                                  <dropdownItem.icon className="h-4 w-4 mr-3" />
                                  {dropdownItem.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`text-gray-700 hover:text-primary-600 font-medium transition-colors ${
                        router.pathname === item.href ? 'text-primary-600' : ''
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <button className="text-gray-700 hover:text-primary-600 transition-colors">
                <Search className="h-5 w-5" />
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-700"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="md:hidden overflow-hidden"
              >
                <div className="py-4 space-y-2">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      {item.hasDropdown ? (
                        <div className="space-y-2">
                          <span className="block px-3 py-2 text-gray-700 font-medium">
                            {item.name}
                          </span>
                          <div className="pl-6 space-y-1">
                            {item.dropdownItems?.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-primary-600"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                <dropdownItem.icon className="h-4 w-4 mr-3" />
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-pattern">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="container-custom py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Calculator className="h-8 w-8 text-primary-400" />
                <span className="font-bold text-xl text-white">TaxBlog UK</span>
              </div>
              <p className="text-sm">
                Your trusted source for UK tax and accounting information. Expert guides on compliance, tax planning, and financial management.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-white mb-4">Categories</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/category/annual-accounts" className="hover:text-white">Annual Accounts</Link></li>
                <li><Link href="/category/corporation-tax" className="hover:text-white">Corporation Tax</Link></li>
                <li><Link href="/category/self-assessment" className="hover:text-white">Self-Assessment</Link></li>
                <li><Link href="/category/allowable-expenses" className="hover:text-white">Allowable Expenses</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/articles" className="hover:text-white">All Articles</Link></li>
                <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-white mb-4">Stay Updated</h3>
              <p className="text-sm mb-4">Subscribe to our newsletter for the latest tax updates and tips.</p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-md focus:outline-none focus:border-primary-500"
                />
                <button className="px-4 py-2 bg-primary-600 text-white rounded-r-md hover:bg-primary-700 transition-colors">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
            <p>&copy; 2024 TaxBlog UK. All rights reserved. | Disclaimer: This content is for informational purposes only and should not be considered as professional tax advice.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout