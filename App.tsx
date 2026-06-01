import { StatusBar } from "expo-status-bar";
import React, { useCallback } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { ErrorView } from "./requisicao/components/ErrorView";
import { LoadingView } from "./requisicao/components/LoadingView";
import { PokemonCard } from "./requisicao/components/PokemonCard";
import { usePokemons } from "./requisicao/hooks/usePokemons";
import type { Pokemon } from "./requisicao/types/pokemon";

export default function App() {
  const { state, retry } = usePokemons();

  const renderItem = useCallback(
    ({ item }: { item: Pokemon }) => <PokemonCard pokemon={item} />,
    []
  );

  const keyExtractor = useCallback((item: Pokemon) => String(item.id), []);

  if (state.status === "idle" || state.status === "loading") {
    return <LoadingView />;
  }

  if (state.status === "error") {
    return <ErrorView message={state.message} onRetry={retry} />;
  }

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="dark" />
      <View style={styles.header}>
        <Text style={styles.title}>Pokédex</Text>
        <Text style={styles.subtitle}>{state.data.length} pokémons</Text>
      </View>
      <FlatList
        data={state.data}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#F0F0F0",
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 14,
  },
  title: {
    fontSize: 30,
    fontWeight: "900",
    color: "#1A1A2E",
  },
  subtitle: {
    fontSize: 12,
    color: "#999",
    marginTop: 2,
  },
  list: {
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
});
