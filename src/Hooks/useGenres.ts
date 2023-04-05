import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genre {
    id: number;
    name: string;
}

interface GenreResponseData {
    count: number;
    results: Genre[];
}

const useGenre = () => {
    const [genres, setGenres] = useState<Genre[]>([]); // array of games
    const [error, setError] = useState(""); // error message
    const [isLoading, setLoading] = useState(false); // loading state (true or false
    
    useEffect(() => {
      const controller = new AbortController();
      setLoading(true);
      apiClient
        .get<GenreResponseData>("/genres", {signal: controller.signal})
        .then((res) => {
          setGenres(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
            if(err instanceof CanceledError) return;
            setError(err.message)});
        
        return () => controller.abort();
    }, []);
    return { genres, error, isLoading }
}

export default useGenre; 