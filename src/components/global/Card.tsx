import Image from "next/image";

interface Props {
  title: string;
  cover: string;
  number: number;
  slug: string;
}

export const Card = ({ title, cover, number, slug }: Props) => {
  return (
    <div className="relative">
      <Image
        src={cover}
        alt={title}
        width={200}
        height={400}
        className="h-auto lg:h-[400px] w-full object-cover"
        style={{ width: "100%" }}
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-full"></div>
      <h2 className="text-xl font-bold text-[#eaeae0] ellipsis overflow-hidden line-clamp-2 absolute bottom-2 left-2">
        {title}
      </h2>
      <p className="text-sm font-semibold text-[#eaeae0] absolute top-2 right-2 bg-[#6D1D7D] px-2 py-1 rounded">Episodio {number}</p>
    </div>
  );
};
