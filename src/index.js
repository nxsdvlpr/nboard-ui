import { VTooltip, VClosePopper } from "floating-vue";
import "./assets/css/tooltip.pcss";

import * as components from "./components.js";

const entries = Object.entries(components);

const NboardUi = {
  install(Vue) {
    Vue.directive("tooltip", VTooltip);
    Vue.directive("close-popper", VClosePopper);

    entries.forEach(([componentName, component]) => {
      Vue.component(componentName, component);
    });
  },
};

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(NboardUi);
}

export default NboardUi;
