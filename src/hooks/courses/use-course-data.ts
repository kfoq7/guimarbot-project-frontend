import { getCourseByName } from '@services/coures.service'
import { useQuery } from '@tanstack/react-query'

export function useCourseData(courseName?: string) {
  const { data, error } = useQuery({
    queryKey: ['course-data', courseName],
    queryFn: () => getCourseByName(courseName),
  })

  const course = data?.data

  return { course, error }
}
