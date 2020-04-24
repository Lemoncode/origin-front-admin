module.exports = {
  rootDir: '../../',
  preset: 'ts-jest',
  restoreMocks: true,
  moduleNameMapper: {
    '^common-app(.*)$': '<rootDir>/src/common-app/$1',
    '^common(.*)$': '<rootDir>/src/common/$1',
    '^core(.*)$': '<rootDir>/src/core/$1',
    '^layouts(.*)$': '<rootDir>/src/layouts/$1',
    '^pods(.*)$': '<rootDir>/src/pods/$1',
    '^scenes(.*)$': '<rootDir>/src/scenes/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/config/test/setup.ts'],
};
