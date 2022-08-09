<template>
  <datepicker
    class="n-datepicker"
    v-bind="{ ...$props, ...$attrs }"
    input-class="w-full border outline-none text-gray-dark border-gray-light rounded focus:border-gray-400 focus:ring-0"
    v-on="$listeners"
  />
</template>

<script>
import Datepicker from "vuejs-datepicker";

export default {
  name: "NDatepicker",
  components: {
    Datepicker,
  },
  inheritAttrs: false,
};
</script>

<style scoped>
.n-datepicker {
  :deep() input {
    line-height: 2.5rem;
    box-shadow: inherit;
    /* -webkit-box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.04);
    box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.04); */

    &:disabled {
      @apply cursor-not-allowed;
      background-color: #f8f8f8;
    }
  }
}
</style>
