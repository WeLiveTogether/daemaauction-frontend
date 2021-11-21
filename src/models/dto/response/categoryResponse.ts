export interface ProductCategory {
  auctionPrice: number;
  category: { name: string };
  createDate: string;
  createdDate: string;
  id: string;
  imageUrl: null | string;
  immePrice: number;
  modifiedDate: null | string;
  subCategory: { name: string };
  title: string;
  user: { username: string };
  views: string;
}

export default interface categoryResponse {
  list: ProductCategory[];
}
