/**
 * @fileoverview An ESLint formatter with checklist style.
 * @author Jeroen van Warmerdam
 */

"use strict";

const chalk = require("chalk");

module.exports = (results) => {
  results = results || [];

  const output = [];

  const prefix = {
    error: "✗",
    warning: "⚡",
    success: "✓",
  };

  const error = chalk.bold.red;
  const warning = chalk.bold.yellow;
  const success = chalk.bold.green;

  function pluralize(word, count) {
    return count === 1 ? word : word + "s";
  }

  function reportFile(result) {
    if (result.errorCount > 0) {
      return `  ${prefix.error} ${error(result.filePath)}`;
    } else if (result.warningCount > 0) {
      return `  ${prefix.warning} ${warning(result.filePath)}`;
    } else {
      return `  ${prefix.success} ${success(result.filePath)}`;
    }
  }

  function reportMessage(result) {
    if (result.severity === 2) {
      return `     ${prefix.error} ${error("#" + result.line)}: ${
        result.message
      }`;
    } else if (result.severity === 1) {
      return `     ${prefix.warning} ${warning("#" + result.line)}: ${
        result.message
      }`;
    } else {
      return `     ${prefix.success} ${success("#" + result.line)}: ${
        result.message
      }`;
    }
  }

  function reportSummary(result) {
    let _prefix, _status;
    if (result.errorCount > 0) {
      _prefix = prefix.error;
      _status = error("Error!");
    } else if (result.warningCount > 0) {
      _prefix = prefix.warning;
      _status = warning("Warning!");
    } else {
      _prefix = prefix.success;
      _status = success("Ok!");
    }
    return (
      _prefix +
      " " +
      _status +
      " » " +
      result.errorCount +
      " " +
      pluralize("error", result.errorCount) +
      " and " +
      result.warningCount +
      " " +
      pluralize("warning", result.warningCount) +
      " in " +
      result.fileCount +
      " " +
      pluralize("file", result.fileCount)
    );
  }

  const summary = results.reduce(
    (sum, result) => {
      sum.errorCount += result.errorCount;
      sum.warningCount += result.warningCount;
      return sum;
    },
    { errorCount: 0, warningCount: 0, fileCount: results.length }
  );

  results.forEach((result) => {
    output.push(reportFile(result));
    result.messages.forEach((msg) => output.push(reportMessage(msg)));
  });

  output.push("");
  output.push(reportSummary(summary));

  return output.join("\n");
};
