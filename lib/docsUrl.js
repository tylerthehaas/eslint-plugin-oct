const pkg = require("../package.json");

const repoUrl = "https://github.com/tylerthehaas/eslint-plugin-oct";

function docsUrl(ruleName, commitish = `v${pkg.version}`) {
  return `${repoUrl}/blob/${commitish}/docs/rules/${ruleName}.md`;
}

module.exports = docsUrl;
