import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';

import Home from './src/pages/Home';
import Notificacoes from './src/pages/Notificacoes';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false
        }}
        />
         <Stack.Screen
        name="Notificacoes"
        component={Notificacoes}
        // options={{
        //   title: 'Notificacoes',
        //   headerStyle: {
        //     backgroundColor: '#FCAC17'
        //   }
        // }}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
