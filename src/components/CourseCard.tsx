import { Course } from '@/types'

interface Props {
  course: Course
}

export const CourseCard: React.FC<Props> = ({ course }) => {
  const { title, } = course

  return (
    <li className="flex items-center justify-center">
      {title}
      <button>Inscribirse</button>
    </li>
  )
}
