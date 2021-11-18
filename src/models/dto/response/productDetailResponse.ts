export interface Image {
  id: number;
  url: string;
}

export default interface productDetailResponse {
  auctionPrice: number;
  categoryName: "도서";
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
