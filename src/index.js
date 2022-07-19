import * as components from "./components.js";
const entries = Object.entries(components);
import { VTooltip, VPopover, VClosePopover } from "v-tooltip";

const HexaUi = {
  install(Vue) {
    Vue.directive("n-tooltip", VTooltip);
    Vue.directive("n-close-popover", VClosePopover);
    Vue.component("n-popover", VPopover);

    entries.forEach(([componentName, component]) => {
      Vue.component(componentName, component);
    });
  },
};

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(HexaUi);
}

export default HexaUi;
