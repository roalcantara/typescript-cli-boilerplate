export default class Pokemon {
  name?: string
  weight = 0
  flying = false

  constructor({
    name,
    weight,
    flying
  }: {
    name?: string,
    weight?: number,
    flying?: boolean
  } = {
    name: '',
    weight: 0,
    flying: false
  }) {
    this.name = name
    this.weight = weight
    this.flying = flying
  }

  fight(other: Pokemon): boolean {
    return this.weight > other.weight
  }

  fly(timeInMilliseconds: number): Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(resolve(true), timeInMilliseconds)
    })
  }

  asJson() {
    return {
      name: this.name
    }
  }
}
