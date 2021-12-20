const common = [
  "--require-module ts-node/register", // Load TypeScript module
];

const features = [
  ...common,
  "tests/features/**/*.feature",
  "--require tests/features/steps_definitions/*.steps.ts",
].join(" ");

module.exports = {
  features,
};
