<template>
  <div @click.stop>
    <NDropdown class="top-right md:bottom-right">
      <template #trigger="{ mousedownHandler, focusHandler, blurHandler }">
        <NIconButton
          :class="button.class"
          :icon="button.icon"
          @mousedown="mousedownHandler"
          @focus="focusHandler"
          @blur="blurHandler"
        />
      </template>
      <div slot-scope="{ blurHandler }">
        <div role="menu" @click="blurHandler">
          <slot />
        </div>
      </div>
    </NDropdown>
  </div>
</template>

<script>
export default {
  name: "NTableCellActionDropdown",
  props: {
    button: {
      type: Object,
      default() {
        return {
          icon: "arrow-right-square",
          class: "text-primary hover:text-primary-dark",
        };
      },
    },
  },
};
</script>
