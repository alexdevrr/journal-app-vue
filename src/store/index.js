import { createStore } from 'vuex';
import { dayBookStore } from './daybook';

// store
export default createStore({
  modules: {
    daybook: dayBookStore,
  },
});
