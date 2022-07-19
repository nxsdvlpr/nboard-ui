<template>
  <div class="form-group n-form-input">
    <label for="title">{{ label }}</label>
    <NInput id="title" type="text" />
  </div>
</template>

<script>
import NInput from "@/components/NInput/NInput.vue";

export default {
  components: {
    NInput,
  },
  name: "NFormInput",
  props: {
    label: { type: String, required: true },
  },
};
</script>
