<template>
  <div class="flex-shrink-0 w-full md:w-auto n-table-toolbar-create">
    <NButton class="float-right primary" @click="onCreate">{{
      createOptions.label
    }}</NButton>
  </div>
</template>

<script>
import NButton from "@/components/NButton.vue";

export default {
  name: "NTableToolbarCreate",
  components: {
    NButton,
  },
  props: {
    createOptions: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onCreate() {
      this.$emit("on-create");
    },
  },
};
</script>
