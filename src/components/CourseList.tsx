import { Course } from '@/types'
import { CourseCard } from './CourseCard'

interface Props {
  courses: Course[]
}

export const CourseList: React.FC<Props> = ({ courses }) => {
  return (
    <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
      {courses.map(course => (
        <CourseCard key={course.id} course={course} />
      ))}
    </ul>
  )
}
