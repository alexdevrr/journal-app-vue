<template>
  <div class="container-fluid">
    <h1>Hello world from Home</h1>
    <button class="btn btn-primary" @click="goToDay">primary</button>
    <button class="btn btn-secondary">secondary</button>
    <button class="btn btn-success">success</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToDay() {
      this.$router.push({ name: 'no-entry' });
    },
  },
};
</script>
