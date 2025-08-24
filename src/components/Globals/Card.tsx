import Image from "next/image";
import React from "react";

interface CardProps {
  title: string;
  image: string;
  episodes?: number;
}

const Card = ({ title, image, episodes }: CardProps) => {
  return (
    <div>
      <Image src={image} alt={title} width={200} height={200} />
      <h2>{title}</h2>
      <p>{episodes}</p>
    </div>
  );
};

export default Card;
