import '../global.css';

import { Stack } from 'expo-router';

export const unstable_settings = {
  initialRouteName: '(tabs)/login',
};

export default function RootLayout() {
  return (
    <Stack initialRouteName="auth/login">
      <Stack.Screen 
        name="auth" 
        options={{ 
          headerShown: false,
        }} 
      />
      <Stack.Screen 
        name="(tabs)" 
        options={{ 
          headerShown: false,
        }} 
      />
      <Stack.Screen 
        name="modal" 
        options={{ presentation: 'modal' }} 
      />
      <Stack.Screen 
        name="details" 
        options={{ title: 'Detalhes do Produto' }} 
      />
    </Stack>
  );
}
