import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";
import CadastroScreen from "./screens/CadastroScreen";
import Layout from "./components/Layout";


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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
