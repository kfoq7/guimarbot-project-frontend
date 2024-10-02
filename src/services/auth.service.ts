import { client } from '@lib/axios'
import { Auth, AuthRegister, ResponseResult, User } from '@/types'

export const login = (data: Auth): Promise<ResponseResult<User>> => {
  return client.post('/auth/sign_in', data)
}

export const register = (data: AuthRegister): Promise<ResponseResult<User>> => {
  return client.post('/auth/sign_up', data)
}
