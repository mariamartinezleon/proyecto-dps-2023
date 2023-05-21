import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import Logo from "./Logo";

export default function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    const fields = [name, email, password, confirmPassword];

    if (fields.some((field) => field.trim() === "")) {
      Alert.alert("Error", "Por favor, completa todos los campos");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Las contraseñas no coinciden");
      return;
    }

    try {
      fetch("https://proyecto-dps-api-ciclo-1-2023.loca.lt/api/users/doctor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
        }),
      }).then((response) => {
        if (response?.ok) {
          setName("");
          setEmail("");
          setPassword("");
          setConfirmPassword("");

          Alert.alert("Éxito", "La cuenta ha sido creada exitosamente");
        }
      });
    } catch {
      Alert.alert("Error", "Ocurrió un error al crear la cuenta");
    }
  };

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "#0641AD" }}>
      <Logo />
      <TextInput
        style={{
          height: 40,
          marginBottom: 10,
          borderColor: "white",
          borderWidth: 1,
          padding: 10,
        }}
        placeholder="Nombre"
        placeholderTextColor="white"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={{
          height: 40,
          marginBottom: 10,
          borderColor: "white",
          borderWidth: 1,
          padding: 10,
        }}
        placeholder="Correo"
        placeholderTextColor="white"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={{
          height: 40,
          marginBottom: 10,
          borderColor: "white",
          borderWidth: 1,
          padding: 10,
        }}
        placeholder="Contraseña"
        placeholderTextColor="white"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        style={{
          height: 40,
          marginBottom: 10,
          borderColor: "white",
          borderWidth: 1,
          padding: 10,
        }}
        placeholder="Repetir Contraseña"
        placeholderTextColor="white"
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
      />
      <Button title="Crear cuenta" onPress={handleRegister} />

      <TouchableOpacity onPress={() => {}}>
        <Text style={{ textAlign: "center", marginTop: 20 }}>
          ¿Ya tienes una cuenta?
        </Text>
      </TouchableOpacity>
    </View>
  );
}
