import { View, Text, TouchableOpacity } from 'react-native';
import { Button } from '~/components/Button';
import { Input } from '~/components/auth/Input';
import { useRouter } from 'expo-router';

export default function ResetPassword() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-white p-6">
      <Text className="mb-8 text-center text-2xl font-bold">Nova Senha</Text>
      
      <Input
        placeholder="Nova senha"
        secureTextEntry
      />

      <Input
        placeholder="Confirmar nova senha"
        secureTextEntry
      />

      <Button 
        title="Alterar senha"
        onPress={() => router.replace('/auth/login')}
        icon="lock"
        className="mt-4 self-center w-3/5 rounded-md bg-green-500 p-1.5"
      />

      <TouchableOpacity 
        onPress={() => router.back()}
        className="items-center">
        <Text className="mt-4 text-green-500 text-lg">Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
