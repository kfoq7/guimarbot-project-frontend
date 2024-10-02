interface Props {
  courseName: string
}

export const CourseVideo: React.FC<Props> = ({ courseName }) => {
  return (
    <div className="relative col-[1/2] row-[2/3] px-4">
      <img
        className="aspect-video rounded-[16px]"
        width="1920"
        height="1080"
        src="https://www.shutterstock.com/image-photo/elearning-education-internet-lessons-online-600nw-2158034833.jpg"
        alt={`video presentaion course ${courseName}`}
      />
    </div>
  )
}
