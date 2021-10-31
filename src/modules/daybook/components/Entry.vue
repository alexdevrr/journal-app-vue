<template>
  <div class="entry-container mb-3 pointer p-2" @click="example">
    <div class="entry-title d-flex gap-2">
      <span class="text-primary fw-bold">15</span>
      <span class="fw-bold">Julio, 2021</span>
      <span class="fw-light">Martes</span>
    </div>

    <div class="entry-description">
      <p class="pt-2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
        tempora.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    example() {
      this.$router.push({ name: 'entry', params: { id: 153 } });
    },
  },
};
</script>

<style lang="scss" scoped>
.entry-container {
  border-bottom: 0.5px solid #42b983;
  transition-property: background-color;
  transition-duration: 200ms;
  /* transition: 1s all ease-in; */

  &:hover {
    background-color: lighten($color: grey, $amount: 45);

    transition-duration: 200ms;
    /* transition: 1s all ease-in; */
  }
}

.entry-description {
  text-align: justify;

  p {
    /* font-size: 15px; */
    font-size: 25px;
  }
}
</style>
