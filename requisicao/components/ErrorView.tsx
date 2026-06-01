import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  message: string;
  onRetry: () => void;
};

export function ErrorView({ message, onRetry }: Props) {
  return (
    <View style={styles.screen}>
      <View style={styles.iconWrap}>
        <Text style={styles.icon}>!</Text>
      </View>
      <Text style={styles.title}>Algo deu errado</Text>
      <Text style={styles.message}>{message}</Text>
      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
        onPress={onRetry}
      >
        <Text style={styles.buttonLabel}>Tentar novamente</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F0F0F0",
    paddingHorizontal: 40,
    gap: 12,
  },
  iconWrap: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#FFEDED",
    borderWidth: 2,
    borderColor: "#E63900",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 4,
  },
  icon: {
    fontSize: 28,
    fontWeight: "900",
    color: "#E63900",
    lineHeight: 32,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1A1A2E",
  },
  message: {
    fontSize: 13,
    color: "#888",
    textAlign: "center",
    lineHeight: 20,
  },
  button: {
    marginTop: 8,
    paddingHorizontal: 28,
    paddingVertical: 12,
    backgroundColor: "#E63900",
    borderRadius: 12,
  },
  buttonPressed: {
    opacity: 0.75,
  },
  buttonLabel: {
    color: "#FFF",
    fontWeight: "700",
    fontSize: 14,
  },
});
