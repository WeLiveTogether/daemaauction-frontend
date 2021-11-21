import uri from "../../../constance/uri";
import { DEAMA_AUCTION, getRequest } from "../../axios";

export const buyProductRightOff = async (id: string) => {
  const request = getRequest(DEAMA_AUCTION);
  try {
    return await request.post(`${uri.buyProduct}/${id}`);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const attendProduct = async (id: string, price: number) => {
  const request = getRequest(DEAMA_AUCTION);
  try {
    return await request.post(`${uri.attendProduct}/${id}`, null, {
      params: {
        price: price,
      },
    });
  } catch (error) {
    return Promise.reject(error);
  }
};
