/**
 * @fileoverview Set of rules for OCTanner
 * @author Tyler Haas
 */
"use strict";

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules
module.exports.rules = {
  "no-json-parse-without-try-catch": require("./rules/no-json-parse-without-try-catch"),
};
