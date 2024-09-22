import React from 'react'
import { useAuth } from '@hooks/auth'

export const Home: React.FC = () => {
  const { user } = useAuth()

  return <div>{user?.username}</div>
}
