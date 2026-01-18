import { FC, useEffect } from 'react'
import { SEOMetadata, updateMetaTags, SEO_DEFAULTS } from '../lib/seo'

interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: 'website' | 'article'
}

const SEO: FC<SEOProps> = ({
  title = SEO_DEFAULTS.title,
  description = SEO_DEFAULTS.description,
  image = SEO_DEFAULTS.image,
  url = SEO_DEFAULTS.url,
  type = 'website',
}) => {
  useEffect(() => {
    const metadata: SEOMetadata = {
      title,
      description,
      image,
      url,
      type,
    }
    updateMetaTags(metadata)
  }, [title, description, image, url, type])

  return null
}

export default SEO
