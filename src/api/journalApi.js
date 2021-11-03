import axios from 'axios';

const journalApi = axios.create({
  baseURL: 'https://journal-vue-33740-default-rtdb.firebaseio.com',
});

export default journalApi;
