import axios from 'axios';

export const postRegister = async (url, body) => {
  let data, error;
  try {
    const response = await axios.post(url, body);
    data = response.data;
  } catch (err) {
    error = await err.response.data;
  }

  return {data, error};
};
