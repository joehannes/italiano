import { FC } from 'react'
import { Testimonial } from '../lib/jsonbin'
import TestimonialCard from './TestimonialCard'

interface TestimonialsProps {
  testimonials: Testimonial[]
  language: 'en' | 'es'
}

const Testimonials: FC<TestimonialsProps> = ({ testimonials, language }) => {
  const approvedTestimonials = testimonials.filter((t) => t.approved)

  if (approvedTestimonials.length === 0) {
    return null
  }

  return (
    <section className="py-20 bg-[var(--color-light)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif font-bold text-[var(--color-primary)] mb-4 text-center">
          {language === 'en' ? 'What Customers Say' : 'Lo Que Dicen Nuestros Clientes'}
        </h2>
        <p className="text-center text-gray-600 mb-12">
          {language === 'en'
            ? 'Real feedback from happy customers'
            : 'Opiniones reales de clientes satisfechos'}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {approvedTestimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
