const { defaults } = require('jest-config');
module.exports = {
  preset: 'ts-jest',
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
};
