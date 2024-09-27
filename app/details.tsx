import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, Linking, ScrollView } from 'react-native';
import { Button } from '~/components/Button';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function DetailsScreen() {
  const route = useRoute();
  const { id } = route.params as { id: number };
  const { title, price, image, description, latitude, longitude } = {
    image: 'https://via.placeholder.com/300',
    title: 'Caixa com 10 ovos caipiras',
    price: 'R$ 8,00',
    description:
      'Ovos frescos de galinhas criadas soltas. Ideal para uma alimentação saudável e saborosa.',
    latitude: '-23.5505', // Coordenadas de exemplo
    longitude: '-46.6333',
  };

  const handleWhatsApp = () => {
    const message = `Olá! Tenho interesse no produto: ${title} pelo valor de ${price}.`;
    const url = `https://wa.me/5581999999999?text=${encodeURIComponent(message)}`;
    Linking.openURL(url);
  };

  const handleGoogleMaps = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
    Linking.openURL(url);
  };

  return (
    <View style={{ flex: 1 }} className="bg-white">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Image source={{ uri: image }} style={{ height: 300, width: '100%' }} />
        <View style={{ padding: 16 }}>
          <Text className="mb-2 text-4xl font-bold text-black">{title}</Text>
          <Text className="mb-3 text-2xl font-semibold text-green-600">{price}</Text>
          <Text className="mb-4 text-xl text-gray-700">{description}</Text>

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
