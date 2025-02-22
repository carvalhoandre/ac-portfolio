import { IResponseData } from "@/@types/services";
import { IBodyEMailRequest } from "./types";

import API from './api';

export const postSendEmail = async (
  body: IBodyEMailRequest
): Promise<IResponseData<any>> => {
  const { data } = await API.post('/email', body);

  return data;
};
