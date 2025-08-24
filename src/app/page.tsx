"use client";
import { getApi } from "@/hooks/getTopAnimes";
import Card from "@/components/Globals/Card";

export default function Home() {
  const { data, loading, error } = getApi<{ data: Array<{ title: string, cover: string, number: number }> }>(
    "/list/latest-episodes"
  );

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold uppercase mb-2 text-[#eaeae0]">Últimos episodios</h1>
      <div>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data?.data.map((anime) => (
            <Card key={anime.title} title={anime.title} image={anime.cover} episodes={anime.number} />
          ))}
        </ul>
      </div>
    </div>
  );
}
