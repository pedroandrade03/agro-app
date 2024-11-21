import React from 'react';
import { TextInput, TextInputProps } from 'react-native';

export const Input = (props: TextInputProps) => (
  <TextInput
    {...props}
    className="mb-4 w-full rounded-lg border border-gray-300 bg-white p-4 text-lg"
  />
);