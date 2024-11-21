// hooks/useSubmitProduct.ts
import { useState } from 'react';
import { Alert } from 'react-native';
import { submitProduct } from '../services/productService';
import { FormData } from '../Tipos/FormData';
import { convertToSnakeCase } from '../utils/convertToSnakeCase';

export const useSubmitProduct = (): {
  handleSubmit: (formData: FormData) => Promise<void>;
  isLoading: boolean;
} => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    setIsLoading(true);
    try {
      const dataInSnakeCase = convertToSnakeCase(formData); // Conversão para snake_case
      await submitProduct(dataInSnakeCase);
      Alert.alert('Success', 'Product added successfully!');
    } catch (error) {
      Alert.alert('Error', 'Failed to add product. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return { handleSubmit, isLoading };
};
