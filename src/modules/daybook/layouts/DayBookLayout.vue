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

export default {
  components: {
    Navbar: defineAsyncComponent(() =>
      import('@/modules/daybook/components/Navbar')
    ),
    EntryList: defineAsyncComponent(() =>
      import('@/modules/daybook/components/EntryList')
    ),
  },
};
</script>
