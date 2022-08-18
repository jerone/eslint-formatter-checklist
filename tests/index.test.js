const formatter = require("../src/index");
const { error, warning, success } = require("../src/utils");
const fixtureSingleError = require("./fixtures/single-error.json");
const fixtureMultipleErrors = require("./fixtures/multiple-errors.json");
const fixtureSingleWarning = require("./fixtures/single-warning.json");
const fixtureMultipleWarnings = require("./fixtures/multiple-warnings.json");
const fixtureSingleSuccess = require("./fixtures/single-success.json");
const fixtureMultipleSuccess = require("./fixtures/multiple-success.json");
const fixtureMixed = require("./fixtures/mixed.json");

test("single file, containing error, should fail", () => {
  const output = formatter(fixtureSingleError);
  expect(output).toBe(`\
  ✗ ${error("index1.js")}
     ⚡ ${warning("#1")}: Unexpected console statement.
     ✗ ${error("#2")}: Unexpected console statement.

✗ ${error("Error!")} » 1 error and 1 warning in 1 file`);
});

test("multiple files, containing error, should fail", () => {
  const output = formatter(fixtureMultipleErrors);
  expect(output).toBe(`\
  ✗ ${error("index1.js")}
     ⚡ ${warning("#1")}: Unexpected console statement.
     ✗ ${error("#2")}: Unexpected console statement.
  ✗ ${error("index2.js")}
     ⚡ ${warning("#1")}: Unexpected console statement.
     ✗ ${error("#2")}: Unexpected console statement.

✗ ${error("Error!")} » 2 errors and 2 warnings in 2 files`);
});

test("single file, containing warning, should warn", () => {
  const output = formatter(fixtureSingleWarning);
  expect(output).toBe(`\
  ⚡ ${warning("index1.js")}
     ⚡ ${warning("#1")}: Unexpected console statement.

⚡ ${warning("Warning!")} » 0 errors and 1 warning in 1 file`);
});

test("multiple files, containing warning, should warn", () => {
  const output = formatter(fixtureMultipleWarnings);
  expect(output).toBe(`\
  ⚡ ${warning("index1.js")}
     ⚡ ${warning("#1")}: Unexpected console statement.
     ⚡ ${warning("#2")}: Unexpected console statement.
  ⚡ ${warning("index2.js")}
     ⚡ ${warning("#1")}: Unexpected console statement.
     ⚡ ${warning("#2")}: Unexpected console statement.

⚡ ${warning("Warning!")} » 0 errors and 4 warnings in 2 files`);
});

test("multiple files, mixed errors, warnings and success, should fail", () => {
  const output = formatter(fixtureMixed);
  expect(output).toBe(`\
  ⚡ ${warning("index1.js")}
     ⚡ ${warning("#1")}: Unexpected console statement.
     ⚡ ${warning("#2")}: Unexpected console statement.
  ✗ ${error("index2.js")}
     ✗ ${error("#1")}: Unexpected console statement.
     ✗ ${error("#2")}: Unexpected console statement.
  ✗ ${error("index3.js")}
     ⚡ ${warning("#1")}: Unexpected console statement.
     ✗ ${error("#2")}: Unexpected console statement.
  ✓ ${success("index4.js")}

✗ ${error("Error!")} » 3 errors and 3 warnings in 4 files`);
});

test("single file, containing only success, should succeed", () => {
  const output = formatter(fixtureSingleSuccess);
  expect(output).toBe(`\
  ✓ ${success("index1.js")}

✓ ${success("Ok!")} » 0 errors and 0 warnings in 1 file`);
});

test("multiple files, containing only success, should succeed", () => {
  const output = formatter(fixtureMultipleSuccess);
  expect(output).toBe(`\
  ✓ ${success("index1.js")}
  ✓ ${success("index2.js")}

✓ ${success("Ok!")} » 0 errors and 0 warnings in 2 files`);
});

test("no files, should succeed", () => {
  const output = formatter([]);
  expect(output).toBe(`\

✓ ${success("Ok!")} » 0 errors and 0 warnings in 0 files`);
});
