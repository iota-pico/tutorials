const path = require("path");

module.exports = {
    entry: path.join(__dirname, "my-app.ts"),
    mode: "development",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    devtool: "none",
    output: {
        path: __dirname,
        filename: "my-app.bundle.js",
    }
};
