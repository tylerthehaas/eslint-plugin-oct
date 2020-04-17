const rule = require("../no-json-parse-without-try-catch"),
  RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester();

ruleTester.run("no-json-parse-without-try-catch", rule, {
  valid: [
    {
      code: "try {(function() { if (true) json.parse(); }())} catch(e) {}",
    },
    {
      code: "try {json.parse(); } catch(e) {}",
    },
    {
      code: 'console.log("foo")',
    },
  ],
  invalid: [
    {
      code: "json.parse();",
      errors: [{ message: "cannot call json.parse outside of try/catch" }],
    },
  ],
});
