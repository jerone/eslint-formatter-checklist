/**
 * @fileoverview An ESLint formatter with checklist style.
 * @author Jeroen van Warmerdam
 */
"use strict";

const chalk = require("chalk");

/**
 * Print message as error.
 */
exports.error = chalk.bold.red;

/**
 * Print message as warning.
 */
exports.warning = chalk.bold.yellow;

/**
 * Print message as success.
 */
exports.success = chalk.bold.green;

/**
 * List of prefixes for messages.
 */
exports.prefixes = {
  error: "✗",
  warning: "⚡",
  success: "✓",
};

/**
 * Pluralize a word.
 * @param {string} word Word to pluralize.
 * @param {number} count Amount.
 * @returns
 */
exports.pluralize = function (word, count) {
  return count === 1 ? word : word + "s";
};
