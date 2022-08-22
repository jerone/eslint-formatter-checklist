/**
 * @fileoverview An ESLint formatter with checklist style.
 * @author Jeroen van Warmerdam
 */

"use strict";

const { prefixes, error, warning, success, pluralize } = require("./utils");

module.exports = (results = []) => {
  const output = [];

  function reportFile(result) {
    if (result.errorCount > 0) {
      return `  ${prefixes.error} ${error(result.filePath)}`;
    } else if (result.warningCount > 0) {
      return `  ${prefixes.warning} ${warning(result.filePath)}`;
    } else {
      return `  ${prefixes.success} ${success(result.filePath)}`;
    }
  }

  function reportMessage(result) {
    let message = "     ";
    switch (result.severity) {
      case 2:
        message += prefixes.error;
        message += ` ${error(`#${result.line}|${result.column}`)}`;
        break;
      case 1:
        message += prefixes.warning;
        message += ` ${warning(`#${result.line}|${result.column}`)}`;
        break;
    }
    message += `: ${result.message}`;
    message += ` [${result.ruleId}]`;
    return message;
  }

  function reportSummary(result) {
    let p, s;
    if (result.errorCount > 0) {
      p = prefixes.error;
      s = error("Error!");
    } else if (result.warningCount > 0) {
      p = prefixes.warning;
      s = warning("Warning!");
    } else {
      p = prefixes.success;
      s = success("Ok!");
    }

    const eC = result.errorCount;
    const eT = pluralize("error", result.errorCount);
    const wC = result.warningCount;
    const wT = pluralize("warning", result.warningCount);
    const fC = result.fileCount;
    const fT = pluralize("file", result.fileCount);

    return `${p} ${s} » ${eC} ${eT} and ${wC} ${wT} in ${fC} ${fT}`;
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
