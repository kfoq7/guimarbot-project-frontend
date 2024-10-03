import React from 'react'
// import { useCourse } from '@hooks/courses'
import { Hero } from '@components/Hero'
import { Guimarbot } from '@components/Guimarbot'
import { CourseList } from '@components/CourseList'
import { BackgroundSlider } from '@components/BackgroundSlider'
import { useListCourse } from '@hooks/courses/use-list-courses'

export const Home: React.FC = () => {
  // const { courses } = useCourse()
  const { courses } = useListCourse()

  return (
    <>
      {/* <Guimarbot /> */}
      <Hero />
      {/* <BackgroundSlider /> */}

      <main className="mx-auto max-w-7xl px-4">
        <CourseList courses={courses ?? []} />
      </main>
    </>
  )
}
