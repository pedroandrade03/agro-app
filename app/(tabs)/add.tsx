import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';
import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
  Switch,
} from 'react-native';
import { useSubmitProduct } from '~/hooks/useSubmitProduct';

type FormData = {
  title: string;
  description: string;
  price: string;
  tradeOption: boolean;
  whatsapp: string;
  isService: boolean;
  workingHours: string;
  cep: string;
  street: string;
  neighborhood: string;
  number: string;
  complement: string;
};

const formatCurrency = (value: string) => {
  const numericValue = value.replace(/\D/g, '');
  const formattedValue = (Number(numericValue) / 100).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  return formattedValue;
};

const formatWhatsApp = (value: string) => {
  const numericValue = value.replace(/\D/g, '');
  if (numericValue.length <= 2) return numericValue;
  if (numericValue.length <= 3) return `(${numericValue.slice(0, 2)}) ${numericValue.slice(2)}`;
  if (numericValue.length <= 7)
    return `(${numericValue.slice(0, 2)}) ${numericValue.slice(2, 3)} ${numericValue.slice(3)}`;
  return `(${numericValue.slice(0, 2)}) ${numericValue.slice(2, 3)} ${numericValue.slice(3, 7)}-${numericValue.slice(7, 11)}`;
};

const formatCEP = (value: string) => {
  const numericValue = value.replace(/\D/g, '');
  if (numericValue.length <= 5) return numericValue;
  return `${numericValue.slice(0, 5)}-${numericValue.slice(5, 8)}`;
};

export default function AddProduct() {
  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      title: '',
      description: '',
      price: '',
      tradeOption: false,
      whatsapp: '',
      isService: false,
      workingHours: '',
      // cep: '',
      // street: '',
      // neighborhood: '',
      // number: '',
      // complement: '',
    },
    mode: 'onChange',
  });
  const [image, setImage] = useState<string | null>(null);
  const { handleSubmit: submitProductForm, isLoading } = useSubmitProduct();

  const onSubmit = (data: FormData) => {
    console.log(data);
    submitProductForm(data);
  };

  const isService = watch('isService');
  const cep = watch('cep');

  useEffect(() => {
    if (cep && cep.length === 9) {
      axios
        .get(`https://viacep.com.br/ws/${cep.replace('-', '')}/json/`)
        .then((response) => {
          if (!response.data.erro) {
            setValue('street', response.data.logradouro);
            setValue('neighborhood', response.data.bairro);
          }
        })
        .catch((error) => console.error('Error fetching address:', error));
    }
  }, [cep, setValue]);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <>
      <ScrollView className="flex-1 bg-gray-100 p-6">
        <TouchableOpacity
          onPress={pickImage}
          className="mb-4 h-48 w-full items-center justify-center rounded-lg border-2 border-gray-300 bg-white">
          {image ? (
            <Image source={{ uri: image }} className="h-full w-full rounded-lg" />
          ) : (
            // Portugues
            <Text className="text-gray-500">Enviar Imagem do Produto</Text>
          )}
        </TouchableOpacity>

        <Controller
          control={control}
          rules={{
            required: 'Title is required',
            minLength: { value: 3, message: 'Title must be at least 3 characters long' },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              className="mb-2 rounded-md border border-gray-300 bg-white p-2"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Título"
            />
          )}
          name="title"
        />
        {errors.title && <Text className="mb-2 text-red-500">{errors.title.message}</Text>}

        <Controller
          control={control}
          rules={{
            required: 'Description is required',
            minLength: { value: 10, message: 'Description must be at least 10 characters long' },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              className="mb-2 rounded-md border border-gray-300 bg-white p-2"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Descrição"
              multiline
              numberOfLines={4}
            />
          )}
          name="description"
        />
        {errors.description && (
          <Text className="mb-2 text-red-500">{errors.description.message}</Text>
        )}

        <Controller
          control={control}
          rules={{ required: 'Price is required' }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              className="mb-2 rounded-md border border-gray-300 bg-white p-2"
              onChangeText={(text) => onChange(formatCurrency(text))}
              value={value}
              placeholder="Preço"
              keyboardType="numeric"
            />
          )}
          name="price"
        />
        {errors.price && <Text className="mb-2 text-red-500">{errors.price.message}</Text>}

        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <View className="mb-2 flex-row items-center justify-between">
              <Text>Aceito Troca</Text>
              <Switch value={value} onValueChange={onChange} />
            </View>
          )}
          name="tradeOption"
        />

        <Controller
          control={control}
          rules={{
            required: 'WhatsApp number is required',
            validate: (value) => value.length === 16 || 'Invalid WhatsApp number',
          }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              className="mb-2 rounded-md border border-gray-300 bg-white p-2"
              onChangeText={(text) => onChange(formatWhatsApp(text))}
              value={value}
              placeholder="WhatsApp"
              keyboardType="phone-pad"
            />
          )}
          name="whatsapp"
        />
        {errors.whatsapp && <Text className="mb-2 text-red-500">{errors.whatsapp.message}</Text>}

        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <View className="mb-2 flex-row items-center justify-between">
              <Text>Horário de atendimento</Text>
              <Switch value={value} onValueChange={onChange} />
            </View>
          )}
          name="isService"
        />

        {isService && (
          <Controller
            control={control}
            rules={{
              required: 'Working hours are required for services',
              pattern: {
                value: /^([0-1]?[0-9]|2[0-3]):[0-5][0-9] - ([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/,
                message: 'Invalid format. Use HH:MM - HH:MM',
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                className="mb-2 rounded-md border border-gray-300 bg-white p-2"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Horário de Atendimento (ex: 09:00 - 17:00)"
              />
            )}
            name="workingHours"
          />
        )}
        {isService && errors.workingHours && (
          <Text className="mb-2 text-red-500">{errors.workingHours.message}</Text>
        )}

        <Controller
          control={control}
          rules={{
            required: 'CEP is required',
            pattern: { value: /^\d{5}-\d{3}$/, message: 'Invalid CEP format' },
          }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              className="mb-2 rounded-md border border-gray-300 bg-white p-2"
              onChangeText={(text) => onChange(formatCEP(text))}
              value={value}
              placeholder="CEP"
              keyboardType="numeric"
            />
          )}
          name="cep"
        />
        {errors.cep && <Text className="mb-2 text-red-500">{errors.cep.message}</Text>}

        <Controller
          control={control}
          rules={{ required: 'Street is required' }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              className="mb-2 rounded-md border border-gray-300 bg-white p-2"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Rua"
            />
          )}
          name="street"
        />
        {errors.street && <Text className="mb-2 text-red-500">{errors.street.message}</Text>}

        <Controller
          control={control}
          rules={{ required: 'Neighborhood is required' }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              className="mb-2 rounded-md border border-gray-300 bg-white p-2"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Bairro"
            />
          )}
          name="neighborhood"
        />
        {errors.neighborhood && (
          <Text className="mb-2 text-red-500">{errors.neighborhood.message}</Text>
        )}

        <Controller
          control={control}
          rules={{ required: 'Number is required' }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              className="mb-2 rounded-md border border-gray-300 bg-white p-2"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Número"
              keyboardType="numeric"
            />
          )}
          name="number"
        />
        {errors.number && <Text className="mb-2 text-red-500">{errors.number.message}</Text>}

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              className="mb-2 rounded-md border border-gray-300 bg-white p-2"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Complemento (Opcional)"
            />
          )}
          name="complement"
        />

        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          className="mt-4 items-center rounded-md bg-green-500 p-4"
          disabled={isLoading}>
          <Text className="font-bold text-white">
            {isLoading ? 'Enviando...' : 'Adicionar Produto'}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
}
