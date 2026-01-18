import { FC, useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import MenuGrid from '../components/MenuGrid'
import { fetchMenuData, MenuData } from '../lib/jsonbin'

const Home: FC = () => {
  const [language, setLanguage] = useState<'en' | 'es'>(() => {
    const saved = localStorage.getItem('language')
    return (saved as 'en' | 'es') || 'en'
  })

  const [menuData, setMenuData] = useState<MenuData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  useEffect(() => {
    const loadMenu = async () => {
      const data = await fetchMenuData()
      setMenuData(data)
      setLoading(false)
    }
    loadMenu()
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-light)]">
      <Header language={language} onLanguageChange={setLanguage} />
      <Hero language={language} />
      <main className="flex-grow">
        <section id="menu" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-bold text-[var(--color-primary)] mb-12 text-center">
              {language === 'en' ? 'Our Menu' : 'Nuestro Menú'}
            </h2>

            {loading ? (
              <div className="text-center py-12">
                <p className="text-gray-600">
                  {language === 'en' ? 'Loading menu...' : 'Cargando menú...'}
                </p>
              </div>
            ) : menuData ? (
              <div className="space-y-16">
                {menuData.categories.map((category) => (
                  <div key={category.id}>
                    <h3 className="text-2xl font-serif font-bold text-[var(--color-primary)] mb-8">
                      {category.label[language]}
                    </h3>
                    <MenuGrid items={category.items} language={language} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600">
                  {language === 'en'
                    ? 'Unable to load menu. Please try again later.'
                    : 'No se pudo cargar el menú. Por favor, intente más tarde.'}
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer language={language} />
    </div>
  )
}

export default Home
