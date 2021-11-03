<template>
  <!-- <div :class="changeClassSidebar()"> -->
  <div :class="activeSidebar ? 'sidebar active' : 'sidebar'">
    <div class="px-2">
      <input
        type="text"
        class="form-control"
        placeholder="Search entry"
        v-model="term"
      />
    </div>

    <div class="entry-scrollarea px-2 pt-2">
      <div v-if="isLoading">
        <Loading />
      </div>
      <Entry v-for="entry in entriesByTerm" :key="entry.id" :entry="entry">
      </Entry>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import { mapState, mapGetters } from 'vuex';

export default {
  components: {
    Entry: defineAsyncComponent(() => import('./Entry.vue')),
    Loading: defineAsyncComponent(() => import('../../shared/Loading.vue')),
  },

  // Sidebar cambia de styles dependiendo el estado del mismo
  computed: {
    ...mapState('journal', ['activeSidebar', 'isLoading']),
    ...mapGetters('journal', ['getEntriesByTerm']),
    entriesByTerm() {
      return this.getEntriesByTerm(this.term);
    },
  },

  data() {
    return {
      term: '',
    };
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  /* left: 0; */
  /* position: absolute; */
  bottom: 0;
  height: calc(100vh - 100px);
  left: -250%;
  overflow-x: hidden;
  overflow-y: auto;
  padding-top: 1rem;
  top: 69px;
  transition: 700ms;
  border-right: 1px solid black;
  z-index: 10;
  /* Para que no se trasnparente los demas componentes debajo de este */
  background-color: white;

  @media screen and (max-width: 576px) {
    /* display: none; */
    top: 94px;
    position: absolute;
    left: -300%;
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
