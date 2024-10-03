import React from 'react'
import { useCourse } from '@hooks/courses'
import { Hero } from '@components/Hero'
import { Guimarbot } from '@components/Guimarbot'
import { CourseList } from '@components/CourseList'

export const Home: React.FC = () => {
  const { courses } = useCourse()

  return (
    <>
      <Guimarbot />
      <Hero />

      <main>
        <CourseList courses={courses} />
      </main>
    </>
  )
}
