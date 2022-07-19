<template>
  <div class="flex justify-end py-4 text-right gap-x-3 n-form-action">
    <slot>
      <NButton class="outline" :disabled="loading" @click="$emit('discard')">
        Discard
      </NButton>
      <NButton class="primary" :disabled="loading" @click="$emit('save')">
        Save
      </NButton>
    </slot>
  </div>
</template>

<script>
import NButton from "@/components/NButton.vue";

export default {
  name: "NFormAction",
  components: {
    NButton,
  },
  props: {
    loading: { type: Boolean, default: false },
  },
};
</script>
