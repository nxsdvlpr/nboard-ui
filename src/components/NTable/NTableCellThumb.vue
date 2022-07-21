<template>
  <div class="flex items-center">
    <div class="mr-3">
      <NThumbnail :src="src" />
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import NThumbnail from "@/components/NThumbnail.vue";

export default {
  name: "NTableCellThumb",
  components: {
    NThumbnail,
  },
  props: {
    src: {
      type: String,
      default: null,
    },
  },
};
</script>
