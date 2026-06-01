import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export function LoadingView() {
  return (
    <View style={styles.screen}>
      <View style={styles.ball}>
        <ActivityIndicator size="large" color="#FFF" />
      </View>
      <Text style={styles.title}>Pokédex</Text>
      <Text style={styles.subtitle}>Buscando pokémons...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F0F0F0",
    gap: 16,
  },
  ball: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: "#E63900",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },
  title: {
    fontSize: 26,
    fontWeight: "900",
    color: "#1A1A2E",
  },
  subtitle: {
    fontSize: 13,
    color: "#999",
  },
});
