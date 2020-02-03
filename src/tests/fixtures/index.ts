import fs from 'fs'
import path from 'path'

export const Fixture = {
  path: (fileName: string) => path.join(__dirname, `imdb/${fileName}`),
  load: (fileName: string) => {
    return fs.readFileSync(Fixture.path(fileName)).toString()
  }
}
