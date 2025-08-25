"use client";
import { useParams } from "next/navigation";

export default function DetailsAnime() {
  const params = useParams();

  console.log(params);

  return <p>Post: {params.slug}</p>;
}
