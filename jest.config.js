const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
  ...tsjPreset,
  verbose: true,
  automock: false,
  collectCoverage: true,
  preset: 'react-native',
  transform: {
    ...tsjPreset.transform,
    '\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
  transformIgnorePatterns: [
    'node_modules/(?!@platformbuilders|@react-native|react-native)',
  ],
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
  testMatch: ['**/__tests__/*.spec.+(ts|tsx)'],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  setupFiles: ['<rootDir>/src/tools/test-setup.ts'],
  setupFilesAfterEnv: ['./node_modules/jest-enzyme/lib/index.js'],
  unmockedModulePathPatterns: ['react', 'enzyme', 'jest-enzyme'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  collectCoverageFrom: ['src/**/*.{ts|tsx}', 'src/**/{!(index),}.ts'],
  moduleDirectories: ['node_modules', '<rootDir>'],
};
