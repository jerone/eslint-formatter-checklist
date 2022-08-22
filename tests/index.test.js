const { describe, test, expect } = require("@jest/globals");
const formatter = require("../src/index");
const { error, warning, success } = require("../src/utils");
const fixtureSingleError = require("./fixtures/single-error.json");
const fixtureMultipleErrors = require("./fixtures/multiple-errors.json");
const fixtureSingleWarning = require("./fixtures/single-warning.json");
const fixtureMultipleWarnings = require("./fixtures/multiple-warnings.json");
const fixtureSingleSuccess = require("./fixtures/single-success.json");
const fixtureMultipleSuccess = require("./fixtures/multiple-success.json");
const fixtureMixed = require("./fixtures/mixed.json");

describe("single file", () => {
  test("containing error, should fail", () => {
    const output = formatter(fixtureSingleError);
    expect(output).toBe(`\
  ✗ ${error("index1.js")}
     ⚡ ${warning("#1|1")}: Unexpected console statement. [no-console]
     ✗ ${error("#2|2")}: Unexpected console statement. [no-console]

✗ ${error("Error!")} » 1 error and 1 warning in 1 file`);
  });

  test("containing warning, should warn", () => {
    const output = formatter(fixtureSingleWarning);
    expect(output).toBe(`\
  ⚡ ${warning("index1.js")}
     ⚡ ${warning("#1|1")}: Unexpected console statement. [no-console]

⚡ ${warning("Warning!")} » 0 errors and 1 warning in 1 file`);
  });

  test("containing only success, should succeed", () => {
    const output = formatter(fixtureSingleSuccess);
    expect(output).toBe(`\
  ✓ ${success("index1.js")}

✓ ${success("Ok!")} » 0 errors and 0 warnings in 1 file`);
  });
});

describe("multiple files", () => {
  test("containing error, should fail", () => {
    const output = formatter(fixtureMultipleErrors);
    expect(output).toBe(`\
  ✗ ${error("index1.js")}
     ⚡ ${warning("#1|1")}: Unexpected console statement. [no-console]
     ✗ ${error("#2|2")}: Unexpected console statement. [no-console]
  ✗ ${error("index2.js")}
     ⚡ ${warning("#1|1")}: Unexpected console statement. [no-console]
     ✗ ${error("#2|2")}: Unexpected console statement. [no-console]

✗ ${error("Error!")} » 2 errors and 2 warnings in 2 files`);
  });

  test("containing warning, should warn", () => {
    const output = formatter(fixtureMultipleWarnings);
    expect(output).toBe(`\
  ⚡ ${warning("index1.js")}
     ⚡ ${warning("#1|1")}: Unexpected console statement. [no-console]
     ⚡ ${warning("#2|2")}: Unexpected console statement. [no-console]
  ⚡ ${warning("index2.js")}
     ⚡ ${warning("#1|1")}: Unexpected console statement. [no-console]
     ⚡ ${warning("#2|2")}: Unexpected console statement. [no-console]

⚡ ${warning("Warning!")} » 0 errors and 4 warnings in 2 files`);
  });

  test("containing only success, should succeed", () => {
    const output = formatter(fixtureMultipleSuccess);
    expect(output).toBe(`\
  ✓ ${success("index1.js")}
  ✓ ${success("index2.js")}

✓ ${success("Ok!")} » 0 errors and 0 warnings in 2 files`);
  });

  test("mixed errors & warnings & success, should fail", () => {
    const output = formatter(fixtureMixed);
    expect(output).toBe(`\
  ⚡ ${warning("index1.js")}
     ⚡ ${warning("#1|1")}: Unexpected console statement. [no-console]
     ⚡ ${warning("#2|2")}: Unexpected console statement. [no-console]
  ✗ ${error("index2.js")}
     ✗ ${error("#1|1")}: Unexpected console statement. [no-console]
     ✗ ${error("#2|2")}: Unexpected console statement. [no-console]
  ✗ ${error("index3.js")}
     ⚡ ${warning("#1|1")}: Unexpected console statement. [no-console]
     ✗ ${error("#2|2")}: Unexpected console statement. [no-console]
  ✓ ${success("index4.js")}

✗ ${error("Error!")} » 3 errors and 3 warnings in 4 files`);
  });
});

describe("no files", () => {
  test("empty array, should succeed", () => {
    const output = formatter([]);
    expect(output).toBe(`\

✓ ${success("Ok!")} » 0 errors and 0 warnings in 0 files`);
  });

  test("undefined, should succeed", () => {
    const output = formatter(undefined);
    expect(output).toBe(`\

✓ ${success("Ok!")} » 0 errors and 0 warnings in 0 files`);
  });
});
