import uri from "../../../constance/uri";
import postProductInfo from "../../../models/dto/request/writingInterface";
import { DEAMA_AUCTION, getRequest } from "../../axios";

export const postWriting = async (data:postProductInfo) => {
    const request = getRequest(DEAMA_AUCTION);
    try {
        const response = await request.post(uri.product, data);
        return response;
    } catch (error) {
        return Promise.reject(error);
    }
}  

export const postImg = async (file:FormData|null|undefined) =>{
    const request = getRequest(DEAMA_AUCTION);
    try{
        const response= await request.post(`${uri.productImageUpload}`, file);
        return response;
    }
    catch(error){
        return Promise.reject(error);
    }
}