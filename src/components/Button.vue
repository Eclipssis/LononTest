<template>
  <button
    type="submit"
    class="
      button
      inline-flex
      justify-center
      border border-transparent
      shadow-sm
      font-bold
      rounded-md
    "
    :class="[buttonType[variant], buttonSize[size], size]"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",

  props: {
    variant: {
      type: String,
      default: "emerald",
    },

    size: {
      type: String,
      default: "default",
    },
  },

  data() {
    return {
      buttonType: {
        pink: `
          text-white
          bg-pink-600
          hover:bg-pink-700
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-800
        `,
        emerald: `
          text-white
          bg-green-400
          hover:bg-green-500
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600
        `,
        white: `
          text-black
          bg-white
          border
          border-black
          hover:bg-gray-100
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-grey-200
        `,
      },

      buttonSize: {
        default: `
          py-2
          px-6
          text-md
        `,
        small: `py-1 px-3 text-sm`,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.button {
  min-width: 130px;
  &.small {
    min-width: 80px;
  }
}

.button + .button {
  margin-left: 20px;
}
</style>
