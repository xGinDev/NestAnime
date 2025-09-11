"use client";
import { ListEpisodes } from "@/components/episode/ListEpisodes";
import { Breadcrumbs } from "@/components/global/Breadcrumb";
import Title from "@/components/global/Title";
import { Skeleton } from "@/components/ui/skeleton";
import { useApi } from "@/hooks/useApi";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { MdFavoriteBorder } from "react-icons/md";

export default function Episode() {
  const { slug } = useParams();

  const { data, loading, error } = useApi<{
    data: {
      title: string;
      number: number;
      servers: Array<{ name: string; download: string; embed: string }>;
    };
  }>(`/anime/episode/${slug}`);

  const [server, setServer] = useState<{
    name: string;
    download: string;
    embed: string;
  } | null>(null);

  const [currentEmbed, setCurrentEmbed] = useState<string | null>(null);

  const handleMegaLinks = useCallback(() => {
    document.addEventListener("click", function (e) {
      const target = e.target as HTMLElement;
      const link = target.closest("a");

      if (link && link.href && link.href.includes("mega.nz")) {
        e.preventDefault();
        window.open(link.href, "_blank");
      }
    });
  }, []);

  useEffect(() => {
    if (data?.data.servers && data.data.servers.length > 0) {
      setServer(data.data.servers[0]);
      setCurrentEmbed(data.data.servers[0].embed);
    }

    handleMegaLinks();
  }, [data, handleMegaLinks]);

  const titleBreadcrumb = slug?.toString().replace(/-\d+$/, "");

  const {
    data: dateEpisode,
    loading: loadingEpisode,
    error: errorEpisode,
  } = useApi<{
    data: {
      episodes: Array<{ number: number; slug: string }>;
    };
  }>(`/anime/${titleBreadcrumb}`);

  if (loading) return <Skeleton className="h-40" />;

  if (error) return <p>Error al cargar los episodios</p>;

  return (
    <>
      <Breadcrumbs
        link={`/anime/${titleBreadcrumb}`}
        title={data?.data.title}
        current={`Episodio ${data?.data.number}`}
      />
      <div className="mt-4 lg:mt-6">
        <div className="flex flex-row gap-2 items-center">
          <Title title={data?.data.title} ep={data?.data.number} />
        </div>
        <div className="lg:flex lg:flex-row lg:gap-4">
          <div className="w-full">
            {currentEmbed && (
              <iframe
                src={currentEmbed}
                width="100%"
                height="500px"
                allow="fullscreen; encrypted-media; picture-in-picture"
                allowFullScreen
                className="h-[300px] lg:h-[500px]"
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
              />
            )}
            {/*             <div className="flex flex-row flex-wrap lg:flex-nowrap mt-2">
              {data?.data.servers.map((srv) => (
                <button
                  key={srv.name}
                  className={`w-auto lg:w-full px-4 py-2 text-center cursor-pointer hover:bg-[#6D1D7D] hover:text-white transition-colors duration-300 ${
                    server?.name === srv.name
                      ? "bg-[#6D1D7D] text-[#eaeae0]"
                      : "bg-[#eaeae0] text-[#6D1D7D]"
                  }`}
                  onClick={() => {
                    setServer(srv);
                    setCurrentEmbed(srv.embed);
                  }}
                >
                  {srv.name}
                </button>
              ))}
            </div> */}
          </div>
          {/*           <ListEpisodes
            error={errorEpisode}
            loading={loadingEpisode}
            episodes={dateEpisode?.data.episodes}
            episodeName={data?.data.title}
          /> */}
        </div>
        {/*         <div className="flex flex-row justify-end mt-4">
          <button className="px-4 py-2 cursor-pointer">
            <MdFavoriteBorder size={24} color="#eaeae0" />
          </button>
        </div> */}
      </div>
    </>
  );
}
