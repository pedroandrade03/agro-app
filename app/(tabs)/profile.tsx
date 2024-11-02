import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';

interface Product {
  id: string;
  title: string;
  price: string;
}

const ProfilePage = () => {
  const user = {
    username: 'usuario124',
    email: 'enzo@gmail.com',
    profileImage: 'https://placehold.co/200x200',
    products: [
      { id: '1', title: 'Produto 1', price: 'R$ 50,00' },
      { id: '2', title: 'Produto 2', price: 'R$ 100,00' },
      { id: '3', title: 'Produto 3', price: 'R$ 200,00' },
    ] as Product[],
  };

  const handlePasswordChange = () => {
    console.log('Alterar senha');
  };

  const renderItem = ({ item }: { item: Product }) => (
    <View className="mb-2 flex-row justify-between rounded-lg bg-green-100 p-4">
      <Text className="font-medium text-green-500">{item.title}</Text>
      <Text className="text-green-500">{item.price}</Text>
    </View>
  );

  return (
    <View className="flex-1 bg-white p-4">
      <View className="mb-4 items-center">
        <Image source={{ uri: user.profileImage }} className="mb-4 h-24 w-24 rounded-full" />
        <Text className="mb-2 text-2xl font-bold">{user.username}</Text>
      </View>
      <View>
        <Text className="mb-2 text-lg font-bold">{user.email}</Text>
        <TouchableOpacity onPress={handlePasswordChange}>
          <Text className="items-end underline">Alterar Senha</Text>
        </TouchableOpacity>
      </View>

      <Text className="mb-4 text-lg font-semibold text-green-500">Produtos Publicados</Text>
      <FlatList data={user.products} keyExtractor={(item) => item.id} renderItem={renderItem} />
    </View>
  );
};

export default ProfilePage;
