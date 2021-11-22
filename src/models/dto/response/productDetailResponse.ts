export interface Image {
  id: number;
  url: string;
}

export interface ProductDetail {
  auctionPrice: number;
  categoryName: string;
  content: string;
  email: string;
  endDate: string;
  imageUrl: null;
  immePrice: number;
  productImages: Image[];
  profileImageUrl: string;
  saleStatus: null;
  subCategoryName: string;
  title: string;
  userId: string;
  username: string;
  views: number;
}

type productDetailResponse = ProductDetail[];
export default productDetailResponse;
