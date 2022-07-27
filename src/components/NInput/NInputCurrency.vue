<template>
  <NInput
    v-bind="inputProps"
    ref="inputRef"
    type="tel"
    :prefix="showPrefix ? 'Rp.' : undefined"
    :value="model"
    @input="onInput"
    @change="onChange"
    @keypress="onKeypress"
  />
</template>

<script>
import NInput from "@/components/NInput/NInput.vue";

export default {
  name: "NInputCurrency",
  components: {
    NInput,
  },

  props: {
    id: {
      type: String,
      default: undefined,
    },
    name: {
      type: String,
      default: undefined,
    },
    readonly: {
      type: Boolean,
      default: undefined,
    },
    autocomplete: {
      type: Boolean,
      default: undefined,
    },
    autofocus: {
      type: Boolean,
      default: undefined,
    },
    required: {
      type: Boolean,
      default: undefined,
    },
    placeholder: {
      type: [String, Number],
      default: undefined,
    },
    disabled: {
      type: Boolean,
      default: undefined,
    },
    value: {
      default: undefined,
      type: [Number, String],
    },
    showPrefix: {
      type: Boolean,
      default: true,
    },
    options: {
      default: () => ({
        locale: "id-ID",
        currency: "IDR",
        autoDecimalDigits: true,
        hideGroupingSeparatorOnFocus: false,
        hideNegligibleDecimalDigitsOnFocus: false,
        exportValueAsInteger: true,
        precision: 0,
        currencyDisplay: "hidden",
      }),
      type: Object,
    },
  },
  computed: {
    model() {
      return this.formatCurrency(this.value);
    },
    inputProps() {
      const props = { ...{}, ...this.$props };
      delete props.value;
      delete props.showPrefix;
      delete props.options;
      return props;
    },
  },
  methods: {
    formatCurrency(number) {
      if (this.isEmpty(number)) {
        return number;
      }

      const currency = Intl.NumberFormat("id-ID").format(number);
      if (!currency) {
        return "0";
      }
      return currency;
    },
    unformatCurrency(number) {
      if (this.isEmpty(number)) {
        return number;
      }

      if (typeof number === "string") {
        const cleanNumber = number.replace(/\D/g, "");
        return cleanNumber || "0";
      }

      return String(number).replace(/\D/g, "");
    },
    isEmpty(value) {
      if (value === null || value === "") {
        return true;
      }

      return false;
    },
    onInput(value, event) {
      this.$emit("input", this.unformatCurrency(value), event);
    },
    onChange(value, event) {
      this.$emit("change", this.unformatCurrency(value), event);
    },
    onKeypress(value, event) {
      event = event ? event : window.event;
      if (String(this.value).length >= 12) {
        return event.preventDefault();
      }

      let charCode = event.which ? event.which : event.keyCode;

      if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode != 9) {
        return event.preventDefault();
      }

      this.$emit("keypress", value, event);

      return true;
    },
  },
};
</script>
