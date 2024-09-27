import { useState } from 'react'
import { Input } from '../ui'
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
    <form className="mt-14">
      <div className="space-y-4">
        <Input
          label="Nombre de usuario o correo"
          type="email"
          name="email"
          placeholder="Ingrese su nombre o correo electronico"
          onChange={handleOnChange}
        />

        <Input
          label="Constraseña"
          type="password"
          name="password"
          placeholder="Ingresa tu constraseña"
          onChange={handleOnChange}
        />

        <button
          type="submit"
          className="rounded-md border-2 border-[#3424aa] bg-[#2f2579] px-2 py-2.5 text-white"
          onClick={e => {
            e.preventDefault()

            login(user)
          }}
        >
          Iniciar sesión
        </button>
      </div>
    </form>
  )
}
