import { FC, useState } from 'react'

interface AdminAuthProps {
  onAuthenticated: () => void
}

const AdminAuth: FC<AdminAuthProps> = ({ onAuthenticated }) => {
  const [token, setToken] = useState('')
  const [error, setError] = useState('')

  const ADMIN_TOKEN = 'italiano2024' // Simple token for frontend-only auth

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (token === ADMIN_TOKEN) {
      sessionStorage.setItem('adminToken', token)
      onAuthenticated()
    } else {
      setError('Invalid token')
      setToken('')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--color-light)] to-[var(--color-accent)]/20 py-12 px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-serif font-bold text-[var(--color-primary)] mb-8 text-center">
          Admin Access
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Admin Token
            </label>
            <input
              type="password"
              value={token}
              onChange={(e) => {
                setToken(e.target.value)
                setError('')
              }}
              placeholder="Enter admin token"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            />
          </div>
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-[var(--color-primary)] text-white font-semibold py-2 rounded-lg hover:opacity-90 transition-opacity"
          >
            Access Admin Panel
          </button>
        </form>
      </div>
    </div>
  )
}

export default AdminAuth
