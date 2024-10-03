import { Course } from '@/types'
import { CourseCard } from './CourseCard'

interface Props {
  courses: Course[]
}

export const CourseList: React.FC<Props> = ({ courses }) => {
  return (
    <ul className="grid grid-cols-4 gap-5">
      {courses.map(course => (
        <CourseCard course={course} />
      ))}
    </ul>
  )
}
