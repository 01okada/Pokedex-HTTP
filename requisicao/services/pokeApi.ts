import { API_BASE, POKEMON_LIMIT } from "../constants/api";
import type { Pokemon, PokemonListEntry, PokemonRaw } from "../types/pokemon";

async function fetchJson<T>(url: string, signal: AbortSignal): Promise<T> {
  const res = await fetch(url, { signal });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

function mapPokemon(raw: PokemonRaw): Pokemon {
  return {
    id: raw.id,
    name: raw.name.charAt(0).toUpperCase() + raw.name.slice(1),
    sprite: raw.sprites.front_default,
    types: raw.types.sort((a, b) => a.slot - b.slot).map((t) => t.type.name),
  };
}

export async function loadPokemons(signal: AbortSignal): Promise<Pokemon[]> {
  const list = await fetchJson<{ results: PokemonListEntry[] }>(
    `${API_BASE}/pokemon?limit=${POKEMON_LIMIT}`,
    signal
  );

  return Promise.all(
    list.results.map(async (entry) => {
      const raw = await fetchJson<PokemonRaw>(entry.url, signal);
      return mapPokemon(raw);
    })
  );
}
