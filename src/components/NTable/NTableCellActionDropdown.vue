<template>
  <div @click.stop>
    <NDropdown class="bottom-right md:bottom-right">
      <template #toggler>
        <NIconButton :class="button.class" :icon="button.icon" />
      </template>
      <div>
        <div role="menu">
          <slot />
        </div>
      </div>
    </NDropdown>
  </div>
</template>

<script>
import NDropdown from "@/components/NDropdown.vue";
import NIconButton from "@/components/NIcon/NIconButton.vue";

export default {
  name: "NTableCellActionDropdown",
  components: {
    NDropdown,
    NIconButton,
  },
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
