"use client";
import { getApi } from "@/hooks/getTopAnimes";
import { useParams } from "next/navigation";

export default function SeeAnime() {
  const params = useParams();
  const { data, loading, error } = getApi<{
    data: {
      title: string;
      number: number;
      servers: Array<{ name: string; download: string; embed: string }>;
    };
  }>(`/anime/episode/${params.slug}`);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  console.log(params);

  return (
    <div className="">
      <div className="flex flex-col gap-2">
        <iframe
          src={data?.data.servers[0].embed}
          className="w-full aspect-video lg:h-[500px]"
          allow="fullscreen; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </div>
      <h1 className="text-4xl font-bold uppercase mb-4 text-[#eaeae0]">
        {data?.data.title}
      </h1>
      <p className="text-xl mb-4 text-[#eaeae0]">
        Episodio: <b className="text-[#6D1D7D]">{data?.data.number}</b>
      </p>
    </div>
  );
}
