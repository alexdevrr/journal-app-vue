<template>
  <Navbar />

  <div class="d-flex">
    <div class="col-4">
      <EntryList />
    </div>

    <div class="col">
      <router-view />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core';
import { mapActions } from 'vuex';

export default {
  components: {
    Navbar: defineAsyncComponent(() =>
      import('@/modules/daybook/components/Navbar')
    ),
    EntryList: defineAsyncComponent(() =>
      import('@/modules/daybook/components/EntryList')
    ),
  },

  // Cuando sean actions se hace con methods no con computed
  methods: {
    ...mapActions('journal', ['loadEntries']),
  },

  created() {
    this.loadEntries();
  },
};
</script>

<style lang="scss" scoped>
.col {
  height: calc(100vh - 100px);
}

.col-4 {
  width: 33.33333333%;

  @media screen and (max-width: 576px) {
    width: 0%;
  }
}
</style>
