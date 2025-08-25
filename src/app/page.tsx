"use client";
import Card from "@/components/Globals/Card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useApi } from "@/hooks/useApi";

export default function Home() {
  const { data, loading, error } = useApi<{
    data: Array<{ title: string; cover: string; number: number; slug: string }>;
  }>("/list/latest-episodes");

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold uppercase mb-4 text-[#eaeae0]">
        Últimos episodios
      </h1>
      <div>
        <Carousel>
          <CarouselContent>
            {data?.data.map((anime) => (
              <CarouselItem
                key={anime.title}
                className="basis-1/2 lg:basis-1/4"
              >
                <Card
                  title={anime.title}
                  image={anime.cover}
                  episodes={anime.number}
                  slug={anime.slug}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
