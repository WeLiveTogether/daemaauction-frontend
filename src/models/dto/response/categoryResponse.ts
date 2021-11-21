export interface ProductCategory {
  createdDate: string;
  modifiedDate: string;
  id: number;
  name: string;
  immePrice: number;
  auctionPrice: number;
  startAt: string;
  views: number;
  user: {
    username: string;
  };
  categoryId: {
    name: string;
  };
  subCategoryId: {
    name: string;
  };
}

type categoryResponse = ProductCategory[];
export default categoryResponse;
