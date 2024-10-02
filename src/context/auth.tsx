import { createContext, useState } from 'react'
import { useLogin } from '@hooks/auth/use-login'
import { useRegsiter } from '@hooks/auth/use-register'
import { Auth, AuthRegister, User } from '@/types'

interface IAuthContext {
  user?: User
  login: (data: Auth) => void
  register: (data: AuthRegister) => void
}

export const AuthContext = createContext<IAuthContext | null>(null)

export function AuthProvider({ children }: { readonly children: React.ReactNode }) {
  const { loginMutate } = useLogin()
  const { registerMutate } = useRegsiter()

  const [user, setUser] = useState<User>()

  const login = (data: Auth) => {
    loginMutate(data, {
      onSuccess: ({ data }) => {
        setUser(data)
      },
    })
  }

  const register = (data: AuthRegister) => {
    registerMutate(data, {
      onSuccess: ({ data }) => {
        setUser(data)
      },
    })
  }

  return <AuthContext.Provider value={{ user, login, register }}>{children}</AuthContext.Provider>
}
