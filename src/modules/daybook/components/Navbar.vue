<template>
  <nav class="navbar bg-dark">
    <div class="container d-flex flex-md-row">
      <div class="d-flex d-md-none">
        <button
          class="btn btn-outline-primary my-3 my-md-0"
          href="#"
          @click="changeStateSidebar"
        >
          <!-- Condition icon menu -->
          <i v-if="!activeSidebar" class="fas fa-calendar"></i>
          <i v-else class="far fa-calendar-times"></i>
        </button>
      </div>

      <!-- Container left -->
      <div class="d-flex align-items-center">
        <!-- Button menu -->

        <a class="navbar-brand link-primary" href="#">
          <img src="@/assets/logo.png" alt="vue-logo" height="40" />
          Home
        </a>
      </div>

      <!-- Container right -->
      <div class="d-flex">
        <button class="btn btn-outline-info my-3 my-md-0" href="#">
          <i class="fa fa-sign-out-alt"></i>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState('daybook', ['activeSidebar']),
  },

  methods: {
    changeStateSidebar() {
      this.$store.commit('daybook/changeStateSidebar');
    },
  },
};
</script>
