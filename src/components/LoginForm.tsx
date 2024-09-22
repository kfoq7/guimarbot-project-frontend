import { useState } from 'react'
import { useAuth } from '@hooks/auth'
import { Auth } from '@/types'

export const LoginForm: React.FC = () => {
  const [user, setUser] = useState<Auth>({ email: '', password: '' })
  const { login } = useAuth()

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setUser(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <form className="mx-auto max-w-sm rounded-lg bg-white px-4 py-6 shadow-md">
      <div className="mb-4">
        <label className="mb-2 block font-bold text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          className="w-full rounded-md border px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500"
          placeholder="Ingresa tu nombre de usuario o email"
          onChange={handleOnChange}
        />
      </div>

      <div className="mb-6">
        <label className="mb-2 block font-bold text-gray-700">Contraseña</label>
        <input
          type="password"
          name="password"
          className="w-full rounded-md border px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500"
          placeholder="Ingresa tu contraseña"
          onChange={handleOnChange}
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-blue-500 px-4 py-2 text-white transition duration-300 hover:bg-blue-600"
        onClick={e => {
          e.preventDefault()

          login(user)
        }}
      >
        Iniciar sesión
      </button>
    </form>
  )
}
