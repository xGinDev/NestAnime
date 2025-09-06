"use client";
import Title from "@/components/global/Title";
import { Skeleton } from "@/components/ui/skeleton";
import { useApi } from "@/hooks/useApi";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/global/Card";

export default function Home() {
  const { data, loading, error } = useApi<{
    data: Array<{ title: string; cover: string; number: number; slug: string }>;
  }>("/list/latest-episodes");

  if (loading) return <Skeleton className="h-40" />;

  return (
    <div className="relative">
      <Title title="Últimos episodios" />

      <div className="relative pb-12 w-full max-w-7xl mx-auto">
        <Carousel
          opts={{
            align: "start",
            slidesToScroll: 1,
          }}
          className="w-full"
        >
          <CarouselContent className="h-auto -ml-2">
            {data?.data.map((item) => (
              <CarouselItem
                key={item.slug}
                className="h-full pl-2 lg:basis-1/4 md:basis-1/3 sm:basis-1/2"
              >
                <div className="h-full">
                  <Card
                    title={item.title}
                    cover={item.cover}
                    number={item.number}
                    slug={item.slug}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="absolute -bottom-14 left-0 right-0 flex justify-end gap-4">
            <CarouselPrevious className="relative top-0 left-0 transform-none" />
            <CarouselNext className="relative top-0 right-0 transform-none" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
