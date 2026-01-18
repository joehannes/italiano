import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import LanguageToggle from './LanguageToggle'
import MobileMenu from './MobileMenu'

interface HeaderProps {
  language: 'en' | 'es'
  onLanguageChange: (lang: 'en' | 'es') => void
}

const Header: FC<HeaderProps> = ({ language, onLanguageChange }) => {
  const isAdmin = window.location.pathname === '/admin'
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-40">
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
            <div className="md:hidden flex items-center gap-3">
              <LanguageToggle language={language} onLanguageChange={onLanguageChange} />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-gray-700 hover:text-[var(--color-primary)]"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
      <MobileMenu
        language={language}
        onLanguageChange={onLanguageChange}
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  )
}

export default Header
