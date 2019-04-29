module.exports = {
    target: "web",
    mode: "development",
    entry: "./src/index.tsx",
    output: {
        path: null,
        filename: "bundle.js"
    },
    module: null,
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    devServer: {
        contentBase: "./",
        port: 3000
    }
};
