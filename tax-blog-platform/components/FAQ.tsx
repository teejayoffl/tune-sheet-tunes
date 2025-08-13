import { FC, useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  items: FAQItem[]
  title?: string
}

const FAQ: FC<FAQProps> = ({ items, title = "Frequently Asked Questions" }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="my-12">
      <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="card overflow-hidden"
          >
            <button
              onClick={() => toggleQuestion(index)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <h3 className="font-semibold text-lg pr-4">{item.question}</h3>
              {openIndex === index ? (
                <ChevronUp className="h-5 w-5 text-primary-600 flex-shrink-0" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
              )}
            </button>
            
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4 text-gray-600">
                    <div className="border-t pt-4">
                      {item.answer}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQ