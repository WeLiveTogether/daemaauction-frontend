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
}

type productListResponse = Product[];


export interface MyPageProductList {
  email: string;
  productResponseList: Product[];
  profileImageUrl: string;
  userName: string;
}

export default productListResponse;
