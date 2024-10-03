import { useContext } from 'react'
import { CourseContext } from '@context/courses'

export function useCourse() {
  const context = useContext(CourseContext)

  if (context == null) {
    throw new Error('useCourse must be used within CourseContext')
  }

  return context
}
