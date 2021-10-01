<template>
  <div class="relative inline-block text-left">
    <div>
      <button
        type="button"
        class="
          inline-flex
          justify-center
          w-full
          rounded-md
          px-4
          py-2
          bg-white
          text-sm
          font-medium
        "
        id="menu-button"
        @click="open = !open"
      >
        {{ selected }}
        <!-- Heroicon name: solid/chevron-down -->
        <svg
          class="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>

    <div
      class="
        origin-top-right
        absolute
        left-0
        mt-2
        w-56
        rounded-md
        bg-white
        ring-1 ring-black ring-opacity-5
        focus:outline-none
      "
      :class="{ hidden: !open }"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabindex="-1"
    >
      <div class="py-1" role="none">
        <slot v-bind:close="onClose">
          <a
            v-for="(item, index) in items"
            :key="index"
            href="#"
            class="text-gray-700 block px-4 py-2 text-sm"
            role="menuitem"
            tabindex="-1"
            id="menu-item-2"
            @click="onSelect(item)"
            >{{ item[displayField] }}</a
          >
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Select",

  props: {
    value: {
      type: [Object, String],
      default: "",
    },

    items: {
      type: Array,
      default: () => [],
    },

    displayField: {
      type: String,
      default: "",
    },

    placeholder: {
      type: String,
      default: "Select",
    },
  },

  data() {
    return {
      open: false,
      selected: this.placeholder,
    };
  },

  watch: {
    value(newValue) {
      let selected;

      if (newValue) {
        selected = this.displayField ? newValue[this.displayField] : newValue;
      } else {
        selected = this.placeholder;
      }
      this.selected = selected;
    },
  },

  methods: {
    onClose() {
      this.open = false;
    },

    onSelect(item) {
      this.open = false;
      this.selected = item[this.displayField];
      this.$emit("input", item);
      this.$emit("change", item);
    },
  },
};
</script>

<style lang="scss" scoped></style>
