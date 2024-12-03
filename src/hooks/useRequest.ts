import React from "react";

type UseFetchReturn<T> = {
  data: T | null;
  error: string | null;
  loading: boolean;
  request: (
    url: string,
    options?: RequestInit,
  ) => Promise<{ response: Response | null; json: T | null }>;
};

const useFetch = <T = any>(): UseFetchReturn<T> => {
  const [data, setData] = React.useState<T | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);

  const request = React.useCallback(
    async (url: string, options?: RequestInit) => {
      setLoading(true);
      setError(null);
      setData(null);

      let response: Response | null = null;
      let json: T | null = null;

      try {
        response = await fetch(url, options);

        if (!response.ok) {
          throw new Error(
            `HTTP error! Status: ${response.status} ${response.statusText}`,
          );
        }

        json = await response.json();
        setData(json);
      } catch (err: unknown) {
        const errorMessage =
          err instanceof Error ? err.message : "Unknown error occurred";
        setError(errorMessage);
      } finally {
        setLoading(false);
      }

      return { response, json };
    },
    [],
  );

  return { data, error, loading, request };
};

export { useFetch };
