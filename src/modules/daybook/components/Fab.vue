<template>
  <button class="btn btn-dark">
    <i class="fa fa-2x" :class="icon"></i>
  </button>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: 'fa-plus',
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  border-radius: 100px;
  bottom: 20px;
  color: white;
  height: 60px;
  position: absolute;
  right: 30px;
  transition-duration: 300ms;
  transition-property: color;
  min-width: 60px;
  min-height: 60px;

  &:hover {
    color: #42b983;
  }
}
</style>
