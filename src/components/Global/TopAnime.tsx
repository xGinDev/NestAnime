import React from 'react'
import Carrousel from './Carrousel'
import { useJikanFetch } from '@/hooks/getTopAnimes';

const TopAnime = () => {
    const { data, loading, error } = useJikanFetch<{
        data: Array<{ mal_id: number; title: string }>;
    }>("/top/anime");

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <Carrousel title="Top Anime" data={data?.data || []} />
    )
}

export default TopAnime