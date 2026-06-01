import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TYPE_COLORS } from "../constants/typeColors";

type Props = {
  type: string;
};

export function TypeBadge({ type }: Props) {
  return (
    <View style={[styles.badge, { backgroundColor: TYPE_COLORS[type] ?? "#888" }]}>
      <Text style={styles.label}>{type}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    borderRadius: 6,
    paddingHorizontal: 9,
    paddingVertical: 3,
  },
  label: {
    color: "#FFF",
    fontSize: 10,
    fontWeight: "700",
    textTransform: "capitalize",
  },
});
