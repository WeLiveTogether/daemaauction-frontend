import * as S from "./styles";
import defaultImg from "../../assets/images/testItem.svg";
import Slider from "../Slider/Slider";
import User from "../../assets/icons/count.svg";
import Time from "../../assets/icons/time.svg";
import { color } from "../../styles/color";
import { useEffect, useState } from "react";
import { ProductDetail as ProductDetailType } from "../../models/dto/response/productDetailResponse";
import { useParams } from "react-router";
import { getProductDetail } from "../../utils/api/ProductDetail";
import Timer from "./Timer/Timer";

const ProductDetail = (): JSX.Element => {
  const [product, setProduct] = useState<ProductDetailType | null>(null);
  const { id } = useParams<{ id: string }>();

  const settingProduct = async () => {
    try {
      const response = await getProductDetail(Number(id));
      setProduct({ ...response.data[0] });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    settingProduct();
  }, []);

  return (
    <>
      {product && (
        <S.Container>
          <S.ImageContainer>
            <Slider
              items={product.productImages.map((value) => {
                return <S.Image src={value.url} key={value.id} />;
              })}
            />
          </S.ImageContainer>
          <S.HeaderContainer>
            <S.TitleContainer>
              <S.TitleInner>
                <S.Title>{product.title}</S.Title>
                <S.Gray>{product.categoryName}</S.Gray>
              </S.TitleInner>
              <S.Gray>{product.username}</S.Gray>
            </S.TitleContainer>
            <S.DetailContainer>
              <S.MoneyContainer>
                <S.NowMoney>
                  현재가 : {product.auctionPrice.toLocaleString("ko-KR")}₩ &nbsp;
                </S.NowMoney>
                <S.GrayMid>/ {product.immePrice.toLocaleString("ko-KR")}₩</S.GrayMid>
              </S.MoneyContainer>
              <S.UserContainer>
                <img src={User} alt="user" />
                <div>{product.views}명</div>
              </S.UserContainer>
            </S.DetailContainer>
            <S.TimeContainer>
              <img src={Time} alt="time" />
              <Timer to={new Date(product.createDate)} interval={500} />
            </S.TimeContainer>
          </S.HeaderContainer>
          <S.Content>{product.content}</S.Content>
          <S.ButtonContainer>
            <S.Button color={color.green}>
              {product.auctionPrice.toLocaleString("ko-KR")}₩에 경매 참여
            </S.Button>
            <S.Button color={color.yellow}>
              {product.immePrice.toLocaleString("ko-KR")}₩에 즉시 구매
            </S.Button>
          </S.ButtonContainer>
        </S.Container>
      )}
    </>
  );
};

export default ProductDetail;
