import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo</Text>

      {/* Botão para Login */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Login")} // Navegar para a tela de Login
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Botão para Cadastro */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Cadastro")} // Navegar para a tela de Cadastro
      >
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "white", // Cor do fundo
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 50, // Espaço entre o título e os botões
  },
  button: {
    backgroundColor: "#F44336", // Cor vermelha para os botões
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    width: "80%", // Tamanho do botão
    marginVertical: 10, // Espaçamento entre os botões
  },
  buttonText: {
    color: "white", // Cor do texto no botão
    fontSize: 18,
    fontWeight: "bold",
  },
});
