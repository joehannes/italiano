import { FC, useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AdminAuth from '../components/AdminAuth'
import MenuEditor from '../components/MenuEditor'
import DeliveryEditor from '../components/DeliveryEditor'
import { fetchMenuData, fetchDeliverySettings, MenuData, DeliverySettings } from '../lib/jsonbin'

const Admin: FC = () => {
  const [language, setLanguage] = useState<'en' | 'es'>(() => {
    const saved = localStorage.getItem('language')
    return (saved as 'en' | 'es') || 'en'
  })

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return !!sessionStorage.getItem('adminToken')
  })

  const [menuData, setMenuData] = useState<MenuData | null>(null)
  const [deliverySettings, setDeliverySettings] = useState<DeliverySettings | null>(null)
  const [activeTab, setActiveTab] = useState<'menu' | 'delivery'>('menu')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  useEffect(() => {
    if (isAuthenticated) {
      const loadData = async () => {
        const menu = await fetchMenuData()
        const delivery = await fetchDeliverySettings()
        setMenuData(menu)
        setDeliverySettings(delivery)
        setLoading(false)
      }
      loadData()
    }
  }, [isAuthenticated])

  const handleLogout = () => {
    sessionStorage.removeItem('adminToken')
    setIsAuthenticated(false)
  }

  if (!isAuthenticated) {
    return <AdminAuth onAuthenticated={() => setIsAuthenticated(true)} />
  }

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-light)]">
      <Header language={language} onLanguageChange={setLanguage} />

      <main className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-serif font-bold text-[var(--color-primary)]">
              {language === 'en' ? 'Admin Panel' : 'Panel de Administración'}
            </h1>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
            >
              {language === 'en' ? 'Logout' : 'Cerrar sesión'}
            </button>
          </div>

          {/* Tabs */}
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setActiveTab('menu')}
              className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                activeTab === 'menu'
                  ? 'bg-[var(--color-primary)] text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              {language === 'en' ? 'Menu' : 'Menú'}
            </button>
            <button
              onClick={() => setActiveTab('delivery')}
              className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                activeTab === 'delivery'
                  ? 'bg-[var(--color-primary)] text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              {language === 'en' ? 'Delivery Settings' : 'Configuración de Entrega'}
            </button>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <p className="text-gray-600">
                {language === 'en' ? 'Loading...' : 'Cargando...'}
              </p>
            </div>
          ) : (
            <>
              {activeTab === 'menu' && menuData && (
                <MenuEditor menuData={menuData} language={language} onSave={setMenuData} />
              )}
              {activeTab === 'delivery' && deliverySettings && (
                <DeliveryEditor settings={deliverySettings} language={language} onSave={setDeliverySettings} />
              )}
            </>
          )}
        </div>
      </main>

      <Footer language={language} />
    </div>
  )
}

export default Admin
