import { FC } from 'react'
import { MenuItem } from '../lib/jsonbin'
import WhatsAppCTA from './WhatsAppCTA'

interface DishCardProps {
  item: MenuItem
  language: 'en' | 'es'
}

const DishCard: FC<DishCardProps> = ({ item, language }) => {
  const name = item.name[language]
  const description = item.description[language]
  const price = item.price.toFixed(2)

  const orderText = `I'd like to order ${name} (${price} DOP)`

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
      {item.image && (
        <img
          src={item.image}
          alt={name}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
      )}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg sm:text-xl font-serif font-bold text-[var(--color-primary)] mb-2">
          {name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{description}</p>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <span className="text-2xl font-bold text-[var(--color-accent)]">
            {price} DOP
          </span>
          {item.available ? (
            <div className="w-full sm:w-auto">
              <WhatsAppCTA text={orderText} />
            </div>
          ) : (
            <button disabled className="w-full sm:w-auto bg-gray-300 text-gray-500 font-semibold py-2 px-4 rounded-lg cursor-not-allowed">
              {language === 'en' ? 'Unavailable' : 'No disponible'}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default DishCard
