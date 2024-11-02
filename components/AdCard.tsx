import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { Ad } from '~/types/Ad';

export default function AdCard({ id, image, title, price, description, city }: Ad) {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('details', { id });
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View className="mb-4 flex flex-row overflow-hidden rounded-lg border border-gray-300 shadow-sm">
        <Image source={{ uri: image }} className="h-48 w-48 object-cover" />
        <View className="flex-1 p-4">
          <Text className="mb-1 text-xl font-bold" numberOfLines={1}>
            {title}
          </Text>
          <Text className="mb-1 text-xl font-semibold text-green-600">{price}</Text>
          <Text className="text-gray-700" numberOfLines={2}>
            {description}
          </Text>
          <View className="mt-2 flex flex-row items-center">
            <FontAwesome name="map-marker" size={16} color="#888888" />
            <Text className="ml-2 text-gray-600">{city}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
