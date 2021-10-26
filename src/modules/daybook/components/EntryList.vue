<template>
  <!-- <div :class="changeClassSidebar()"> -->
  <div :class="activeSidebar ? 'sidebar active' : 'sidebar'">
    <div class="px-2">
      <input type="text" class="form-control" placeholder="Search entry" />
    </div>

    <div class="entry-scrollarea px-2 pt-2">
      <Entry v-for="item in 100" :key="item"> </Entry>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import { mapState } from 'vuex';

export default {
  components: {
    Entry: defineAsyncComponent(() => import('./Entry.vue')),
  },

  // Sidebar cambia de styles dependiendo el estado del mismo
  computed: {
    ...mapState('daybook', ['activeSidebar']),
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  /* position: absolute; */
  height: calc(100vh - 100px);
  z-index: 10;
  top: 69px;

  left: -170%;
  /* left: 0; */
  bottom: 0;
  overflow-x: hidden;
  overflow-y: auto;
  padding-top: 1rem;
  transition: 700ms;

  @media screen and (max-width: 576px) {
    /* display: none; */
    top: 94px;
    position: absolute;
  }
}

.sidebar.active {
  left: 0 !important;
  transition: 350ms;

  @media screen and (max-width: 768px) {
    display: block;
  }
}
</style>
