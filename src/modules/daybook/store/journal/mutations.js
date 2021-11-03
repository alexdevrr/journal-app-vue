export const changeStateSidebar = (state) => {
  state.activeSidebar = !state.activeSidebar;
};

export const setEntries = (state, entries) => {
  state.entries = [...state.entries, ...entries];
  state.isLoading = false;
};

export const updateEntry = (/* state */) => {};

export const addEntry = (/* state */) => {};
