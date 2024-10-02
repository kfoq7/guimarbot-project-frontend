import { register } from '@services/auth.service'
import { useMutation } from '@tanstack/react-query'

export function useRegsiter() {
  const { data, mutate: registerMutate } = useMutation({
    mutationKey: ['register'],
    mutationFn: register,
  })

  const registerData = data?.data

  return { registerData, registerMutate }
}
