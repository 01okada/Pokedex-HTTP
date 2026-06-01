export type PokemonListEntry = {
  name: string;
  url: string;
};

export type PokemonRaw = {
  id: number;
  name: string;
  sprites: { front_default: string | null };
  types: Array<{ slot: number; type: { name: string } }>;
};

export type Pokemon = {
  id: number;
  name: string;
  sprite: string | null;
  types: string[];
};

export type RemoteState<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; message: string };
