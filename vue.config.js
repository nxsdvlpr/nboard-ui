const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    externals: {
      vue: "Vue",
    },
    resolve: {
      alias: {
        vue$: path.resolve(__dirname, "node_modules/vue/dist/vue.esm.js"),
      },
      symlinks: false, // because the related errors on try to use the `yarn link` in a vue-cli project
    },
    output: {
      libraryExport: "default",
    },
  },
});
