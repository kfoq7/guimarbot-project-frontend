import { client } from '@lib/axios'
import { Course, ResponseResult } from '@/types'

export const getCourses = (): Promise<ResponseResult<Course[]>> => {
  return client.get('/courses')
}

export const getCourseByName = (courseName?: string): Promise<ResponseResult<Course>> => {
  return client.get(`/course?title=${courseName}`)
}
