import React from "react";
import { Skeleton } from "../ui/skeleton";

interface Props {
  error: string | null;
  loading: boolean;
  episodes: Array<{ number: number; slug: string }> | undefined;
  episodeName: string | undefined;
}

export const ListEpisodes = ({
  error,
  loading,
  episodes,
  episodeName,
}: Props) => {
  if (loading) return <Skeleton className="h-40" />;
  if (error) return <p>Error al cargar los episodios</p>;

  console.log(episodes, "episodes");

  return (
    <div>
      <h1 className="text-white">Episodios</h1>
    </div>
  );
};
