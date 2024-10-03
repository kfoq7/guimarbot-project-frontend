import { client } from '@lib/axios'
import { Course, ResponseResult } from '@/types'

export const getCourses = (): Promise<ResponseResult<Course[]>> => {
  return client.get('/course')
}
