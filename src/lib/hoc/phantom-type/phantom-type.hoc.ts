// tslint:disable: max-classes-per-file variable-name

export type Unvalidated = { _type: 'Unvalidated' }
export type Validated = { _type: 'Validated' }
export type InternalUnvalidated = Unvalidated & { value: string }
export type InternalValidated = Validated & { value: string }

export type FormData<T, D = never> = { value: D } & T
type MakeFormData = (a: string) => FormData<Unvalidated>
type UpperCase = (a: FormData<Unvalidated>) => FormData<Unvalidated>
type Validate = (a: FormData<Unvalidated>) => FormData<Validated> | null
export type Process = (a: FormData<Validated>) => FormData<Validated>

export const makeFormData: MakeFormData = value => {
  return { value } as FormData<Unvalidated>
}

export const upperCase: UpperCase = data => {
  const internalData = data as InternalUnvalidated

  return { value: internalData.value.toUpperCase() } as FormData<Unvalidated>
}

export const validate: Validate = data => {
  const internalData = data as InternalUnvalidated
  if (internalData.value.length > 3) {
    return { value: internalData.value } as FormData<Validated>
  }

  return null
}
