module.exports = {
  testMatch: ['<rootDir>/src/**/*.spec.ts'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js', 'html', 'json'],
  transform: {
    '^.+\\.html?$': 'html-loader-jest'
  },
  moduleFileExtensions: ['ts', 'js', 'json'],
  coverageReporters: ['text'],
  moduleDirectories: ['<rootDir>/node_modules', '<rootDir>/src/tests']
}
