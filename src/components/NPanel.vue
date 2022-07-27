<template>
  <div class="n-panel">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "NPanel",
};
</script>

<style scoped>
.n-panel {
  &:last-child {
    @apply mb-8 md:mb-14;
  }
}
</style>
