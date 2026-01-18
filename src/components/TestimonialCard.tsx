import { FC } from 'react'
import { Testimonial } from '../lib/jsonbin'

interface TestimonialProps {
  testimonial: Testimonial
}

const TestimonialCard: FC<TestimonialProps> = ({ testimonial }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[var(--color-primary)]">
      <div className="flex items-start justify-between mb-3">
        <div>
          <p className="font-semibold text-lg">{testimonial.name}</p>
          <p className="text-sm text-gray-600">{testimonial.source}</p>
        </div>
        <span className="text-3xl">⭐</span>
      </div>
      <p className="text-gray-700 italic">&quot;{testimonial.message}&quot;</p>
      <p className="text-xs text-gray-500 mt-3">{testimonial.date}</p>
    </div>
  )
}

export default TestimonialCard
