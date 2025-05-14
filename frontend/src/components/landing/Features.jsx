import { motion } from 'framer-motion'
import { Brain, Clock, FileSearch, Users } from 'lucide-react'

const features = [
  {
    icon: <Brain className="w-12 h-12 text-blue-600" />,
    title: 'Smart AI',
    description: 'Uses advanced AI technology to accurately analyze and evaluate resumes'
  },
  {
    icon: <Clock className="w-12 h-12 text-blue-600" />,
    title: 'Time Saving',
    description: 'Reduce CV screening time by 80%, focus on interviewing potential candidates'
  },
  {
    icon: <FileSearch className="w-12 h-12 text-blue-600" />,
    title: 'Precise Matching',
    description: 'Find the right candidates based on skills, experience, and job requirements'
  },
  {
    icon: <Users className="w-12 h-12 text-blue-600" />,
    title: 'Candidate Management',
    description: 'Manage the entire recruitment process from screening to interviewing'
  }
]

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Features</h2>
          <p className="text-xl text-gray-600">
            A comprehensive solution for your recruitment process
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features