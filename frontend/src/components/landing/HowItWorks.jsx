import { motion } from 'framer-motion'
import { Upload, Search, FileCheck, UserCheck } from 'lucide-react'

const steps = [
  {
    icon: <Upload className="w-12 h-12 text-blue-600" />,
    title: 'Upload Resumes',
    description: 'Upload candidate resumes or connect with recruitment sources'
  },
  {
    icon: <Search className="w-12 h-12 text-blue-600" />,
    title: 'AI Analysis',
    description: 'The AI system analyzes and evaluates resumes based on criteria'
  },
  {
    icon: <FileCheck className="w-12 h-12 text-blue-600" />,
    title: 'Automated Screening',
    description: 'Automatically screen and rank the most suitable candidates'
  },
  {
    icon: <UserCheck className="w-12 h-12 text-blue-600" />,
    title: 'Interview',
    description: 'Focus on interviewing the most promising candidates'
  }
]

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600">
            A simple, efficient, and time-saving process
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="mb-4">{step.icon}</div>
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks