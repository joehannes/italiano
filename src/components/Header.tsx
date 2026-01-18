import { FC } from 'react'
import { Link } from 'react-router-dom'
import LanguageToggle from './LanguageToggle'

interface HeaderProps {
  language: 'en' | 'es'
  onLanguageChange: (lang: 'en' | 'es') => void
}

const Header: FC<HeaderProps> = ({ language, onLanguageChange }) => {
  const isAdmin = window.location.pathname === '/admin'

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2">
            <div className="text-2xl font-serif font-bold text-[var(--color-primary)]">
              🍝 Italiano
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {!isAdmin && (
              <>
                <a href="#menu" className="text-gray-700 hover:text-[var(--color-primary)] transition-colors">
                  {language === 'en' ? 'Menu' : 'Menú'}
                </a>
                <a href="#about" className="text-gray-700 hover:text-[var(--color-primary)] transition-colors">
                  {language === 'en' ? 'About' : 'Acerca de'}
                </a>
                <a href="#contact" className="text-gray-700 hover:text-[var(--color-primary)] transition-colors">
                  {language === 'en' ? 'Contact' : 'Contacto'}
                </a>
              </>
            )}
            {isAdmin && (
              <Link to="/" className="text-gray-700 hover:text-[var(--color-primary)] transition-colors">
                {language === 'en' ? 'Back to Site' : 'Volver al Sitio'}
              </Link>
            )}
            <LanguageToggle language={language} onLanguageChange={onLanguageChange} />
          </nav>
          <div className="flex md:hidden">
            <LanguageToggle language={language} onLanguageChange={onLanguageChange} />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
