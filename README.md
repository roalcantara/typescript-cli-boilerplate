# typescript-cli-boilerplate

A simple Node CLI Boilerplate written in [TypeScript](http://typescriptlang.org/).

Inspired by the excellent article ["How to build a command-line app in Node.js using TypeScript, Google Cloud Functions and Firebase"](https://codeburst.io/how-to-build-a-command-line-app-in-node-js-using-typescript-google-cloud-functions-and-firebase-4c13b1699a27).

[![license](https://img.shields.io/github/license/mashape/apistatus.svg)]() [![Greenkeeper badge](https://badges.greenkeeper.io/roalcantara/typescript-cli-boilerplate.svg)](https://greenkeeper.io/)

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Dependencies

To run this project you need to have:

* [Node](http://nodejs.org)
* [Yarn](http://yarnpkg.com)

## Setup the project

1. Install the dependencies above
2. `$ git clone https://github.com/roalcantara/typescript-cli-boilerplate.git` - Clone the project
3. `$ cd typescript-cli-boilerplate` - Go into the project folder
4. `$ yarn` - Run the setup script

## Running specs

`$ yarn test` to run the specs

## Running the project

### Pokédex

- `$ yarn pokedex -h` to see the options
- `$ yarn pokedex find` to find Pokémons by name

### IMDB

- `$ yarn imdb -h` to see the options
- `$ yarn imdb screenshot` to capture screenshots from the IMDB's website
- `$ yarn imdb scrap` to scrap move lists from the IMDB's website

## How to contribute

1. Follow the [Semantic Versioning Specification](http://semver.org/)
2. Follow the [GitHub Flow](https://guides.github.com/introduction/flow/)
3. Follow the [5 Useful Tips For A Better Commit Message](https://robots.thoughtbot.com/5-useful-tips-for-a-better-commit-message) article and the [How to Write a Git Commit Message](http://chris.beams.io/posts/git-commit/) post
4. Use [Commitizen cli](http://commitizen.github.io/cz-cli/) when committing
5. Apply the [Better Specs](http://www.betterspecs.org/) best practices for testing - as much as possible, obviously

## License

This project is released under the [MIT License](http://www.opensource.org/licenses/MIT).
