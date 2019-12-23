module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleFileExtensions: ["ts", "tsx", "js"],
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.ts",
    "^#/(.+)": "<rootDir>/src/app/$1"
  },
  transform: {
    "^.+\\.(ts|tsx|js)$": "ts-jest"
  },
  testMatch: ["**/__tests__/*.(ts|tsx)"],
  setupFiles: ["./jest.setup.js"],
  testPathIgnorePatterns: ["./.next/", "./node_modules/"],
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.jest.json"
    }
  }
};
