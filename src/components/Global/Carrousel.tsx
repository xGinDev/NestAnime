import React, { FC } from 'react'
import Image from 'next/image'

interface CarrouselProps {
    title: string;
    data: any;
}

const Carrousel: FC<CarrouselProps> = ({ title, data }) => {
    return (
        <div className='flex flex-col gap-4 mb-6'>
            <h2 className='text-xl font-bold text-white px-4'>{title}</h2>

            <div className='relative'>
                <div className='
                    flex gap-4 overflow-x-auto pb-4 px-4
                    scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-800
                    scrollbar-rounded-full
                '>
                    {data.map((anime: any) => (
                        <div
                            key={anime.mal_id}
                            className='flex-shrink-0 relative group w-[150px] h-[225px]'
                        >
                            <Image
                                src={anime.images.webp.image_url}
                                alt={anime.title}
                                fill
                                className='object-cover rounded-lg transition-transform group-hover:scale-105'
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Carrousel