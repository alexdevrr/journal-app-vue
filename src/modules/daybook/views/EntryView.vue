<template>
  <div class="mx-2">
    <div class="d-flex justify-content-between my-4">
      <!-- date -->
      <div class="d-flex gap-2">
        <span class="text-primary fw-bold">15</span>
        <span class="fw-bold">Julio, 2021</span>
        <span class="fw-light">Martes</span>
      </div>

      <!-- buttons -->
      <div class="d-flex mx-2 ">
        <button class="btn btn-danger mx-2">
          <p class="d-none d-md-flex ">Delete</p>
          <i class="fa fa-trash-alt"></i>
        </button>

        <button class="btn btn-info">
          <p class="d-none d-md-flex ">Upload image</p>
          <i class="fa fa-upload"></i>
        </button>
      </div>
    </div>
  </div>
  <!-- Fin contenedor -->

  <!-- TextArea -->
  <div class="d-flex flex-column h-75 mx-2">
    <hr />
    <textarea placeholder="What happended today?" class="w-100"></textarea>
  </div>

  <!-- Image -->
  <img
    src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80"
    alt="img-entry"
    class="img-thumnail"
  />

  <Fab icon="fa-save" />
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  components: {
    Fab: defineAsyncComponent(() =>
      import('@/modules/daybook/components/Fab.vue')
    ),
  },
};
</script>

<style lang="scss" scoped>
span {
  font-size: 1.5rem;
}

button {
  display: flex;
  color: #fff;
  display: flex;
  height: 45px;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
}

textarea {
  font-size: 20px;
  border: none;
  height: 100%;

  &:focus {
    outline: none;
  }
}

p {
  margin-bottom: unset;
}

img {
  position: fixed;
  width: 200px;
  bottom: 150px;
  right: 20px;
  box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}
</style>
