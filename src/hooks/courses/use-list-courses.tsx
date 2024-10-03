import { getCourses } from '@services/coures.service'
import { useQuery } from '@tanstack/react-query'

export function useListCourse() {
  const { data, isLoading } = useQuery({
    queryKey: ['course-list'],
    queryFn: getCourses,
  })

  const courses = data?.data

  return { courses, isLoading }
}
