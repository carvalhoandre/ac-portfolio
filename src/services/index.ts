import { IResponseData } from "@/@types/services";
import { IBodyEMailRequest } from "./types";

import API from './api';

export const postSendEmail = async (
  body: IBodyEMailRequest
): Promise<IResponseData<any>> => {
  const { data } = await API.post('/user-await', {
    "name": body.name,
    "email": body.email
  });

  return data;
};
