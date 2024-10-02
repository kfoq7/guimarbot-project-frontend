import { Navigate, useParams } from 'react-router-dom'
import { CourseVideo } from './CourseVideo'

interface Props {
  href?: string
}

export const CourseInfo: React.FC<Props> = () => {
  const { courseName } = useParams()

  if (!courseName) {
    return <Navigate to="/404" />
  }

  return (
    <>
      <CourseVideo courseName={courseName} />

      <div className="col-[1/2] row-[3/4] px-4">
        <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl">
          Aprende lo ultimo de javascript (ES2023 & ES2024)
        </h1>
        <div>
          <h2 className="text-lg font-bold md:text-xl">Description</h2>
        </div>
      </div>

      <div className="col-[1/2] row-[5/5] px-4">
        <div>
          <h2 className="text-lg md:text-lg">Stack</h2>
          <ul>
            <li>JavaScript</li>
          </ul>
        </div>
        <div className="mt-6 rounded-2xl border p-5">
          <h2 className="text-lg font-bold md:text-xl">Lo que aprenderas</h2>
          <ul className="mt-4 grid grid-cols-1 gap-x-14 gap-y-5 md:grid-cols-2">
            <li>Noveades de promesas</li>
            <li>Mejora la legibilidad de codigo</li>
          </ul>
        </div>
        <div className="mt-6 flex flex-col gap-2.5">
          <h2 className="text-lg font-bold md:text-xl">Contenido del curso</h2>
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <span>5 secciones</span>
            <span>5 clases</span>
          </div>
        </div>
      </div>

      <div className="col-[1/2] row-[4/5] px-4 lg:col-[2/3] lg:row-[2/6] lg:px-0">
        <section className="flex flex-col gap-4 rounded-3xl border p-5">
          <h3 className="text-lg font-bold md:text-xl">El curso incluye</h3>
          <ul className="flex flex-col gap-4">
            <li className="flex items-center justify-between">
              <p className="flex flex-1 items-center gap-2">Horas de video:</p>
              <span>10h</span>
            </li>
            <li className="flex items-center justify-between">
              <p className="flex flex-1 items-center gap-2">Lenguaje:</p>
              <span>Español</span>
            </li>
          </ul>
        </section>
        <section className="mt-8 flex flex-col gap-4">
          <h3 className="text-lg font-bold md:text-xl">Docente</h3>
          <header className="flex gap-3">
            <div>
              <h4>Miguel Angle</h4>
              <p>Creador de contendio</p>
            </div>
          </header>
          <p>
            Programación JavaScript y Desarrollo Web. Reconocido Google Developer Expert, Microsoft.
          </p>
        </section>
      </div>
    </>
  )
}
