import axios from 'axios';

export const getCats = async () =>
  await axios
    .get('https://api.thecatapi.com/v1/images/search')
    .then(res => res.data);

export const getDogs = async () =>
  await axios
    .get('https://api.thedogapi.com/v1/images/search')
    .then(res => res.data);
