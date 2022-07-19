<template>
  <div class="flex items-center">
    <div v-if="src" class="mr-3 md:hidden"><NThumbnail :src="src" /></div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NTableCellThumb",
  props: {
    src: {
      type: String,
      default: null,
    },
  },
};
</script>
