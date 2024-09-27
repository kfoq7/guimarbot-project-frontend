import { useState } from 'react'
import { Input } from '@components/ui'
import { AuthRegister } from '@/types'

export const RegisterForm: React.FC = () => {
  const [user, setUser] = useState<AuthRegister>({ username: '', email: '', password: '' })

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setUser(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <form>
      <Input
        label="Nombre de usuario o correo"
        type="email"
        name="email"
        placeholder="Ingrese su nombre o correo electronico"
        onChange={handleOnChange}
      />

      <Input
        label="Nombre de usuario o correo"
        type="email"
        name="email"
        placeholder="Ingrese su nombre o correo electronico"
        onChange={handleOnChange}
      />

      <Input
        label="correo"
        type="email"
        name="email"
        placeholder="Ingrese su correo electronico"
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
    </form>
  )
}
