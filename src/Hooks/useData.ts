import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface FetchResponse<T> {
    count: number;
    results: T[];
}

const useData = <T>(endpoint: string) => {
    const [data, setData] = useState<T[]>([]); // array of games
    const [error, setError] = useState(""); // error message
    const [isLoading, setLoading] = useState(false); // loading state (true or false
    
    useEffect(() => {
      const controller = new AbortController();
      setLoading(true);
      apiClient
        .get<FetchResponse<T>>(endpoint, {signal: controller.signal})
        .then((res) => {
          setData(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
            if(err instanceof CanceledError) return;
            setError(err.message)});
        
        return () => controller.abort();
    }, []);
    return { data, error, isLoading }
}

export default useData; 