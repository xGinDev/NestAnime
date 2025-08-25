"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";

interface CardProps {
  title: string;
  image: string;
  slug: string;
  episodes?: number;
}

const Card = ({ title, image, slug, episodes }: CardProps) => {
  return (
    <Link href={`/episode/${slug}`} className="flex flex-col w-full h-full">
      <div className="relative w-full aspect-[3/4] overflow-hidden rounded-xl group">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 20vw"
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
      </div>

      <div className="mt-2">
        <h2 className="font-bold text-center text-white ellipsis overflow-hidden line-clamp-1">
          {title}
        </h2>
        {episodes && (
          <p className="text-sm text-gray-400 text-center">
            Episodio: {episodes}
          </p>
        )}
      </div>
    </Link>
  );
};

export default Card;
