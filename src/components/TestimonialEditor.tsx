import { FC, useState } from 'react'
import { TestimonialsData, Testimonial, saveTestimonials } from '../lib/jsonbin'

interface TestimonialEditorProps {
  data: TestimonialsData
  language: 'en' | 'es'
  onSave: (data: TestimonialsData) => void
}

const TestimonialEditor: FC<TestimonialEditorProps> = ({ data, language, onSave }) => {
  const [testimonials, setTestimonials] = useState(data.testimonials)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')
  const [newTestimonial, setNewTestimonial] = useState({
    name: '',
    source: 'WhatsApp',
    message: '',
    language: language as 'en' | 'es',
  })

  const handleSave = async () => {
    setSaving(true)
    const success = await saveTestimonials({ testimonials })
    setSaving(false)
    if (success) {
      setMessage('Testimonials saved successfully!')
      setTimeout(() => setMessage(''), 3000)
      onSave({ testimonials })
    } else {
      setMessage('Failed to save testimonials')
    }
  }

  const addTestimonial = () => {
    if (newTestimonial.name && newTestimonial.message) {
      const testimonial: Testimonial = {
        name: newTestimonial.name,
        source: newTestimonial.source,
        language: newTestimonial.language,
        message: newTestimonial.message,
        approved: false, // New testimonials need approval
        date: new Date().toISOString().split('T')[0],
      }
      setTestimonials([...testimonials, testimonial])
      setNewTestimonial({ name: '', source: 'WhatsApp', message: '', language })
    }
  }

  const toggleApproval = (index: number) => {
    const updated = [...testimonials]
    updated[index].approved = !updated[index].approved
    setTestimonials(updated)
  }

  const removeTestimonial = (index: number) => {
    setTestimonials(testimonials.filter((_, i) => i !== index))
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Testimonials Editor</h2>
        <button
          onClick={handleSave}
          disabled={saving}
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 disabled:opacity-50"
        >
          {saving ? 'Saving...' : 'Save Testimonials'}
        </button>
      </div>

      {message && (
        <div className={`p-4 rounded-lg ${message.includes('success') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {message}
        </div>
      )}

      {/* Add new testimonial */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-xl font-bold mb-4">Add New Testimonial</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold mb-2">Name</label>
            <input
              type="text"
              value={newTestimonial.name}
              onChange={(e) =>
                setNewTestimonial({ ...newTestimonial, name: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Customer name"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Source</label>
            <input
              type="text"
              value={newTestimonial.source}
              onChange={(e) =>
                setNewTestimonial({ ...newTestimonial, source: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="WhatsApp, Google, etc."
            />
          </div>
        </div>
        <div className="mt-4">
          <label className="block text-sm font-semibold mb-2">Message</label>
          <textarea
            value={newTestimonial.message}
            onChange={(e) =>
              setNewTestimonial({ ...newTestimonial, message: e.target.value })
            }
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={3}
            placeholder="Customer testimonial"
          />
        </div>
        <button
          onClick={addTestimonial}
          className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Testimonial
        </button>
      </div>

      {/* List testimonials */}
      <div className="space-y-4">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex justify-between items-start mb-3">
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.source}</p>
              </div>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={testimonial.approved}
                  onChange={() => toggleApproval(index)}
                  className="w-4 h-4"
                />
                <span className="text-sm">{testimonial.approved ? 'Approved' : 'Not Approved'}</span>
              </label>
            </div>
            <p className="text-gray-700 mb-3 italic">&quot;{testimonial.message}&quot;</p>
            <div className="flex justify-between items-center text-sm text-gray-600">
              <span>{testimonial.date}</span>
              <button
                onClick={() => removeTestimonial(index)}
                className="text-red-600 hover:text-red-800 font-semibold"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TestimonialEditor
