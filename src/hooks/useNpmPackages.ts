import { useEffect, useState } from "react";
import { npmPackageNames } from "../config/npm-packages";
import { fallbackNpmPackage, loadNpmPackages } from "../services/npm-registry";
import type { NpmPackagesResult } from "../types/npm";

interface NpmPackagesState extends Omit<NpmPackagesResult, "status"> {
  status: "loading" | NpmPackagesResult["status"];
}

interface SharedRequest {
  controller: AbortController;
  consumers: number;
  promise: Promise<NpmPackagesResult>;
}

const initialState: NpmPackagesState = {
  packages: npmPackageNames.map(fallbackNpmPackage),
  status: "loading",
};

let cachedResult: NpmPackagesResult | undefined;
let sharedRequest: SharedRequest | undefined;

const subscribeToRequest = () => {
  if (!sharedRequest || sharedRequest.controller.signal.aborted) {
    const controller = new AbortController();
    const request: SharedRequest = {
      controller,
      consumers: 0,
      promise: loadNpmPackages(controller.signal),
    };
    sharedRequest = request;

    void request.promise
      .then((result) => {
        if (result.status !== "error") cachedResult = result;
      })
      .finally(() => {
        if (sharedRequest === request) sharedRequest = undefined;
      });
  }

  sharedRequest.consumers += 1;
  return sharedRequest;
};

export function useNpmPackages() {
  const [state, setState] = useState<NpmPackagesState>(
    () => cachedResult ?? initialState,
  );

  useEffect(() => {
    let active = true;
    if (cachedResult) {
      const result = cachedResult;
      queueMicrotask(() => {
        if (active) setState(result);
      });
      return () => {
        active = false;
      };
    }

    const request = subscribeToRequest();
    void request.promise.then((result) => {
      if (active) setState(result);
    });

    return () => {
      active = false;
      request.consumers -= 1;
      if (request.consumers === 0 && sharedRequest === request) {
        request.controller.abort();
        sharedRequest = undefined;
      }
    };
  }, []);

  return state;
}

export function clearNpmPackagesCache() {
  cachedResult = undefined;
  sharedRequest?.controller.abort();
  sharedRequest = undefined;
}
