export interface Auth {
  email: string
  password: string
}

export interface AuthRegister extends Auth {
  username: string
}
