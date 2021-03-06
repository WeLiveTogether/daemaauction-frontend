import { Product } from "../../models/dto/response/productListResponse";
import { count } from "../../assets/index";
import * as S from "./styles";
import { useHistory } from "react-router";

interface PropsType {
  product: Product;
}

const ProductCard = ({ product }: PropsType): JSX.Element => {
  const { title, imageUrl, views, auctionPrice, userName, category, productId, saleStatus } =
    product;

  const price = auctionPrice.toLocaleString("ko-KR");
  const { push } = useHistory();
  return (
    <S.Container
      onClick={() => {
        if (product.saleStatus !== "SOLD_OUT") push(`/product/${productId}`);
      }}
    >
      {saleStatus === "SOLD_OUT" && <S.Cover>판매완료</S.Cover>}
      <div>
        <S.ItemImg>
          <S.Img alt="productImg" src={imageUrl} />
        </S.ItemImg>
        <S.ItemTitle>{title}</S.ItemTitle>
        <S.ItemDetailTop>
          <div>{category}</div>
          <div>{userName}</div>
        </S.ItemDetailTop>
        <S.ItemDetailBottom>
          <S.ItemPrice>{price}₩</S.ItemPrice>
          <S.Count>
            <S.CountImg alt="productImg" src={count} />
            {views}명
          </S.Count>
        </S.ItemDetailBottom>
      </div>
    </S.Container>
  );
};

export default ProductCard;
