<template>
  <div class="n-table-empty-state">
    <div v-if="!isLoading">This table has no record</div>
    <div v-else class="loading-spinner">
      <NSpin />
    </div>
  </div>
</template>

<script>
import NSpin from "@/components/NSpin.vue";

export default {
  name: "NTableEmptyState",
  components: {
    NSpin,
  },
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.n-table-empty-state {
  @apply w-full text-center;

  .loading-spinner {
    @apply w-full flex items-center justify-center;

    height: 240px;
  }
}
</style>
