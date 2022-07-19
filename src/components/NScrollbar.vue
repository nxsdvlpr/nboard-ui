<template>
  <div ref="osTargetRef" class="os-host">
    <div class="os-resize-observer-host"></div>
    <div class="os-padding">
      <div class="os-viewport">
        <div class="os-content">
          <slot />
        </div>
      </div>
    </div>
    <div class="os-scrollbar os-scrollbar-horizontal">
      <div class="os-scrollbar-track">
        <div class="os-scrollbar-handle"></div>
      </div>
    </div>
    <div class="os-scrollbar os-scrollbar-vertical">
      <div class="os-scrollbar-track">
        <div class="os-scrollbar-handle"></div>
      </div>
    </div>
    <div class="os-scrollbar-corner"></div>
  </div>
</template>

<script>
import OverlayScrollbars from "overlayscrollbars";
import "overlayscrollbars/css/OverlayScrollbars.css";

export default {
  inheritAttrs: false,
  name: "NScrollbar",
  expose: ["osInstance", "osTarget"],
  data() {
    return {
      osInstanceValue: null,
    };
  },
  mounted() {
    this.osInstanceValue = OverlayScrollbars(
      this.$refs.osTargetRef,
      this.options || {},
      this.extensions
    );
  },
  beforeUnmount() {
    if (OverlayScrollbars.valid(this.osInstanceValue)) {
      this.osInstanceValue.destroy();
      this.osInstanceValue = null;
    }
  },
  watch: {
    options: function (currOptions) {
      if (OverlayScrollbars.valid(this.osInstanceValue)) {
        this.osInstanceValue.options(currOptions);
      }
    },
  },
  computed: {
    computedOptions() {
      return this.options;
    },
  },
  methods: {
    osInstance() {
      return this.osInstanceValue;
    },
    osTarget() {
      return this.$refs.osTargetRef || null;
    },
  },
  props: {
    options: {
      type: Object,
    },
    extensions: {
      type: [String, Array, Object],
    },
  },
};
</script>
