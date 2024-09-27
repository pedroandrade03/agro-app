import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, ActivityIndicator } from 'react-native';

import AdCard from '~/components/AdCard';

export default function Home() {
  const [ads, setAds] = useState<Ads[]>([]);
  const [loading, setLoading] = useState(true);

  interface Ads {
    id: number;
    image: string;
    title: string;
    price: string;
    description: string;
  }

  useEffect(() => {
    // Simulando fetch de dados, você pode substituir por uma chamada de API real
    const fetchAds = async () => {
      // Simular uma requisição com timeout
      setTimeout(() => {
        setAds([
          {
            id: 1,
            image: 'https://via.placeholder.com/300',
            title: 'Caixa com 10 ovos caipiras',
            price: 'R$ 8,00',
            description:
              'Ovos frescos de galinhas criadas soltas. Ideal para uma alimentação saudável e saborosa.',
          },
          {
            id: 2,
            image: 'https://via.placeholder.com/300',
            title: 'Alface orgânico - Pé',
            price: 'R$ 3,00',
            description:
              'Alface orgânico, cultivado sem o uso de agrotóxicos. Fresquinho, direto do campo para sua mesa.',
          },
          {
            id: 3,
            image: 'https://via.placeholder.com/300',
            title: 'Leite fresco - 1 litro',
            price: 'R$ 5,00',
            description:
              'Leite fresco, ordenhado no dia. Sem conservantes, ideal para consumo natural ou para fazer queijos e iogurtes.',
          },
          {
            id: 4,
            image: 'https://via.placeholder.com/300',
            title: 'Queijo Minas artesanal',
            price: 'R$ 25,00',
            description:
              'Queijo Minas frescal, produzido artesanalmente com leite de vacas pastoreadas. Sabor único e textura suave.',
          },
          {
            id: 5,
            image: 'https://via.placeholder.com/300',
            title: 'Cesta de legumes - 5kg',
            price: 'R$ 20,00',
            description:
              'Cesta com 5kg de legumes variados da estação, direto do pequeno agricultor. Ideal para refeições saudáveis.',
          },
        ]);
        setLoading(false);
      }, 10);
    };

    fetchAds();
  }, []);

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" color="#22c55e" />
        <Text>Carregando anúncios...</Text>
      </View>
    );
  }

  return (
    <FlatList
      className="bg-white"
      contentContainerStyle={{ padding: 16 }}
      data={ads}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <AdCard
          id={item.id}
          image={item.image}
          title={item.title}
          price={item.price}
          description={item.description}
        />
      )}
      ListEmptyComponent={<Text>Nenhum anúncio disponível</Text>}
    />
  );
}
