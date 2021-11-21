export interface Product {
  auctionPrice: number;
  category: string;
  content: string;
  createDate: string;
  imageUrl: string;
  immePrice: number;
  productId: number;
  subCategory: string;
  title: string;
  userName: string;
  views: number;

  endDate: string;
  saleStatus: string;
}

type productListResponse = Product[];

export default productListResponse;
