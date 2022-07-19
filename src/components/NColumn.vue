<script>
export default {
  name: "NColumn",
  props: {
    gap: {
      type: String,
      default: "6",
    },
  },
  render(h) {
    const children = [];

    // Filter only valid slots
    // Need this to fix bug for undefined slot at static generated site
    const slotContent = this.$slots.default.filter(
      (slot) => typeof slot.tag !== "undefined"
    );

    // Minimum column number is 2.
    // If only 1 slot child found, automatically create empty div for second column
    if (slotContent.length === 1) {
      slotContent.push("");
    }

    for (const child of slotContent) {
      children.push(
        h("div", { class: "w-full md:w-1/" + slotContent.length }, [child])
      );
    }

    return h("div", { class: "block md:flex md:gap-x-" + this.gap }, children);
  },
};
</script>
