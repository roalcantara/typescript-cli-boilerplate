import { trim } from '../decorators'

export class Movie {
  @trim()
  title: string

  @trim()
  director: string

  @trim()
  stars?: Array<string>

  @trim()
  description: string

  constructor(args: Partial<Movie>) {
    Object.assign(this, args)
  }
}
