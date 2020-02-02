import { isNil, isArray, isEmpty, compact, isString } from 'lodash'

const cleanUp = (value: any) => {
  if (isString(value)) {
    return isNil(value) || String(value).trim() === ''
      ? undefined
      : value.trim()
  }

  if (isArray(value)) {
    return isNil(value) || isEmpty(value) ? undefined : compact(value)
  }
}

export const trim = () => (target: Object, key: string | symbol) => {
  let val = target[key]

  const getter = () => {
    return val
  }

  const setter = next => {
    val = cleanUp(next)
  }

  Object.defineProperty(target, key, {
    get: getter,
    set: setter,
    enumerable: true,
    configurable: true
  })
}
