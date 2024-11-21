import api from '~/libs/api';

export const submitProduct = async (formData: FormData) => {
  try {
    console.log(formData);
    const response = await api.post('/products/', formData);
    return response.data;
  } catch (error) {
    throw new Error('Failed to submit product');
  }
};
