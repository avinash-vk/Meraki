import axios from 'axios';

const BASE_URL = 'http://bottlecap.tech/api';

const Test = async () => {
  let output = '';
  await axios(`${BASE_URL}`)
    .then((resp) => {
      console.log('HERE');
      output = resp;
    })
    .catch((err) => {
      output = err;
    });
  return output;
};

const CreateStory = async (data) => {
  // tags = [ carpenter, job needed ]
  const {uid, imageUrl, title, target, content, tags} = data;
  const {name, age, gender, contact, location} = target;
  const {lat, long} = location;

  let output = '';

  const json = JSON.stringify(data);

  await axios
    .post(`${BASE_URL}/story`, json, {
      headers: {
        // Overwrite Axios's automatically set Content-Type
        'Content-Type': 'application/json',
      },
    })
    .then((resp) => {
      output = resp;
    })
    .catch((err) => console.log('error occured'));

  return output;
};

const GetStory = async () => {
  let output = '';

  await axios(`${BASE_URL}/story`)
    .then((resp) => {
      output = resp;
    })
    .catch((err) => console.log('error occured'));

  return output;
};

export default {
  Test,
  CreateStory,
  GetStory,
};
