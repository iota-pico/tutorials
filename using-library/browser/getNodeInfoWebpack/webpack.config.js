const path = require("path");

module.exports = {
    entry: path.join(__dirname, "getNodeInfo.js"),
    mode: "development",
    devtool: "inline-source-maps",
    output: {
        path: __dirname,
        filename: "getNodeInfo.bundle.js",
    }
};
