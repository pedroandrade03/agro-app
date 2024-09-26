import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';

import { ScreenContent } from '~/components/ScreenContent';

export default function DetailsScreen() {
  const route = useRoute();
  const { id } = route.params as { id: number };

  // Aqui você pode buscar os detalhes do anúncio usando o ID

  return (
    <>
      <ScreenContent path="app/details.tsx" title="Detalhes" />
      <View className="p-4">
        <Text className="text-2xl font-bold">Detalhes do anúncio {id}</Text>
        <Text className="text-gray-700">Aqui você pode exibir os detalhes do anúncio</Text>
      </View>
    </>
  );
}
