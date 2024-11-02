import FontAwesome from '@expo/vector-icons/FontAwesome';
import React, { useState } from 'react';
import { Pressable, Text, View, Modal, FlatList, ActivityIndicator } from 'react-native';

import { useFetchCities } from '~/hooks/useFetchCities';

interface HeaderButtonProps {
  onSelectCity?: (city: string) => void;
}

export const HeaderButton = ({ onSelectCity }: HeaderButtonProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { cities, loading, error } = useFetchCities();

  const handleCityPress = (cityName: string) => {
    if (onSelectCity) {
      onSelectCity(cityName);
    }
    setModalVisible(false);
  };

  return (
    <View>
      <Pressable onPress={() => setModalVisible(true)} className="mr-4">
        {({ pressed }) => (
          <FontAwesome
            name="filter"
            size={25}
            color="gray"
            style={{ opacity: pressed ? 0.5 : 1 }}
            className="mr-4"
          />
        )}
      </Pressable>

      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View className="flex-1 items-center justify-center bg-white bg-opacity-50">
          <View className="max-h-4/5 w-4/5 rounded-lg bg-white p-5">
            <Text className="mb-3 text-center text-xl font-bold">Selecione uma Cidade</Text>
            {loading ? (
              <ActivityIndicator size="large" color="#22c55e" />
            ) : error ? (
              <Text className="my-3 text-center text-red-500">
                Erro ao carregar cidades: {error}
              </Text>
            ) : (
              <FlatList
                data={cities}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <Pressable
                    onPress={() => handleCityPress(item.name)}
                    className="border-b border-gray-300 py-2">
                    <Text className="text-center text-lg">{item.name}</Text>
                  </Pressable>
                )}
              />
            )}
            <Pressable onPress={() => setModalVisible(false)} className="mt-4 items-center py-2">
              <Text className="text-lg text-blue-500">Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};
