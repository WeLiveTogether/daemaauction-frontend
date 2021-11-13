import uri from "../../../constance/uri";
import { DEAMA_AUCTION, getRequest } from "../../axios";

export const getPopularProducts = () => {
  const request = getRequest(DEAMA_AUCTION);
  const response = request.get(uri.productPopularity);

  console.log(response);
};
