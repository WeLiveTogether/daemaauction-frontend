import uri from "../../../constance/uri";
import { DEAMA_AUCTION, getRequest } from "../../axios";

export const getPopularProducts = async () => {
  const request = getRequest(DEAMA_AUCTION);
  const response = await request.get(uri.productPopularity);

  console.log(response);
};
