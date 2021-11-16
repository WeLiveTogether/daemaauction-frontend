import uri from "../../../constance/uri";
import productListResponse from "../../../models/dto/response/productListResponse";
import { DEAMA_AUCTION, getRequest } from "../../axios";

export const getPopularProducts = async () => {
  const request = getRequest(DEAMA_AUCTION);
  try {
    return await request.get<productListResponse>(uri.productPopularity);
  } catch (error) {
    return Promise.reject(error);
  }
};
