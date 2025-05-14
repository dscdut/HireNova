import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

const CTA = () => {
  return (
    <section className="py-20 bg-blue-600">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="mb-6 text-4xl font-bold text-white">
            Ready to Optimize Your Hiring Process?
          </h2>
          <p className="mb-8 text-xl text-blue-100">
            Sign up today to experience the power of AI in CV screening
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" className="text-blue-600 bg-white hover:bg-blue-50">
              Try for free
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-black border-white hover:bg-blue-700 hover:text-white"
            >
              Contact sales
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA