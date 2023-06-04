import axios from 'axios';

const API_KEY = "bdcc179edca60ac2505ff94508eca47d";
const HTTP = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    'Authorization': 'Bearer ' + API_KEY
  }
});

export default HTTP;
