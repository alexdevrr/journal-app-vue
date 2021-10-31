<template>
  <div class="d-flex h-100 w-100 justify-content-center">
    <p class="align-self-center fs-1 text-primary">
      Nothing selected
    </p>

    <Fab />
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
export default {
  components: {
    Fab: defineAsyncComponent(() => import('../components/Fab.vue')),
  },
};
</script>
