export class Pokemon {
  name?: string
  weight = 0
  flying = false

  constructor(args: Partial<Pokemon>) {
    Object.assign(this, args)
  }

  fight(other: Pokemon): boolean {
    return this.weight > other.weight
  }

  fly(timeInMilliseconds: number): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      setTimeout(() => resolve(true), timeInMilliseconds)
    })
  }

  asJson = () => {
    return {
      name: this.name
    }
  }
}
