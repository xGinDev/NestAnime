"use client";
import { useJikanFetch } from "@/hooks/getTopAnimes";

export default function Home() {
  const { data, loading, error } = useJikanFetch("/top/anime");

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  console.log("data", data);

  return (
    <div>
      <h1>Top Anime</h1>
      <ul>
        {data?.data.map((anime: any) => (
          <li key={anime.mal_id}>{anime.title}</li>
        ))}
      </ul>
    </div>
  );
}
