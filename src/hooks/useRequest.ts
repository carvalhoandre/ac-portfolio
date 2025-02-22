import { postSendEmail } from "@/services";
import { IBodyEMailRequest } from "@/services/types";
import React from "react";

type UseFetchReturn = {
  error: string | null;
  loading: boolean;
  request: (
    body: IBodyEMailRequest
  ) => Promise<boolean>;
};

const useFetch = (): UseFetchReturn => {
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);

  const request = React.useCallback(
    async (body: IBodyEMailRequest) => {
      setLoading(true);
      setError(null);

      try {
        const { success, code, message } = await postSendEmail(body);

        if (!success) {
          throw new Error(
            `HTTP error! Status: ${code} ${message}`,
          );
        }

        return true
      } catch (err: unknown) {
        const errorMessage =
          err instanceof Error ? err.message : "Unknown error occurred";
        setError(errorMessage);

        return false
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  return { error, loading, request };
};

export { useFetch };
