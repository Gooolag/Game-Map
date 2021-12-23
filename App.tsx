import React, {FC} from 'react';
import { StyleSheet } from 'react-native';

//React Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import MainLayout from './Navigation/MainLayout';

interface Props {}

const Stack = createNativeStackNavigator();

const App: FC<Props> = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Dashboard">
        <Stack.Screen
          name="Dashboard"
          component={MainLayout}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
