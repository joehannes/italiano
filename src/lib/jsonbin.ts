const JSONBIN_API_KEY = '$2a$10$O.OU0pIRgV/JRXJt3aTLW.W/.wgF3ISPaTXWVGaSS9QQ3EpRuJw1a'
const JSONBIN_BIN_ID = 'italiano_menu' // Will be created on first save

export interface MenuItem {
  id: string
  name: { en: string; es: string }
  description: { en: string; es: string }
  price: number
  image: string
  available: boolean
}

export interface MenuCategory {
  id: string
  label: { en: string; es: string }
  items: MenuItem[]
}

export interface MenuData {
  categories: MenuCategory[]
}

export interface DeliverySettings {
  deliveryEnabled: boolean
  deliveryFee: number
  deliveryTime: string
  pickupEnabled: boolean
}

export interface Testimonial {
  name: string
  source: string
  language: 'en' | 'es'
  message: string
  approved: boolean
  date: string
}

export interface TestimonialsData {
  testimonials: Testimonial[]
}

// Default menu data
const DEFAULT_MENU: MenuData = {
  categories: [
    {
      id: 'pizza',
      label: { en: 'Pizza', es: 'Pizza' },
      items: [
        {
          id: 'margherita',
          name: { en: 'Margherita', es: 'Margarita' },
          description: {
            en: 'Fresh mozzarella, tomato, basil',
            es: 'Mozzarella fresca, tomate, albahaca',
          },
          price: 590,
          image: 'https://res.cloudinary.com/dkxlhxpe4/image/upload/v1/placeholder-pizza',
          available: true,
        },
      ],
    },
  ],
}

const DEFAULT_DELIVERY: DeliverySettings = {
  deliveryEnabled: true,
  deliveryFee: 150,
  deliveryTime: '35–45 min',
  pickupEnabled: true,
}

const DEFAULT_TESTIMONIALS: TestimonialsData = {
  testimonials: [
    {
      name: 'John D.',
      source: 'WhatsApp',
      language: 'en',
      message: 'Best Italian food we had in Punta Cana!',
      approved: true,
      date: '2026-01-15',
    },
  ],
}

// Fetch from JSONBin
export async function fetchMenuData(): Promise<MenuData> {
  try {
    const response = await fetch('https://api.jsonbin.io/v3/b/italiano_menu', {
      headers: {
        'X-Master-Key': JSONBIN_API_KEY,
      },
    })
    if (response.ok) {
      const data = await response.json()
      return data.record
    }
  } catch (error) {
    console.error('Failed to fetch menu from JSONBin, using default:', error)
  }
  return DEFAULT_MENU
}

export async function fetchDeliverySettings(): Promise<DeliverySettings> {
  try {
    const response = await fetch('https://api.jsonbin.io/v3/b/italiano_delivery', {
      headers: {
        'X-Master-Key': JSONBIN_API_KEY,
      },
    })
    if (response.ok) {
      const data = await response.json()
      return data.record
    }
  } catch (error) {
    console.error('Failed to fetch delivery settings, using default:', error)
  }
  return DEFAULT_DELIVERY
}

export async function fetchTestimonials(): Promise<TestimonialsData> {
  try {
    const response = await fetch('https://api.jsonbin.io/v3/b/italiano_testimonials', {
      headers: {
        'X-Master-Key': JSONBIN_API_KEY,
      },
    })
    if (response.ok) {
      const data = await response.json()
      return data.record
    }
  } catch (error) {
    console.error('Failed to fetch testimonials, using default:', error)
  }
  return DEFAULT_TESTIMONIALS
}

// Save to JSONBin
export async function saveMenuData(data: MenuData, binId = 'italiano_menu'): Promise<boolean> {
  try {
    const response = await fetch(`https://api.jsonbin.io/v3/b/${binId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-Master-Key': JSONBIN_API_KEY,
      },
      body: JSON.stringify(data),
    })
    return response.ok
  } catch (error) {
    console.error('Failed to save menu data:', error)
    return false
  }
}

export async function saveDeliverySettings(
  data: DeliverySettings,
  binId = 'italiano_delivery'
): Promise<boolean> {
  try {
    const response = await fetch(`https://api.jsonbin.io/v3/b/${binId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-Master-Key': JSONBIN_API_KEY,
      },
      body: JSON.stringify(data),
    })
    return response.ok
  } catch (error) {
    console.error('Failed to save delivery settings:', error)
    return false
  }
}

export async function saveTestimonials(
  data: TestimonialsData,
  binId = 'italiano_testimonials'
): Promise<boolean> {
  try {
    const response = await fetch(`https://api.jsonbin.io/v3/b/${binId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-Master-Key': JSONBIN_API_KEY,
      },
      body: JSON.stringify(data),
    })
    return response.ok
  } catch (error) {
    console.error('Failed to save testimonials:', error)
    return false
  }
}

// Create new bin if it doesn't exist
export async function createBinIfNotExists(binId: string, data: object): Promise<string> {
  try {
    const response = await fetch('https://api.jsonbin.io/v3/b', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Master-Key': JSONBIN_API_KEY,
      },
      body: JSON.stringify(data),
    })
    if (response.ok) {
      const result = await response.json()
      return result.metadata.id
    }
  } catch (error) {
    console.error('Failed to create new bin:', error)
  }
  return binId
}
