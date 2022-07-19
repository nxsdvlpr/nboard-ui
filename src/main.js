import Vue from "vue";
import App from "@/App.vue";
import HexaUi from "@/index.js";

import "@/assets/css/main.pcss";

Vue.use(HexaUi, {});

Vue.config.productionTip = false;

new Vue({ render: (createElement) => createElement(App) }).$mount("#app");
