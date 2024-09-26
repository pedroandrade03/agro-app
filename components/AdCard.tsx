import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

interface AdCardProps {
  id: number;
  image: string;
  title: string;
  price: string;
  description: string;
}

export default function AdCard({ id, image, title, price, description }: AdCardProps) {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('details', { id });
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View className="mb-4 flex flex-row overflow-hidden rounded-lg border border-gray-300 shadow-sm">
        <Image source={{ uri: image }} className="h-48 w-48 object-cover" />
        <View className="flex-1 p-4">
          <Text className="mb-1 text-xl font-bold">{title}</Text>
          <Text className="mb-1 text-xl font-semibold text-green-600">{price}</Text>
          <Text className="text-gray-700" numberOfLines={3}>
            {description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
