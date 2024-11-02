import React from 'react';
import { View, FlatList, Text, ActivityIndicator } from 'react-native';

import AdCard from '~/components/AdCard';
import { useFetchAds } from '~/hooks/useFetchAds';
import { Ad } from '~/types/Ad';

export default function Home() {
  const { ads, loading, error } = useFetchAds();

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" color="#22c55e" />
        <Text>Carregando anúncios...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text>Erro ao carregar anúncios: {error}</Text>
      </View>
    );
  }

  return (
    <FlatList
      className="bg-white"
      contentContainerStyle={{ padding: 16 }}
      data={ads}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }: { item: Ad }) => (
        <AdCard
          id={item.id}
          image={item.image}
          title={item.title}
          price={item.price}
          description={item.description}
          city={item.city}
        />
      )}
      ListEmptyComponent={<Text>Nenhum anúncio disponível</Text>}
    />
  );
}
