import { FC, useState, useEffect } from 'react'
import { MenuData, MenuItem, MenuCategory, saveMenuData } from '../lib/jsonbin'

interface MenuEditorProps {
  menuData: MenuData
  language: 'en' | 'es'
  onSave: (data: MenuData) => void
}

const MenuEditor: FC<MenuEditorProps> = ({ menuData, language, onSave }) => {
  const [data, setData] = useState(menuData)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')
  const [editingCategory, setEditingCategory] = useState<string | null>(null)
  const [editingItem, setEditingItem] = useState<string | null>(null)

  const handleSave = async () => {
    setSaving(true)
    const success = await saveMenuData(data)
    setSaving(false)
    if (success) {
      setMessage('Menu saved successfully!')
      setTimeout(() => setMessage(''), 3000)
      onSave(data)
    } else {
      setMessage('Failed to save menu')
    }
  }

  const updateItemField = (
    categoryId: string,
    itemId: string,
    field: string,
    value: any
  ) => {
    setData((prev) => ({
      ...prev,
      categories: prev.categories.map((cat) =>
        cat.id === categoryId
          ? {
              ...cat,
              items: cat.items.map((item) =>
                item.id === itemId
                  ? { ...item, [field]: value }
                  : item
              ),
            }
          : cat
      ),
    }))
  }

  const updateItemLabel = (
    categoryId: string,
    itemId: string,
    lang: 'en' | 'es',
    field: 'name' | 'description',
    value: string
  ) => {
    setData((prev) => ({
      ...prev,
      categories: prev.categories.map((cat) =>
        cat.id === categoryId
          ? {
              ...cat,
              items: cat.items.map((item) =>
                item.id === itemId
                  ? {
                      ...item,
                      [field]: {
                        ...item[field],
                        [lang]: value,
                      },
                    }
                  : item
              ),
            }
          : cat
      ),
    }))
  }

  const addItem = (categoryId: string) => {
    const newItem: MenuItem = {
      id: `item_${Date.now()}`,
      name: { en: 'New Dish', es: 'Nuevo Plato' },
      description: { en: 'Description', es: 'Descripción' },
      price: 0,
      image: '',
      available: true,
    }
    setData((prev) => ({
      ...prev,
      categories: prev.categories.map((cat) =>
        cat.id === categoryId
          ? { ...cat, items: [...cat.items, newItem] }
          : cat
      ),
    }))
  }

  const removeItem = (categoryId: string, itemId: string) => {
    setData((prev) => ({
      ...prev,
      categories: prev.categories.map((cat) =>
        cat.id === categoryId
          ? { ...cat, items: cat.items.filter((i) => i.id !== itemId) }
          : cat
      ),
    }))
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Menu Editor</h2>
        <button
          onClick={handleSave}
          disabled={saving}
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 disabled:opacity-50"
        >
          {saving ? 'Saving...' : 'Save Menu'}
        </button>
      </div>

      {message && (
        <div className={`p-4 rounded-lg ${message.includes('success') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {message}
        </div>
      )}

      <div className="space-y-6">
        {data.categories.map((category) => (
          <div key={category.id} className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-bold mb-4">{category.label[language]}</h3>

            <div className="space-y-4">
              {category.items.map((item) => (
                <div key={item.id} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-1">Name (EN)</label>
                      <input
                        type="text"
                        value={item.name.en}
                        onChange={(e) =>
                          updateItemLabel(category.id, item.id, 'en', 'name', e.target.value)
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-1">Name (ES)</label>
                      <input
                        type="text"
                        value={item.name.es}
                        onChange={(e) =>
                          updateItemLabel(category.id, item.id, 'es', 'name', e.target.value)
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-1">Description (EN)</label>
                      <input
                        type="text"
                        value={item.description.en}
                        onChange={(e) =>
                          updateItemLabel(category.id, item.id, 'en', 'description', e.target.value)
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-1">Description (ES)</label>
                      <input
                        type="text"
                        value={item.description.es}
                        onChange={(e) =>
                          updateItemLabel(category.id, item.id, 'es', 'description', e.target.value)
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-1">Price (DOP)</label>
                      <input
                        type="number"
                        value={item.price}
                        onChange={(e) =>
                          updateItemField(category.id, item.id, 'price', parseFloat(e.target.value) || 0)
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-1">Image URL</label>
                      <input
                        type="text"
                        value={item.image}
                        onChange={(e) =>
                          updateItemField(category.id, item.id, 'image', e.target.value)
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-4">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={item.available}
                        onChange={(e) =>
                          updateItemField(category.id, item.id, 'available', e.target.checked)
                        }
                        className="w-4 h-4"
                      />
                      <span className="text-sm">Available</span>
                    </label>
                    <button
                      onClick={() => removeItem(category.id, item.id)}
                      className="text-red-600 hover:text-red-800 text-sm font-semibold"
                    >
                      Remove Item
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => addItem(category.id)}
              className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Add Item to {category.label[language]}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MenuEditor
