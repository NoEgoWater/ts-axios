import { isPlainObject } from './util'

export function transformRequest(data: any): any {
  if (isPlainObject(data)) {
    return JSON.stringify(data)
  }
  return data
}

// 将字符串data转换成对象
export function transformResponse(data: any): any {
  try {
    if (typeof data === 'string') {
      data = JSON.parse(data)
    }
  } catch (error) {
    // do nothing
  }
  return data
}
