import { AxiosResponse } from "axios";
import uri from "../../../constance/uri";
import myInfoResponse from "../../../models/dto/response/myInfoResponse";
import { DAEMA_AUCTION, getRequest } from "../../axios";

export const getMyInfo = async (): Promise<AxiosResponse<myInfoResponse>> => {
  const request = getRequest(DAEMA_AUCTION);
  try {
    const response = await request.get<myInfoResponse>(uri.users);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};
