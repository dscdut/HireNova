import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 bg-blue-100 rounded-full w-96 h-96 mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-0 right-0 bg-purple-100 rounded-full w-96 h-96 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute bg-pink-100 rounded-full -bottom-8 left-20 w-96 h-96 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      {/* Content */}
      <div className="container z-10 px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 text-5xl font-bold text-gray-900 md:text-7xl"
          >
            Find Talent
            <span className="text-blue-600"> Smarter</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 text-xl text-gray-600 md:text-2xl"
          >
            Automatically screen resumes with AI, save time, and find the best candidates
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col justify-center gap-4 sm:flex-row"
          >
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Try for Free
            </Button>
            <Button size="lg" variant="outline">
              View Demo
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero