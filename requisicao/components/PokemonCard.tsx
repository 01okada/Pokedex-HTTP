import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TYPE_COLORS } from "../constants/typeColors";
import type { Pokemon } from "../types/pokemon";
import { TypeBadge } from "./TypeBadge";

type Props = {
  pokemon: Pokemon;
};

export function PokemonCard({ pokemon }: Props) {
  const accentColor = TYPE_COLORS[pokemon.types[0]] ?? "#888";
  const paddedId = String(pokemon.id).padStart(3, "0");

  return (
    <View style={[styles.card, { borderLeftColor: accentColor }]}>
      <Text style={styles.watermark}>#{paddedId}</Text>

      {pokemon.sprite ? (
        <Image
          source={{ uri: pokemon.sprite }}
          style={styles.sprite}
          accessibilityLabel={`Sprite de ${pokemon.name}`}
        />
      ) : (
        <View style={[styles.sprite, styles.spriteFallback]} />
      )}

      <View style={styles.info}>
        <Text style={styles.number}>#{paddedId}</Text>
        <Text style={styles.name}>{pokemon.name}</Text>
        <View style={styles.badges}>
          {pokemon.types.map((type) => (
            <TypeBadge key={type} type={type} />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 16,
    borderLeftWidth: 5,
    marginBottom: 10,
    paddingVertical: 12,
    paddingRight: 16,
    paddingLeft: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    overflow: "hidden",
  },
  watermark: {
    position: "absolute",
    right: 10,
    bottom: -10,
    fontSize: 56,
    fontWeight: "900",
    color: "rgba(0,0,0,0.04)",
  },
  sprite: {
    width: 88,
    height: 88,
  },
  spriteFallback: {
    backgroundColor: "#F0F0F0",
    borderRadius: 44,
  },
  info: {
    flex: 1,
    marginLeft: 8,
  },
  number: {
    fontSize: 11,
    fontWeight: "600",
    color: "#BBBBC0",
    marginBottom: 2,
  },
  name: {
    fontSize: 17,
    fontWeight: "700",
    color: "#1A1A2E",
    marginBottom: 8,
  },
  badges: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
  },
});
