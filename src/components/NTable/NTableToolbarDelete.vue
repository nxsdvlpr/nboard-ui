<template>
  <div
    class="flex items-center justify-between w-full delete gap-x-8 md:w-auto n-table-toolbar-delete"
  >
    <div class="flex items-center gap-x-2">
      <div>
        <NIcon
          icon="delete"
          class="inline-block sm text-danger icon-sm hover:text-danger-dark"
        />
      </div>
      <div class="text-sm">Delete {{ selectedRowCount }} rows?</div>
    </div>
    <div class="flex gap-x-2">
      <div>
        <NButton class="danger" @click="onShowModal">DELETE</NButton>
      </div>
      <div>
        <NButton class="outline" @click="onCancel">CANCEL</NButton>
      </div>
    </div>
    <Portal to="n-table-layout">
      <NModal
        header="Confirm Delete!"
        :showing="isShowModal"
        @close="onHideModal"
        :showClose="true"
        :backgroundClose="true"
      >
        <p>Are you sure want to delete these records?</p>
        <div class="text-right">
          <NButton class="danger" @click="onDelete">DELETE</NButton>
          <NButton class="outline" @click="onCancel">CANCEL</NButton>
        </div>
      </NModal>
    </Portal>
  </div>
</template>

<script>
import NModal from "@/components/NModal.vue";
import NIcon from "@/components/NIcon/NIcon.vue";
import NButton from "@/components/NButton.vue";
import { Portal } from "portal-vue";

export default {
  name: "NTableToolbarDelete",
  components: {
    Portal,
    NModal,
    NIcon,
    NButton,
  },
  props: {
    selectedRowCount: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      isShowModal: false,
    };
  },
  methods: {
    onShowModal() {
      this.isShowModal = true;
    },
    onHideModal() {
      this.isShowModal = false;
    },
    onDelete(event) {
      this.onHideModal();
      this.$emit("on-delete", event);
    },
    onCancel(event) {
      this.onHideModal();
      this.$emit("on-delete-cancel", event);
    },
  },
};
</script>
