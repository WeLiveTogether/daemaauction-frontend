import uri from "../../../constance/uri";
import { MyPageProductList } from "../../../models/dto/response/productListResponse";
import { getRequest, DEAMA_AUCTION } from "../../axios";

export const getUserInfo = async () => {
  const request = getRequest(DEAMA_AUCTION);
  try {
    return await request.get(uri.users);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getMyProduct = async () => {
  const request = getRequest(DEAMA_AUCTION);
  try {
    return await request.get<MyPageProductList>(uri.myProduct);
  } catch(error) {
    return Promise.reject(error);
  }
}