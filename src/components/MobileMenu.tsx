import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import LanguageToggle from './LanguageToggle'

interface MobileMenuProps {
  language: 'en' | 'es'
  onLanguageChange: (lang: 'en' | 'es') => void
  isOpen: boolean
  onClose: () => void
}

const MobileMenu: FC<MobileMenuProps> = ({ language, onLanguageChange, isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="fixed inset-0 bg-black/50" onClick={onClose}></div>
      <div className="fixed right-0 top-0 h-full w-64 bg-white shadow-lg overflow-y-auto">
        <div className="p-4 space-y-6">
          <button onClick={onClose} className="text-2xl">×</button>
          
          <nav className="space-y-4">
            <a
              href="#menu"
              onClick={onClose}
              className="block text-gray-700 hover:text-[var(--color-primary)] transition-colors"
            >
              {language === 'en' ? 'Menu' : 'Menú'}
            </a>
            <a
              href="#about"
              onClick={onClose}
              className="block text-gray-700 hover:text-[var(--color-primary)] transition-colors"
            >
              {language === 'en' ? 'About' : 'Acerca de'}
            </a>
            <a
              href="#contact"
              onClick={onClose}
              className="block text-gray-700 hover:text-[var(--color-primary)] transition-colors"
            >
              {language === 'en' ? 'Contact' : 'Contacto'}
            </a>
          </nav>

          <div className="border-t pt-4">
            <p className="text-sm font-semibold mb-2">Language</p>
            <LanguageToggle language={language} onLanguageChange={onLanguageChange} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu
