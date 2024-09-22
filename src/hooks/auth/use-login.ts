import { useMutation } from '@tanstack/react-query'
import { login } from '@services/auth.service'

export function useLogin() {
  const { data, mutate: loginMutate, isPending } = useMutation({
    mutationKey: ['login'],
    mutationFn: login,
  })

  const loginData = data?.data

  return { loginData, loginMutate, isPending  }
}
