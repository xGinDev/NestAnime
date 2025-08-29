"use client";
import React, { useState, useEffect } from "react";
import { useApi } from "@/hooks/useApi";
import { useParams } from "next/navigation";
import EpisodeList from "@/components/Episode/EpisodeList";

export default function SeeAnime() {
  const params = useParams();
  const rawSlug = params.slug as string;

  const { data, loading, error } = useApi<{
    data: {
      title: string;
      number: number;
      servers: Array<{ name: string; download: string; embed: string }>;
    };
  }>(`/anime/episode/${rawSlug}`);

  const [server, setServer] = useState<{
    name: string;
    download: string;
    embed: string;
  } | null>(null);

  const [currentEmbed, setCurrentEmbed] = useState<string | null>(null);

  useEffect(() => {
    if (data?.data.servers && data.data.servers.length > 0) {
      setServer(data.data.servers[0]);
      setCurrentEmbed(data.data.servers[0].embed);
    }
  }, [data]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Video */}
        <div className="flex-1 flex flex-col gap-2">
          {currentEmbed && (
            <iframe
              src={currentEmbed}
              className="w-full aspect-video lg:h-[500px]"
              allow="fullscreen; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          )}
          <div className="flex flex-row gap-2">
            {data?.data.servers.map((srv) => (
              <button
                key={srv.name}
                className="bg-[#eaeae0] text-[#6D1D7D] px-4 py-2 rounded cursor-pointer hover:bg-[#6D1D7D] hover:text-white transition-colors duration-300"
                onClick={() => {
                  setServer(srv);
                  setCurrentEmbed(srv.embed);
                }}
              >
                {srv.name}
              </button>
            ))}
          </div>
        </div>

        {/* Lista de episodios */}
        <EpisodeList
          slug={rawSlug}
        />
      </div>

      {/* Info */}
      <div className="flex flex-col lg:flex-row justify-between items-start mt-8">
        <div>
          <h1 className="text-4xl font-bold uppercase mb-4 text-[#eaeae0] border-l-4 border-[#6D1D7D] pl-2">
            {data?.data.title}
          </h1>
          <p className="text-xl mb-4 text-[#eaeae0]">
            Episodio: <b className="text-[#6D1D7D]">{data?.data.number}</b>
          </p>
        </div>
      </div>
    </div>
  );
}
