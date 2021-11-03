export const getEntriesByTerm = (state) => (term = '') => {
  if (term.length === 0) return state.entries;

  return state.entries.filter((entry) =>
    entry.text.toLowerCase().includes(term.toLocaleLowerCase())
  );
};

export const getEntryById = (state) => (id = '') => {
  // return state.entries.filter((entry) => entry.id !== id);

  const entry = state.entries.find((entry) => entry.id === id);

  if (!entry) return;

  // Se hace esto para que entry no pase por referencia
  // Si lo pasamos por referencia se hacen modificaciones no deseadas
  return { ...entry };
};
