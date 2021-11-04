import journalApi from '@/api/journalApi';

export const loadEntries = async ({ commit }) => {
  const { data } = await journalApi.get('/entries.json');

  const entries = [];
  for (let id of Object.keys(data)) {
    entries.push({
      id,
      ...data[id],
    });
  }

  commit('setEntries', entries);
};

// El parámetro se recibe así
export const updateEntry = async ({ commit }, entry) => {
  const { date, text, picture } = entry;
  const dataToSave = { date, text, picture };

  await journalApi.put(`/entries/${entry.id}.json`, dataToSave);

  // se desesctructura para eviar que js lo pase por referencia (solo por precaución)
  commit('updateEntry', { ...entry });
};

export const createEntry = async (/*{ commit } */) => {};
