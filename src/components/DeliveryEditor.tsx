import { FC, useState } from 'react'
import { DeliverySettings, saveDeliverySettings } from '../lib/jsonbin'

interface DeliveryEditorProps {
  settings: DeliverySettings
  language: 'en' | 'es'
  onSave: (data: DeliverySettings) => void
}

const DeliveryEditor: FC<DeliveryEditorProps> = ({ settings, language, onSave }) => {
  const [data, setData] = useState(settings)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')

  const handleSave = async () => {
    setSaving(true)
    const success = await saveDeliverySettings(data)
    setSaving(false)
    if (success) {
      setMessage('Delivery settings saved successfully!')
      setTimeout(() => setMessage(''), 3000)
      onSave(data)
    } else {
      setMessage('Failed to save delivery settings')
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Delivery Settings</h2>
        <button
          onClick={handleSave}
          disabled={saving}
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 disabled:opacity-50"
        >
          {saving ? 'Saving...' : 'Save Settings'}
        </button>
      </div>

      {message && (
        <div className={`p-4 rounded-lg ${message.includes('success') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {message}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold mb-2">Delivery Fee (DOP)</label>
          <input
            type="number"
            value={data.deliveryFee}
            onChange={(e) =>
              setData({ ...data, deliveryFee: parseFloat(e.target.value) || 0 })
            }
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">Delivery Time</label>
          <input
            type="text"
            value={data.deliveryTime}
            onChange={(e) => setData({ ...data, deliveryTime: e.target.value })}
            placeholder="e.g., 35–45 min"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="space-y-3">
        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={data.deliveryEnabled}
            onChange={(e) => setData({ ...data, deliveryEnabled: e.target.checked })}
            className="w-4 h-4"
          />
          <span className="font-semibold">Delivery Enabled</span>
        </label>

        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={data.pickupEnabled}
            onChange={(e) => setData({ ...data, pickupEnabled: e.target.checked })}
            className="w-4 h-4"
          />
          <span className="font-semibold">Pickup Enabled</span>
        </label>
      </div>
    </div>
  )
}

export default DeliveryEditor
