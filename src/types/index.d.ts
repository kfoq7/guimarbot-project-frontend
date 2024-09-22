export type ResponseResult<T> = {
  ok: boolean
  data: T
  message: string
}

export interface User {
  id: number
  email: string
  username: string
  enabled: boolean
}

export * from './auth'
