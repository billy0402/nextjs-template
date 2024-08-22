const path = require('path');

function buildEslintCommand(filenames) {
  return `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;
}

module.exports = {
  '*': 'npm run format:fix',
  '*.{js,jsx,ts,tsx}': buildEslintCommand,
};
