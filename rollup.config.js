import vue from "rollup-plugin-vue2";
import postcss from "rollup-plugin-postcss";
import alias from "@rollup/plugin-alias";
import json from "@rollup/plugin-json";

import pkg from "./package.json";

const globals = {
  "vue-client-only": "vue-client-only",
  "@kangc/v-md-editor": "v-md-editor",
  "@kangc/v-md-editor/lib/style/base-editor.css": "v-md-editor-base-editor.css",
  "@kangc/v-md-editor/lib/theme/vuepress.js": "v-md-editor-vuepress.js",
  "@kangc/v-md-editor/lib/theme/style/vuepress.css": "v-md-editor-vuepress.css",
  prismjs: "prismjs",
  "chart.js": "chart.js",
  "hex-to-rgba": "hex-to-rgba",
  "prismjs/components/prism-json": "prism-json",
  "@kangc/v-md-editor/lib/lang/en-US": "prismjs-lang-en-US",
  vuedraggable: "vuedraggable",
  overlayscrollbars: "overlayscrollbars",
  "overlayscrollbars/css/OverlayScrollbars.css": "overlayscrollbars.css",
  "vue-upload-component": "vue-upload-component",
  "vuejs-datepicker": "vuejs-datepicker",
  "fuse.js": "fuse.js",
  "vue-select/dist/vue-select.css": "v-select.css",
  "vue-select": "v-select",
  "vue-js-toggle-button": "vue-js-toggle-button",
  "@johmun/vue-tags-input": "vue-tags-input",
  "@vuelidate/core": "vuelidate-core",
  "@vuelidate/validators": "vuelidate-validators",
  "vue-good-table": "vue-good-table",
  "floating-vue": "floating-vue",
  "vue-clickaway": "vue-clickaway",
  "vue-chartjs": "vue-chartjs",
  lodash: "lodash",
  vue: "Vue",
};

const postcssPlugins = [
  require("postcss-simple-vars"),
  require("postcss-import"),
  require("tailwindcss/nesting"),
  require("tailwindcss"),
  require("autoprefixer"),
];

const vueConfig = {
  preprocessStyles: true,
  defaultLang: {
    style: "postcss",
  },
  css: false,
  needMap: false,
  template: {
    compilerOptions: {
      isCustomElement: (tag) => tag.includes("-"),
    },
  },
};

const config = [
  {
    input: "src/assets/css/main.pcss",
    output: {
      sourcemap: true,
      dir: "dist",
    },
    plugins: [
      postcss({
        extract: "style.css",
        plugins: postcssPlugins,
        config: { path: "postcss.config.js" },
      }),
    ],
  },
  {
    input: "src/index.js",
    output: [
      {
        sourcemap: true,
        format: "cjs",
        file: pkg.main,
        exports: "named",
        name: "nboard-ui",
        globals,
      },
      {
        sourcemap: true,
        format: "esm",
        file: pkg.module,
        exports: "named",
        name: "nboard-ui",
        globals,
      },
    ],
    // output: {
    //   sourcemap: true,
    //   dir: "dist",
    //   entryFileNames: "index.js",
    //   format: "umd",
    //   exports: "named",
    //   globals,
    // },
    external: Object.keys(globals),
    plugins: [
      json(),
      alias({
        entries: [{ find: "@", replacement: __dirname + "/src" }],
      }),
      postcss({
        config: { path: "postcss.config.js" },
        plugins: postcssPlugins,
      }),
      vue(vueConfig),
    ],
  },
  {
    input: "src/components.js",
    external: Object.keys(globals),
    output: {
      sourcemap: true,
      format: "esm",
      file: "dist/components.esm.js",
      exports: "named",
      name: "nboard-ui",
      globals,
    },
    plugins: [
      alias({
        entries: [{ find: "@", replacement: __dirname + "/src" }],
      }),
      postcss({
        config: { path: "postcss.config.js" },
        plugins: postcssPlugins,
      }),
      vue(vueConfig),
    ],
  },
  {
    input: "src/composables.js",
    external: Object.keys(globals),
    output: {
      sourcemap: true,
      format: "esm",
      file: "dist/composables.esm.js",
      exports: "named",
      name: "nboard-ui",
      globals,
    },
    plugins: [
      alias({
        entries: [{ find: "@", replacement: __dirname + "/src" }],
      }),
      vue(vueConfig),
    ],
  },
  // {
  //   input: "src/components.js",
  //   external: Object.keys(globals),
  //   output: {
  //     sourcemap: true,
  //     dir: "dist",
  //     entryFileNames: "components.js",
  //     format: "umd",
  //
  //     exports: "named",
  //     globals,
  //   },

  //   plugins: [
  //     vue(vueConfig),
  //     postcss({
  //       plugins: postcssPlugins,
  //     }),
  //   ],
  // },
];

// const components = {
//   "n-overlay-scrollbar": "NScrollbar",
//   "n-button": "NButton",
//   "n-input": "NInput",
// };

// const componentsConfig = Object.keys(components)
//   .map((component) => {
//     const componentName = components[component];

//     return {
//       input: `src/components/${componentName}.vue`,
//       external: Object.keys(globals),
//       output: {
//         sourcemap: true,
//         dir: "dist/components",
//         entryFileNames: `${componentName}.js`,
//         format: "umd",
//         name: componentName,
//         exports: "named",
//         globals,
//       },
//       plugins: [
//         vue(vueConfig),
//         postcss({
//           plugins: postcssPlugins,
//         }),
//       ],
//     };
//   })
//   .flat();

export default config.concat([]);
