import { useCallback, useEffect, useRef, useState } from "react";
import { loadPokemons } from "../services/pokeApi";
import type { Pokemon, RemoteState } from "../types/pokemon";

export function usePokemons() {
  const [state, setState] = useState<RemoteState<Pokemon[]>>({ status: "idle" });
  const abortRef = useRef<AbortController | null>(null);

  const load = useCallback(() => {
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setState({ status: "loading" });

    loadPokemons(controller.signal)
      .then((data) => setState({ status: "success", data }))
      .catch((err: unknown) => {
        if (err instanceof Error && err.name === "AbortError") return;
        setState({ status: "error", message: "Não foi possível carregar os dados." });
      });
  }, []);

  useEffect(() => {
    load();
    return () => abortRef.current?.abort();
  }, [load]);

  return { state, retry: load };
}
