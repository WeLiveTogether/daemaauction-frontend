import uri from "../../../constance/uri";
import { DAEMA_AUCTION, getRequest } from "../../axios";
import productDetailResponse from "../../../models/dto/response/productDetailResponse";

export const getProductDetail = async (id: number) => {
  const request = getRequest(DAEMA_AUCTION);
  try {
    return await request.get<productDetailResponse>(`${uri.productDetails}/${id}`);
  } catch (error) {
    return Promise.reject(error);
  }
};
