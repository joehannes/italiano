/**
 * SEO utility functions for managing meta tags and structured data
 */

export interface SEOMetadata {
  title: string
  description: string
  image?: string
  url?: string
  type?: 'website' | 'article'
}

export function updateMetaTags(metadata: SEOMetadata) {
  // Update title
  document.title = metadata.title
  updateMetaTag('name', 'description', metadata.description)
  updateMetaTag('property', 'og:title', metadata.title)
  updateMetaTag('property', 'og:description', metadata.description)
  updateMetaTag('property', 'twitter:title', metadata.title)
  updateMetaTag('property', 'twitter:description', metadata.description)

  if (metadata.image) {
    updateMetaTag('property', 'og:image', metadata.image)
    updateMetaTag('property', 'twitter:image', metadata.image)
  }

  if (metadata.url) {
    updateMetaTag('property', 'og:url', metadata.url)
    updateMetaTag('property', 'twitter:url', metadata.url)
  }

  if (metadata.type) {
    updateMetaTag('property', 'og:type', metadata.type)
  }
}

function updateMetaTag(attribute: 'name' | 'property', name: string, content: string) {
  let element = document.querySelector(`meta[${attribute}="${name}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, name)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

export const SEO_DEFAULTS = {
  title: 'Ristorante Italiano - Authentic Italian Food in Bávaro, Punta Cana',
  description: 'Fresh, homemade Italian cuisine delivered to your door. Order on WhatsApp for fastest delivery. Authentic Italian dishes since 2024.',
  image: 'https://italiano.example.com/og-image.jpg',
  url: 'https://italiano.example.com',
}

export const generateSchemaMarkup = (type: 'LocalBusiness' | 'Organization' | 'Recipe', data: any) => {
  const schemas: Record<string, any> = {
    LocalBusiness: {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      'name': 'Ristorante Italiano',
      'image': SEO_DEFAULTS.image,
      'description': SEO_DEFAULTS.description,
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Bávaro',
        'addressRegion': 'Punta Cana',
        'addressCountry': 'DO',
      },
      'telephone': '+1-809-555-1234',
      'url': SEO_DEFAULTS.url,
      'priceRange': '$$',
      'servesCuisine': 'Italian',
      ...data,
    },
    Organization: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'Ristorante Italiano',
      'url': SEO_DEFAULTS.url,
      'logo': 'https://italiano.example.com/logo.jpg',
      'description': SEO_DEFAULTS.description,
      'contactPoint': {
        '@type': 'ContactPoint',
        'contactType': 'Customer Support',
        'telephone': '+1-809-555-1234',
      },
      ...data,
    },
  }

  return schemas[type] || schemas.Organization
}
