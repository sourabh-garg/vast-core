/* eslint-disable no-undef */
module.exports = {
  preset: 'ts-jest',
  rootDir: __dirname,
  roots: ['<rootDir>'],
  testEnvironment: 'jsdom',
  setupFiles: ['./jest.polyfills.js'],
  reporters: [
    'default',
    ['jest-junit', {
      outputDirectory: 'target',
      outputName: 'junit.xml',
      suiteName: 'vast-core'
    }]
  ],
  coverageDirectory: 'target',
  cache: true,
  verbose: true,
  cacheDirectory: '<rootDir>/tmp/jest',
  moduleFileExtensions: ['js', 'json', 'ts', 'tsx'],
  testMatch: ['**/?(*.)+(test|spec).(js|jsx|ts|tsx)'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/tmp/',
    '/coverage/',
    '/stories/',
    '/\\.storybook/',
    '/scripts/',
    '/dist/',
    '/.cache/',
    '.*\\.visual\\.(spec|test)\\.js',
  ],
  watchPathIgnorePatterns: ['/node_modules/'],
  automock: false,
  unmockedModulePathPatterns: ['/node_modules/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts'
  ],
  coveragePathIgnorePatterns: ['/node_modules/', '\\.json$', '/tests/', '/stories/', '/\\.storybook/'],
  transformIgnorePatterns: ['/node_modules/(?!(lodash-es|[^/]+/es|rc-animate|rc-util)/).*'],
  transform: {
    '\\.(ts|tsx)$': [
      'ts-jest',
      {
        tsconfig: `${__dirname}/tsconfig.json`,
        diagnostics: false,
        isolatedModules: true,
      },
    ],
    '/node_modules/((lodash-es|[^/]+/es)|rc-animate|rc-util)/.*': [
      'ts-jest',
      {
        tsconfig: `${__dirname}/tsconfig.json`,
        diagnostics: false,
        isolatedModules: true,
      },
    ],
  },
  globals: {
    'ts-jest': {
      tsConfig: `${__dirname}/tsconfig.json`,

      // https://huafu.github.io/ts-jest/user/config/diagnostics
      diagnostics: false,

      // Makes jest test run much faster, BUT, without type checking.
      // Type checking in CI is done with `tsc --noEmit` or `yarn typecheck` command.
      // https://huafu.github.io/ts-jest/user/config/isolatedModules
      isolatedModules: true,
    },
  },
};
