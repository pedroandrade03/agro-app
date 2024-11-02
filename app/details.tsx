import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, Linking, ScrollView, ActivityIndicator } from 'react-native';

import { Button } from '~/components/Button';
import { useFetchAdDetails } from '~/hooks/useFetchAdDetails';

export default function DetailsScreen() {
  const route = useRoute();
  const { id } = route.params as { id: number };
  const { adDetails, loading, error } = useFetchAdDetails(id);

  const handleWhatsApp = () => {
    if (!adDetails) return;
    const message = `Olá! Tenho interesse no produto: ${adDetails.title} pelo valor de ${adDetails.price}.`;
    const url = `https://wa.me/5581999999999?text=${encodeURIComponent(message)}`;
    Linking.openURL(url);
  };

  const handleGoogleMaps = () => {
    if (!adDetails) return;
    const url = `https://www.google.com/maps/dir/?api=1&destination=${adDetails.latitude},${adDetails.longitude}`;
    Linking.openURL(url);
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#22c55e" />
        <Text>Carregando detalhes...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Erro ao carregar os detalhes: {error}</Text>
      </View>
    );
  }

  if (!adDetails) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Nenhum detalhe disponível para esse anúncio.</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }} className="bg-white">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Image source={{ uri: adDetails.image }} style={{ height: 300, width: '100%' }} />
        <View style={{ padding: 16 }}>
          <Text className="mb-2 text-4xl font-bold text-black">{adDetails.title}</Text>
          <Text className="mb-3 text-2xl font-semibold text-green-600">{adDetails.price}</Text>
          <Text className="mb-4 text-xl text-gray-700">{adDetails.description}</Text>

          <Button
            title="Chamar no Zap!"
            onPress={handleWhatsApp}
            className="rounded-md bg-green-500 p-2 text-2xl text-white"
            icon="whatsapp"
          />

          <Button
            title="Abrir no Google Maps"
            onPress={handleGoogleMaps}
            className="mt-2 rounded-md bg-blue-500 p-2 text-2xl text-white"
            icon="map-marker"
          />
        </View>
      </ScrollView>
    </View>
  );
}
