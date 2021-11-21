import { AxiosResponse } from "axios";
import uri from "../../../constance/uri";
import categoryResponse from "../../../models/dto/response/categoryResponse";
import { DEAMA_AUCTION, DHRTUSEOAK, getRequest } from "../../axios";

export const getBigCategory = async (
  category: string
): Promise<AxiosResponse<categoryResponse>> => {
  const request = getRequest(DHRTUSEOAK);
  try {
    const response = await request.get<categoryResponse>(
      `${uri.productCategory}/${encodeURIComponent(category)}`
    );
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getSubCategory = async (
  category: string
): Promise<AxiosResponse<categoryResponse>> => {
  const request = getRequest(DHRTUSEOAK);
  try {
    const response = await request.get<categoryResponse>(
      `${uri.productSubCategory}/${encodeURIComponent(category)}`
    );
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};
