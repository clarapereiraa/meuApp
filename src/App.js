import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";
import CadastroScreen from "./screens/CadastroScreen";
import Layout from "./components/Layout";
import EventosScreen from "./screens/EventosScreen";
import CadastroEventoScreen from "./screens/CadastroEventoScreen";


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={() => (
            <Layout>
              <LoginScreen />
            </Layout>
          )}
        />
        <Stack.Screen
          name="Cadastro"
          component={() => (
            <Layout>
              <CadastroScreen />
            </Layout>
          )}
        />
        <Stack.Screen name="EventosScreen">
          {() => (
            <Layout>
              <EventosScreen/>
            </Layout>
          )}
          
        </Stack.Screen>
        <Stack.Screen name="CadastroEventoScreen">
          {() => (
            <Layout>
              <CadastroEventoScreen/>
            </Layout>
          )}
          
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
