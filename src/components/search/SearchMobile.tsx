// components/search/SearchMobile.tsx
"use client";
import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { appContext } from "@/context/Context";
import { X } from "lucide-react";

interface SearchResult {
  title: string;
  cover: string;
  synopsis: string;
  rating: string;
  slug: string;
  type: string;
  url: string;
}

interface SearchResponse {
  success: boolean;
  data: {
    currentPage: number;
    hasNextPage: boolean;
    previousPage: string | null;
    nextPage: string | null;
    foundPages: number;
    media: SearchResult[];
  };
}

export const SearchMobile = () => {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { setOpenSearch } = appContext();

  // Debounce para evitar muchas llamadas a la API
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  // Efecto para realizar la búsqueda
  useEffect(() => {
    const performSearch = async () => {
      if (!debouncedSearch.trim()) {
        setResults([]);
        setError(null);
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        // URL CORREGIDA según la documentación
        const apiUrl = `https://animeflv.ahmedrangel.com/api/search?query=${encodeURIComponent(
          debouncedSearch
        )}&page=1`;
        console.log("Buscando en:", apiUrl); // Para debugging

        const response = await fetch(apiUrl, {
          // Agregar headers si es necesario
          headers: {
            Accept: "application/json",
          },
          mode: "cors", // Importante para peticiones entre dominios
        });

        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const data: SearchResponse = await response.json();

        if (data.success && data.data && data.data.media) {
          setResults(data.data.media);
        } else {
          setResults([]);
        }
      } catch (err) {
        console.error("Error en la búsqueda:", err);
        setError(err instanceof Error ? err.message : "Error desconocido");
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    };

    performSearch();
  }, [debouncedSearch]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-95 z-50 p-4 overflow-y-auto">
      <div className="flex items-center mb-4 sticky top-0 bg-black py-2">
        <input
          type="text"
          placeholder="Buscar anime..."
          className="flex-1 p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-purple-500 focus:outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          autoFocus
        />
        <button
          onClick={() => setOpenSearch(false)}
          className="ml-2 p-3 text-gray-400 hover:text-white rounded-full hover:bg-gray-800"
        >
          <X size={24} />
        </button>
      </div>

      <div className="space-y-3">
        {isLoading ? (
          <div className="space-y-3">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex gap-3 p-2">
                <Skeleton className="h-16 w-12 rounded" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-3 w-1/2" />
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="text-center p-4">
            <p className="text-red-400 mb-2">Error al buscar</p>
            <p className="text-gray-400 text-sm">{error}</p>
            <button
              onClick={() => setDebouncedSearch(debouncedSearch)}
              className="mt-2 px-4 py-2 bg-purple-600 rounded hover:bg-purple-700"
            >
              Reintentar
            </button>
          </div>
        ) : results.length > 0 ? (
          results.map((item) => (
            <div
              key={item.slug}
              className="flex gap-3 p-3 rounded-lg bg-gray-900 hover:bg-gray-800 transition-colors cursor-pointer"
              onClick={() => {
                // Aquí puedes manejar la navegación al anime
                console.log("Navegar a:", item.slug);
                setOpenSearch(false);
              }}
            >
              <img
                src={item.cover}
                alt={item.title}
                className="w-12 h-16 object-cover rounded"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src =
                    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA0OCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQ4IiBoZWlnaHQ9IjY0IiBmaWxsPSIjMzMzMzMzIi8+Cjx0ZXh0IHg9IjI0IiB5PSIzMiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0iIzlBOUE5QSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEwIj5BbmltZTwvdGV4dD4KPC9zdmc+";
                }}
              />
              <div className="flex-1">
                <h3 className="text-white font-medium line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">{item.type}</p>
                <p className="text-gray-400 text-sm">
                  ⭐ {item.rating || "N/A"}
                </p>
                <p className="text-gray-500 text-xs mt-1 line-clamp-2">
                  {item.synopsis || "Sin sinopsis disponible"}
                </p>
              </div>
            </div>
          ))
        ) : debouncedSearch ? (
          <p className="text-gray-400 p-3 text-center">
            No se encontraron resultados para "{debouncedSearch}"
          </p>
        ) : (
          <p className="text-gray-400 p-3 text-center">
            Escribe el nombre de un anime para buscar
          </p>
        )}
      </div>
    </div>
  );
};
