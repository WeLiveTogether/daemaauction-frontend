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

export interface MyPageProductList {
  email: string;
  productResponseList: Product[];
  profileImageUrl: string;
  userName: string;
}

export interface MyPageInfoType {
  soldCount: number;
  sellCount: number;
  soldProducts: Product[];
  sellProducts: Product[];
}

export default productListResponse;
