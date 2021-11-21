import { DHRTUSEOAK, getRequest } from "../../axios";

export const CreateRoom = async (productId: string) => {
  const request = getRequest(DHRTUSEOAK);

  try {
    return await request.get(`/chat/${productId}`);
  } catch (error) {
    return Promise.reject(error);
  }
};
