import uri from "../../../constance/uri";
import productListResponse from "../../../models/dto/response/productListResponse";
import { DEAMA_AUCTION, getRequest } from "../../axios";

export const getRecentProducts = async () => {
  const request = getRequest(DEAMA_AUCTION);

  try {
    return await request.get<productListResponse>(uri.productLatest);
  } catch (error) {
    return Promise.reject(error);
  }
};
