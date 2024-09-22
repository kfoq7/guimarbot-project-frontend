import { createContext, useState } from 'react'
import { useLogin } from '@hooks/auth/use-login'
import { Auth, User } from '@/types'

interface IAuthContext {
  user?: User
  login: (data: Auth) => void
}

export const AuthContext = createContext<IAuthContext | null>(null)

export function AuthProvider({ children }: { readonly children: React.ReactNode }) {
  const { loginMutate } = useLogin()

  const [user, setUser] = useState<User>()

  const login = (data: Auth) => {
    loginMutate(data, {
      onSuccess: ({ data }) => {
        setUser(data)
      },
    })
  }

  return <AuthContext.Provider value={{ user, login }}>{children}</AuthContext.Provider>
}
