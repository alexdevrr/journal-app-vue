import state from './state';
import * as mutations from './mutations';

export const dayBookStore = {
  namespaced: true,
  state,
  mutations,
};
