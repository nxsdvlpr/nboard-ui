import Vue from "vue";
import App from "@/App.vue";
import NboardUi from "@/index.js";

import "@/assets/css/main.pcss";

Vue.use(NboardUi, {});

Vue.config.productionTip = false;

new Vue({ render: (createElement) => createElement(App) }).$mount("#app");
