/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: ["text", "text-summary", "lcov"],
  reporters: [
    "default",
    [
      // Needed for CI workflow Github Action Job Summary.
      // See https://github.com/dorny/test-reporter#supported-formats
      "jest-junit",
      {
        outputDirectory: "coverage",
        ancestorSeparator: " › ",
        uniqueOutputName: "false",
        suiteNameTemplate: "{filepath}",
        classNameTemplate: "{classname}",
        titleTemplate: "{title}",
      },
    ],
  ],
};
