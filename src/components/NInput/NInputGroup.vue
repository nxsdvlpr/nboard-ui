<template>
  <div class="n-input-group relative mb-1 md:mb-2">
    <label v-if="label" class="text-gray-base uppercase label tracking-">
      {{ label }}
    </label>
    <div class="mt-1 pb-6">
      <slot />
    </div>
    <div
      v-if="feedback"
      class="n-input-group-feedback absolute bottom-0 text-xs text-danger"
    >
      {{ feedback }}
    </div>
  </div>
</template>

<script>
export default {
  name: "NInputGroup",
  props: {
    label: {
      type: String,
      default: undefined,
    },
    feedback: {
      type: String,
      default: undefined,
    },
  },
};
</script>
