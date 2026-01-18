import { FC } from 'react'

interface WhatsAppCTAProps {
  text: string
}

const WhatsAppCTA: FC<WhatsAppCTAProps> = ({ text }) => {
  const handleWhatsApp = () => {
    const phoneNumber = '18095551234' // Replace with actual restaurant number
    const message = encodeURIComponent(text || 'Hola! Me gustaría hacer un pedido.')
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  return (
    <button
      onClick={handleWhatsApp}
      className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors"
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.946 1.262l-.356.214-3.71-.97.994 3.636-.235.364a9.864 9.864 0 001.515 5.394 9.9 9.9 0 005.159 4.203l.356.143 3.71.97-.994-3.636.235-.364a9.865 9.865 0 00-1.516-5.394 9.9 9.9 0 00-5.159-4.203zM23.12 0a11.976 11.976 0 00-9.38 21.537L0 24l2.463-9.382A11.977 11.977 0 0023.12 0z" />
      </svg>
      WhatsApp
    </button>
  )
}

export default WhatsAppCTA
