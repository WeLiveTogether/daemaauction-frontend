export interface postProductInfo {
    auctionPrice:number;
    category: string;
    content: string;
    immePrice: number;
    productSaleStatus: string;
    subCategory: string;
    title: string;
    userSeq: number;
}

type writingProductInfo = postProductInfo[]

export default writingProductInfo;