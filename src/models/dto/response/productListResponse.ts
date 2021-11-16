export interface Product {
  auctionPrice: number;
  content: string;
  createDate: string;
  imageUrl: string;
  immePrice: number;
  productId: number;
  title: string;
  views: number;
}

type productListResponse = Product[];

export default productListResponse;
