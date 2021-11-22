import uri from "../../../constance/uri";
import productListResponse from "../../../models/dto/response/productListResponse";
import { DAEMA_AUCTION, getRequest } from "../../axios";

export const getRecentProducts = async () => {
  const request = getRequest(DAEMA_AUCTION);

  try {
    return await request.get<productListResponse>(uri.productLatest);
  } catch (error) {
    return Promise.reject(error);
  }
};
