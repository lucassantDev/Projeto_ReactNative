import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TelaInicial from './TelaInicial';
import TelaCadastro from './TelaCadastro';
import TelaOpção from './TelaOpção';
import Opcao from './componenteOpção';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Tela Inicial'>
        <Stack.Screen name='Tela Inicial' component={TelaInicial} options={{headerShown: false}}/>
        <Stack.Screen name='Tela Cadastro' component={TelaCadastro} options={{headerShown: false}}/>
        <Stack.Screen name='Tela Opção' component={TelaOpção} options={{headerShown: false}}/>
        <Stack.Screen name='Componente Opção' component={Opcao} options={{headerShown: false}}/>


      </Stack.Navigator>
    </NavigationContainer>
  );
}
