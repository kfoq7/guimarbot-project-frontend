import { createContext, useEffect, useState } from 'react'
import { useListCourse } from '@hooks/courses/use-list-courses'
import { Course } from '@/types'

interface ICoureContext {
  courses: Course[]
}

export const CourseContext = createContext<ICoureContext | null>(null)

export function CourseProvider({ children }: { readonly children: React.ReactNode }) {
  const [courses, setCourses] = useState<Course[]>([])

  // const { courses: courseList } = useListCourse()

  // useEffect(() => {
  //   setCourses(courseList ?? [])
  // }, [courseList])

  return <CourseContext.Provider value={{ courses }}>{children}</CourseContext.Provider>
}
