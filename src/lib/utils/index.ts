export function transformQueryParam(param: string) {
  return param.toLowerCase().replace(/\s/g, '-')
}
