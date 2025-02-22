import { postSendEmail } from "@/services";
import { IBodyEMailRequest } from "@/services/types";
import React from "react";

type UseFetchReturn<T> = {
  data: T | null;
  error: string | null;
  loading: boolean;
  request: (
    body: IBodyEMailRequest
  ) => Promise<void>;
};

const useFetch = <T = any>(): UseFetchReturn<T> => {
  const [data, setData] = React.useState<T | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);

  const request = React.useCallback(
    async (body: IBodyEMailRequest) => {
      setLoading(true);
      setError(null);
      setData(null);

      try {
        const { success, code, message } = await postSendEmail(body);

        if (!success) {
          throw new Error(
            `HTTP error! Status: ${code} ${message}`,
          );
        }

        setData(data);
      } catch (err: unknown) {
        const errorMessage =
          err instanceof Error ? err.message : "Unknown error occurred";
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  return { data, error, loading, request };
};

export { useFetch };
