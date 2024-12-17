import axios from 'axios';
export const getData = async () => {};

export const getConvertData = async (current: string, convert: string) => {
  try {
    const response = await axios.get(`https://rest.coinapi.io/v1/exchangerate/${current}/${convert}`);
    return response.data;
  } catch (error) {
    console.error('Error convert:', error);
    throw error;
  }
};
