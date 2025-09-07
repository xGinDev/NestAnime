"use client";
import { useParams } from "next/navigation";

export default function AnimeDetail() {
  const { slug } = useParams();

  return (
    <div>
      <h1>Anime Detail {slug}</h1>
    </div>
  );
};
