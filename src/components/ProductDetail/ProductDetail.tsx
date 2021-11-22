import * as S from "./styles";
import Slider from "../Slider/Slider";
import User from "../../assets/icons/count.svg";
import Time from "../../assets/icons/time.svg";
import { color } from "../../styles/color";
import { useEffect, useState } from "react";
import { ProductDetail as ProductDetailType } from "../../models/dto/response/productDetailResponse";
import { useHistory, useParams } from "react-router";
import { getProductDetail } from "../../utils/api/ProductDetail";
import Timer from "./Timer/Timer";
import ProductDetailSkeleton from "../ProductDetailSkeleton/ProductDetailSkeleton";
import { getMyInfo } from "../../utils/api/My";
import { attendProduct, buyProductRightOff } from "../../utils/api/Product";
import { CreateRoom as createRoom } from "../../utils/api/Chat";

const ProductDetail = (): JSX.Element => {
  const [product, setProduct] = useState<ProductDetailType | null>(null);
  const { id } = useParams<{ id: string }>();
  const [myId, setMyId] = useState<string>("");
  const { push } = useHistory();

  const settingProduct = async () => {
    try {
      const response = await getProductDetail(Number(id));

      if (response.data.length <= 0) {
        alert("존재하지 않는 게시물입니다.");
        push("/");
        return;
      }

      setProduct({ ...response.data[0] });
    } catch (error) {
      console.log(error);
      push("/");
    }
  };

  const settingMyId = async () => {
    try {
      const response = await getMyInfo();
      setMyId(response.data.body.user.userId);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    settingMyId();
    settingProduct();
  }, []);

  return (
    <>
      {product ? (
        <S.Container>
          {product.saleStatus === "SOLD_OUT" && <S.Cover>경매 완료되었습니다.</S.Cover>}
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
              <Timer to={new Date(product.endDate)} interval={500} />
            </S.TimeContainer>
          </S.HeaderContainer>
          <S.Content>{product.content}</S.Content>
          {product.userId !== myId && myId !== "" && (
            <S.ButtonContainer>
              <S.Button
                color={color.green}
                onClick={() => {
                  attendProduct(id, product.auctionPrice + 1000);
                  alert("경매에 참여하였습니다.");
                  window.location.reload();
                }}
              >
                {(product.auctionPrice + 1000).toLocaleString("ko-KR")}₩에 경매 참여
              </S.Button>
              <S.Button
                color={color.yellow}
                onClick={async () => {
                  try {
                    await buyProductRightOff(id);
                    await createRoom(id);
                    alert("즉시 구매하였습니다.");
                    window.location.reload();
                  } catch (error) {
                    alert("구매 실패");
                  }
                }}
              >
                {product.immePrice.toLocaleString("ko-KR")}₩에 즉시 구매
              </S.Button>
            </S.ButtonContainer>
          )}
        </S.Container>
      ) : (
        <ProductDetailSkeleton />
      )}
    </>
  );
};

export default ProductDetail;
