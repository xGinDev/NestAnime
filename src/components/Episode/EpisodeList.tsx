"use client";
import React, { useState } from "react";
import { useApi } from "@/hooks/useApi";

interface Episode {
  number: number;
  slug: string;
  url: string;
}

interface Props {
  slug: string;
}

export default function EpisodeList({ slug }: Props) {
  console.log("sluggg", slug);

  const rawSlug = slug as string; // dr-stone-science-future-1
  const animeSlug = rawSlug.replace(/-\d+$/, ""); // dr-stone-science-future

  const { data, loading, error } = useApi<{
    data: { episodes: Episode[] };
  }>(`/anime/${animeSlug}`);

  const [page, setPage] = useState(0); // página actual (0 => Ep 1-24, 1 => Ep 25-48, etc.)
  const [episodesPerPage] = useState(24);

  if (loading) return <p className="text-white">Cargando episodios...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;
  if (!data?.data?.episodes) return null;

  const episodes = data.data.episodes;
  const totalPages = Math.ceil(episodes.length / episodesPerPage);

  // Slice para paginación
  const start = page * episodesPerPage;
  const end = start + episodesPerPage;
  const currentEpisodes = episodes.slice(start, end);

  return (
    <div className="w-full lg:w-1/3 bg-[#1a1a1a] p-4 rounded-lg max-h-[500px] overflow-y-auto">
      {/* Dropdown para seleccionar rango */}
      <select
        className="mb-4 w-full px-3 py-2 rounded bg-[#6D1D7D] text-white cursor-pointer"
        value={page}
        onChange={(e) => setPage(Number(e.target.value))}
      >
        {Array.from({ length: totalPages }, (_, i) => {
          const rangeStart = i * episodesPerPage + 1;
          const rangeEnd = Math.min((i + 1) * episodesPerPage, episodes.length);
          return (
            <option key={i} value={i}>
              Episodios {rangeStart} - {rangeEnd}
            </option>
          );
        })}
      </select>

      {/* Lista de episodios */}
      <div className="flex flex-col gap-2">
        {currentEpisodes.map((ep) => (
          <button
            key={ep.slug}
            className="bg-[#eaeae0] text-[#6D1D7D] px-4 py-2 rounded hover:bg-[#6D1D7D] hover:text-white transition-colors duration-300 text-left"
          >
            Ep {ep.number}
          </button>
        ))}
      </div>
    </div>
  );
}
