<template>
  <button class="btn btn-dark">
    <i class="fa fa-2x fa-plus"></i>
  </button>
</template>

<script>
export default {};
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
  width: 60px;

  &:hover {
    color: #42b983;
  }
}
</style>
