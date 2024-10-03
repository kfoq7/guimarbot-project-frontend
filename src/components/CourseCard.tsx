import { useNavigate } from 'react-router-dom'
import { Course } from '@/types'
import { transformQueryParam } from '@lib/utils'

interface Props {
  course: Course
}

export const CourseCard: React.FC<Props> = ({ course }) => {
  const { title, price } = course
  const navigate = useNavigate()

  const handleOnClick = () => {
    const t = transformQueryParam(title)
    navigate(`/course/${t}`)
  }

  return (
    <li
      className="flex cursor-pointer flex-col items-center justify-center rounded-md border border-gray-100 drop-shadow-md"
      onClick={handleOnClick}
    >
      <div className="relative">
        <img
          src="/img/courses/ultimas-novedades-javascript.webp"
          className="aspect-video w-full rounded-t-md"
          // width="400"
        />
      </div>

      <div className="w-full p-2.5">
        <h1 className="text-lg font-bold">{title}</h1>
        {/* <button>Inscribirse</button> */}
        <p className="text-gray-50/20">Descripcion del curso</p>
        <div>Rating</div>
        <span>{price}</span>
      </div>
    </li>
  )
}
