export const changeStateSidebar = (state) => {
  state.activeSidebar = !state.activeSidebar;
};

export const setEntries = (state, entries) => {
  console.log(...entries);

  state.entries = [...state.entries, ...entries];
  console.log(state.entries);
  state.isLoading = false;
};

export const updateEntry = (state, entry) => {
  //
  const idx = state.entries.map((e) => e.id).indexOf(entry.id);

  state.entries[idx] = entry;
};

export const addEntry = (/* state */) => {};
