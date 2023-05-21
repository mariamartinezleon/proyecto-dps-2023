import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export default function Logo() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CDCSA</Text>
      <Image style={styles.logo} source={require("../../assets/logo.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
  },
});
