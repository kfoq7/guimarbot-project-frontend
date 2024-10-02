import React from 'react'
import { Hero } from '@components/Hero'
import { Guimarbot } from '@components/Guimarbot'

export const Home: React.FC = () => {
  return (
    <>
      <Guimarbot />
      <Hero />

      <main></main>
    </>
  )
}
