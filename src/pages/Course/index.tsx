import { CourseInfo } from '@components/CourseInfo'

export const Course: React.FC = () => {
  return (
    <main className="mx-auto grid max-w-7xl gap-6 pt-28 lg:grid-cols-[1fr_330px]">
      <CourseInfo />
    </main>
  )
}
