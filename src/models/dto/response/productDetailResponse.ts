export interface Image {
  id: number;
  url: string;
}

export interface ProductDetail {
  auctionPrice: number;
  categoryName: string;
  content: string;
  createDate: string;
  email: string;
  immePrice: number;
  productImages: Image[];
  profileImageUrl: string;
  subCategoryName: string;
  title: string;
  username: string;
  views: number;
}

type productDetailResponse = ProductDetail[];
export default productDetailResponse;
