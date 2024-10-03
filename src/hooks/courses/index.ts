import { CourseContext } from '@context/courses'
import { useContext } from 'react'

export function useCourse() {
  const context = useContext(CourseContext)

  if (context == null) {
    throw new Error('useCourse must be used within CourseContext')
  }

  return context
}
