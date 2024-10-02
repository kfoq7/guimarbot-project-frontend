import { useParams } from 'react-router-dom'

interface Props {
  href?: string
}

export const CourseInfo: React.FC<Props> = () => {
  const { courseName } = useParams()

  return (
    <section>
      <div>
        <img className="aspect-video" />
      </div>

      {courseName}
    </section>
  )
}
