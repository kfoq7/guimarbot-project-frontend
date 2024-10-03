import { CourseInfo } from '@components/CourseInfo'
import { Link } from 'react-router-dom'

export const Course: React.FC = () => {
  return (
    <main className="mx-auto grid max-w-7xl gap-6 pt-28 lg:grid-cols-[1fr_330px]">
      <div className="col-[1/2] row-[1/2] flex px-4 lg:col-[1/3]">
        <Link to="/" className="transition-colors hover:underline">
          Inicio
        </Link>
      </div>

      <CourseInfo course={{ id: 1, category: 'sadf', price: 123, title: 'asdf' }} />
    </main>
  )
}
