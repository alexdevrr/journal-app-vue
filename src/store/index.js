import { createStore } from 'vuex';
import journal from '../modules/daybook/store/journal';

// store
const store = createStore({
  modules: {
    journal,
  },
});

export default store;
