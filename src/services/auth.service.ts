import { client } from '@lib/axios'
import { Auth, ResponseResult, User } from '@/types'

export const login = (data: Auth): Promise<ResponseResult<User>> => {
  return client.post('/auth/signin', data)
}
