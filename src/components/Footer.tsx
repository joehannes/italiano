import { FC } from 'react'

interface FooterProps {
  language: 'en' | 'es'
}

const Footer: FC<FooterProps> = ({ language }) => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[var(--color-dark)] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">🍝 Italiano</h3>
            <p className="text-gray-400">
              {language === 'en'
                ? 'Authentic Italian cuisine in Bávaro, Punta Cana'
                : 'Auténtica cocina italiana en Bávaro, Punta Cana'}
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {language === 'en' ? 'Hours' : 'Horarios'}
            </h4>
            <p className="text-gray-400">
              {language === 'en' ? 'Mon-Sun: 11AM-11PM' : 'Lun-Dom: 11AM-11PM'}
            </p>
            <p className="text-gray-400">
              {language === 'en' ? 'WhatsApp Available 24/7' : 'WhatsApp Disponible 24/7'}
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {language === 'en' ? 'Location' : 'Ubicación'}
            </h4>
            <p className="text-gray-400">
              {language === 'en'
                ? 'Bávaro / El Cortecito'
                : 'Bávaro / El Cortecito'}
            </p>
            <p className="text-gray-400">
              {language === 'en'
                ? 'Punta Cana, Dominican Republic'
                : 'Punta Cana, República Dominicana'}
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400">
            © {currentYear} Ristorante Italiano. {language === 'en' ? 'All rights reserved.' : 'Todos los derechos reservados.'}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
