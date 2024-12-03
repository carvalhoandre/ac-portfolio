import { IBodyEMailRequest } from "./types";

const API_URL = import.meta.env.VITE_API_URL;

export const postSendEmail = (body: IBodyEMailRequest) => {
  return {
    url: API_URL + "/email",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
};
