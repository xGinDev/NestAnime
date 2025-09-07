"use client";
import { Breadcrumbs } from "@/components/global/Breadcrumb";
import { useApi } from "@/hooks/useApi";
import { useParams } from "next/navigation";

export default function Episode() {
  const { slug } = useParams();

  const { data, loading, error } = useApi<{
    data: {
      title: string;
      number: number;
      servers: Array<{ name: string; download: string; embed: string }>;
    };
  }>(`/anime/episode/${slug}`);

  return (
    <>
      <Breadcrumbs
        link={`/anime/${slug}`}
        title={data?.data.title}
        current={`Episodio ${data?.data.number}`}
      />
      <div>Episode {slug}</div>
    </>
  );
}
