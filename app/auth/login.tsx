import { View, Text, TouchableOpacity } from 'react-native';
import { Button } from '~/components/Button';
import { Input } from '~/components/auth/Input';
import { useRouter } from 'expo-router';

export default function Login() {
  const router = useRouter();

  const handleLogin = () => {
    router.replace('/(tabs)');
  };

  return (
    <View className="flex-1 bg-white p-6">
      <Text className="mb-8 text-center text-2xl font-bold">Entrar</Text>
      
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
        title="Entrar"
        onPress={handleLogin}
        icon="sign-in"
        className="mt-4 self-center w-3/5 rounded-md bg-green-500 p-1.5"
      />

      <View className="mt-6 flex-row justify-between items-center">
        <TouchableOpacity onPress={() => router.push('/auth/register')}>
          <Text className="text-green-500 text-lg">Criar conta</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/auth/forgot-password')}>
          <Text className="text-green-500 text-lg">Esqueci minha senha</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}