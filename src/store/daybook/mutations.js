export const increment = (state) => {
  state.count++;
};

export const changeStateSidebar = (state) => {
  state.activeSidebar = !state.activeSidebar;
};
