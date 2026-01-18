import { FC } from 'react'

interface LanguageToggleProps {
  language: 'en' | 'es'
  onLanguageChange: (lang: 'en' | 'es') => void
}

const LanguageToggle: FC<LanguageToggleProps> = ({ language, onLanguageChange }) => {
  return (
    <div className="flex gap-2">
      <button
        onClick={() => onLanguageChange('en')}
        className={`px-3 py-1 rounded ${
          language === 'en'
            ? 'bg-[var(--color-primary)] text-white'
            : 'bg-white text-[var(--color-primary)] border border-[var(--color-primary)]'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => onLanguageChange('es')}
        className={`px-3 py-1 rounded ${
          language === 'es'
            ? 'bg-[var(--color-primary)] text-white'
            : 'bg-white text-[var(--color-primary)] border border-[var(--color-primary)]'
        }`}
      >
        ES
      </button>
    </div>
  )
}

export default LanguageToggle
