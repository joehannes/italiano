import { FC, useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Admin: FC = () => {
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
      <main className="flex-grow py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-serif font-bold text-[var(--color-primary)] mb-8">
            {language === 'en' ? 'Admin Panel' : 'Panel de Administración'}
          </h1>
          <p className="text-gray-600">
            {language === 'en' ? 'Admin features coming in Phase 4' : 'Funciones de administración próximas en la Fase 4'}
          </p>
        </div>
      </main>
      <Footer language={language} />
    </div>
  )
}

export default Admin
