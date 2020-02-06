export const removeName = props => {
  const { name, ...rest } = props

  return rest
}

type ExtractName = {
  name: string
}
type Omit<T, K> = Pick<T, Exclude<keyof T, K>>
type Diff<T, K> = Omit<T, keyof K>

export const removeNameWithExclude = <Props extends ExtractName>(props: Props): Diff<Props, ExtractName> => {
  const { name, ...rest } = props

  return rest
}

type User = {
  id: number
  name: string
  location: string
  registeredAt: Date
}

export type Member = Diff<User, ExtractName>
