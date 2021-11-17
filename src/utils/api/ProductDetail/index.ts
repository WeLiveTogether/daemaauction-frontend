import uri from "../../../constance/uri";
import { DEAMA_AUCTION, getRequest } from "../../axios";

export const getProductDetail = async (id: number) => {
  const request = getRequest(DEAMA_AUCTION);
  try {
    return await request.get(`${uri.productDetails}/${id}`);
  } catch (error) {
    return Promise.reject(error);
  }
};
