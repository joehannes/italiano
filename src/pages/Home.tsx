import { FC, useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

const Home: FC = () => {
  const [language, setLanguage] = useState<'en' | 'es'>(() => {
    const saved = localStorage.getItem('language')
    return (saved as 'en' | 'es') || 'en'
  })

  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-light)]">
      <Header language={language} onLanguageChange={setLanguage} />
      <Hero language={language} />
      <main className="flex-grow">
        {/* Menu section will be added in Phase 3 */}
        <section id="menu" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-serif font-bold text-[var(--color-primary)] mb-4">
              {language === 'en' ? 'Our Menu' : 'Nuestro Menú'}
            </h2>
            <p className="text-gray-600">
              {language === 'en' ? 'Menu loading...' : 'Menú cargando...'}
            </p>
          </div>
        </section>
      </main>
      <Footer language={language} />
    </div>
  )
}

export default Home
