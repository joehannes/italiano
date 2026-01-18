import { FC } from 'react'
import WhatsAppCTA from './WhatsAppCTA'

interface HeroProps {
  language: 'en' | 'es'
}

const Hero: FC<HeroProps> = ({ language }) => {
  return (
    <section className="relative bg-gradient-to-br from-[var(--color-light)] to-[var(--color-accent)]/20 py-12 sm:py-20 md:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-[var(--color-accent)]/10 rounded-full -mr-32 sm:-mr-48 -mt-32 sm:-mt-48"></div>
      <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-[var(--color-primary)]/5 rounded-full -ml-32 sm:-ml-48 -mb-32 sm:-mb-48"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[var(--color-primary)] mb-4 sm:mb-6">
              {language === 'en'
                ? 'Authentic Italian Cuisine'
                : 'Auténtica Cocina Italiana'}
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 mb-6 sm:mb-8">
              {language === 'en'
                ? 'Fresh, homemade Italian dishes brought to your door in Punta Cana. Order on WhatsApp for fastest delivery.'
                : 'Platos italianos frescos y caseros entregados en su puerta en Punta Cana. Ordene por WhatsApp para entrega más rápida.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <div className="w-full sm:w-auto">
                <WhatsAppCTA text={language === 'en' ? 'I want to order!' : '¡Quiero hacer un pedido!'} />
              </div>
              <a
                href="#menu"
                className="border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors text-center w-full sm:w-auto"
              >
                {language === 'en' ? 'Browse Menu' : 'Ver Menú'}
              </a>
            </div>
          </div>
          <div className="text-center md:text-right">
            <div className="text-6xl sm:text-8xl md:text-9xl">🍝</div>
            <p className="text-xl sm:text-2xl font-serif text-[var(--color-primary)] mt-2 sm:mt-4">
              {language === 'en' ? 'Since 2024' : 'Desde 2024'}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
