const docsUrl = require("../docsUrl");

module.exports = {
  meta: {
    type: "problem",
    docs: {
      url: docsUrl("no-json-parse-without-try-catch"),
    },
    schema: [],
  },
  create: function (context) {
    return {
      MemberExpression(node) {
        if (node.property.name !== "parse") {
          return;
        }

        if (!isInsideTryCatch(node)) {
          context.report({
            node: node,
            message: "cannot call json.parse outside of try/catch",
          });
        }
      },
    };
  },
};

function isInsideTryCatch(node) {
  if (node.type === "TryStatement") {
    return true;
  } else if (!node.parent) {
    return false;
  }

  return isInsideTryCatch(node.parent);
}
