import { FC } from 'react'
import { MenuItem } from '../lib/jsonbin'
import DishCard from './DishCard'

interface MenuGridProps {
  items: MenuItem[]
  language: 'en' | 'es'
}

const MenuGrid: FC<MenuGridProps> = ({ items, language }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <DishCard key={item.id} item={item} language={language} />
      ))}
    </div>
  )
}

export default MenuGrid
