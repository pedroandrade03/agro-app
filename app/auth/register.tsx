import { View, Text, TouchableOpacity } from 'react-native';
import { Button } from '~/components/Button';
import { Input } from '~/components/auth/Input';
import { useRouter } from 'expo-router';

export default function Register() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-white p-6">
      <Text className="mb-8 text-center text-2xl font-bold">Criar Conta</Text>
      
      <Input
        placeholder="Nome completo"
      />

      <Input
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Input
        placeholder="Senha"
        secureTextEntry
      />

      <Button 
        title="Registrar"
        onPress={() => router.replace('/auth/login')}
        icon="user-plus"
        className="mt-4 self-center w-3/5 rounded-md bg-green-500 p-1.5"
      />

      <TouchableOpacity 
        onPress={() => router.back()}
        className="items-center">
        <Text className="mt-4 text-green-500 text-lg">Voltar para login</Text>
      </TouchableOpacity>
    </View>
  );
}