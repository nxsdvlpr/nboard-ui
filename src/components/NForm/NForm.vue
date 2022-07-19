<template>
  <div class="n-form">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "NForm",
};
</script>

<style scoped>
.n-form {
  :deep() .n-form-section {
    @apply mt-8 md:mt-12;

    &:first-child {
      @apply mt-0;
    }
  }
}
</style>
