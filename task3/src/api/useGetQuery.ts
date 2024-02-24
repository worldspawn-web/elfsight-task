import axios, { AxiosError, AxiosResponse } from 'axios';
import { useCallback, useEffect, useState } from 'react';

export const useGetData = <Response, Error = false>(endpoint: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<Response | undefined>();
  const [error, setError] = useState<Error | undefined>();

  const refetch = useCallback(() => {
    setIsLoading(true);
    axios
      .get<Response>('https://rickandmortyapi.com/api' + endpoint)
      .then((response: AxiosResponse<Response>) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((err: AxiosError<Error>) => {
        setError(err as Error);
        setIsLoading(false);
      });
  }, [endpoint]);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return {
    data,
    error,
    refetch,
    isLoading,
  };
};
