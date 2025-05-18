"use client"; // Para Next.js App Router
import { useState, useEffect } from "react";

export function useJikanFetch<T>(endpoint: string) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_HOST;
        const response = await fetch(`${baseUrl}${endpoint}`);

        if (!response.ok) throw new Error("Error al cargar los datos");

        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error desconocido");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]); // Se ejecuta cuando `endpoint` cambia

  return { data, loading, error };
}
